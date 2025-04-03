import LumaProductPage from "./LumaProductPage";

class LumaSearchResult {
    ValidateSearchResults() {
        cy.get('.item.product.product-item').should('have.length', 3);
    }
    SortByProductName() {
        cy.get('#sorter').select('name')
        cy.wait(2000)
        cy.get('a[title="Set Ascending Direction"]').first().click()
        cy.wait(4000)
    }
    SortByPrice() {
        cy.get('#sorter').select('price')
        cy.wait(2000)
    }
    SortByRelevance() {
        cy.get('#sorter').select('relevance')
        cy.wait(2000)
    }
    VerifySorting(option) {
        let stringArray1 = ["Minerva LumaTech™ V-Tee", "Deion Long-Sleeve EverCool™ Tee", "Typhon Performance Fleece-lined Jacket"]
        let Array2 = []
        let Array3 = []
        let Array4 = ["Minerva LumaTech™ V-Tee", "Deion Long-Sleeve EverCool™ Tee", "Typhon Performance Fleece-lined Jacket"]
        let Array5 = []
        switch (option) {
            case "name":
                cy.get(".products.list.items.product-items .product-item-name").each(($el, index) => {
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

            case "price":
                cy.get(".price").each(($el, index) => {
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
            case "relevance":
                cy.get(".products.list.items.product-items .product-item-name").each(($el, index) => {
                    cy.wrap($el).invoke("text").then((text) => {
                        Array5[index] = text.trim();
                    });
                }).then(() => {
                    console.log("Expected:", Array4);
                    console.log("Actual:", Array5);
                    expect(Array4).to.deep.equal(Array5);
                });
                break


        }
    }
    AddSizeAndColorFromSearchResults() {
        cy.get(".product").filter(':contains("Minerva")').then($element => {
            cy.wrap($element).contains('div', 'XS').click()
        })
        cy.get(".product").filter(':contains("Minerva")').then($element => {
            cy.wrap($element).find("div[option-label='Black']").click()
        })
        
    }
    ClickonAddTocartFromsearch(){
       // cy.get('.item.product.product-item').eq(0).trigger('mouseover')
        cy.get(".product").filter(':contains("Minerva")').then($element => {
            cy.wrap($element).find("button[title='Add to Cart']").click({force:true})
        })
    }
    VerifyCartCount() {
        cy.get(".message-success div").contains("You added Minerva LumaTech™ V-Tee to your")
        cy.get(".counter-number").contains("1")
    }
    VerifyClearCart() {
        cy.get(".showcart").click()
        cy.get(".delete").click()
        cy.get(".action-accept").click()
    }
    VerifyAddToCompareFromSearchResults() {
       
      //  cy.get('.item.product.product-item').eq(0).trigger('mouseover')
        cy.get(".product").filter(':contains("Minerva")').then($element => {
            cy.wrap($element).find(".tocompare").click({force:true})
        })
    }
    VerifyCompareList() {
        cy.get(".message-success div").contains("You added product Minerva LumaTech™ V-Tee to the")
        cy.get(".message-success div a").contains("comparison list")
        cy.get("#compare-items li .product-item-name").contains("Minerva LumaTech™ V-Tee")
    }
    VerifyClearCompareList() {
        cy.get(".clear").click()
        cy.get(".action-accept").click()    
    }
    NavigateToProductPage() {
        cy.get('.item.product.product-item').eq(0).click()
        return new LumaProductPage()
    }
    SelectProduct() {
        cy.fixture('Products').then((data) => {
            cy.get(".product-item").each(($el) => {
                if ($el.text().includes(data.item)) {
                    cy.wrap($el).find(".product-item-link").click({ force: true });
                }
            });
        });
        cy.wait(3000)
        return new LumaProductPage();
    }
    


}

export default LumaSearchResult