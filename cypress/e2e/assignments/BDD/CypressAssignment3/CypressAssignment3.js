import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import OrangeLogin from "../../../../support/pageObjects/Assignment3/OrangeLogin";

let orangeLogin = new OrangeLogin()
let dashboardPage
let leavePage
Given('I am in Orange HRM page', () => {
    orangeLogin.goto(Cypress.env("a3"))
})
When('I try to login with Credentials', (dataTable) => {
    dashboardPage = orangeLogin.Login(dataTable.rawTable[1][0], dataTable.rawTable[1][1])
})
Then('I should get an error message', () => {

    orangeLogin.verifyInvalidCredentials()
})
Then('I should be navigated to the dashboard page', () => {

    orangeLogin.VerifyRedirectionToDashboardPage()
})
Then('Logout', () => {

    dashboardPage.Logout()
})
Then('The left menu must contain the items stored in CSV', () => {

    dashboardPage.VerifyLinksInLeftMenu()
})
When('I navigate to the leave page', (dataTable) => {
    leavePage = orangeLogin.NavigateToLeavePage()
})
When('I filter employeed who are on leave today', (dataTable) => {
    leavePage.SelectFromAndToDate()
})
Then('The employees on leave must be displayed', () => {
    leavePage.ValidateEmployeesOnLeave()
})
Then('The dashboard tiles names must be same as that in json', () => {
    dashboardPage.VerifyDashboardTiles()
})
Then('The tiles must have data', () => {
    dashboardPage.VerifyDashboardTilesData()
})