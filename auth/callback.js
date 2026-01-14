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

async function handleAuthCallback() {
    const params = new URLSearchParams(window.location.search)
    const hash = window.location.hash.substring(1)
    const hashParams = new URLSearchParams(hash)

    // Check for error in query params or hash
    const errorDescription = params.get('error_description') || hashParams.get('error_description')
    if (errorDescription) {
        showError(decodeURIComponent(errorDescription))
        return
    }

    // Method 1: Token hash flow (email confirmation links)
    const tokenHash = params.get('token_hash')
    const type = params.get('type')

    // Check type from query or hash
    const hashType = hashParams.get('type')
    const authType = type || hashType

    // Route to appropriate page based on auth type
    if (authType === 'recovery') {
        window.location.href = `/reset-password/reset-password.html${window.location.search}${window.location.hash}`
        return
    }
    if (authType === 'invite') {
        window.location.href = `/invite-user/invite-user.html${window.location.search}${window.location.hash}`
        return
    }
    if (authType === 'email_change') {
        window.location.href = `/update-email/update-email.html${window.location.search}${window.location.hash}`
        return
    }
    if (authType === 'magiclink') {
        window.location.href = `/one-time-login/one-time-login.html${window.location.search}${window.location.hash}`
        return
    }
    
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
            showError('Verification failed. Please try again.')
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
            showError('Verification failed. Please try again.')
            return
        }
    }

    // Method 3: Hash fragment flow (implicit grant - older method)
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
            showError('Verification failed. Please try again.')
            return
        }
    }

    // No valid tokens found
    showError('No verification token found. Please use the link from your email.')
}

// Listen for auth state changes (backup handler)
supabaseClient.auth.onAuthStateChange((event, session) => {
    // Redirect password recovery to the reset-password page
    if (event === 'PASSWORD_RECOVERY' && session) {
        window.location.href = `/reset-password/reset-password.html${window.location.search}${window.location.hash}`
        return
    }
    if ((event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') && session) {
        showSuccess()
    }
})

// Start the auth flow
handleAuthCallback()

// Timeout fallback
setTimeout(() => {
    if (!loadingState.classList.contains('hidden') && !authHandled) {
        showError('Verification timed out. Please request a new confirmation email.')
    }
}, 15000)
