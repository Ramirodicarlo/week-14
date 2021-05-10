console.log("Run validation")

const fullNameInput = document.getElementById('fullNameInput');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const confirmPasswordInput = document.getElementById('confirmPasswordInput');
const formElement = document.getElementById("registerForm");
let hasErrors = true;

fullNameInput.onblur = (event) => {
    const name = event.target.value;
    const nameRegex = name.match(/ /g);
    if(!nameRegex) {
        const errorMessage = 'Full name need to contain First Name and Last Name.</br>'
        document.getElementById("fullNameError").innerHTML += errorMessage;
        hasErrors = true;
    } else {
        hasErrors = false;
    }
    if(name.length < 6){
        const errorMessage = 'Full name need to contain at least 6 characters.</br>'
        document.getElementById("fullNameError").innerHTML += errorMessage;
        hasErrors = true;
    } else {
        hasErrors = false;
    }
};
fullNameInput.onfocus = () => {
    document.getElementById('fullNameError').innerHTML = '';
};
emailInput.onblur = (event) => {
    const email = event.target.value;
    const emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    const isValidEmail = emailRegex.test(email);
    if(!isValidEmail) {
        const errorMessage = 'You must enter a valid email. </br>'
        document.getElementById("emailError").innerHTML = errorMessage;
        hasErrors = true;
    } else {
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
confirmPasswordInput.onblur = (event) => {
    const confirmPassword = event.target.value;
    if ( confirmPassword !== passwordInput.value) {
        const errorMessage = 'Password do not match.</br>'
        document.getElementById("confirmPasswordError").innerHTML += errorMessage;
        hasErrors = true;
    }
    else{
        hasErrors = false;
    }
};
confirmPasswordInput.onfocus = () => {
    document.getElementById('confirmPasswordError').innerHTML = '';
};
formElement.onsubmit = (event) => {
    event.preventDefault();
    if (!hasErrors) {
        const fullNameValue = fullNameInput.value;
        const emailValue = emailInput.value;
        const passwordValue = passwordInput.value;
        const confirmPasswordValue = confirmPasswordInput.value;
        document.getElementById('validation').innerHTML = `Information submited: ${fullNameValue} ${emailValue} 
        ${passwordValue} ${confirmPasswordValue}`;
        document.getElementById("validation").style.display = "block";
        fetch('http://localhost:4000/login', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fullName: fullNameValue,
                email: emailValue,
                pass: passwordValue,
                confirmPass: confirmPasswordValue
            })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log('Error:', error))
    }
    else{
        document.getElementById('validation').innerHTML = "Information enter wrong"
        document.getElementById("validation").style.display = "block";
    }
};