const supabase = window.supabase.createClient(
    'https://juodevmrlwkkfjygmqzc.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1b2Rldm1ybHdra2ZqeWdtcXpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU1MTY5MTUsImV4cCI6MjA2MTA5MjkxNX0.YrvVy27pnHusfYEjLN4duLaGk3V-NDAt3Cv483FhNPs'
)

let sessionReady = false

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
    showState(formState)
}

function showSuccess() {
    showState(successState)
    setTimeout(() => {
        window.location.href = 'https://geteatinn.app'
    }, 3000)
}

function showFatalError(msg) {
    errorMessageEl.textContent = msg || 'The invitation may have expired or is invalid'
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
    btnText.textContent = loading ? 'Creating...' : 'Create Account'
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

async function setPassword() {
    const password = newPasswordInput.value
    const confirmPassword = confirmPasswordInput.value
    
    hideMessage()
    
    if (!sessionReady) {
        showMessage('Session expired. Please request a new invitation.', 'error')
        return
    }
    
    if (!password || password.length < 6) {
        showMessage('Password must be at least 6 characters', 'error')
        newPasswordInput.classList.add('error')
        return
    }
    
    if (password !== confirmPassword) {
        showMessage('Passwords do not match', 'error')
        confirmPasswordInput.classList.add('error')
        return
    }
    
    newPasswordInput.classList.remove('error')
    confirmPasswordInput.classList.remove('error')
    
    setLoading(true)
    
    try {
        const { error } = await supabase.auth.updateUser({
            password: password
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

async function handleInvite() {
    const params = new URLSearchParams(window.location.search)
    const errorDescription = params.get('error_description')
    if (errorDescription) {
        showFatalError(errorDescription)
        return
    }

    const hash = window.location.hash
    
    if (hash && hash.includes('access_token')) {
        try {
            const { data: { session }, error } = await supabase.auth.getSession()
            
            if (error) {
                showFatalError(error.message)
                return
            }
            
            if (session) {
                sessionReady = true
                showForm()
                return
            }
        } catch (err) {
            showFatalError('An unexpected error occurred')
            return
        }
    }
}

supabase.auth.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_IN' && session) {
        sessionReady = true
        showForm()
    }
})

handleInvite()

setTimeout(() => {
    if (!loadingState.classList.contains('hidden')) {
        showFatalError('Invitation processing timed out. The link may have expired.')
    }
}, 15000)

window.togglePassword = togglePassword
window.setPassword = setPassword
