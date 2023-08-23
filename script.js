function validatePassword() {
    const passwordInput = document.getElementById("password");
    const password = passwordInput.value;

    const uppercaseRegex = /[A-Z]/;
    const symbolRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    
    if (password.length < 8) {
        displayErrorMessage("A senha deve ter pelo menos 8 caracteres.");
        return false;
    }

    if (!uppercaseRegex.test(password)) {
        displayErrorMessage("A senha deve conter pelo menos 1 letra maiúscula.");
        return false;
    }

    if (!symbolRegex.test(password)) {
        displayErrorMessage("A senha deve conter pelo menos 1 símbolo especial.");
        return false;
    }

    hideErrorMessage();
    return true;
}

function displayErrorMessage(message) {
    const errorElement = document.getElementById("password-error");
    errorElement.textContent = message;
}

function hideErrorMessage() {
    const errorElement = document.getElementById("password-error");
    errorElement.textContent = "";
}
