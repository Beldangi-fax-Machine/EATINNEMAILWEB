const supabase = window.supabase.createClient(
    'https://juodevmrlwkkfjygmqzc.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1b2Rldm1ybHdra2ZqeWdtcXpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU1MTY5MTUsImV4cCI6MjA2MTA5MjkxNX0.YrvVy27pnHusfYEjLN4duLaGk3V-NDAt3Cv483FhNPs'
)

const loadingState = document.getElementById('loadingState')
const successState = document.getElementById('successState')
const errorState = document.getElementById('errorState')
const errorMessage = document.getElementById('errorMessage')

function showSuccess() {
    loadingState.classList.add('hidden')
    errorState.classList.add('hidden')
    successState.classList.remove('hidden')
    
    setTimeout(() => {
        window.location.href = 'https://geteatinn.app'
    }, 3000)
}

function showError(message) {
    loadingState.classList.add('hidden')
    successState.classList.add('hidden')
    errorState.classList.remove('hidden')
    errorMessage.textContent = message || 'The link may have expired or is invalid'
}

async function handleReauth() {
    const params = new URLSearchParams(window.location.search)
    const errorDescription = params.get('error_description')
    if (errorDescription) {
        showError(errorDescription)
        return
    }

    const hash = window.location.hash
    
    if (hash && hash.includes('access_token')) {
        try {
            const { data: { session }, error } = await supabase.auth.getSession()
            
            if (error) {
                showError(error.message)
                return
            }
            
            if (session) {
                showSuccess()
                return
            }
        } catch (err) {
            showError('An unexpected error occurred')
            return
        }
    }
}

supabase.auth.onAuthStateChange((event, session) => {
    if ((event === 'USER_UPDATED' || event === 'SIGNED_IN') && session) {
        showSuccess()
    }
})

handleReauth()

setTimeout(() => {
    if (!loadingState.classList.contains('hidden')) {
        showError('Verification timed out. The link may have expired.')
    }
}, 15000)
