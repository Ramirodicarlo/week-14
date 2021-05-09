const registerPage = require("../pageobjects/register.page");

describe("Register automated test", () =>{
    it("Set values and register",() =>{
        registerPage.open()
        registerPage.username.setValue("Jhon Sena")
        registerPage.email.setValue("casa@gamail.com")
        registerPage.password.setValue(12345678)
        registerPage.cpassword.setValue(12345678)
        registerPage.submit()
    });
    it("Set wrong values and see a message",() =>{
        registerPage.open()
        registerPage.username.setValue("Jhon")
        registerPage.email.setValue("casa@gamail.com")
        registerPage.password.setValue(1234567)
        registerPage.cpassword.setValue(12345678)
        registerPage.submit()
        registerPage.validation.isEqual("You had enter wrong information")
    });
})