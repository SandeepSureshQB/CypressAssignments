Feature: Assignment 7 for Cypress
    Scenario:Verify that home page is displayed
        Given I am in Luma page
        Then The home page must be loaded
    Scenario:Verify create a new account
        Given I am in Luma page
        When I click on the Create Account links
        And I enter the user details and click create
        Then A success message must be displayed
        And Logout
    Scenario:Verify create a new account Validation messages
        Given I am in Luma page
        When I click on the Create Account links
        And I click on the create account links without entering any data
        Then The validation messages must be displayed
    Scenario:Verify the same email validation
        Given I am in Luma page
        When I click on the Create Account links
        And I enter the same user details as before and click create
        Then I should get a warning message
    Scenario:Verify Invalid login
        Given I am in Luma page
        When I Login with invalid credentials
        Then I should get a validation message
    Scenario:Verify Valid login
        Given I am in Luma page
        When I Login with valid credentials
        Then I should be redirected to My account page
    Scenario:Verify Top menu navigations
        When I click on the links from top menu
        Then The user should be redirected to the correct page
    Scenario:Verify search
        When I search with a valid keyword
        Then The corresponding search results must be displayed
    Scenario:Verify sort by Product name
        When I sort by product name
        Then The search results must be sorted by Product name
    Scenario:Verify sort by Price
        When I sort by price
        Then The search results must be sorted by Price
    Scenario:Verify sort by Relevance
        When I sort by relevance
        Then The search results must be sorted by Relevance
    Scenario:Verify add to cart from search results
        When I select size and colour
        And I click on add to cart button
        Then The cart count must be updated from search result
        And Clear cart
    Scenario:Verify add to compare from search results
        When I click on the add to compare button
        Then A success message must be displayed and the item must be displayed on the left menu
        And Clear the list from search results
    Scenario:Verify add to cart from product page
        When I navigate to a product page
        And I click on add to cart button from product page
        Then The cart count must be updated
    Scenario:Verify add to compare from product page
        When I click on add to compare button from product page
        Then A success message must be displayed for comparing
    Scenario:Verify add to Wishlist from product page
        When I click on add to wishlist button from product page
        Then A success message must be displayed for Wish
    Scenario:Verify search with a specific data
        When I search with a specific keyword
        And I select specific size and colour
        And I click on add to cart button without size
        Then The cart count must be updated for specific
    Scenario:Verify purchase path
        When I click on the proceed to checkout button
        And I enter the shipping details
        And I click on place order from review page
        Then I should get a success message for purchase
    Scenario:Verify order details
        When I navigate to my orders page
        Then I should be able to verify the order details







