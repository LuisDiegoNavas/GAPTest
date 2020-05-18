import { assert } from 'chai';
import { Given, When, Then } from 'cucumber';
import { homePage } from '../pages/HomePage';

Then('I validate welcome icon is present', () => {
    assert.equal(
        homePage.iconLogo.waitForExist()
    )
})

Then('I validate user name is correct', () => {
    assert.equal(homePage.labelUserName.getText(),'username?')
})