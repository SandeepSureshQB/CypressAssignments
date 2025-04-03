import SauceDemoInventory from "./SauceDemoInventory"

class SauceDemoLogin {
    goto(url) {
        cy.on('uncaught:exception', (err, runnable) => { return false })
        cy.visit(url)
    }
    login(username, password) {
        cy.get("#user-name").type(username)
        cy.get("#password").type(password)
        cy.get('#login-button').click()
        return new SauceDemoInventory()
    }
    verifyInvalidCredentials() {
        cy.get("h3").contains('Epic sadface: Username and password do not match any user in this service')
    }
    verifyRedirectionToInventoryPage() {
        cy.url().should('include', 'inventory.html')
    }
}
export default SauceDemoLogin;