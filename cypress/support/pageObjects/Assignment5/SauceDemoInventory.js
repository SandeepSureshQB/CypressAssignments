import SauceDemoCart from "./SauceDemoCart"

class SauceDemoInventory {
    logout() {
        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link').click()

    }
    verifyHeaderTexts() {
        cy.get('.app_logo').contains("Swag Labs")
        cy.get('span[data-test="title"]').contains("Products")
    }
    verifyFooterTexts() {
        cy.get('a[data-test="social-twitter"]').should("have.attr", "href", "https://twitter.com/saucelabs")
        cy.get('a[data-test="social-facebook"]').should("have.attr", "href", "https://www.facebook.com/saucelabs")
        cy.get('a[data-test="social-linkedin"]').should("have.attr", "href", "https://www.linkedin.com/company/sauce-labs/")
        cy.get('div[data-test="footer-copy"]').contains("Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy")
        cy.get('div[data-test="footer-copy"]').contains("2025")
    }
    verifySortingbyAtoZ(option) {
        cy.fixture('SauceLabsProducts').then((data) => {
        let stringArray1 = data
         let Array2 = []
        let Array3 = []
        switch (option) {
            case "Name (A to Z)":
                cy.get("div[data-test='inventory-item-name']").each(($el, index) => {
                    cy.wrap($el).invoke("text").then((text) => {
                        Array2[index] = text.trim();
                    });
                }).then(() => {
                    stringArray1.sort();
                    console.log("Expected:", stringArray1);
                    console.log("Actual:", Array2);
                    expect(Array2).to.deep.equal(stringArray1);
                });
                break
            case "Name (Z to A)":
                cy.get("div[data-test='inventory-item-name']").each(($el, index) => {
                    cy.wrap($el).invoke("text").then((text) => {
                        Array2[index] = text.trim();
                    });
                }).then(() => {
                    stringArray1.reverse();
                    console.log("Expected:", stringArray1);
                    console.log("Actual:", Array2);
                    expect(Array2).to.deep.equal(stringArray1);
                });
                break
            case "Price (low to high)":
                cy.get("div[data-test='inventory-item-price']").each(($el, index) => {
                    cy.wrap($el).invoke("text").then((text) => {
                        Array2[index] = parseFloat(text.replace("$", "").trim());

                    });
                }).then(() => {
                    Array3 = Array2
                    Array3.sort((a, b) => a - b);
                    console.log("Expected:", Array3);
                    console.log("Actual:", Array2);
                    expect(Array2).to.deep.equal(Array3);
                });
                break
            case "Price (high to low)":
                cy.get("div[data-test='inventory-item-price']").each(($el, index) => {
                    cy.wrap($el).invoke("text").then((text) => {
                        Array2[index] = parseFloat(text.replace("$", "").trim());
                    });
                }).then(() => {
                    Array3 = Array2
                    Array3.sort((a, b) => b - a);
                    console.log("Expected:", Array3);
                    console.log("Actual:", Array2);
                    expect(Array2).to.deep.equal(Array3);
                });
                break

        }
    })
    }
    sortInventoryPage(option) {
        cy.get("select[data-test='product-sort-container']").select(option)
    }
    clickOnAddToCart() {
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#add-to-cart-sauce-labs-bike-light').click()
        cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click()
        cy.get('#add-to-cart-sauce-labs-fleece-jacket').click()
    }
    verifyRemoveButton() {
        cy.get('#remove-sauce-labs-backpack').should('be.visible')
        cy.get('#remove-sauce-labs-bike-light').should('be.visible')
        cy.get('#remove-sauce-labs-bolt-t-shirt').should('be.visible')
        cy.get('#remove-sauce-labs-fleece-jacket').should('be.visible')
    }
    verifyCartCount(count) {
        cy.get('span[data-test="shopping-cart-badge"]').contains(count)
    }
    clickRemoveButton() {
        cy.get('#remove-sauce-labs-fleece-jacket').click()
    }
    verifyAddTocartButtonIsDisplayed() {
        cy.get('#add-to-cart-sauce-labs-fleece-jacket').should('be.visible')
    }
    goToCartPage() {
        cy.get('a[data-test="shopping-cart-link"]').click()
        return new SauceDemoCart()
    }


}
export default SauceDemoInventory