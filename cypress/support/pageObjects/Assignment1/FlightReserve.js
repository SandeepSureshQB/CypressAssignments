class FlightReserve {

    SelectCity(fromCity, toCity) {
        cy.get("select[name='fromPort']").select(fromCity).should('have.value', fromCity)
        cy.get("select[name='toPort']").should('be.visible', { timeout: 10000 }).select(toCity).should('have.value', toCity)
    }
}
export default FlightReserve;