const loginPage = require("../pageobjects/login.page");

describe("Login automated test", () =>{
    it("Set values and login",() =>{
        browser.url("localhost:4000/public/login.html")
        //loginPage.open('login.html')
        browser.pause(2000)
        loginPage.email.setValue("casa@gamail.com")
        //loginPage.username.setValue("Jhon Sena")
        loginPage.password.setValue(12345678)
        loginPage.submit()
    });
})