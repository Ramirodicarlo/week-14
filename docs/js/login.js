const errorsArray = [];
const checkForm = () => {
    const formElement = document.getElementById('loginForm');
    if (!formElement) {
        errorsArray.push('form is not found');
    }
};
const checkLabelEmail = () => {
    const labelEmail = document.getElementById('email');
    if (!labelEmail) {
        errorsArray.push('Email label is missing');
    }
    // Si existe labelEmail y no tiene el atributo for
    if (labelEmail && !labelEmail.getAttribute('for')) {
        errorsArray.push('For attribute is missing for email label');
    }
};
const checkInputEmail = () => {
    const inputEmail = document.getElementById('emailInput');
    if (!inputEmail) {
        errorsArray.push('Email input is missing or incorrect');
    }
    // Si existe inputEmail y el atributo type es diferente a email
    if (inputEmail && inputEmail.getAttribute('type') !== 'email') {
        errorsArray.push('Email input type should be "email"');
    }
    // Si existe inputEmail y no tiene el atributo required
    if (inputEmail && !inputEmail.hasAttribute('required')) {
        errorsArray.push('Email input should be required');
    }
};
const checkLabelPassword = () => {
    const labelPassword = document.getElementById('password');
    if (!labelPassword) {
        errorsArray.push('Password label is missing');
    }
    if (labelPassword && !labelPassword.getAttribute('for')) {
        errorsArray.push('For attribute is missing for email label');
    }
};
const checkInputPassword = () => {
    const inputPassword = document.getElementById('passwordInput');
    if (!inputPassword) {
        errorsArray.push('Password input is missing or incorrect');
    }
    if (inputPassword && inputPassword.getAttribute('type') !== 'password') {
        errorsArray.push('Password input type should be "password"');
    }
    if (inputPassword && !inputPassword.hasAttribute('required')) {
        errorsArray.push('Password input should be required');
    }
};
const checkLoginButton = () => {
    const loginButton = document.getElementById('submitButton');
    if (!loginButton) {
        errorsArray.push('Missing submit button');
    }
};
const checkLink = () => {
    const registerLink = document.getElementById('registerLink'); 
    if(!registerLink) {
        errorsArray.push('link to register is missing or invalid');
    }
};
const check = () => {
    const validationElement = document.getElementById("validation");
    if (errorsArray.length === 0) {
        validationElement.innerHTML += 'Every validation has passed';
    } else {
        for (let i = 0; i < errorsArray.length; i++) {
            validationElement.innerHTML += '<li>' + errorsArray[i] + '</li>';
        }
    }
};
checkForm();
checkLabelEmail();
checkInputEmail();
checkLabelPassword();
checkInputPassword();
checkLoginButton();
checkLink();
check();