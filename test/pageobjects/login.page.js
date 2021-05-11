const Page = require('./page');

class LoginPage extends Page {

    //Labels
    get usernameLabel () { return $('#fullName') }
    get emailLabel () {return $("#email")}
    get passwordLabel () { return $('#password') }
    get link () { return $('a') }
    //Inputs
    get email () {return $("#emailInput")}
    get password () { return $('#passwordInput') }
    get btnSubmit () { return $('#submitButton') }
    get validation () {return $("#validation")}
    //Error paragrafs
    get emailParagraf () {return $("#emailError")}
    get passwordParagraf () { return $('#passwordError') }
    open () {
        return super.open('login.html');
    }

    submit(){
        this.btnSubmit.click()
    }
}

module.exports = new LoginPage();
