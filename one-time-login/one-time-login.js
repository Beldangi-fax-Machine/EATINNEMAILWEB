// SECURITY: Extract all tokens immediately on page load
const params = new URLSearchParams(window.location.search)
const hash = window.location.hash.substring(1)
const hashParams = new URLSearchParams(hash)

// Store tokens in memory (NOT localStorage for security)
const storedTokens = {
    tokenHash: params.get('token_hash'),
    type: params.get('type'),
    code: params.get('code'),
    accessToken: hashParams.get('access_token'),
    refreshToken: hashParams.get('refresh_token'),
    errorDescription: params.get('error_description') || hashParams.get('error_description')
}

// SECURITY: Immediately clear URL to remove tokens from browser history
if (storedTokens.tokenHash || storedTokens.code || storedTokens.accessToken || storedTokens.errorDescription) {
    window.history.replaceState(null, '', window.location.pathname)
}

const loadingState = document.getElementById('loadingState')
const successState = document.getElementById('successState')
const errorState = document.getElementById('errorState')
const errorMessage = document.getElementById('errorMessage')

// Show error immediately if present in URL
if (storedTokens.errorDescription) {
    loadingState.classList.add('hidden')
    errorMessage.textContent = decodeURIComponent(storedTokens.errorDescription.replace(/\+/g, ' '))
    errorState.classList.remove('hidden')
    throw new Error('Auth error in URL')
}

// Check if Supabase loaded
if (!window.supabase) {
    loadingState.classList.add('hidden')
    errorMessage.textContent = 'Failed to load. Please refresh the page.'
    errorState.classList.remove('hidden')
    throw new Error('Supabase not loaded')
}

const supabaseClient = window.supabase.createClient(
    'https://juodevmrlwkkfjygmqzc.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1b2Rldm1ybHdra2ZqeWdtcXpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU1MTY5MTUsImV4cCI6MjA2MTA5MjkxNX0.YrvVy27pnHusfYEjLN4duLaGk3V-NDAt3Cv483FhNPs'
)

let authHandled = false

function showSuccess() {
    if (authHandled) return
    authHandled = true
    loadingState.classList.add('hidden')
    errorState.classList.add('hidden')
    successState.classList.remove('hidden')

    setTimeout(() => {
        window.location.href = 'https://geteatinn.app'
    }, 3000)
}

function showError(message) {
    if (authHandled) return
    authHandled = true
    loadingState.classList.add('hidden')
    successState.classList.add('hidden')
    errorState.classList.remove('hidden')
    errorMessage.textContent = message || 'The link may have expired or is invalid'
}

async function handleMagicLinkLogin() {
    // Use stored tokens from memory (already extracted and URL cleared)
    const { tokenHash, type, code, accessToken, refreshToken, errorDescription } = storedTokens

    // Check for error
    if (errorDescription) {
        showError(decodeURIComponent(errorDescription))
        return
    }

    // Method 1: Token hash flow (magiclink type)
    if (tokenHash && type) {
        try {
            const { data, error } = await supabaseClient.auth.verifyOtp({
                token_hash: tokenHash,
                type: type
            })

            if (error) {
                showError(error.message)
                return
            }

            if (data.session || data.user) {
                showSuccess()
                return
            }
        } catch (err) {
            showError('Login failed. Please try again.')
            return
        }
    }

    // Method 2: PKCE code flow
    if (code) {
        try {
            const { data, error } = await supabaseClient.auth.exchangeCodeForSession(code)

            if (error) {
                showError(error.message)
                return
            }

            if (data.session) {
                showSuccess()
                return
            }
        } catch (err) {
            showError('Login failed. Please try again.')
            return
        }
    }

    // Method 3: Hash fragment flow (implicit grant)
    if (accessToken) {
        try {
            const { data, error } = await supabaseClient.auth.setSession({
                access_token: accessToken,
                refresh_token: refreshToken || ''
            })

            if (error) {
                showError(error.message)
                return
            }

            if (data.session) {
                showSuccess()
                return
            }
        } catch (err) {
            showError('Login failed. Please try again.')
            return
        }
    }

    // No valid tokens found
    showError('No login token found. Please use the link from your email.')
}

// Listen for auth state changes (backup handler)
supabaseClient.auth.onAuthStateChange((event, session) => {
    if ((event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') && session) {
        showSuccess()
    }
})

// Start the magic link login flow
handleMagicLinkLogin()

// Timeout fallback
setTimeout(() => {
    if (!loadingState.classList.contains('hidden') && !authHandled) {
        showError('Login timed out. Please request a new login link.')
    }
}, 15000)
