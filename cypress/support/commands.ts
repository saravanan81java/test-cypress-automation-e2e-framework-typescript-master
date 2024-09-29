// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
export {}
declare global {
       namespace Cypress {
         interface Chainable {
    /**
     * wait till webelement is visible up to 10sec
     * @example
     *    cy.waitTillElementVisible(locator)
     */
         waitTillElementVisible(locator),
     /**
     * Login function,enter username and password
     * @example
     *    cy.login(username,password)
     */
         login(email:string,password:string)
         }
       }
     }

 Cypress.Commands.add('login', (email:string, password:string) => { 
   cy.log(email)
   cy.log(password)
})

Cypress.Commands.add('waitTillElementVisible',function(locator:string){
   return cy.get(locator,{timeout:10000}).should('be.visible')
})

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
