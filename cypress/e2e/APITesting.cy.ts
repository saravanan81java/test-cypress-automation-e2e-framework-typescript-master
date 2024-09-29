import data from "../fixtures/testdataJson.json"

describe('API test', () => {
let message
//let  responseValue;
let saveValues={
    responseValue:"",
    set saveResponse(value){
        this.responseValue=value;
    },
    get saveResponse(){
        return this.responseValue;
    }
}
 
  it('Scenario_1', () => {
/*
    const data ={
      "name":"Learn Appium Automation with Javascript",
      "isbn":"bcde",
      "aisle":"22s1",
      "author":"John foe"
    }
*/
    cy.request('POST','http://216.10.245.166/Library/Addbook.php',data
    ).then(function(response){
       expect(response.status).to.eq(200)
      })
  })
  
  it('Scenario_2',()=>{
     cy.request({
      method:"GET",
      url:"http://216.10.245.166/Library/GetBook.php",
      qs: {ID:'22s1'},
      failOnStatusCode: false,
    })
     .then(function(response){
        expect(response.status).to.eq(404)
     })
  })
   
  it('Scenario_3',()=>{

    const values={
      ContentType: 'application/json'
    }

    cy.api({
     method:"GET",
     url:"http://216.10.245.166/Library/GetBook.php",
     qs: {ID:'22s1'},
     headers:values,
     failOnStatusCode: false,
   })
    .then(function(response){
       expect(response.status).to.eq(404)
    })
 })

 it('Scenario_4', () => {
  
  var resData ={
    "Msg": "successfully added",
    "ID": "bcde22s1"
  }
  /*
  const data ={
    "name":"Learn Appium Automation with Javascript",
    "isbn":"bcde",
    "aisle":"22s1",
    "author":"John foe"
  } */
  cy.api('POST','http://216.10.245.166/Library/Addbook.php',data
  ).then(function(response){
     expect(response.status).to.eq(200)
     //expect(response.body).have.property('Msg').to.eq(resData.Msg)
     expect(response.body.Msg).to.eq(resData.Msg)
     expect((response.body)).have.property('ID').to.be.a('String')
     message =response.body.Msg
     saveValues.saveResponse=response.body;
     cy.log("Inside loop: "+message)
    })
    .then(function(){
      cy.log("Outside loop: "+message)
    })
   
})

it("Scenario_5",()=>{

  cy.log("Response of Scenario 4: ")
  cy.log(saveValues.saveResponse)

})

it("Scenario_6",()=>{

  cy.log("Test the Json file: "+data.name)
})
})
