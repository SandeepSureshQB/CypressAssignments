import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import SauceDemoLogin from "../../../../support/pageObjects/Assignment5/SauceDemoLogin";
let sauceDemoLogin = new SauceDemoLogin()
let sauceDemoInventory
let sauceDemoCart
let sauceDemoCheckout
Given('I am in Saucedemo page', () => {
    sauceDemoLogin.goto(Cypress.env("a5"))
})
When('I try to login with Credentials', (dataTable) => {
    sauceDemoInventory = sauceDemoLogin.login(dataTable.rawTable[1][0], dataTable.rawTable[1][1])
})
Then('I should get an error message', () => {
    sauceDemoLogin.verifyInvalidCredentials()
})
Then('I should be navigated to the inventory page', () => {
    sauceDemoLogin.verifyRedirectionToInventoryPage()
})
Then('Logout', () => {

    sauceDemoInventory.logout()
})
Then('Verify the header texts in the inventory page', () => {

    sauceDemoInventory.verifyHeaderTexts()
})
Then('Verify the footer texts in the inventory page', () => {

    sauceDemoInventory.verifyFooterTexts()
})
When('I sort by Name A to Z', () => {
    sauceDemoInventory.sortInventoryPage("Name (A to Z)")
})
Then('Verify that the tiles are sorted by A to Z', () => {
    sauceDemoInventory.verifySortingbyAtoZ("Name (A to Z)")
})
When('I sort by Name Z to A', () => {
    sauceDemoInventory.sortInventoryPage("Name (Z to A)")
})
Then('Verify that the tiles are sorted by Z to A', () => {
    sauceDemoInventory.verifySortingbyAtoZ("Name (Z to A)")
})
When('I sort by price Low to high', () => {
    sauceDemoInventory.sortInventoryPage("Price (low to high)")
})
Then('Verify that the tiles are sorted by price Low to high', () => {
    sauceDemoInventory.verifySortingbyAtoZ("Price (low to high)")
})
When('I sort by price high to low', () => {
    sauceDemoInventory.sortInventoryPage("Price (high to low)")
})
Then('Verify that the tiles are sorted by price high to low', () => {
    sauceDemoInventory.verifySortingbyAtoZ("Price (high to low)")
})
When('I click on add to cart buttons', () => {
    sauceDemoInventory.clickOnAddToCart()
})
Then('The remove button must be displayed and the count must be updated', () => {
    sauceDemoInventory.verifyRemoveButton()
    sauceDemoInventory.verifyCartCount("4")
})
When('I click on remove button', () => {
    sauceDemoInventory.clickRemoveButton()
})
Then('The add to cart button must be displayed and the count must be reduced', () => {
    sauceDemoInventory.verifyAddTocartButtonIsDisplayed()
    sauceDemoInventory.verifyCartCount("3")
})
When('I go to the cart page', () => {
    sauceDemoCart = sauceDemoInventory.goToCartPage()
})
When('I click on the remove button', () => {
    sauceDemoCart.clickonRemoveButton()
})
Then('The item must be removed and the count must be reduced', () => {
    sauceDemoCart.verifyThatTheItemIsNoLongerDisplayed("Sauce Labs Bolt T-Shirt")
    sauceDemoInventory.verifyCartCount("2")
})
When('I click on the checkout button', () => {
    sauceDemoCheckout = sauceDemoCart.clickOnCheckout()
})
Then('I should be redirected to the checkout page', () => {
    sauceDemoCart.verifyRedirectionToCheckoutPage()
})
When('I enter the details and click continue', () => {
    sauceDemoCheckout.enterCheckoutDetails("Sandeep","Suresh","123123")
})
Then('I should be redirected to the checkout overview page', () => {
    sauceDemoCheckout.verifyRedirectionToCheckoutOverViewPage()
    sauceDemoCheckout.verifyOverviewPage("Sauce Labs Backpack","Sauce Labs Bike Light")
})
When('I click on the finish button', () => {
    sauceDemoCheckout.clickOnFinishButton()
})
Then('A success message must be displayed', () => {
    sauceDemoCheckout.verifySuccessMessage("Thank you for your order!","Your order has been dispatched, and will arrive just as fast as the pony can get there!")
})