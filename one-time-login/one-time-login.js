// Check for URL errors immediately
const params = new URLSearchParams(window.location.search)
const hash = window.location.hash.substring(1)
const hashParams = new URLSearchParams(hash)
const urlError = params.get('error_description') || hashParams.get('error_description')

const loadingState = document.getElementById('loadingState')
const successState = document.getElementById('successState')
const errorState = document.getElementById('errorState')
const errorMessage = document.getElementById('errorMessage')

// Show error immediately if present in URL
if (urlError) {
    loadingState.classList.add('hidden')
    errorMessage.textContent = decodeURIComponent(urlError.replace(/\+/g, ' '))
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
    const params = new URLSearchParams(window.location.search)
    const hash = window.location.hash.substring(1)
    const hashParams = new URLSearchParams(hash)
    
    // Check for error in query params or hash
    const errorDescription = params.get('error_description') || hashParams.get('error_description')
    if (errorDescription) {
        showError(decodeURIComponent(errorDescription))
        return
    }

    // Method 1: Token hash flow (magiclink type)
    const tokenHash = params.get('token_hash')
    const type = params.get('type')
    
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
    const code = params.get('code')
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
    const accessToken = hashParams.get('access_token')
    const refreshToken = hashParams.get('refresh_token')
    
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
