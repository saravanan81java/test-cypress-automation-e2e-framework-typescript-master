export class ChooseCountryPage{

    chooseCountryLabel(){
        return cy.contains('Choose Country')
    }

    dropDown(){
        return cy.get('select')
    }

    termsAndConditionCheckbox(){
        return cy.get('input[type="checkbox"]')
    }

    ProceedButton(){
        return cy.contains('Proceed')
    }


}