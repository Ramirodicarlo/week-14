const loginPage = require("../pageobjects/login.page.js");

describe("Register automated test", () =>{
    
    describe("Validation inputs and labels",()=>{
        it("Validate email input and label",() => {
            loginPage.open()
            loginPage.emailLabel.isExisting()
            loginPage.email.isExisting()
            expect(loginPage.email.getAttribute("type")).toMatch("email")
        })
        it("Validate password input and label",() => {
            loginPage.open()
            loginPage.passwordLabel.isExisting()
            loginPage.password.isExisting()
            expect(loginPage.password.getAttribute("type")).toMatch("password")
        })
        it("Validate submit button",() => {
            loginPage.open()
            loginPage.btnSubmit.isExisting()
            expect(loginPage.btnSubmit.getAttribute("type")).toMatch("submit")
        })
        it("Validation of link to register page", () => {
            loginPage.open()
            expect(loginPage.link.getAttribute("href")).toMatch("./register.html")
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
            loginPage.password.setValue("----...-")
            browser.keys("Tab")
            expect(loginPage.passwordParagraf).toHaveText("Password must contain numbers or letters.")
        })
        
    })
    describe("Validate submit", () =>{
        it("Set wrong values and see a message error on submit",() =>{
            loginPage.open()
            browser.setupInterceptor()
            loginPage.email.setValue("casa@gmail.com")
            loginPage.password.setValue(1234567)
            browser.keys("Tab")
            loginPage.submit()
            expect(loginPage.validation).toHaveText("You had enter wrong information")
        })    
        it("Set wrong values and see a message error on submit",() =>{
            loginPage.open()
            loginPage.email.setValue("casa@gmail.com")
            loginPage.password.setValue(12345679)
            loginPage.submit()
            browser.expectRequest("put","http://localhost:4000/login",401)
        })    
        it("Set values and register",() =>{
            loginPage.open()
            loginPage.email.setValue("casa@gmail.com")
            loginPage.password.setValue(12345678)
            loginPage.submit()
            expect(loginPage.validation).toHaveText("Information submited: casa@gmail.com 12345678")
        })
    })
})
