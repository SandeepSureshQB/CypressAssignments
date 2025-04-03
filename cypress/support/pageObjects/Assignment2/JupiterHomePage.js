import JupiterShopPage from "./JupiterShopPage"
class JupiterHomePage {
    getNavShop() {
        return cy.get("#nav-shop > a");
        }
    goto(url) {
        cy.on('uncaught:exception', (err, runnable) => { return false })
        cy.visit(url)
    }
    VerifyHeaders() {
        let urls = new Array(3)
        cy.get("a[href='#/home']").contains("Home")
        this.getNavShop().contains("Shop")
        cy.get("a[href='#/contact']").contains("Contact")
        cy.get("a[href='#/home']").click()

        urls[0] = cy.url().then((currentUrl) => {
            urls[0] = currentUrl
        })
        this.getNavShop().click()
        urls[1] = cy.url().then((currentUrl) => {
            urls[1] = currentUrl
        })
        cy.get("a[href='#/contact']").click()
        urls[2] = cy.url().then((currentUrl) => {
            urls[2] = currentUrl
        })
        console.log(urls)
        return urls
    }

    VerifyUrls(redirectedUrls) {
        const expectedUrls = [
            "https://jupiter.cloud.planittesting.com/#/home",
            "https://jupiter.cloud.planittesting.com/#/shop",
            "https://jupiter.cloud.planittesting.com/#/contact"
        ];

        expect(redirectedUrls).to.deep.equal(expectedUrls);
    }
    ClickOnShoppingButton() {
        cy.get('.btn.btn-success.btn-large').click()
        cy.url().should('include', 'shop')
        return new JupiterShopPage();

    }

}
export default JupiterHomePage;