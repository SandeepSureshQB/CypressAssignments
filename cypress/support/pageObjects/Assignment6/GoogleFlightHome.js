class GoogleFlightHome {
    goto(url) {
        cy.visit(url)
        cy.wait(2000)
    }
    getOneWay(){
        return cy.get("li[role='option']").filter(':contains("One way")')
    }
    SearchFlights(origin,destination) {
        cy.get("input[aria-label='Where from?']").clear()
        cy.wait(2000)
        cy.get("input[aria-label='Where from? ']").type(origin)
        cy.get("li[aria-label='Berlin, Germany']").click()
        cy.get("input[placeholder='Where to?']").type(destination)
        cy.get("li[aria-label='Dubai - United Arab Emirates']").first().click()

    }
    SelectDate() {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 1);
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const nextDayFormatted = currentDate.toLocaleDateString('en-US', options);
        cy.get("input[placeholder='Departure']").first().click()
        cy.get(`div[aria-label='${nextDayFormatted}']`).click();
        cy.get('[jsname="WCieBd"] > .VfPpkd-LgbsSe > .VfPpkd-vQzf8d').click()
    }
    SelectDateRound() {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 1);
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const nextDayFormatted = currentDate.toLocaleDateString('en-US', options);
        currentDate.setDate(currentDate.getDate() + 1);
        const returnDayFormatted = currentDate.toLocaleDateString('en-US', options);
        cy.get("input[placeholder='Departure']").first().click()
        cy.get(`div[aria-label='${nextDayFormatted}']`).click();
        cy.wait(1000)
        cy.get(`div[aria-label='${returnDayFormatted}']`).click();
        cy.get('[jsname="WCieBd"] > .VfPpkd-LgbsSe > .VfPpkd-vQzf8d').click()
    }
    SelectOneWay() {
        cy.get(".VfPpkd-aPP78e").first().click()
        this.getOneWay().then($element => {
            cy.wrap($element).first().click()
        })
    }
    SelectOneWayTrips(origin,destination) {
        cy.get(".VfPpkd-aPP78e").first().click()
        this.getOneWay().then($element => {
            cy.wrap($element).first().click()
        })
        this.SearchFlights(origin,destination)
        this.SelectDate()
        this.SearchTheFlights()
    }
    VerifyFlightsDisplayed() {
        cy.get('[aria-labelledby="Oacf4b"] > [jsname="IWWDBc"] > .Rk10dc > .pIav2d').should('have.length.greaterThan', 0)
    }
    SelectRoundTrips() {
        cy.get(".VfPpkd-aPP78e").first().click()
        cy.get("li[role='option']").filter(':contains("Round trip")').then($element => {
            cy.wrap($element).first().click()
        })
        cy.wait(2000)
    }
    SearchTheFlights() {
        cy.get('.xFFcie > .VfPpkd-LgbsSe > .VfPpkd-vQzf8d').click()
    }
    SelectPassengers(adult,child,infant) {
        cy.get("button[aria-label='1 passenger']").click()
        cy.wait(1000)
        for(let i=1;i<=adult;i++){
            cy.get("button[aria-label='Add adult']").click()
            cy.wait(1000)
        }
        for(let j=1;j<=child;j++){
            cy.get("button[aria-label='Add child']").click()
            cy.wait(1000)
        }
        for(let k=1;k<=infant;k++){
            cy.get("button[aria-label='Add infant in seat']").click()
            cy.wait(1000)
        }
        cy.get("div[jsname='oYxtQd']").eq(1).click()
        cy.get('.JQrP8b > .TQYpgc > .O1htCb-H9tDt > .VfPpkd-O1htCb > .VfPpkd-xl07Ob-XxIAqe > .VfPpkd-rymPhb > [data-value="3"]').click()
    }
    PrintCheapestFlight() {
        cy.wait(5000)
        cy.get('.hXU5Ud').then($element => {
            const text = $element.text();
            console.log(text);
        });
    }
    SortByPrice() {
        cy.get("button[aria-label='Sorted by top flights, Change sort order.']").first().click()
        cy.get('ul > li>span.VfPpkd-StrnGf-rymPhb-b9t22c').eq(1).click()
        cy.wait(5000)
    }

    VerifyPriceSorting() {
        let Array2 = []
        let Array3 = []
        cy.get('[aria-labelledby="Oacf4b"] > [jsname="YdtKid"] > .Rk10dc >.pIav2d> .gQ6yfe > .yR1fYc > .mxvQLc > .OgQvJf > .KhL0De > .U3gSDe > .BVAVmf > .YMlIz > span').each(($el, index) => {
            cy.wrap($el).invoke("text").then((text) => {
                Array2[index] = parseFloat(text.replace(/[^\d]/g, '').trim());

            });
        }).then(() => {
            Array3 = Array2
            Array3.sort((a, b) => a - b);
            console.log("Expected:", Array3);
            console.log("Actual:", Array2);
            expect(Array2).to.deep.equal(Array3);
        })
    }


}
export default GoogleFlightHome