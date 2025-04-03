import LumaLandingPage from "./LumaLandingPage"
import moment from "moment";

class LumaHome {
    static dateString = moment(new Date()).format('ssh')
    

    goto(url) {
        cy.on('uncaught:exception', (err, runnable) => { return false })
        cy.visit(url)
    }
    VerifyHomePageRedirection() {
        cy.get(".base").contains("Home Page")
    }
    ClickonCreateAccountLink() {
        cy.get('a[href="https://magento.softwaretestingboard.com/customer/account/create/"]').first().click()
    }
    EnterUserDetails() {
        
        cy.get(".base").contains("Create New Customer Account")
        cy.get("#firstname").type("Test")
        cy.get("#lastname").type("Name")
        cy.get("#email_address").type("TestAdd" + LumaHome.dateString + "@test.com")
        cy.get("#password").type("test@v21")
        cy.get("#password-confirmation").type("test@v21")
        cy.get("button[title='Create an Account']").click()

    }
    VerifySuccessMessageAfterRegistering() {
        cy.get(".message-success div").contains("Thank you for registering with Main Website Store.")
    }
    Logout() {
        cy.get('button[data-action="customer-menu-toggle"]').first().click();
        cy.get("a[href='https://magento.softwaretestingboard.com/customer/account/logout/']").first().click();
    }
    ClickOnSubmit(){
        cy.wait(2000)
        cy.get("button[title='Create an Account']").click()
        cy.wait(2000)
    }
    VerifyValidationMessages(){
        cy.get("#firstname-error").contains("This is a required field.")
        cy.get("#lastname-error").contains("This is a required field.")
        cy.get("#email_address-error").contains("This is a required field.")
        cy.get("#password-error").contains("This is a required field.")
        cy.get("#password-confirmation-error").contains("This is a required field.")
    }
    EnterSameUserDetails() {
        cy.get(".base").contains("Create New Customer Account")
        cy.get("#firstname").type("Test")
        cy.get("#lastname").type("Name")
        cy.get("#email_address").type("TestAdd" + LumaHome.dateString + "@test.com")
        cy.get("#password").type("test@v21")
        cy.get("#password-confirmation").type("test@v21")
        cy.get("button[title='Create an Account']").click()
    }
    VerifySameEmailValidationMessage() {
        cy.get(".message-error div").contains("There is already an account with this email address. If you are sure that it is your email address,")
    }
    ClickLoginButton() {
        cy.get('.authorization-link a').first().click()
    }
    LoginInvalid() {
        cy.get("#email").type("TestAdd@test.com")
        cy.get("#pass").type("t12")
        cy.get('#send2').first().click()
    }
    Login() {
        cy.get("#email").type("TestAdd" + LumaHome.dateString + "@test.com")
        cy.get("#pass").type("test@v21")
        cy.get('#send2').first().click()
        return new LumaLandingPage()
    }
    VerifyInvalidCredentials() {
        cy.get(".message-error div").contains("The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.")
    }
    VerifyRedirectionToMyAccount(){
        cy.get(".base").contains("Home Page")
    }
    

}
export default LumaHome