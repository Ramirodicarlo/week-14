const Page = require('./page');

class RegisterPage extends Page {

    get email () {return $("#emaili")}
    get username () { return $('#fnamei') }
    get password () { return $('#passwordi') }
    get cpassword () { return $('#confirm-passwordi') }
    get btnSubmit () { return $('#submit-b') }
    get validation () {return $("#validation")}

    open () {
        return super.open('register.html');
    }

    submit(){
        this.btnSubmit.click()
    }
}

module.exports = new RegisterPage();