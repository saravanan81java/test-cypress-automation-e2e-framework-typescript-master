
import {HomepageObjects} from './PageObjects/homePage'
import {cartPage} from './PageObjects/cartPage'
import {ChooseCountryPage} from './PageObjects/chooseCountryPage'
import { orderCompletionPage } from './PageObjects/orderCompletionPage'

let lp = new HomepageObjects()
let cp = new cartPage()
let ccp = new ChooseCountryPage()
let ocp = new orderCompletionPage()

describe("Greencart end to end scenario",()=>{

it("Greencart end to end scenario",()=>{

    //Navigate to Greencart webshop and verify the page title
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/",{timeout:10000})
    cy.title().should('eq','GreenKart - veg and fruits kart')

    //Add Carrot to the cart
    lp.searchfield().type("carrot")
    cy.wait(2000)
    lp.plpProduct().should('include.text','Carrot')
    lp.addToCartButton().click()
    lp.addedButton().should('include.text','ADDED')

    //Add Tomoto to the cart
    lp.searchfield().clear()
    lp.searchfield().type("Tomato")
    cy.wait(2000)
    lp.plpProduct().should('include.text','Tomato')
    lp.addToCartButton().click()
    lp.addedButton().should('include.text','ADDED')

    //Click cart button and Proceed to cart button
    lp.cartButton().click()
    lp.proceedToCart().click({force:true})

    //Verify the user landed to cart page
    cy.url().should('include','/cart')

    //Click the Place Order Button
    cp.placeOrderButton().should('be.visible')
    cp.placeOrderButton().click()

    //Verify the user land on Choose country page and select the dropdown
    ccp.chooseCountryLabel().should('be.visible')
    ccp.dropDown().select('India')

    //Check the Terms and conditions checbox
    ccp.termsAndConditionCheckbox().check().should('be.checked')

    //Click the Proceed Button
    ccp.ProceedButton().should('be.visible')
    ccp.ProceedButton().click()


    //Verify the Thank you message
    ocp.thankYouMessage().should('be.visible')
})

})
