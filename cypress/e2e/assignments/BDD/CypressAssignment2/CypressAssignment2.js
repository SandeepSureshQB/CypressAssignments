import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import JupiterHomePage from "../../../../support/pageObjects/Assignment2/JupiterHomePage";
import JupiterShopPage from "../../../../support/pageObjects/Assignment2/JupiterShopPage";
import JupiterCartPage from "../../../../support/pageObjects/Assignment2/JupiterCartPage";
import JupiterCheckoutPage from "../../../../support/pageObjects/Assignment2/JupiterCheckoutPage";
let jupiterHomePage= new JupiterHomePage()
let jupiterShopPage;
let jupiterCartPage = new JupiterCartPage
let jupiterCheckoutPage
let urlArrays;

Given('I am in Jupiter Toys page', () => {
    jupiterHomePage.goto(Cypress.env("a2"))
})
When('I click on the home header links', () => {
    urlArrays = jupiterHomePage.VerifyHeaders()
})
Then('The user must be redirected to the corresponding pages', () => {
    jupiterHomePage.VerifyUrls(urlArrays)
})
When('I click on the start shopping button', () => {
    jupiterShopPage = jupiterHomePage.ClickOnShoppingButton()
})
When('I click on buy button for multiple products', () => {
    jupiterShopPage.AddMultipleToysToCart()
})
Then('The cart count must be updated', () => {
    jupiterCartPage = jupiterShopPage.VerifyCartCount()
})
Then('The selected items must be present in the cart', () => {
    jupiterCartPage.VerifyItemsInCart("Teddy Bear","Funny Cow")
})
When('The user click on the remove button', () => {
    jupiterCartPage.VerifyRemoveFromCart("Teddy Bear")
})
When('The user click on ok button from the remove pop up', () => {
    jupiterCartPage.ClickOkFromRemovePopup("Teddy Bear")
})
Then('The item must be removed', () => {
    jupiterCartPage.VerifyThatItemIsRemoved("Teddy Bear")
})
Then('the count must be reduced', () => {
    jupiterCartPage.VerifyThatCountIsReduced()
})

When('The user click on the empty cart button', () => {
    
    jupiterCartPage.VerifyEmptyCart()
})
When('The user click on ok button from the Empty cart pop up', () => {
    jupiterCartPage.ClickOkFromEmptyPopup()
})
Then('The empty cart message must be displayed', () => {
    jupiterCartPage.VerifyEmptyCartMessage()
})
When('The user click on checkout button from the cart page', () => {
    jupiterShopPage.VerifyCartCount()
    jupiterCheckoutPage = jupiterCartPage.ClickCheckoutButton()
})
When('The user enters the delivery and payment details and submit', () => {
    jupiterCheckoutPage.SubmitDeliveryDetails()
})
Then('A Pop up must be displayed showing that the order is getting placed', () => {
    jupiterCheckoutPage.VerifyProcessingPopup()
})
Then('A Success message must be displayed', () => {
    jupiterCheckoutPage.VerifySuccessMessage()
})
