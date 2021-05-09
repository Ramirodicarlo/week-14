const loginPage = require("../pageobjects/login.page");


describe("Login automated test", () =>{
    it("Set values and login",() =>{
        loginPage.open()
        browser.pause(3000)
        loginPage.email.setValue("casa@gamail.com")
        loginPage.password.setValue(12345678)
        loginPage.submit()
    });
    it("Set wrong values and see a message",() =>{
        loginPage.open()
        loginPage.email.setValue("casa")
        loginPage.password.setValue(12345678)
        loginPage.submit()
        loginPage.validation.isEqual("You had enter wrong information")
    });
})
