import moment from "moment";
class ParaRegistration {
    enterUserDetails() {
        var now = new Date();
        var dateString = moment(now).format('ss h');
        this.dateString = dateString
       
        cy.fixture('ParaUser').then((data) => {
            cy.get('#customer\\.firstName').type(data.FirstName)
            cy.get("#customer\\.lastName").type(data.LastName)
            cy.get("#customer\\.address\\.street").type(data.Address)
            cy.get("#customer\\.address\\.city").type(data.City)
            cy.get("#customer\\.address\\.state").type(data.State)
            cy.get("#customer\\.address\\.zipCode").type(data.ZipCode)
            cy.get("#customer\\.phoneNumber").type(data.Phone)
            cy.get("#customer\\.ssn").type(data.SSN)
            cy.get("#customer\\.username").type(data.Username + dateString)
            cy.get("#customer\\.password").type(data.Password)
            cy.get("#repeatedPassword").type(data.Password)
            this.Username=data.Username
        })
        cy.get("input[value='Register']").click()
    }
    verifyWelcomeMessage() {
        cy.get("h1").should('contain.text',"Welcome " + this.Username +this.dateString)
        cy.get("#rightPanel p").should('contain.text',"Your account was created successfully. You are now logged in.")
    }

}
export default ParaRegistration;