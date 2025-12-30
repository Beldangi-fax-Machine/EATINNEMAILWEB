const supabase = window.supabase.createClient(
    'https://juodevmrlwkkfjygmqzc.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1b2Rldm1ybHdra2ZqeWdtcXpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU1MTY5MTUsImV4cCI6MjA2MTA5MjkxNX0.YrvVy27pnHusfYEjLN4duLaGk3V-NDAt3Cv483FhNPs'
)

const loadingState = document.getElementById('loadingState')
const successState = document.getElementById('successState')
const errorState = document.getElementById('errorState')
const errorMessage = document.getElementById('errorMessage')

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
    // Check for error in query params first
    const params = new URLSearchParams(window.location.search)
    const errorDescription = params.get('error_description')
    if (errorDescription) {
        showError(errorDescription)
        return
    }

    // Check if we have auth tokens in the URL (hash or query params)
    const hash = window.location.hash
    const hasTokenInHash = hash && (hash.includes('access_token') || hash.includes('error'))
    const hasTokenInQuery = params.has('code') || params.has('token_hash')
    
    if (!hasTokenInHash && !hasTokenInQuery) {
        showError('No verification token found. Please use the link from your email.')
        return
    }

    try {
        // Let Supabase handle the token exchange from the URL
        const { data, error } = await supabase.auth.exchangeCodeForSession(window.location.href)
        
        if (error) {
            // If exchange fails, try getting existing session
            const { data: sessionData, error: sessionError } = await supabase.auth.getSession()
            
            if (sessionError || !sessionData.session) {
                showError(error.message || sessionError?.message || 'Verification failed')
                return
            }
            
            showSuccess()
            return
        }
        
        if (data.session) {
            showSuccess()
        }
    } catch (err) {
        // Fallback: try getting session in case tokens were already processed
        try {
            const { data: { session }, error } = await supabase.auth.getSession()
            if (session) {
                showSuccess()
            } else {
                showError(error?.message || 'An unexpected error occurred')
            }
        } catch (e) {
            showError('An unexpected error occurred')
        }
    }
}

// Listen for auth state changes (backup handler)
supabase.auth.onAuthStateChange((event, session) => {
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
