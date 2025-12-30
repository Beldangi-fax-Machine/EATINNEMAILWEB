const supabase = window.supabase.createClient(
    'https://juodevmrlwkkfjygmqzc.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1b2Rldm1ybHdra2ZqeWdtcXpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU1MTY5MTUsImV4cCI6MjA2MTA5MjkxNX0.YrvVy27pnHusfYEjLN4duLaGk3V-NDAt3Cv483FhNPs'
)

let sessionReady = false
let authHandled = false

const loadingState = document.getElementById('loadingState')
const formState = document.getElementById('formState')
const successState = document.getElementById('successState')
const errorState = document.getElementById('errorState')
const errorMessageEl = document.getElementById('errorMessage')
const message = document.getElementById('message')
const submitBtn = document.getElementById('submitBtn')
const btnText = document.getElementById('btnText')
const btnSpinner = document.getElementById('btnSpinner')
const newPasswordInput = document.getElementById('newPassword')
const confirmPasswordInput = document.getElementById('confirmPassword')

function showState(state) {
    loadingState.classList.add('hidden')
    formState.classList.add('hidden')
    successState.classList.add('hidden')
    errorState.classList.add('hidden')
    state.classList.remove('hidden')
}

function showForm() {
    if (authHandled) return
    authHandled = true
    showState(formState)
}

function showSuccess() {
    showState(successState)
    setTimeout(() => {
        window.location.href = 'https://geteatinn.app'
    }, 3000)
}

function showFatalError(msg) {
    if (authHandled) return
    authHandled = true
    errorMessageEl.textContent = msg || 'The link may have expired or is invalid'
    showState(errorState)
}

function showMessage(text, type) {
    message.textContent = text
    message.className = `message show ${type}`
}

function hideMessage() {
    message.className = 'message'
}

function setLoading(loading) {
    submitBtn.disabled = loading
    btnText.textContent = loading ? 'Updating...' : 'Update Password'
    btnSpinner.classList.toggle('hidden', !loading)
}

function togglePassword(inputId, btn) {
    const input = document.getElementById(inputId)
    if (input.type === 'password') {
        input.type = 'text'
        btn.textContent = '🙈'
    } else {
        input.type = 'password'
        btn.textContent = '👁️'
    }
}

function checkPasswordStrength(password) {
    let strength = 0
    if (password.length >= 6) strength++
    if (password.length >= 8) strength++
    if (/[A-Z]/.test(password) && /[a-z]/.test(password)) strength++
    if (/[0-9]/.test(password) || /[^A-Za-z0-9]/.test(password)) strength++
    return strength
}

function updateStrengthIndicator(password) {
    const strength = checkPasswordStrength(password)
    const bars = ['bar1', 'bar2', 'bar3', 'bar4']
    const texts = ['Too weak', 'Weak', 'Good', 'Strong']
    const classes = ['weak', 'weak', 'medium', 'strong']
    
    bars.forEach((barId, index) => {
        const bar = document.getElementById(barId)
        bar.className = 'strength-bar'
        if (index < strength) {
            bar.classList.add(classes[strength - 1])
        }
    })
    
    const strengthText = document.getElementById('strengthText')
    if (password.length === 0) {
        strengthText.textContent = 'Use at least 6 characters'
    } else if (strength === 0) {
        strengthText.textContent = 'Too short'
    } else {
        strengthText.textContent = texts[strength - 1]
    }
}

newPasswordInput.addEventListener('input', (e) => {
    updateStrengthIndicator(e.target.value)
    hideMessage()
})

confirmPasswordInput.addEventListener('input', () => {
    hideMessage()
})

async function resetPassword() {
    const newPassword = newPasswordInput.value
    const confirmPassword = confirmPasswordInput.value
    
    hideMessage()
    
    if (!sessionReady) {
        showMessage('Session expired. Please request a new reset link.', 'error')
        return
    }
    
    if (!newPassword || newPassword.length < 6) {
        showMessage('Password must be at least 6 characters', 'error')
        newPasswordInput.classList.add('error')
        return
    }
    
    if (newPassword !== confirmPassword) {
        showMessage('Passwords do not match', 'error')
        confirmPasswordInput.classList.add('error')
        return
    }
    
    newPasswordInput.classList.remove('error')
    confirmPasswordInput.classList.remove('error')
    
    setLoading(true)
    
    try {
        const { error } = await supabase.auth.updateUser({
            password: newPassword
        })
        
        if (error) {
            showMessage(error.message, 'error')
            setLoading(false)
        } else {
            showSuccess()
        }
    } catch (err) {
        showMessage('An unexpected error occurred', 'error')
        setLoading(false)
    }
}

async function handlePasswordRecovery() {
    // Check for error in query params first
    const params = new URLSearchParams(window.location.search)
    const errorDescription = params.get('error_description')
    if (errorDescription) {
        showFatalError(errorDescription)
        return
    }

    // Check if we have auth tokens in the URL (hash or query params)
    const hash = window.location.hash
    const hasTokenInHash = hash && (hash.includes('access_token') || hash.includes('error'))
    const hasTokenInQuery = params.has('code') || params.has('token_hash')
    
    if (!hasTokenInHash && !hasTokenInQuery) {
        showFatalError('No reset token found. Please use the link from your email.')
        return
    }

    try {
        // Let Supabase handle the token exchange from the URL
        const { data, error } = await supabase.auth.exchangeCodeForSession(window.location.href)
        
        if (error) {
            // If exchange fails, try getting existing session
            const { data: sessionData, error: sessionError } = await supabase.auth.getSession()
            
            if (sessionError || !sessionData.session) {
                showFatalError(error.message || sessionError?.message || 'Reset link is invalid or expired')
                return
            }
            
            sessionReady = true
            showForm()
            return
        }
        
        if (data.session) {
            sessionReady = true
            showForm()
        }
    } catch (err) {
        // Fallback: try getting session in case tokens were already processed
        try {
            const { data: { session }, error } = await supabase.auth.getSession()
            if (session) {
                sessionReady = true
                showForm()
            } else {
                showFatalError(error?.message || 'An unexpected error occurred')
            }
        } catch (e) {
            showFatalError('An unexpected error occurred')
        }
    }
}

// Listen for auth state changes (backup handler)
supabase.auth.onAuthStateChange((event, session) => {
    if ((event === 'PASSWORD_RECOVERY' || event === 'SIGNED_IN') && session) {
        sessionReady = true
        showForm()
    }
})

// Start the password recovery flow
handlePasswordRecovery()

// Timeout fallback
setTimeout(() => {
    if (!loadingState.classList.contains('hidden') && !authHandled) {
        showFatalError('Session timed out. Please request a new password reset link.')
    }
}, 15000)

window.togglePassword = togglePassword
window.resetPassword = resetPassword
