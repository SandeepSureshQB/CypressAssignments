    import moment from "moment";

class LeavePage {

    getDateField(){
        return cy.get('.oxd-date-input > .oxd-input')
    }
    SelectFromAndToDate() {
        cy.wait(3000)
        cy.get('.oxd-date-input > .oxd-input').first().click()
        cy.contains('Clear').click()
        cy.wait(3000)
        var now = new Date();
        var dateString = moment(now).format('YYYY-MM-DD');
        console.log(dateString)
        this.getDateField().first().clear()
        this.getDateField().first().type(dateString)
        this.getDateField().last().click()
        cy.contains('Clear').click()
        this.getDateField().last().clear()
        this.getDateField().last().type(dateString)
        cy.get('.oxd-button--secondary').click()
    }

    ValidateEmployeesOnLeave() {
        cy.get('.orangehrm-header-container > .oxd-text').contains("No Records Found")
    }

}
export default LeavePage;