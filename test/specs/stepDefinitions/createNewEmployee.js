import { When } from '@cucumber/cucumber'
import { createNewEmployeePage } from '../pages/CreateNewEmployeePage'

When('I create new employee with {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}', function (userName, userLastName, userEmail, userID, leaderName, year, month, day) {
    createNewEmployeePage.newEmployee(userName, userLastName, userEmail, userID, leaderName, year, month, day)
})