const supabase = window.supabase.createClient(
    'https://juodevmrlwkkfjygmqzc.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1b2Rldm1ybHdra2ZqeWdtcXpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU1MTY5MTUsImV4cCI6MjA2MTA5MjkxNX0.YrvVy27pnHusfYEjLN4duLaGk3V-NDAt3Cv483FhNPs'
)

function showError(message) {
    document.querySelector('.container').innerHTML = `
        <h2 style="color: #dc2626;">Verification Failed</h2>
        <p>${message}</p>
        <a href="https://eatinn.org" style="color: #4F46E5;">Return to Home</a>
    `
}

function showSuccess() {
    document.querySelector('.container').innerHTML = `
        <h2 style="color: #16a34a;">Identity Verified!</h2>
        <p>Redirecting you now...</p>
    `
}

async function handleReauth() {
    const hash = window.location.hash
    
    // Check for error in URL params
    const params = new URLSearchParams(window.location.search)
    const errorDescription = params.get('error_description')
    if (errorDescription) {
        showError(errorDescription)
        return
    }
    
    if (hash && hash.includes('access_token')) {
        const { data: { session }, error } = await supabase.auth.getSession()
        
        if (error) {
            showError(error.message)
            return
        }
        
        if (session) {
            showSuccess()
            setTimeout(() => {
                window.location.href = 'https://eatinn.org'
            }, 1500)
            return
        }
    }
}

supabase.auth.onAuthStateChange((event, session) => {
    if (event === 'USER_UPDATED' && session) {
        showSuccess()
        setTimeout(() => {
            window.location.href = 'https://eatinn.org'
        }, 1500)
    }
    // Also handle SIGNED_IN for reauth flows
    if (event === 'SIGNED_IN' && session) {
        showSuccess()
        setTimeout(() => {
            window.location.href = 'https://eatinn.org'
        }, 1500)
    }
})

handleReauth()

setTimeout(() => {
    const container = document.querySelector('.container')
    if (container.querySelector('h2').textContent.includes('Verifying')) {
        showError('Verification timed out. The link may have expired.')
    }
}, 10000)
