class ParaAccountServices {
    createNewSavingsAccount() {
        cy.get("a[href='openaccount.htm']").click()
        cy.get("#type").select("SAVINGS")
        cy.get("input[value='Open New Account']").click()
    }

    verifyAccountCreationMessage() {
        cy.get("#openAccountResult h1").contains("Account Opened!")
        cy.get("#openAccountResult p").eq(0).contains("Congratulations, your account is now open.")
    }
    clickOnFundTransfer() {
        cy.get("a[href='transfer.htm']").click()
    }
    selectAccountsAndAmount(value) {
        cy.get("#fromAccountId").select(0)
        cy.get("#toAccountId").select(0)
        cy.get("#amount").type(value)
    }
    clickOnTransfer() {
        cy.get("input[value='Transfer']").click()
    }
    verifyTransferSuccessMessage(value) {
        cy.get("#showResult h1").should('have.text',"Transfer Complete!")
        cy.get("#amountResult").should('have.text',"$"+value+".00")
    }
    clickOnBillPayLink() {
        cy.get("a[href='billpay.htm']").click()
    }
    clickOnSendPayment() {
        cy.get("input[value='Send Payment']").click()
    }
    verifyValidationMessages() {
        cy.fixture('Validation').then((data) => {
        cy.get("#validationModel-name").should('have.text',data[0])
        cy.get("#validationModel-address").should('have.text',data[1])
        cy.get("#validationModel-city").should('have.text',data[2])
        cy.get("#validationModel-state").should('have.text',data[3])
        cy.get("#validationModel-zipCode").should('have.text',data[4])
        cy.get("#validationModel-phoneNumber").should('have.text',data[5])
        cy.get("#validationModel-account-empty").should('have.text',data[6])
        cy.get("#validationModel-verifyAccount-empty").should('have.text',data[7])
        cy.get("#validationModel-amount-empty").should('contain.text',data[8])
        })
    }
    enterAccountDetails() {
        const neatCSV = require('neat-csv')
        cy.readFile(Cypress.config("fileServerFolder") + "/cypress/downloads/AccountDetails.csv").then(async (text) => {
            const csv = await neatCSV(text)
            cy.get('input[name="payee\\.name"]').type(csv[0]["Name"])
            cy.get('input[name="payee\\.address\\.street"]').type(csv[0]["Address"])
            cy.get('input[name="payee\\.address\\.city"]').type(csv[0]["City"])
            cy.get('input[name="payee\\.address\\.state"]').type(csv[0]["State"])
            cy.get('input[name="payee\\.address\\.zipCode"]').type(csv[0]["ZipCode"])
            cy.get('input[name="payee\\.phoneNumber"]').type(csv[0]["PhoneNumber"])
            cy.get('input[name="payee\\.accountNumber"]').type(csv[0]["Account"])
            cy.get('input[name="verifyAccount"]').type(csv[0]["VerifyAccount"])
            cy.get('input[name="amount"]').type(csv[0]["Amount"])
        })
        cy.get("input[value='Send Payment']").click()
    }
    verifyBillPaymentSuccess() {
        cy.get("#billpayResult h1").contains("Bill Payment Complete")
        cy.get("#amount").contains("$10.00")
    }
    clickOnUpdateContactLink() {
        cy.get("a[href='updateprofile.htm']").click()
    }
    enterContactDetails() {
        const neatCSV1 = require('neat-csv')
        cy.readFile(Cypress.config("fileServerFolder") + "/cypress/downloads/ContactInfo.csv").then(async (text) => {
            const csv = await neatCSV1(text)
            cy.get('#customer\\.firstName').clear().type(csv[0]["FirstName"])
            cy.get('#customer\\.lastName').clear().type(csv[0]["LastName"])
            cy.get('#customer\\.address\\.street').clear().type(csv[0]["Address"])
            cy.get('#customer\\.address\\.city').clear().type(csv[0]["City"])
            cy.get('#customer\\.address\\.state').clear().type(csv[0]["State"])
            cy.get('#customer\\.address\\.zipCode').clear().type(csv[0]["ZipCode"])
            cy.get('#customer\\.phoneNumber').clear().type(csv[0]["PhoneNumber"])
        })
        cy.get("input[value='Update Profile']").click()

    }
    verifyContactUpdateSuccessMessage() {
        cy.get("#updateProfileResult h1").should('have.text',"Profile Updated")
        cy.get("#updateProfileResult p").should('contain.text',"Your updated address and phone number have been added to the system.")
    }
    logout(){
        cy.get("a[href='logout.htm']").click()
    }

}
export default ParaAccountServices