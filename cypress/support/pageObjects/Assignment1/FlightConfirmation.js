class FlightConfirmation {
    VerifyConfirmationPage() {
        cy.get('.controls > .btn').click()
        cy.get('h1').contains("Thank you for your purchase today!")
    }
}
export default FlightConfirmation;