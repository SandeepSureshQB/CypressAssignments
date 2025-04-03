import ParaRegistration from "./ParaRegistration"

class ParaBankLogin{
    goto(url) {
        cy.on('uncaught:exception', (err, runnable) => { return false })
        cy.visit(url)
    }
    login(username, password) {
        cy.get("input[name='username']").type(username)
        cy.get("input[name='password']").type(password)
        cy.get('input[value="Log In"]').click()
    }
    loginWithoutCredentials(){
        cy.get('input[value="Log In"]').click()
    }
    validateErrorMessage(){
        cy.get('.title').should('contain.text',"Error!")
        cy.get('.error').should('contain.text',"Please enter a username and password.")
    }
    clickonRegisterLink(){
        cy.get('a[href="register.htm"]').click()
        return new ParaRegistration()
    }
}
export default ParaBankLogin;