class LoginPage {

    static getloginPage() {
        return cy.get('.ico-login')
    }

    static getuserName() {
        return cy.get('#Email')
    }

    static getpassword() {
        return cy.get('#Password')
    }

    static getloginBtn() {
        return cy.get('.button-1.login-button')
    }

    static loggedUser(){
        return cy.get('div.header-links ul li a.account')
    }

    static newsLetter(email){
        cy.get("[id='newsletter-email']").type(email)
        cy.get('.newsletter-subscribe-button').click()
        return cy.get('.newsletter-result-block')
    }
    
}
export default LoginPage