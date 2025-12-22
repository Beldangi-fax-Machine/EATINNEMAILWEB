const supabase = window.supabase.createClient(
    'https://juodevmrlwkkfjygmqzc.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1b2Rldm1ybHdra2ZqeWdtcXpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU1MTY5MTUsImV4cCI6MjA2MTA5MjkxNX0.YrvVy27pnHusfYEjLN4duLaGk3V-NDAt3Cv483FhNPs'
)

let sessionReady = false

supabase.auth.onAuthStateChange((event, session) => {
    if (event === 'PASSWORD_RECOVERY') {
        sessionReady = true
        document.getElementById('message').innerText = 'Enter your new password'
    }
})

async function resetPassword() {
    const newPassword = document.getElementById('newPassword').value
    
    if (!sessionReady) {
        document.getElementById('message').innerText = 'Session expired. Please request a new reset link.'
        return
    }
    
    if (!newPassword || newPassword.length < 6) {
        document.getElementById('message').innerText = 'Password must be at least 6 characters'
        return
    }
    
    const { error } = await supabase.auth.updateUser({
        password: newPassword
    })
    
    if (error) {
        document.getElementById('message').innerText = error.message
    } else {
        document.getElementById('message').innerText = 'Password updated! Redirecting...'
        setTimeout(() => {
            window.location.href = 'https://eatinn.org'
        }, 2000)
    }
}
