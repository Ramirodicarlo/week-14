const registerPage = require ("../pageobjects/register.page.js");

describe("Register automated test", () =>{
    
    describe("Validation inputs and labels",()=>{
        it("Validate username input and label",() => {
            registerPage.open()
            registerPage.usernameLabel.isExisting()
            registerPage.username.isExisting()
            expect(registerPage.username.getAttribute("type")).toMatch("text")
        })
        it("Validate email input and label",() => {
            registerPage.open()
            registerPage.emailLabel.isExisting()
            registerPage.email.isExisting()
            expect(registerPage.email.getAttribute("type")).toMatch("email")
        })
        it("Validate password input and label",() => {
            registerPage.open()
            registerPage.passwordLabel.isExisting()
            registerPage.password.isExisting()
            expect(registerPage.password.getAttribute("type")).toMatch("password")
        })
        it("Validate confirm pasword input and label",() => {
            registerPage.open()
            registerPage.cpasswordLabel.isExisting()
            registerPage.cpassword.isExisting()
            expect(registerPage.cpassword.getAttribute("type")).toMatch("password")
        })
        it("Validate submit button",() => {
            registerPage.open()
            registerPage.btnSubmit.isExisting()
            expect(registerPage.btnSubmit.getAttribute("type")).toMatch("submit")
        })
        it("Validate reset button",() => {
            registerPage.open()
            registerPage.btnReset.isExisting()
            expect(registerPage.btnReset.getAttribute("type")).toMatch("reset")
        })
        it("Validation of link to register page", () => {
            registerPage.open()
            expect(registerPage.link.getAttribute("href")).toMatch("./login.html")
        })
    })
    describe("Validate display error paragraf",() =>{
        it("Validate username paragraf",() => {
            registerPage.open()
            registerPage.usernameParagraf.isExisting()
        })
        it("Validate email paragraf",() => {
            registerPage.open()
            registerPage.emailParagraf.isExisting()
        })
        it("Validate password paragraf",() => {
            registerPage.open()
            registerPage.passwordParagraf.isExisting()
        })
        it("Validate confirm password paragraf",() => {
            registerPage.open()
            registerPage.cpasswordParagraf.isExisting()
        })
        it("Validate validation div",() => {
            registerPage.open()
            registerPage.validation.isExisting()
        })
    })
    describe("Validate if the inputs has errors, show message",() =>{
        it("Validate username paragraf",() => {
            registerPage.open()
            registerPage.username.setValue("Jhonese")
            browser.keys("Tab")
            expect(registerPage.usernameParagraf).toHaveText("Full name need to contain First Name and Last Name.")
        })
        it("Validate username paragraf",() => {
            registerPage.open()
            registerPage.username.setValue("j a")
            browser.keys("Tab")
            expect(registerPage.usernameParagraf).toHaveText("Full name need to contain at least 6 characters.")
        })
        it("Validate email paragraf",() => {
            registerPage.open()
            registerPage.email.setValue("jhones")
            browser.keys("Tab")
            expect(registerPage.emailParagraf).toHaveText("You must enter a valid email.")
        })
        it("Validate password paragraf",() => {
            registerPage.open()
            registerPage.password.setValue("aaaa")
            browser.keys("Tab")
            expect(registerPage.passwordParagraf).toHaveText("Password need to contain at least 8 characters.")
        })
        it("Validate password paragraf",() => {
            registerPage.open()
            registerPage.password.setValue("----....")
            browser.keys("Tab")
            expect(registerPage.passwordParagraf).toHaveText("Password must contain numbers or letters.")
        })
        it("Validate confirm paragraf",() => {
            registerPage.open()
            registerPage.cpassword.setValue("aaa")
            browser.keys("Tab")
            expect(registerPage.cpasswordParagraf).toHaveText("Password do not match")
        })
        
    })
    describe("Validate submit", () =>{
        it("Set wrong values and see a message error on submit",() =>{
            registerPage.open()
            registerPage.username.setValue("Jhon")
            registerPage.email.setValue("casa@gmail.com")
            registerPage.password.setValue(1234567)
            registerPage.cpassword.setValue(12345678)
            registerPage.submit()
            expect(registerPage.validation).toHaveText("You had enter wrong information")
        })    
        it("Set values and register",() =>{
            registerPage.open()
            registerPage.username.setValue("Jhon Sena")
            registerPage.email.setValue("casa@gmail.com")
            registerPage.password.setValue(12345678)
            registerPage.cpassword.setValue(12345678)
            registerPage.submit()
            expect(registerPage.validation).toHaveText("Information submited: Jhon Sena casa@gmail.com 12345678 12345678")
        })
    })
})