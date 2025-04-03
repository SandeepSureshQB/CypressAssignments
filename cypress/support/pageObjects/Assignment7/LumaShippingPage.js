import LumaOrderDetails from "./LumaOrderDetails"

class LumaShippingPage {
    EnterShippingAddress() {
        cy.get("input[name='company']").type("Test Company")
        cy.get("input[name='street[0]']").type("Test street")
        cy.get("input[name='city']").type("Test city")
        cy.get("select[name='region_id']").select(1)
        cy.get("input[name='postcode']").type("123123123")
        cy.get("input[name='telephone']").type("9876543210")
        cy.get('input[type="radio"][value="tablerate_bestway"]').check()
        
       
    }
    ClickOnPlaceOrder(){
        cy.get(".button").click()
        cy.get(".checkout").click()
    }
    VerifySuccessMessage(){
        cy.get(".base").contains("Thank you for your purchase!")
    }
    NavigateToOrderPage(){
        cy.get(".order-number").click()
        return new LumaOrderDetails()
    }

}
export default LumaShippingPage