Feature: Verify basic elements on browserstack

    Background:
        Given I go to Browserstack main page

    Scenario: User can see all basic elements on the Main page of Browserstack
        Then Browserstack logo is visible
        And Header with text "Test" present
        And Product menu are present
        And Menu Links are  present
