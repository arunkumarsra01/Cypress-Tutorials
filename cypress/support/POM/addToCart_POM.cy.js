class Checkout {

    static shoppingCart() {
        return cy.get("#topcartlink [class='cart-label']").click()
    }

    static termService() {
        return cy.get("[id='termsofservice']").check()
    }

    static checkOut() {
        return cy.get("[id='checkout']").click()
    }

    static addressDropdown(address) {
        return cy.get("[id='billing-address-select']").select(address)
    }

    static countryDropdown(country) {
        return cy.get("[id='BillingNewAddress_CountryId']").select(country)
    }

    static stateDropdown(state) {
        return cy.get("[id='BillingNewAddress_StateProvinceId']").select(state)
    }

    static city(city) {
        return cy.get('#BillingNewAddress_City').type(city, { delay: 50 })
    }

    static addressLine1(line) {
        return cy.get('#BillingNewAddress_Address1').type(line, { delay: 50 })
    }

    static addressLine2(line2) {
        return cy.get("[id='BillingNewAddress_Address2']").type(line2, { delay: 50 })
    }

    static phoneNumber(number) {
        cy.get("#BillingNewAddress_PhoneNumber").type(number, { delay: 100 })
    }
    static zipcode(code) {
        return cy.get("[id='BillingNewAddress_ZipPostalCode']").type(code, { delay: 50 })
    }
    
    static continueNextSection() {
        return cy.get('#billing-buttons-container input').click({force:true})
    }
    static continueShipping() {
        return cy.get('input.button-1.shipping-method-next-step-button').click({force:true})
    }
    static shippingMethod() {
        return cy.get("[id='shippingoption_1']").check()
    }
    static NextSection() {
        return cy.get("[onClick='ShippingMethod.save()']").click()
    }

    static paymentType() {
        return cy.contains('Cash On Delivery (COD) (7.00)').click()
    }

    static payment() {
        return cy.get("[onClick='PaymentMethod.save()']").click()
    }

    static paymentInfo() {
        return cy.get('.info td p')
    }

    static confirmation() {
        return cy.get("[onClick='ConfirmOrder.save()']").click()
    }

    static orderConfirmation() {
        return cy.get('.title')
    }

    static postConfirmation() {
        return cy.get("[class='button-2 order-completed-continue-button']").click()
    }

    static logOut() {
        return cy.get('.ico-logout').click()
    }
}

export default Checkout