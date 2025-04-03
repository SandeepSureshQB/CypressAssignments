import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import GoogleFlightHome from "../../../../support/pageObjects/Assignment6/GoogleFlightHome";
let googleFlightHome
Given('I am in Google flights page', () => {
    googleFlightHome = new GoogleFlightHome()
    googleFlightHome.goto(Cypress.env("a6"))
})
When('I search for one way trips {string} {string}', (origin,destination) => {
    googleFlightHome.SelectOneWayTrips(origin,destination)
})
Then('Flight details must be displayed', () => {
    googleFlightHome.VerifyFlightsDisplayed()
})
When('I search for round trips', () => {
    googleFlightHome.SelectRoundTrips() 
})
When('I search for flights from Germany to Dubai {string} {string}', (origin,destination) => {
    googleFlightHome.SearchFlights(origin,destination)
})
When('I add the departure dates', () => {
    googleFlightHome.SelectDate()
})
When('I search for one way trip', () => {
    googleFlightHome.SelectOneWay()
})
When('I add the travellers and class', () => {
    googleFlightHome.SelectPassengers(3,1,2)
    googleFlightHome.SearchTheFlights()
})
Then('I should print the cheapest flight amount', () => {
    googleFlightHome.PrintCheapestFlight()
})
When('I sort with the price', () => {
    googleFlightHome.SortByPrice()
})
Then('The list should show flights with price in ascending order', () => {
    googleFlightHome.VerifyPriceSorting()
})
When('I add the departure dates round', () => {
    googleFlightHome.SelectDateRound()
})