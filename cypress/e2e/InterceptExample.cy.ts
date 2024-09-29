describe('Intercept Scenarios',()=>{

    it('Scenario_1',()=>{

        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

        cy.intercept({
            url:'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
            method:'GET',
        },{
            statusCode:200,
            body:[{"book_name":"null","isbn":"SPY40","aisle":"2529857"}]
        })
    .as('books')
    cy.get('button[class="btn btn-primary"]').click()
    cy.wait('@books')
    cy.get('p').should('have.text','Oops only 1 Book available')

})
})