Feature: Assignment 4 for Cypress
    Scenario:Login without Credentials
        Given I am in para bank home page
        When I try to login without credentials
        Then I should get an error message

    Scenario:Create new user
        Given I am in para bank home page
        When I click on register link
        And I enter the user details and create a new user
        Then I should see a welcome message

    Scenario:Create new Saving Account
        When Create a new account using the open account button
        Then I should get a success message

    Scenario:Verify fund transfer
        When I click on the Transfer funds link
        And I select multiple accounts and enter an amount
        And I click on the transfer button
        Then I should get a success message and the amount must be displayed

    Scenario:Verify Bill payment feature
        When I click on the Bill pay link
        And I click on the send payment button without entering any details
        Then I should get validation messages
        When I enter the details and i click on the send payment button
        Then I should get a payment success message

    Scenario:Verify update contact info
        When I click on the update contact info link
        And I enter the contact details and click update profile
        Then I should get a updation success message
        And Logout