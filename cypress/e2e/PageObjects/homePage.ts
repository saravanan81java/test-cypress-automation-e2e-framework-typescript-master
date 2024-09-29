export class HomepageObjects{

searchfield(){
    return cy.get('.search-keyword')
}

searchBtn(){
    return cy.get('.product-action > button')
 }

 plpProduct(){
    return cy.get('h4[class="product-name"]')
 }

 addToCartButton(){
    return cy.get('.product-action > button')
 }

 addedButton(){
    return cy.get('button[class="added"]')
 }

 proceedToCart(){
    return cy.contains('PROCEED TO CHECKOUT')
 }
 cartButton(){
    return cy.get('.cart-icon > img')
 }

}