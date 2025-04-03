class TravelTheWorld {
    goto(url) {
        cy.visit(url)
    }
    VerifyHeaderLinks() {
        cy.get(".brand").eq(0).contains("Travel The World")
        cy.get(".brand").eq(1).contains("home")
        cy.get(".brand").eq(0).should("have.attr", "href", "index.php")
        cy.get(".brand").eq(1).should("have.attr", "href", "home")
        cy.get("a[href='index.php']").contains("Travel The World")
        cy.get("a[href='home']").contains("home")
    }
}
export default TravelTheWorld;