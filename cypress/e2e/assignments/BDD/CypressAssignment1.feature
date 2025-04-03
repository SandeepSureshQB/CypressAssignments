Feature: Assignment 1 for Cypress

    Scenario:Verify Header links
        Given I am in blaze demo page
        Then The headers should match the proper links

    Scenario:Verify departure and Destination
        Given I am in blaze demo page
        When I select the city
        Then The city name displayed purchase page must match the selected ones

    Scenario: Verify that the user is able to purchase the flight

        When The user fills all the field and click on the submit button
        Then The confirmation page must be displayed