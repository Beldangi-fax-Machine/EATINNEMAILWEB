// Check for URL errors immediately before anything else
const params = new URLSearchParams(window.location.search)
const hash = window.location.hash.substring(1)
const hashParams = new URLSearchParams(hash)
const urlError = params.get('error_description') || hashParams.get('error_description')

const loadingState = document.getElementById('loadingState')
const formState = document.getElementById('formState')
const successState = document.getElementById('successState')
const errorState = document.getElementById('errorState')
const errorMessageEl = document.getElementById('errorMessage')

// If there's an error in the URL, show it immediately without waiting for Supabase
if (urlError) {
    loadingState.classList.add('hidden')
    errorMessageEl.textContent = decodeURIComponent(urlError.replace(/\+/g, ' '))
    errorState.classList.remove('hidden')
    // Stop execution - don't need Supabase for error display
    throw new Error('Auth error in URL')
}

// Check if Supabase loaded
if (!window.supabase) {
    loadingState.classList.add('hidden')
    errorMessageEl.textContent = 'Failed to load. Please refresh the page.'
    errorState.classList.remove('hidden')
    throw new Error('Supabase not loaded')
}

const supabaseClient = window.supabase.createClient(
    'https://juodevmrlwkkfjygmqzc.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1b2Rldm1ybHdra2ZqeWdtcXpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU1MTY5MTUsImV4cCI6MjA2MTA5MjkxNX0.YrvVy27pnHusfYEjLN4duLaGk3V-NDAt3Cv483FhNPs'
)

let sessionReady = false
let authHandled = false
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
        const { error } = await supabaseClient.auth.updateUser({
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
    const params = new URLSearchParams(window.location.search)
    const hash = window.location.hash.substring(1)
    const hashParams = new URLSearchParams(hash)
    
    // Check for error in query params or hash
    const errorDescription = params.get('error_description') || hashParams.get('error_description')
    if (errorDescription) {
        showFatalError(decodeURIComponent(errorDescription))
        return
    }

    // Method 1: Token hash flow (password reset links use type=recovery)
    const tokenHash = params.get('token_hash')
    const type = params.get('type')
    
    if (tokenHash && type) {
        try {
            const { data, error } = await supabaseClient.auth.verifyOtp({
                token_hash: tokenHash,
                type: type
            })
            
            if (error) {
                showFatalError(error.message)
                return
            }
            
            if (data.session || data.user) {
                sessionReady = true
                showForm()
                return
            }
        } catch (err) {
            showFatalError('Reset link is invalid or expired. Please request a new one.')
            return
        }
    }

    // Method 2: Code parameter - could be PKCE code or recovery token
    const code = params.get('code')
    if (code) {
        // First try verifyOtp with recovery type (most common for password reset)
        try {
            const { data, error } = await supabaseClient.auth.verifyOtp({
                token_hash: code,
                type: 'recovery'
            })

            if (!error && (data.session || data.user)) {
                sessionReady = true
                showForm()
                return
            }
        } catch (err) {
            // Continue to try other methods
        }

        // Try as PKCE code if verifyOtp didn't work
        try {
            const { data, error } = await supabaseClient.auth.exchangeCodeForSession(code)

            if (!error && data.session) {
                sessionReady = true
                showForm()
                return
            }
        } catch (err) {
            // Continue to next method
        }

        // If we have a code but neither method worked, show error
        showFatalError('Reset link is invalid or expired. Please request a new one.')
        return
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
                showFatalError(error.message)
                return
            }
            
            if (data.session) {
                sessionReady = true
                showForm()
                return
            }
        } catch (err) {
            showFatalError('Reset link is invalid or expired. Please request a new one.')
            return
        }
    }

    // No valid tokens found
    showFatalError('No reset token found. Please use the link from your email.')
}

// Listen for auth state changes (backup handler)
supabaseClient.auth.onAuthStateChange((event, session) => {
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
