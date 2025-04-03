import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import TravelTheWorld from "../../../../support/pageObjects/Assignment1/TravelTheWorld";
import FlightReserve from "../../../../support/pageObjects/Assignment1/FlightReserve";
import FlightPurchase from "../../../../support/pageObjects/Assignment1/FlightPurchase";
import FlightConfirmation from "../../../../support/pageObjects/Assignment1/FlightConfirmation";

Given('I am in blaze demo page', function () {
    
    this.travelTheWorld.goto(Cypress.env("a1"))
})
Then('The headers should match the proper links', function () {
    this.travelTheWorld.VerifyHeaderLinks()
})

When('I select the city', function () {
    this.flightReserve.SelectCity(this.data.cityP, this.data.cityN)
})
Then('The city name displayed purchase page must match the selected ones', function () {
    this.flightPurchase.VerifyCityDetails(this.data.cityP, this.data.cityN)
})

When('The user fills all the field and click on the submit button', function () {
    this.flightPurchase.VerifyAndFillFields()
})
Then('The confirmation page must be displayed', function () {
    
    this.flightConfirmation.VerifyConfirmationPage()

})