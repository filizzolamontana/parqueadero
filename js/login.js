document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password');
    const togglePasswordIcon = document.querySelector('.toggle-password');
    const loginForm = document.querySelector('.login-form');


    if (togglePasswordIcon && passwordInput) {
        togglePasswordIcon.addEventListener('click', () => {

            const isPassword = passwordInput.getAttribute('type') === 'password';

            if (isPassword) {
                passwordInput.setAttribute('type', 'text');
                togglePasswordIcon.textContent = 'visibility_off';
                togglePasswordIcon.style.color = '#1a62d6';
            } else {
                passwordInput.setAttribute('type', 'password');
                togglePasswordIcon.textContent = 'visibility';
                togglePasswordIcon.style.color = '#a0aec0';
            }
        });
    }


    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();


            window.location.href = 'index.html';
        });
    }
});