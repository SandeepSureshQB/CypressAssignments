import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import ParaBankLogin from "../../../../support/pageObjects/Assignment4/ParaBankLogin";
import ParaAccountServices from "../../../../support/pageObjects/Assignment4/ParaAccountServices";
let  paraBankLogin = new ParaBankLogin()
let paraRegistration
let paraAccountServices = new ParaAccountServices()
Given('I am in para bank home page', () => {
   
    paraBankLogin.goto(Cypress.env("a4"))
})
When('I try to login without credentials', () => {
    paraBankLogin.loginWithoutCredentials()
})
Then('I should get an error message', () => {
    paraBankLogin.validateErrorMessage()
})
When('I click on register link', () => {
    paraRegistration = paraBankLogin.clickonRegisterLink()
})
When('I enter the user details and create a new user', () => {
    paraRegistration.enterUserDetails()
})
Then('I should see a welcome message', () => {
    paraRegistration.verifyWelcomeMessage()
})
When('Create a new account using the open account button', () => {

    paraAccountServices.createNewSavingsAccount()
})
Then('I should get a success message', () => {
    paraAccountServices.verifyAccountCreationMessage()
})
When('I click on the Transfer funds link', () => {
    paraAccountServices.clickOnFundTransfer()
})
When('I select multiple accounts and enter an amount', () => {
    paraAccountServices.selectAccountsAndAmount("10")
})
When('I click on the transfer button', () => {
    paraAccountServices.clickOnTransfer()
})
Then('I should get a success message and the amount must be displayed', () => {
    paraAccountServices.verifyTransferSuccessMessage("10")
})
When('I click on the Bill pay link', () => {
    paraAccountServices.clickOnBillPayLink()
})
When('I click on the send payment button without entering any details', () => {
    paraAccountServices.clickOnSendPayment()
})
Then('I should get validation messages', () => {
    paraAccountServices.verifyValidationMessages()
})
When('I enter the details and i click on the send payment button', () => {
    paraAccountServices.enterAccountDetails()
})
Then('I should get a payment success message', () => {
    paraAccountServices.verifyBillPaymentSuccess()
})
When('I click on the update contact info link', () => {
    paraAccountServices.clickOnUpdateContactLink()
})
When('I enter the contact details and click update profile', () => {
    paraAccountServices.enterContactDetails()
})
Then('I should get a updation success message', () => {
    paraAccountServices.verifyContactUpdateSuccessMessage()
})
Then('Logout', () => {
    paraAccountServices.logout()
})