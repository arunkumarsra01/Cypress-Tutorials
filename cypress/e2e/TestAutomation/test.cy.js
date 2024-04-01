///<reference types="Cypress"/>


describe('test', function () {

    beforeEach('before Hook', function () {
        cy.log("Runs before all the test blocks")
        cy.fixture('example').then(function (data) {
            this.data = data
        })
    })

    it('Test-1', function () {
        cy.log('First Test block')
        cy.log(this.data.name)

    })

    it('Test-2', function () {
        cy.log('Second Test block')

    })


    it('Test-3', function () {
        cy.log(this.data.email)
    })

    afterEach('afterEach Hook', function () {
        cy.log('Runs after each test block')
    })

    after('after Hook', function () {
        cy.log("Runs after all the test blocks")
    })
})