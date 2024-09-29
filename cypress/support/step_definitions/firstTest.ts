import { Given, Then, When } from "node_modules/@badeball/cypress-cucumber-preprocessor/lib/methods";
import { HomepageObjects } from "../../e2e/PageObjects/homePage";
import { cartPage } from "../../e2e/PageObjects/cartPage";
import { ChooseCountryPage } from "../../e2e/PageObjects/chooseCountryPage";
import { orderCompletionPage } from "../../e2e/PageObjects/orderCompletionPage";


let lp = new HomepageObjects()
let cp = new cartPage()
let ccp = new ChooseCountryPage()
let ocp = new orderCompletionPage()

Given("User navigate to Greencart webshop", () => {

    cy.visit('', { timeout: 10000 })
    cy.title().should('eq', 'GreenKart - veg and fruits kart')

});

When("Add the product carrot to cart", () => {

    lp.searchfield().type("carrot")
    cy.wait(2000)
    lp.plpProduct().should('include.text', 'Carrot')
    lp.addToCartButton().click()
    lp.addedButton().should('include.text', 'ADDED')

});

Then("Click cart link", () => {
    lp.cartButton().click()
});

Then("Click the proceed to checkout link", () => {
    lp.proceedToCart().click({ force: true })
});

Then("Click Place order on cart page", () => {
    cy.url().should('include', '/cart')
    //Click the Place Order Button
    cp.placeOrderButton().should('be.visible')
    cp.placeOrderButton().click()

});

Then("Check the Agree terms and condition checkbox", () => {
    //Check the Terms and conditions checbox
    ccp.termsAndConditionCheckbox().check().should('be.checked')

});

Then("Select the country India in select country dropdown", () => {
    //Verify the user land on Choose country page and select the dropdown
    ccp.chooseCountryLabel().should('be.visible')
    ccp.dropDown().select('India')
});

Then("Click the Proceed button", () => {
    //Click the Proceed Button
    ccp.ProceedButton().should('be.visible')
    ccp.ProceedButton().click()

});

Then("Verify the Thank you place the order message is displayed", () => {

    //Verify the Thank you message
    ocp.thankYouMessage().should('be.visible')

});

When("Add the product to cart {string}", (Product:string) => {

    lp.searchfield().clear()
    lp.searchfield().type(Product)
    cy.wait(2000)
    lp.plpProduct().should('include.text', Product)
    lp.addToCartButton().click()
    lp.addedButton().should('include.text', 'ADDED')

});


