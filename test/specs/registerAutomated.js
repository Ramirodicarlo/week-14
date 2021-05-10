const registerPage = require ("../pageobjects/register.page.js");

describe("Register automated test", () =>{
    
    describe("Validation inputs and labels",()=>{
        it("Validate username input and label",() => {
            registerPage.open()
            registerPage.usernameLabel.isExisting()
            registerPage.username.isExisting()
        })
        it("Validate email input and label",() => {
            registerPage.open()
            registerPage.emailLabel.isExisting()
            registerPage.email.isExisting()
        })
        it("Validate password input and label",() => {
            registerPage.open()
            registerPage.passwordLabel.isExisting()
            registerPage.password.isExisting()
        })
        it("Validate confirm pasword input and label",() => {
            registerPage.open()
            registerPage.cpasswordLabel.isExisting()
            registerPage.cpassword.isExisting()
        })
        it("Validate submit button",() => {
            registerPage.open()
            registerPage.btnSubmit.isExisting()
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
            registerPage.validationDiv.isExisting()
        })
    })
    describe("Validate if the inputs has errors, show message",() =>{
        it("Validate username paragraf",() => {
            registerPage.open()
            registerPage.username.setValue("Jhones")
            browser.keys("Tab")
            expect(registerPage.usernameParagraf).toHaveText(["Full name need to contain First Name and Last Name.",
            "Full name need to contain at least 6 characters."])
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
            registerPage.validationDiv.isExisting()
        })
    })
    it("Set wrong values and see a message error on submit",() =>{
        registerPage.open()
        registerPage.username.setValue("Jhon")
        registerPage.email.setValue("casa@gmail.com")
        registerPage.password.setValue(1234567)
        registerPage.cpassword.setValue(12345678)
        registerPage.submit()
        registerPage.validation.isEqual("You had enter wrong information")
    })    
    it("Set values and register",() =>{
        registerPage.open()
        registerPage.username.setValue("Jhon Sena")
        registerPage.email.setValue("casa@gamail.com")
        registerPage.password.setValue(12345678)
        registerPage.cpassword.setValue(12345678)
        registerPage.submit()
    })
})