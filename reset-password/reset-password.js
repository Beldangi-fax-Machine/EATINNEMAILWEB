const supabase = window.supabase.createClient(
    'https://juodevmrlwkkfjygmqzc.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1b2Rldm1ybHdra2ZqeWdtcXpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU1MTY5MTUsImV4cCI6MjA2MTA5MjkxNX0.YrvVy27pnHusfYEjLN4duLaGk3V-NDAt3Cv483FhNPs'
)

let sessionReady = false

function showError(message) {
    document.getElementById('message').innerText = message
    document.getElementById('message').style.color = '#dc2626'
}

// Check for error in URL params on load
function checkForErrors() {
    const params = new URLSearchParams(window.location.search)
    const errorDescription = params.get('error_description')
    if (errorDescription) {
        showError(errorDescription)
        document.querySelector('button').disabled = true
        return true
    }
    return false
}

// Handle password recovery flow
async function handlePasswordRecovery() {
    if (checkForErrors()) return
    
    const hash = window.location.hash
    
    if (hash && hash.includes('access_token')) {
        const { data: { session }, error } = await supabase.auth.getSession()
        
        if (error) {
            showError(error.message)
            document.querySelector('button').disabled = true
            return
        }
        
        if (session) {
            sessionReady = true
            document.getElementById('message').innerText = 'Enter your new password'
            document.getElementById('message').style.color = '#666'
        }
    }
}

supabase.auth.onAuthStateChange((event, session) => {
    if (event === 'PASSWORD_RECOVERY') {
        sessionReady = true
        document.getElementById('message').innerText = 'Enter your new password'
        document.getElementById('message').style.color = '#666'
    }
})

async function resetPassword() {
    const newPassword = document.getElementById('newPassword').value
    const message = document.getElementById('message')
    const button = document.querySelector('button')
    
    if (!sessionReady) {
        message.innerText = 'Session expired. Please request a new reset link.'
        message.style.color = '#dc2626'
        return
    }
    
    if (!newPassword || newPassword.length < 6) {
        message.innerText = 'Password must be at least 6 characters'
        message.style.color = '#dc2626'
        return
    }
    
    button.disabled = true
    button.innerText = 'Updating...'
    
    const { error } = await supabase.auth.updateUser({
        password: newPassword
    })
    
    if (error) {
        message.innerText = error.message
        message.style.color = '#dc2626'
        button.disabled = false
        button.innerText = 'Update Password'
    } else {
        message.innerText = 'Password updated! Redirecting...'
        message.style.color = '#16a34a'
        setTimeout(() => {
            window.location.href = 'https://eatinn.org'
        }, 2000)
    }
}

handlePasswordRecovery()

// Timeout for session
setTimeout(() => {
    if (!sessionReady) {
        const message = document.getElementById('message')
        if (!message.innerText.includes('expired') && !message.innerText.includes('Enter')) {
            showError('Session timed out. Please request a new password reset link.')
            document.querySelector('button').disabled = true
        }
    }
}, 10000)
