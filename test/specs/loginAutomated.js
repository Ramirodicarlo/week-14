const loginPage = require ("../pageobjects/login.page.js");


describe("Login automated test", () =>{
     it("Set wrong values and see a message",() =>{
        loginPage.open()
        browser.pause(4000)
        loginPage.email.setValue("casa")
        loginPage.password.setValue(12345678)
        loginPage.submit()
        loginPage.validation.isEqual("You had enter wrong information")
    });
    it("Set values and login",() =>{
        loginPage.open()
        browser.pause(4000)
        loginPage.email.setValue("casa@gamail.com")
        loginPage.password.setValue(12345678)
        loginPage.submit()
    });
   
})
