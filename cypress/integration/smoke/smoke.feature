Feature: Verify basic elements on browserstack

    Background:
        Given I go to Browserstack main page

    Scenario: User can update company data with correct info
        Then Browserstack logo is visible
        And Header is present
        And Product menu are present
        And Menu Links are  present