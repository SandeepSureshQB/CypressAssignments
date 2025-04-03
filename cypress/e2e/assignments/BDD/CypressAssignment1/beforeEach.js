
import FlightConfirmation from "../../../../support/pageObjects/Assignment1/FlightConfirmation";
import FlightPurchase from "../../../../support/pageObjects/Assignment1/FlightPurchase";
import FlightReserve from "../../../../support/pageObjects/Assignment1/FlightReserve";
import TravelTheWorld from "../../../../support/pageObjects/Assignment1/TravelTheWorld";
import JupiterHomePage from "../../../../support/pageObjects/Assignment2/JupiterHomePage";
beforeEach(function () {
    cy.fixture('example').then((data) => {
        // "this" is still the test context object
        this.data = data

    })
    this.travelTheWorld = new TravelTheWorld()
    this.flightReserve = new FlightReserve()
    this.flightPurchase = new FlightPurchase()
    this.flightConfirmation = new FlightConfirmation()
    this.jupiterHomePage = new JupiterHomePage()

})