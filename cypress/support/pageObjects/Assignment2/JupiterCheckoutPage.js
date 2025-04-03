class JupiterCheckoutPage {


    SubmitDeliveryDetails() {
        let deliveryData
        cy.fixture('DeliveryAddress').then((data) => {
            // "this" is still the test context object
            cy.wrap(data).as('deliveryData')
            cy.get('#forename').type(data.Forename)
            cy.get('#surname').type(data.Surname)
            cy.get('#email').type(data.Email)
            cy.get('#telephone').type(data.Telephone)
            cy.get('#address').type(data.Address)
            cy.get('#cardType').select(data.CardType).should('have.value', data.CardType)
            cy.get('#card').type(data.CardNumber)
            cy.get('#checkout-submit-btn').click()
        })

    }
    VerifyProcessingPopup() {
        cy.get("h1").contains('Processing Order')
    }
    VerifySuccessMessage() {
        cy.get('.alert').should('be.visible');
        cy.get('@deliveryData').then((deliveryData) => {
            cy.get('.alert').contains("Thanks " + deliveryData.Forename, { timeout: 20000 })
            cy.get('.alert').contains("your order has been accepted. Your order nuumber is")
        })
    }

}
export default JupiterCheckoutPage;