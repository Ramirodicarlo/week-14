const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get email () {return $("#email")}
    //get username () { return $('#username') }
    get password () { return $('#password') }
    get btnSubmit () { return $('button[type="submit"]') }

    open () {
        return super.open('login.html');
    }

    submit(){
        this.btnSubmit.click()
    }
}

module.exports = new LoginPage();
