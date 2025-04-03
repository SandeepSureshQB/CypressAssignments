

import TravelTheWorld from '../../support/pageObjects/Assignment1/TravelTheWorld'
import FlightReserve from '../../support/pageObjects/Assignment1/FlightReserve'
import FlightPurchase from '../../support/pageObjects/Assignment1/FlightPurchase'
import FlightConfirmation from '../../support/pageObjects/Assignment1/FlightConfirmation'
describe('Assignment1Test', function () {

    beforeEach(function () {

        // "this" points at the test context object
        cy.fixture('example').then((data) => {
            // "this" is still the test context object
            this.data = data
            this.travelTheWorld = new TravelTheWorld()
            this.flightReserve = new FlightReserve()
            this.flightPurchase = new FlightPurchase()
            this.flightConfirmation = new FlightConfirmation()
        })
    })
    it('Header Links', function () {


        this.travelTheWorld.goto("https://blazedemo.com/")
        this.travelTheWorld.VerifyHeaderLinks()
    })

    it('Verify departure and Destination', function () {
        this.travelTheWorld.goto("https://blazedemo.com/")
        this.flightReserve.SelectCity(this.data.cityP, this.data.cityN)
    })

    it('Verify choose this flight', function () {
        this.flightPurchase.VerifyCityDetails(this.data.cityP, this.data.cityN)
    })

    it('Verify fields', function () {
        this.flightPurchase.VerifyAndFillFields()
        this.flightConfirmation.VerifyConfirmationPage()

    })







})





