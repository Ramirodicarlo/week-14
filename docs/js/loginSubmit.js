const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const formElement = document.getElementById("loginForm");
let hasErrors = true;
emailInput.onblur = (event) => {
    const email = event.target.value; // Obtengo el valor del input
    const emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    const isValidEmail = emailRegex.test(email);
    if(!isValidEmail) {
        const errorMessage = 'You must enter a valid email. </br>'
        document.getElementById("emailError").innerHTML = errorMessage;
        hasErrors = true;
    } else {
        // Si es valido el email
        hasErrors = false;
    }
};
emailInput.onfocus = () => {
    document.getElementById('emailError').innerHTML = '';
};
passwordInput.onblur = (event) => {
    const password = event.target.value;
    const validatePassword = password.match(/([A-z]|[0-9])/g);
    if (!validatePassword) {
        const errorMessage = 'Password must contain numbers or letters.</br>'
        document.getElementById("passwordError").innerHTML += errorMessage;
        hasErrors = true;
    }
    if (password.length < 8) {
        const errorMessage = 'Password need to contain at least 8 characters.'
        document.getElementById("passwordError").innerHTML += errorMessage;
        hasErrors = true;
    }
    if (password.length > 8 && validatePassword) {
        hasErrors = false;
    }
};
passwordInput.onfocus = () => {
    document.getElementById('passwordError').innerHTML = '';
};
formElement.onsubmit = (event) => {
    event.preventDefault();
    if (!hasErrors) {
        const emailValue = emailInput.value;
        const passwordValue = passwordInput.value;
        document.getElementById('validation').innerHTML = `Information submited: ${emailValue} ${passwordValue}`;
        fetch('http://localhost:4000/login', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: emailValue,
                pass: passwordValue,
            })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log('Error:', error))
    }
};