import JupiterCartPage from "./JupiterCartPage"

class JupiterShopPage {

    AddMultipleToysToCart() {
        cy.get(".product").filter(':contains("Teddy Bear")').then($element => {
            cy.wrap($element).contains('a', 'Buy').click()
        })
        cy.get(".product").filter(':contains("Funny Cow")').then($element => {
            cy.wrap($element).contains('a', 'Buy').click()
        })
    }
    VerifyCartCount() {
        cy.get('#nav-cart > a').contains('2')
        cy.get('#nav-cart > a').click()
        return new JupiterCartPage()
    }

}
export default JupiterShopPage;