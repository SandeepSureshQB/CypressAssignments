class DashboardPage {
    getSheet(){
        return cy.get(".oxd-sheet")
    }
    VerifyLinksInLeftMenu() {
        const neatCSV = require('neat-csv')
        cy.readFile(Cypress.config("fileServerFolder") + "/cypress/downloads/OrangeTest.csv").then(async (text) => {
            const csv = await neatCSV(text)
            console.log(csv)
            cy.get('.oxd-main-menu').as('LeftMenu')
            cy.get('@LeftMenu').find('.oxd-main-menu-item-wrapper').each(($element, index, $list) => {
                cy.wrap($element).find('.oxd-main-menu-item > .oxd-text').contains(csv[0]["item" + index])
                console.log(csv[0]["item" + index])
            })

        })
    }
    VerifyDashboardTiles() {
        cy.fixture('DashboardTiles').then((data) => {
            cy.get('.orangehrm-dashboard-grid').as('grid')
            cy.get('@grid').find('.oxd-sheet').filter(':visible').each(($element, index, $list) => {
                cy.wrap($element).find('.orangehrm-dashboard-widget-name > .oxd-text').invoke('text').should('eq',(data[index]), { timeout: 5000 })
            })
        })

    }
    VerifyDashboardTilesData() {
        this.getSheet().filter(':contains("Time at Work")').should("contain", "Punched", { timeout: 5000 })
        this.getSheet().filter(':contains("My Actions")').should("contain", 'Pending Self Review')
        this.getSheet().filter(':contains("Quick Launch")').should("contain", 'Assign Leave')
        this.getSheet().filter(':contains("Buzz Latest Post")').should("contain", 'manda')
        this.getSheet().filter(':contains("Employees on Leave Today")').should("contain", 'No Employees are on Leave Today')
        this.getSheet().filter(':contains("Employee Distribution by Sub Unit")').should("contain", 'Engineering')
        this.getSheet().filter(':contains("Employee Distribution by Location")').should("contain", 'Texas R&D')

    }
    Logout() {
        cy.get('.oxd-userdropdown-name').click()
        cy.get("a[href='/web/index.php/auth/logout']").click()
    }


}
export default DashboardPage;