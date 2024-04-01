/// <reference types="cypress" />


describe('Auto Suggestion', function () {
    it('google auto suggestion', function () {
        cy.visit('https://www.google.com/')
        cy.get("textarea[class='gLFyf']").type('testing', { delay: 50 })
        cy.log(cy.get('#Alh6id div div ul li').should('have.length', 10))// To verify the list of webelements    
        //Css selector should be selected accordindly,else it will not pick the selected item
        cy.get('#Alh6id div div ul li').find("div[role='presentation'] span").each(($el) => { //.each will iterate over the list of webelements
            if ($el.text() === 'testing types') {
                cy.wrap($el).as('btn').click()

            }
        })
        cy.wait(5000)
        cy.get("textarea[id='APjFqb']").should('have.text', 'testing types')
    })
})

