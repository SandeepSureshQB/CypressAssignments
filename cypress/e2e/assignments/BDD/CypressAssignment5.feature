Feature: Assignment 5 for Cypress
    Background: Login
        Given I am in Saucedemo page
        When I try to login with Credentials
            | Username    | Password     |
            | visual_user | secret_sauce |
    Scenario:Login using Invalid Credentials
        Then Logout
        When I try to login with Credentials
            | Username    | Password |
            | visual_user | testPass |
        Then I should get an error message

    Scenario:Login using Valid Credentials
        Then I should be navigated to the inventory page
        And Logout

    Scenario:Verify header and footer after login
        Then Verify the header texts in the inventory page
        And Verify the footer texts in the inventory page
        And Logout

    Scenario:Verify sorting
        When I sort by Name A to Z
        Then Verify that the tiles are sorted by A to Z
        When I sort by Name Z to A
        Then Verify that the tiles are sorted by Z to A
        When I sort by price Low to high
        Then Verify that the tiles are sorted by price Low to high
        When I sort by price high to low
        Then Verify that the tiles are sorted by price high to low
        And Logout

    Scenario:Verify add to cart
        When I click on add to cart buttons
        Then The remove button must be displayed and the count must be updated
        When I click on remove button
        Then The add to cart button must be displayed and the count must be reduced


    Scenario: Verify Remove cart
        When I go to the cart page
        And I click on the remove button
        Then The item must be removed and the count must be reduced

    Scenario: Purchase path
        When I go to the cart page
        And I click on the checkout button
        Then I should be redirected to the checkout page
        When I enter the details and click continue
        Then I should be redirected to the checkout overview page
        When I click on the finish button
        Then A success message must be displayed


