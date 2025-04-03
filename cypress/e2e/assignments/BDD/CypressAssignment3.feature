Feature: Assignment 3 for Cypress
    Scenario:Login using Invalid Credentials
        Given I am in Orange HRM page
        When I try to login with Credentials
            | Username | Password |
            | testuser | testPass |
        Then I should get an error message

    Scenario:Login using Valid Credentials
        Given I am in Orange HRM page
        When I try to login with Credentials
            | Username | Password |
            | Admin    | admin123 |
        Then I should be navigated to the dashboard page
        And Logout

    Scenario:Verify the Left Menu Links
        Given I am in Orange HRM page
        When I try to login with Credentials
            | Username | Password |
            | Admin    | admin123 |
        Then The left menu must contain the items stored in CSV
        And Logout

    Scenario:Verify Employees on leave today
        Given I am in Orange HRM page
        When I try to login with Credentials
            | Username | Password |
            | Admin    | admin123 |
        And I navigate to the leave page
        And I filter employeed who are on leave today
        Then The employees on leave must be displayed
        And Logout
    Scenario:Verify Dashboard page tiles
        Given I am in Orange HRM page
        When I try to login with Credentials
            | Username | Password |
            | Admin    | admin123 |
        Then The dashboard tiles names must be same as that in json
        And The tiles must have data
        And Logout
