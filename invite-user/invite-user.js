const supabase = window.supabase.createClient(
    'https://juodevmrlwkkfjygmqzc.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1b2Rldm1ybHdra2ZqeWdtcXpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU1MTY5MTUsImV4cCI6MjA2MTA5MjkxNX0.YrvVy27pnHusfYEjLN4duLaGk3V-NDAt3Cv483FhNPs'
)

let sessionReady = false

function showError(message) {
    document.getElementById('loading').innerHTML = `
        <h2 style="color: #dc2626;">Invitation Failed</h2>
        <p>${message}</p>
        <a href="https://eatinn.org" style="color: #4F46E5;">Return to Home</a>
    `
}

function showPasswordForm() {
    document.getElementById('loading').style.display = 'none'
    document.getElementById('passwordForm').style.display = 'block'
}

async function handleInvite() {
    const hash = window.location.hash
    
    // Check for error in URL params first
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
            sessionReady = true
            showPasswordForm()
            return
        }
    }
}

supabase.auth.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_IN' && session) {
        sessionReady = true
        showPasswordForm()
    }
})

async function setPassword() {
    const password = document.getElementById('newPassword').value
    const confirmPassword = document.getElementById('confirmPassword').value
    const message = document.getElementById('message')
    const submitBtn = document.getElementById('submitBtn')
    
    if (!sessionReady) {
        message.innerText = 'Session expired. Please request a new invite.'
        message.style.color = '#dc2626'
        return
    }
    
    if (!password || password.length < 6) {
        message.innerText = 'Password must be at least 6 characters'
        message.style.color = '#dc2626'
        return
    }
    
    if (password !== confirmPassword) {
        message.innerText = 'Passwords do not match'
        message.style.color = '#dc2626'
        return
    }
    
    submitBtn.disabled = true
    submitBtn.innerText = 'Creating Account...'
    
    const { error } = await supabase.auth.updateUser({
        password: password
    })
    
    if (error) {
        message.innerText = error.message
        message.style.color = '#dc2626'
        submitBtn.disabled = false
        submitBtn.innerText = 'Create Account'
    } else {
        message.innerText = 'Account created! Redirecting...'
        message.style.color = '#16a34a'
        setTimeout(() => {
            window.location.href = 'https://eatinn.org'
        }, 2000)
    }
}

handleInvite()

setTimeout(() => {
    const loading = document.getElementById('loading')
    if (loading.style.display !== 'none' && loading.querySelector('h2').textContent.includes('Processing')) {
        showError('Invitation processing timed out. The link may have expired.')
    }
}, 10000)
