const Page = require('./page');

class RegisterPage extends Page {

    get email () {return $("#emailImput")}
    get username () { return $('#fullNameInput') }
    get password () { return $('#passwordInput') }
    get cpassword () { return $('#confirmPasswordInput') }
    get btnSubmit () { return $('#submitButton') }
    get validation () {return $("#validation")}

    open () {
        return super.open('register.html');
    }

    submit(){
        this.btnSubmit.click()
    }
}

module.exports = new RegisterPage();