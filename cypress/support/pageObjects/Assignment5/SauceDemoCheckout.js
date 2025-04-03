class SauceDemoCheckout {
    enterCheckoutDetails(firstName,lastName,postalCode) {
        cy.get('#first-name').type(firstName)
        cy.get('#last-name').type(lastName)
        cy.get('#postal-code').type(postalCode)
        cy.get('#continue').click()
    }
    verifyRedirectionToCheckoutOverViewPage() {
        cy.url().should('include', 'checkout-step-two.html')
    }

    verifyOverviewPage(item1,item2) {
        cy.get('div[data-test="inventory-item-name"]').eq(0).contains(item1)
        cy.get('div[data-test="inventory-item-name"]').eq(1).contains(item2)
    }
    clickOnFinishButton() {
        cy.get('#finish').click()
    }
    verifySuccessMessage(message1,message2) {
        cy.get('h2[data-test="complete-header"]').contains(message1)
        cy.get('div[data-test="complete-text"]').contains(message2)
    }

}
export default SauceDemoCheckout