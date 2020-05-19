import {expect, assert} from 'chai'

class HomePage {

    get welcomeMessage() {
        return $('.flash_notice');
    }

    get iconLogo() {
        return $('#logo');
    }

    get labelUserName() {
        return $('#user_information');
    }

    get linkCreateAccount() { 
        return $('[href="/employees/new"]') 
    }

    get tableRow() { 
        return $$('#content tbody tr') 
    }

    validateUserInTable(userName, userLastName, userID, leaderName, year, month, day, status){
        const len = this.tableRow.length
        let actual = 'false'
        for (let i = 1; i < len; i += 1) {
            if (this.tableRow[i].$$('td')[2].getText() === userID) {
                console.log("########## User row number is: ", i)
                expect(this.tableRow[i].$$('td')[0].getText()).to.contain(userName)
                expect(this.tableRow[i].$$('td')[1].getText()).to.contain(userLastName)
                expect(this.tableRow[i].$$('td')[3].getText()).to.contain(leaderName)
                expect(this.tableRow[i].$$('td')[4].getText()).to.contain(year)
                // expect(this.tableRow[i].$$('td')[4].getText()).to.contain(month)
                expect(this.tableRow[i].$$('td')[4].getText()).to.contain(day)
                actual = 'true'
                break
            }
        }
        assert.equal(status, actual)
    }

    getUserbyID(id){

    }

    deleteEmployee(userID){
        const len = this.tableRow.length
        for (let i = 1; i < len; i += 1) {
            if (this.tableRow[i].$$('td')[2].getText() === userID) {
                this.tableRow[i].$$('td')[8].$('a').click()
                browser.pause(3000)
                browser.acceptAlert()
                break      
            }
        }
    }
}

export const homePage = new HomePage();