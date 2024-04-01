/// <reference types="cypress" />
import WebshopLogin_POM from '../../support/POM/webshopLogin_POM.cy';
import Productpage from '../../support/POM/productPage_POM.cy';
import BookSection from '../../support/POM/books_POM.cy';
import Checkout from '../../support/POM/addToCart_POM.cy';


describe('Tricentis Webshop', function () {

    beforeEach('setUp', function () {

        cy.fixture('example').then(function (data) {
            this.data = data
        }).then(function () {
            cy.visit(this.data.url)
            WebshopLogin_POM.getloginPage().click()
            WebshopLogin_POM.getuserName().type(this.data.userName, { delay: 50 })
            WebshopLogin_POM.getpassword().type(this.data.passWord, { delay: 50 })
            WebshopLogin_POM.getloginBtn().click()
        })
    })

    it('Login to Application', function () {
        WebshopLogin_POM.loggedUser().should('have.text', 'adminuser@rediff.com')
        WebshopLogin_POM.newsLetter(this.data.userName, { delay: 50 }).should('have.text', 'Thank you for signing up! A verification email has been sent. We appreciate your interest.')
    })

    it('Product Categories', function () {
        Productpage.productLists('Books')
        Productpage.selectedProduct('Books')
    })

    it('product-Book', function () {
        Productpage.productLists('Books')
        BookSection.pageView().should('contain.text', 'List')
        BookSection.bookList('Fiction')
        BookSection.addToCart().click()
        BookSection.cartDetails().should('contain.html', '/cart')
    })

    it('product Checkout', function () {
        Checkout.shoppingCart()
        Checkout.termService().should('be.checked')
        Checkout.checkOut()
        Checkout.addressDropdown(this.data.adressType).should('contain.text', 'New Address')
        Checkout.countryDropdown(this.data.country).should('contain.text', 'United States')
        Checkout.stateDropdown(this.data.state).should('contain.text', 'Kentucky')
        Checkout.city(this.data.city)
        Checkout.addressLine1(this.data.address_1)
        Checkout.addressLine1(this.data.address_2)
        Checkout.phoneNumber(this.data.phNo)
        Checkout.zipcode(this.data.Zip)
        Checkout.continueNextSection()
        Checkout.continueShipping()
        Checkout.shippingMethod().should('be.checked')
        Checkout.continueNextSection()
        Checkout.paymentType().should('be.checked')
        Checkout.NextSection()
        Checkout.paymentInfo().should('have.text', 'You will pay by COD')
        Checkout.payment()
        Checkout.confirmation()
        Checkout.postConfirmation()
        Checkout.logOut()
        WebshopLogin_POM.loggedUser().should('not.have.text', 'adminuser@rediff.com')

    })
})