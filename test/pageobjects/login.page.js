const Page = require('./page');

class LoginPage extends Page {

    get email () {return $("#emailInput")}
    get password () { return $('#passwordInput') }
    get btnSubmit () { return $('#submitButton') }
    get validation () {return $("#validation")}

    open () {
        return super.open('login.html');
    }

    submit(){
        this.btnSubmit.click()
    }
}

module.exports = new LoginPage();
