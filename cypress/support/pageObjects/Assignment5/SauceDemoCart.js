import SauceDemoCheckout from "./SauceDemoCheckout"

class SauceDemoCart {
    clickonRemoveButton() {
        cy.get('#remove-sauce-labs-bolt-t-shirt').click()
    }
    verifyThatTheItemIsNoLongerDisplayed(item) {
        cy.get('div[data-test="cart-list"]').should('not.contain', item)
    }
    clickOnCheckout() {
        cy.get('#checkout').click()
        return new SauceDemoCheckout()
    }
    verifyRedirectionToCheckoutPage() {
        cy.url().should('include', 'checkout-step-one.html')
    }

}
export default SauceDemoCart