class CreateNewEmployeePage {

    get inputFirstName() {
        return $('#employee_first_name');
    }

    get inputLastNme() {
        return $('#employee_last_name');
    }

    get inputEmail() {
        return $('#employee_email');
    }

    get inputID() {
        return $('#employee_identification');
    }

    get inputLeaderName() {
        return $('#employee_leader_name');
    }

    get dropDownYear() { 
        return $('#employee_start_working_on_1i') 
    }

    get dropDownMonth() { 
        return $('#employee_start_working_on_2i') 
    }

    get dropDownDay() { 
        return $('#employee_start_working_on_3i') 
    }

    get buttonCreateEmployee() { 
        return $('[name="commit"]')
    }

    get linkBack() { 
        return $('[href="/employees"]') 
    }

    newEmployee(userName, userLastName, userEmail, userID, leaderName, year, month, day){
        this.inputFirstName.waitForExist()
        this.inputFirstName.setValue(userName)
        this.inputLastNme.setValue(userLastName)
        this.inputEmail.setValue(userEmail)
        this.inputID.setValue(userID)
        this.inputLeaderName.setValue(leaderName)
        this.dropDownYear.selectByAttribute('value', year)
        this.dropDownMonth.selectByVisibleText(month);
        this.dropDownDay.selectByAttribute('value', day)
        this.buttonCreateEmployee.click()
        this.linkBack.waitForExist()
        this.linkBack.click()
    }
}

export const createNewEmployeePage = new CreateNewEmployeePage();