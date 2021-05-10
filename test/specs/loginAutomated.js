const loginPage = require("../pageobjects/login.page.js");

describe("Register automated test", () =>{
    
    describe("Validation inputs and labels",()=>{
        it("Validate email input and label",() => {
            loginPage.open()
            loginPage.emailLabel.isExisting()
            loginPage.email.isExisting()
        })
        it("Validate password input and label",() => {
            loginPage.open()
            loginPage.passwordLabel.isExisting()
            loginPage.password.isExisting()
        })
        it("Validate submit button",() => {
            loginPage.open()
            loginPage.btnSubmit.isExisting()
        })
    })
    describe("Validate display error paragraf",() =>{
        it("Validate email paragraf",() => {
            loginPage.open()
            loginPage.emailParagraf.isExisting()
        })
        it("Validate password paragraf",() => {
            loginPage.open()
            loginPage.passwordParagraf.isExisting()
        })
        it("Validate validation div",() => {
            loginPage.open()
            loginPage.validation.isExisting()
        })
    })
    describe("Validate if the inputs has errors, show message",() =>{
        it("Validate email paragraf",() => {
            loginPage.open()
            loginPage.email.setValue("jhones")
            browser.keys("Tab")
            expect(loginPage.emailParagraf).toHaveText("You must enter a valid email.")
        })
        it("Validate password paragraf",() => {
            loginPage.open()
            loginPage.password.setValue("aaaa")
            browser.keys("Tab")
            expect(loginPage.passwordParagraf).toHaveText("Password need to contain at least 8 characters.")
        })
        it("Validate password paragraf",() => {
            loginPage.open()
            loginPage.password.setValue("----...a")
            browser.keys("Tab")
            expect(loginPage.passwordParagraf).toHaveText("Password must contain numbers or letters.")
        })
        
    })
    describe("Validate submit", () =>{
        it("Set wrong values and see a message error on submit",() =>{
            loginPage.open()
            loginPage.email.setValue("casa@gmail.com")
            loginPage.password.setValue(1234567)
            loginPage.submit()
            loginPage.validation.toHaveText("You had enter wrong information")
        })    
        it("Set wrong values and see a message error on submit",() =>{
            loginPage.open()
            loginPage.email.setValue("casa@gmail.com")
            loginPage.password.setValue(12345679)
            loginPage.submit()
            expect(browser.status()).toBe(401)
        })    
        it("Set values and register",() =>{
            loginPage.open()
            loginPage.email.setValue("casa@gmail.com")
            loginPage.password.setValue(12345678)
            loginPage.submit()
            loginPage.validation.toHaveText("Information submited: casa@gmail.com 12345678")
        })
    })
})
