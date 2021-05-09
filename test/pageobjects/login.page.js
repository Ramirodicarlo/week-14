const Page = require('./page');

class LoginPage extends Page {

    get email () {return $("#emaili")}
    get password () { return $('#passwordi') }
    get btnSubmit () { return $('#submit-b') }
    get validation () {return $("#validation")}

    open () {
        return super.open('login.html');
    }

    submit(){
        this.btnSubmit.click()
    }
}

module.exports = new LoginPage();
