class FlightPurchase {

    VerifyCityDetails(fromCity, toCity) {
        cy.get("input[value='Find Flights']").click()
        cy.get("h3").contains(fromCity + " to " + toCity)
        cy.get('tr td input').eq(0).click()
    }
    VerifyAndFillFields() {
        const neatCSV = require('neat-csv')
        let test = ["Name", "Address", "City", "State", "Zip Code", "Card Type", "Credit Card Number", "Month", "Year", "Name on Card"]
        let stringArray2 = new Array(10)

        cy.get(".control-label").each(($e1, index, $list) => {
            cy.wrap($e1.text()).should('eq', test[index])
        })
        cy.readFile(Cypress.config("fileServerFolder") + "/cypress/downloads/TestData.csv").then(async (text) => {
            const csv = await neatCSV(text)
            cy.get('#inputName').type(csv[0]["Name"])
            cy.get('#address').type(csv[0]["Address"])
            cy.get('#city').type(csv[0]["City"])
            cy.get('#state').type(csv[0]["State"])
            cy.get('#zipCode').type(csv[0]["Zip Code"])
            cy.get('select[name="cardType"]').select(csv[0]["Card Type"])
            cy.get('#creditCardNumber').type(csv[0]["Credit Card Number"])
            cy.get('#creditCardMonth').clear().type(csv[0]["Month"])
            cy.get('#creditCardYear').clear().type(csv[0]["Year"])
            cy.get('#nameOnCard').type(csv[0]["Name on Card"])
        })

    }
}
export default FlightPurchase;