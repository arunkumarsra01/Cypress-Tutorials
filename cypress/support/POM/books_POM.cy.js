class BookSection{
    static pageView(){
        return cy.get('#products-viewmode').select('List')
    }

    static bookList(books){
        cy.get('.product-list .item-box .details h2').find('a').each(($el)=>{  
            if($el.text()===books){
                return cy.wrap($el).click()
            }
        })
    }

    static addToCart(){
        return cy.get("[id='add-to-cart-button-45']")
    }

    static cartDetails(){
        return cy.get('.content')
    }
}
export default BookSection
