Feature: Assignment 6 for Cypress

    Background: Navigate to google flights
        Given I am in Google flights page

    Scenario:Verify the flights are displayed for one way and round right
        When I search for one way trips "<origin>" "<destination>"
        Then Flight details must be displayed
        When I search for round trips
        Then Flight details must be displayed
         Examples:
            |origin   |destination|
            |Germany  |Dubai      |
    Scenario:Verify one way trips from Germany to Dubai
        When I search for flights from Germany to Dubai "<origin>" "<destination>"
        And I search for one way trip
        And I add the departure dates
        And I add the travellers and class
        Then I should print the cheapest flight amount
        Examples:
            |origin   |destination|
            |Germany  |Dubai      |


    Scenario:Verify sorting in the flights listing page
        When I search for flights from Germany to Dubai "<origin>" "<destination>"
        And I search for one way trip
        And I add the departure dates
        And I add the travellers and class
        And I sort with the price
        Then The list should show flights with price in ascending order
         Examples:
            |origin   |destination|
            |Germany  |Dubai      |

    Scenario:Verify round trips from Germany to Dubai
        When I search for flights from Germany to Dubai "<origin>" "<destination>"
        And I add the departure dates round
        And I add the travellers and class
        Then I should print the cheapest flight amount
         Examples:
            | origin    | destination |
            | Germany   | Dubai      |