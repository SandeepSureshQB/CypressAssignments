import LumaSearchResult from "./LumaSearchResult"

class LumaLandingPage {
    ValidateRedirections() {
        let urls = new Array(6)
        cy.get('a[href="https://magento.softwaretestingboard.com/what-is-new.html"]').click()
        urls[0] = cy.url().then((currentUrl) => {
            urls[0] = currentUrl
        })
        cy.get('a[href="https://magento.softwaretestingboard.com/women.html"]').click()
        urls[1] = cy.url().then((currentUrl) => {
            urls[1] = currentUrl
        })
        cy.get('a[href="https://magento.softwaretestingboard.com/men.html"]').click()
        urls[2] = cy.url().then((currentUrl) => {
            urls[2] = currentUrl
        })
        cy.get('a[href="https://magento.softwaretestingboard.com/gear.html"]').click()
        urls[3] = cy.url().then((currentUrl) => {
            urls[3] = currentUrl
        })
        cy.get('a[href="https://magento.softwaretestingboard.com/training.html"]').click()
        urls[4] = cy.url().then((currentUrl) => {
            urls[4] = currentUrl
        })
        cy.get('a[href="https://magento.softwaretestingboard.com/sale.html"]').click()
        urls[5] = cy.url().then((currentUrl) => {
            urls[5] = currentUrl
        })
        console.log(urls)
        return urls
    }

    VerifyUrls(redirectedUrls) {
        const expectedUrls = [
            "https://magento.softwaretestingboard.com/what-is-new.html",
            "https://magento.softwaretestingboard.com/women.html",
            "https://magento.softwaretestingboard.com/men.html",
            "https://magento.softwaretestingboard.com/gear.html",
            "https://magento.softwaretestingboard.com/training.html",
            "https://magento.softwaretestingboard.com/sale.html"

        ];

        expect(redirectedUrls).to.deep.equal(expectedUrls);
    }
    SearchForProducts(keyword) {
        if (keyword === "") {
            cy.fixture('Products').then((data) => {
                cy.get("#search").clear().type(data.keyword)
                cy.wait(2000)
                cy.get("#search").clear().type(data.keyword)
                cy.wait(2000)
            })
        }
        else {
            cy.get("#search").clear().type(keyword)
            cy.wait(2000)
            cy.get("#search").clear().type(keyword)
            cy.wait(2000)
        }

        cy.get("ul[role='listbox'] li").eq(0).click()
        return new LumaSearchResult()
    }

}
export default LumaLandingPage