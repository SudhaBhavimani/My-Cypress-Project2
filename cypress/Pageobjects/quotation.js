//import { includes } from "cypress/types/lodash"

//import { includes } from "cypress/types/lodash"

class quotation
{
    clickOnReqQuot()
    {
        cy.contains('Request Quotation').click()
    }
    selectCover(coverTxt)
    {
        cy.get('#quotation_breakdowncover')
        .select(coverTxt)
        .should('have.value',2)
    }
    setIncident(incType)
    {
        cy.get('#quotation_incidents').type(incType)
    }
    setRegistration(regData)
    {
        cy.get('#quotation_vehicle_attributes_registration').type(regData)
    }
    setAnnual(annualData)
    {
        cy.get('#quotation_vehicle_attributes_mileage').type(annualData)
    }
    setEst(est)
    {
        cy.get('#quotation_vehicle_attributes_value').type(est)
    }
    setParkingLocation(loc)
    {
        cy.wait(300)
        cy.get('#quotation_vehicle_attributes_parkinglocation')
        .select(loc)
        .should('have.value',loc)
    }
    selectYear(year)
    {
  cy.get('#quotation_vehicle_attributes_policystart_1i')
  .select(year)
  .should('have.value',year)
    }
  selectMonth(month)
  {
    cy.get('#quotation_vehicle_attributes_policystart_2i')
    .select(month)
    .should('have.value',3)
    
  }

  selectDay(day)
  {
cy.get('#quotation_vehicle_attributes_policystart_3i')
  .select(day)
  .should('have.value',day)
 }
 clickOnSave()
 {
    cy.get('#new_quotation > .actions > .btn-success').click()
}
verifyQuot()
{
    cy.get('body > :nth-child(1)').should('contain.text','You have saved this quotation!')
     
}
verifyReset()
{
    cy.get('#resetquote').click()
}

calculatePremium()
{ 
    cy.get('.btn-default').click()
    cy.get('#calculatedpremium').should('contain.text','Premium: £1000')
}

}

export default quotation;