import LumaShippingPage from "./LumaShippingPage"

class LumaProductPage {

    verifyAddToCart(add = true) {
        if (add) {
            cy.get(".swatch-option.text").eq(0).click()
            cy.get(".swatch-option.color").eq(0).click()
        }
        cy.wait(2000)
        cy.get("#product-addtocart-button").first().click()
    }
    VerifyCartCount() {
        cy.get(".message-success div").contains("You added Minerva LumaTech™ V-Tee to your")
        cy.get(".counter-number").contains("1")
    }
    VerifyCartCountSpecific() {
        cy.fixture('Products').then((data) => {
        cy.get(".message-success div").contains("You added "+data.item+" to your")
        cy.get(".counter-number").contains("1")
        })
    }
    VerifyClearCart() {
        cy.get(".showcart").click()
        cy.get(".delete").click()
        cy.get(".action-accept").click()
    }
    VerifyAddToCompare() {
        cy.get(".tocompare").click()
    }
    VerifyCompareMessage() {
        cy.get(".message-success div").contains("You added product Minerva LumaTech™ V-Tee to the")
        cy.get(".message-success div a").contains("comparison list")
    }
    VerifyAddToWishList() {
        cy.get(".towishlist").click()
    }
    VerifyWishlistMessage() {
        cy.get(".message-success div").contains("Minerva LumaTech™ V-Tee has been added to your Wish List. Click")
    }
    VerifyClearWishList() {
        cy.get(".btn-remove").click()
       
    }
    
    VerifyClearCompareList() {
        cy.get(".clear").click()
        cy.get(".action-accept").click()
    }
    SelectSpecificSizeAndColor() {
        cy.fixture('Products').then((data) => {
            cy.get(".swatch-option.text").each(($el) => {
                cy.wrap($el).invoke("text").then((text) => {
                    if (text.trim() === data.Size) {
                        cy.wrap($el).click({ force: true });
                    }
                });
            });
            cy.get(".swatch-option.color").each(($el) => {
                cy.wrap($el).invoke("attr", "option-label").then((label) => {
                    if (label === data.Color) {
                        cy.wrap($el).click({ force: true });
                    }
                });
            });
        });
        
    }
    ProceedToCheckout() {
        cy.wait(4000)
        cy.get(".showcart").click()
        cy.wait(2000)
        cy.get("#top-cart-btn-checkout").click()
        return new LumaShippingPage()
    }

}
export default LumaProductPage