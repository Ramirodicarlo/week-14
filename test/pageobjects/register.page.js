const Page = require('./page');

class RegisterPage extends Page {
    //Labels
    get usernameLabel () { return $('#fullName') }
    get emailLabel () {return $("#email")}
    get passwordLabel () { return $('#password') }
    get cpasswordLabel () { return $('#confirmPassword') }
    get link () { return $('a') }
    //Inputs
    get username () { return $('#fullNameInput') }
    get email () { return $("#emailInput")}
    get password () { return $('#passwordInput') }
    get cpassword () { return $('#confirmPasswordInput') }
    get btnSubmit () { return $('#submitButton') }
    get btnReset () { return $('#resetButton') }
    get validation () { return $("#validation")}
    //Error paragrafs
    get usernameParagraf () { return $('#fullNameError') }
    get emailParagraf () { return $("#emailError")}
    get passwordParagraf () { return $('#passwordError') }
    get cpasswordParagraf () { return $('#confirmPasswordError') }

    open () {
        return super.open('register.html');
    }

    submit(){
        this.btnSubmit.click()
    }
}

module.exports = new RegisterPage();