import JupiterCheckoutPage from "./JupiterCheckoutPage"

class JupiterCartPage {
    getCart() {
        return cy.get(".cart-item");
    }
    getModalBody() {
        return cy.get(".modal-body.message");
    }
    VerifyItemsInCart(item1, item2) {
        this.getCart().filter(":contains('" + item1 + "')").then($element => {
            cy.wrap($element).contains('td', item1)
        })
        this.getCart().filter(":contains('" + item2 + "')").then($element => {
            cy.wrap($element).contains('td', item2)
        })
    }
    VerifyRemoveFromCart(item) {
        this.getCart().filter(":contains('" + item + "')").then($element => {
            cy.wrap($element).find('.remove-item').click()
        })
    }

    ClickOkFromRemovePopup(item) {
        cy.get("h1").contains('Remove Item')
        this.getModalBody().contains('Are you sure that you want to remove')
        this.getModalBody().contains(item)
        this.getModalBody().contains(' from your cart?')
        cy.get('.modal-footer > .btn-success').click()
    }
    VerifyThatItemIsRemoved(item) {
        this.getCart().should('not.contain', item)

    }
    VerifyThatCountIsReduced() {
        cy.get('#nav-cart > a').contains('1')
        cy.get('.cart-msg > .cart-count').contains('1')
    }
    VerifyEmptyCart() {
        cy.get('ng-confirm[title="Empty Cart"] .btn-danger').click()
    }

    ClickOkFromEmptyPopup() {
        cy.get("h1").contains('Empty Cart')
        this.getModalBody().contains('Are you sure that you want to empty your cart?')
        cy.get('.modal-footer > .btn-success').click()
    }

    VerifyEmptyCartMessage() {
        cy.get(".alert").contains('Your cart is empty')
    }
    ClickCheckoutButton() {
        cy.get('.btn-checkout').click()
        return new JupiterCheckoutPage()
    }
}

export default JupiterCartPage;