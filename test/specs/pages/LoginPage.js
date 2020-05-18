class LoginPage {

    get inputEmail() {
        return $('#user_email');
    }

    get inputPassword() {
        return $('#user_password');
    }

    get buttonSignIn() {
        return $('.submit');
    }

    open() {
        browser.url(process.env.BASE_URL);
    }

    login(user, password) {
        this.buttonSignIn.waitForExist()
        this.inputEmail.waitForEnabled()
        this.inputEmail.setValue(user)
        this.inputPassword.setValue(password)
        this.buttonSignIn.click()
        // this.welcomeMessage.waitForExist()
    }
}

export const loginPage = new LoginPage();