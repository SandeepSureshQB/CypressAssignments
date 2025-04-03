class LumaOrderDetails{
VerifyOrderDetails(){
    cy.fixture('Products').then((data) => {
        cy.get(".product-item-name").first().contains(data.item)
        cy.get(".item-options dd").first().contains(data.Size)
        cy.get(".item-options dd").eq(1).contains(data.Color)
    })
}
}
export default LumaOrderDetails