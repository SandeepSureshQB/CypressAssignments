Feature: Assignment 2 for Cypress
    Scenario:Verify Headers
        Given I am in Jupiter Toys page
        When I click on the home header links
        Then The user must be redirected to the corresponding pages

    Scenario:Verify buying toys and cart
        Given I am in Jupiter Toys page
        When I click on the start shopping button
        And I click on buy button for multiple products
        Then The cart count must be updated
        And The selected items must be present in the cart

    Scenario: Verify remove from cart

        When The user click on the remove button
        And The user click on ok button from the remove pop up
        Then The item must be removed
        And the count must be reduced

    Scenario: Verify empty cart button

        When The user click on the empty cart button
        And The user click on ok button from the Empty cart pop up
        Then The empty cart message must be displayed

    Scenario: Verify Checkout
        Given I am in Jupiter Toys page
        When I click on the start shopping button
        And I click on buy button for multiple products
        And The user click on checkout button from the cart page
        And The user enters the delivery and payment details and submit
        Then A Pop up must be displayed showing that the order is getting placed
        And A Success message must be displayed
