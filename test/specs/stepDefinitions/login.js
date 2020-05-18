import { Given, When } from 'cucumber'
import { loginPage } from '../pages/LoginPage'

Given('The login page', () => {
    loginPage.open()
})

When('I login as Admin user', () => {
    loginPage.login(process.env.AdminUser, process.env.AdminUserPassword)
})
