Feature: Create users

    Background:
        Given The login page

    @Test
    Scenario Outline: TC01 - Validate Create a new user and deleted it as Admin
        When I login as Admin user
        Then I validate welcome meessage
        And  I validate welcome meessage
        And  I validate user name is "gap"
        When I click create new employee
        And  I create new employee with "<Name>", "<LastName>", "<Email>", "<ID>", "<LeaderName>", "<Year>", "<Month>", "<Day>"
        Then I validate the user is created with "<Name>", "<LastName>", "<ID>", "<LeaderName>", "<Year>", "<Month>", "<Day>" is "true"
        When I delete an employee by ID "<ID>"
        Then I validate the user is created with "<Name>", "<LastName>", "<ID>", "<LeaderName>", "<Year>", "<Month>", "<Day>" is "false"

        Examples:
        | Name  | LastName | Email           | ID        | LeaderName | Year | Month   | Day |
        | James | Smith    | JSmith@mail.com | 123456700 | Diego      | 2015 | January | 21  |