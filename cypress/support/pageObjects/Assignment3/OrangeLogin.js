import DashboardPage from "./DashboardPage"
import LeavePage from "./LeavePage"

class OrangeLogin {
    goto(url) {
        cy.visit(url)
    }
    Login(username, password) {
        cy.get("input[name='username']").type(username)
        cy.get("input[name='password']").type(password)
        cy.get('.oxd-button').click()
        return new DashboardPage()
    }
    verifyInvalidCredentials() {
        cy.get(".oxd-text").contains('Invalid credentials')
    }
    VerifyRedirectionToDashboardPage() {
        cy.url().should('eq', Cypress.env("a3")+'web/index.php/dashboard/index')
    }
    NavigateToLeavePage() {
        cy.get(':nth-child(3) > .oxd-main-menu-item > .oxd-text').click()
        return new LeavePage()
    }

}
export default OrangeLogin;