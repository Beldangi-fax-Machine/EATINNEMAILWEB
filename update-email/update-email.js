const supabase = window.supabase.createClient(
    'https://juodevmrlwkkfjygmqzc.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1b2Rldm1ybHdra2ZqeWdtcXpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU1MTY5MTUsImV4cCI6MjA2MTA5MjkxNX0.YrvVy27pnHusfYEjLN4duLaGk3V-NDAt3Cv483FhNPs'
)

function showError(message) {
    document.querySelector('.container').innerHTML = `
        <h2 style="color: #dc2626;">Email Update Failed</h2>
        <p>${message}</p>
        <a href="https://eatinn.org" style="color: #4F46E5;">Return to Home</a>
    `
}

function showSuccess() {
    document.querySelector('.container').innerHTML = `
        <h2 style="color: #16a34a;">Email Updated!</h2>
        <p>Your email has been changed. Redirecting...</p>
    `
}

async function handleEmailUpdate() {
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
            }, 2000)
            return
        }
    }
}

supabase.auth.onAuthStateChange((event, session) => {
    if (event === 'USER_UPDATED' && session) {
        showSuccess()
        setTimeout(() => {
            window.location.href = 'https://eatinn.org'
        }, 2000)
    }
})

handleEmailUpdate()

setTimeout(() => {
    const container = document.querySelector('.container')
    if (container.querySelector('h2').textContent.includes('Confirming')) {
        showError('Email update timed out. The link may have expired.')
    }
}, 10000)
