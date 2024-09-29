const { Assertion } = require("chai")

import * as lists from '@fixtures/example.json'
import * as searchValues from '@fixtures/testData.json'

import { HomepageObjects } from "./PageObjects/homePage"

const lp = new HomepageObjects()

describe('First test',()=>{

beforeEach(function(){
    cy.viewport(1024, 768)
})

it('Scenario 1',()=>{
       
       cy.visit("")
       cy.fixture('example').then(function(data){
       lp.searchfield().type(data.searchData1)
        cy.waitTillElementVisible(lp.searchBtn)
        cy.get('.product-action > button').click()
        cy.get('tbody > :nth-child(1) > :nth-child(3)').should('have.text','1')
        cy.get('tbody > :nth-child(2) > :nth-child(3)').should('have.text','72')
       })
    })
    it('Scenario 2',()=>{
      cy.visit("")
      lp.searchfield().type(lists.searchData2)
      cy.log(lists.searchData2)
      cy.wait(2000)
      cy.get('.product-action > button').invoke('show').click()
    })
}
)