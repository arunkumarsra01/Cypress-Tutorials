/// <reference types= "cypress"/>

describe('Cypresss operations', function () {

    beforeEach('Setup',function(){
       cy.visit(Cypress.env('url')) 
    })
    it('Add and Remove', function () {
        cy.contains('Add/Remove Elements').click()
        cy.contains('Add Element').click()
        cy.contains('Delete').should('be.visible')
        cy.contains('Delete').click()
        cy.get("button[onclick='deleteElement()']").should('not.exist')
    })

    it('Checkboxes', function () {
        cy.contains('Checkboxes').click()
        cy.get('#checkboxes>input:nth-of-type(1)').check().should('be.checked')
        cy.get('#checkboxes>input:nth-of-type(2)').uncheck().should('not.be.checked')
    })

    it('Simple Alert popup', function () {
        cy.contains('Context Menu').click()
        cy.get('#hot-spot').rightclick()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('You selected a context menu')
        })
    })

    it('Confirmation Alert', function () {
        cy.contains('JavaScript Alerts').click()
        cy.get("[onclick='jsConfirm()']").click()
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('I am a JS Confirm')
            return false
        })
        cy.get('#result').should('have.text', 'You clicked: Cancel')
    })

    it('Prompt Alert', function () {
        cy.contains('JavaScript Alerts').click()
        cy.window().then(function (str) {
            cy.stub(str, 'prompt').returns('Hello World')
        })
        cy.get("[onclick='jsPrompt()']").click()
        cy.get('#result').should('have.text', 'You entered: Hello World')
    })

    it('Disappearing Elements', function () {
        cy.contains('Disappearing Elements').click()
        cy.contains('About').click();
        cy.contains('About').should('not.exist')
        cy.go('back')
        cy.contains('About').should('exist')
    })

    it('Drag and Drop', function () {
        cy.contains('Drag and Drop').click()
        const dataTransfer = new DataTransfer
        cy.get('#column-a').trigger('dragstart', { dataTransfer })
        cy.get('#column-b').trigger('drop', { dataTransfer })
        cy.get('#column-a').trigger('dragend')
    })

    it('Dropdown', function () {
        cy.contains('Dropdown').click()
        cy.get('#dropdown').select(1).should('contain.text', 'Option 1')
    })

    it('Window Handling', function () {
        cy.contains('Multiple Windows').click()
        cy.get('.example a').invoke('removeAttr', 'target').click() // remove attribute is from JQuery
        cy.get('.example').should('contain.text', 'New Window')
    })

    it('Popup Window', function () {
        cy.contains('Entry Ad').click()
        cy.get("[class='modal-footer'] p").click()
        cy.get("[id=restart-ad]").should('be.visible')
    })

    it('WebTables', function () {
        cy.contains('Sortable Data Tables').click()
        cy.get("[id='table1'] tbody tr").find('td').each(($el) => {
            if ($el.text() === 'Bach') {
                cy.log($el.siblings(':nth-of-type(4)').text())
                const due = $el.siblings(':nth-of-type(4)')
                expect(due.text()).to.equals('$51.00')
            }
        })
    })

    it('IFrames', function () {
        cy.contains('Frames').click()
        cy.contains('iFrame').click()
        cy.get("[id='mce_0_ifr']").then(function ($frame) {
            const iframe = $frame.contents().find('body')
            cy.wrap(iframe).clear()
                .type('Hello World').then(function ($ele) {
                    expect($ele.text()).to.equals('Hello World')
                })

        })
    })

})