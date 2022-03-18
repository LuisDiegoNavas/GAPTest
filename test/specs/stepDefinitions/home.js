import { assert } from 'chai';
import { Given, When, Then } from '@cucumber/cucumber';
import { homePage } from '../pages/HomePage';

Then('I validate icon is present home page', () => {
    assert.equal(homePage.iconLogo.waitForExist())
})

Then('I validate user name is {string}', (text) => {
    assert.isTrue(homePage.labelUserName.getText().includes(text))
})

Then('I validate welcome meessage', () => {
    assert.equal(homePage.welcomeMessage.getText(), 'Signed in successfully.')
})

When('I click create new employee', () => {
    homePage.linkCreateAccount.click()
})

Then('I validate the user is created with {string}, {string}, {string}, {string}, {string}, {string}, {string} is {string}', function (userName, userLastName, userID, leaderName, year, month, day, status) {
    homePage.validateUserInTable(userName, userLastName, userID, leaderName, year, month, day, status)
})

When('I delete an employee by ID {string}',function (userID) {
    homePage.deleteEmployee(userID)
})