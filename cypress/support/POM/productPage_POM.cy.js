class Productpage {

    static productLists(product){
        cy.get(".block.block-category-navigation div[class='listbox'] ul li").find('a').each(($el) => {
            if ($el.text().trim() === product) {
                return cy.wrap($el).click()
            }
        })
    }
    static selectedProduct(product){
        cy.get(".block.block-category-navigation div[class='listbox'] ul li").find('a').each(($el) => {
            if($el.text().trim() === product){
                // the text area has escape sequence is added, that's why added contains method to check the title
                return cy.get('.page-title').should('contain.text', product)
            }
        })
        
    }
}
export default Productpage