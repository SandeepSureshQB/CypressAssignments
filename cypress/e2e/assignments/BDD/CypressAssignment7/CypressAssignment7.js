import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import LumaHome from "../../../../support/pageObjects/Assignment7/LumaHome";
import LumaLandingPage from "../../../../support/pageObjects/Assignment7/LumaLandingPage";
import LumaSearchResult from "../../../../support/pageObjects/Assignment7/LumaSearchResult";
let lumaHome
let lumaLandingPage= new LumaLandingPage()
let lumaSearchResult =new LumaSearchResult()
let lumaProductPage
let lumaShippingPage
let lumaOrderDetails
let urlArrays;
Given('I am in Luma page', () => {
    lumaHome = new LumaHome()
    lumaHome.goto(Cypress.env("a7"))
})
Then('The home page must be loaded', () => {
    lumaHome.VerifyHomePageRedirection()
})
When('I click on the Create Account links', () => {
    lumaHome.ClickonCreateAccountLink()
})
When('I enter the user details and click create', () => {
    lumaHome.EnterUserDetails()
})
Then('A success message must be displayed', () => {
    lumaHome.VerifySuccessMessageAfterRegistering()
})
Then('Logout', () => {
    lumaHome.Logout()
})
When('I click on the create account links without entering any data', () => {
    lumaHome.ClickOnSubmit()
})
Then('The validation messages must be displayed', () => {
    lumaHome.VerifyValidationMessages()
})
When('I enter the same user details as before and click create', () => {
    lumaHome.EnterSameUserDetails()
})
Then('I should get a warning message', () => {
    lumaHome.VerifySameEmailValidationMessage()
})
When('I Login with invalid credentials', () => {
    lumaHome.ClickLoginButton()
    lumaHome.LoginInvalid()
})
Then('I should get a validation message', () => {
    lumaHome.VerifyInvalidCredentials()
})
When('I Login with valid credentials', () => {
    lumaHome.ClickLoginButton()
    lumaLandingPage=lumaHome.Login()
})
Then('I should be redirected to My account page', () => {
    lumaHome.VerifyRedirectionToMyAccount()
})
When('I click on the links from top menu', () => {
    urlArrays=lumaLandingPage.ValidateRedirections()
})
Then('The user should be redirected to the correct page', () => {
    lumaLandingPage.VerifyUrls(urlArrays)
})
When('I search with a valid keyword', () => {
    lumaSearchResult= lumaLandingPage.SearchForProducts("tees")
})
Then('The corresponding search results must be displayed', () => {
    lumaSearchResult.ValidateSearchResults()
})
When('I sort by product name', () => {
    lumaSearchResult.SortByProductName()
})
Then('The search results must be sorted by Product name', () => {
    lumaSearchResult.VerifySorting("name")
})
When('I sort by price', () => {
    lumaSearchResult.SortByPrice()
})
Then('The search results must be sorted by Price', () => {
    lumaSearchResult.VerifySorting("price")
})
When('I sort by relevance', () => {
    lumaSearchResult.SortByRelevance()
})
Then('The search results must be sorted by Relevance', () => {
    lumaSearchResult.VerifySorting("relevance")
})
When('I select size and colour', () => {
    lumaSearchResult.AddSizeAndColorFromSearchResults()
})
When('I click on add to cart button', () => {
    lumaSearchResult.ClickonAddTocartFromsearch()
})
Then('The cart count must be updated from search result', () => {
    lumaSearchResult.VerifyCartCount()
})
Then('Clear cart', () => {
    lumaSearchResult.VerifyClearCart()
})
When('I click on the add to compare button', () => {
    lumaSearchResult.VerifyAddToCompareFromSearchResults()
})
Then('A success message must be displayed and the item must be displayed on the left menu', () => {
    lumaSearchResult.VerifyCompareList()
})
Then('Clear the list from search results', () => {
    lumaSearchResult.VerifyClearCompareList()
})
When('I navigate to a product page', () => {
    lumaProductPage= lumaSearchResult.NavigateToProductPage()
})
When('I click on add to cart button from product page', () => {
    lumaProductPage.verifyAddToCart()
})
Then('The cart count must be updated', () => {
    lumaProductPage.VerifyCartCount()
    lumaProductPage.VerifyClearCart()
})
When('I click on add to compare button from product page', () => {
    lumaProductPage.VerifyAddToCompare()
})
Then('A success message must be displayed for comparing', () => {
    lumaProductPage.VerifyCompareMessage()
})
When('I click on add to wishlist button from product page', () => {
    lumaProductPage.VerifyAddToWishList()
})
Then('A success message must be displayed for Wish', () => {
    lumaProductPage.VerifyWishlistMessage()
})
When('I search with a specific keyword', () => {
    lumaSearchResult= lumaLandingPage.SearchForProducts("")
    lumaProductPage= lumaSearchResult.SelectProduct()
})
When('I select specific size and colour', () => {
    lumaProductPage.SelectSpecificSizeAndColor()
})
When('I click on add to cart button without size', () => {
    lumaProductPage.verifyAddToCart(false)
})
Then('The cart count must be updated for specific', () => {
    lumaProductPage.VerifyCartCountSpecific()
})
When('I click on the proceed to checkout button', () => {
    lumaShippingPage=  lumaProductPage.ProceedToCheckout()
})
When('I enter the shipping details', () => {
    lumaShippingPage.EnterShippingAddress()
})
When('I click on place order from review page', () => {
    lumaShippingPage.ClickOnPlaceOrder()
})
Then('I should get a success message for purchase', () => {
    lumaShippingPage.VerifySuccessMessage()
})
When('I navigate to my orders page', () => {
    lumaOrderDetails= lumaShippingPage.NavigateToOrderPage()
})
Then('I should be able to verify the order details', () => {
    lumaOrderDetails.VerifyOrderDetails()
})