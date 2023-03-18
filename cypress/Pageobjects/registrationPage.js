class registration {
    // setUserName(username)
    //{
     //   cy.get(this.txtUser).type(username)
    //}

    clickOnReg()
    {
        cy.get('a.btn').click()
    }
    enterName(username)
    {
        cy.get('#user_firstname').type(username).should('have.value',username)
    }
    selectTitle()
    {
  cy.get('#user_title')
  .select('Mrs')
  .should('have.value','Mrs')

  
         
    }
    surName(surname)
    {
        cy.get('#user_surname').type(surname).should('have.value',surname)
    }

    phone(mobile)
    {
        cy.get('#user_phone').type(mobile).should('have.value',mobile)
  
    }
     
    selectYear(year)
    {
  cy.get('#user_dateofbirth_1i')
  .select(year)
  .should('have.value',year)
    }
  selectMonth(month)
  {
    cy.get('#user_dateofbirth_2i')
    .select(month)
    .should('have.value',3)
    
  }

  selectDay(day)
  
  
  {
    cy.get('#user_dateofbirth_3i')
  .select(day)
  .should('have.value',day)
 

    }
  

    licence(valid)
    {
  cy.get('#user_licenceperiod')
  .select(valid)
  .should('have.value',valid)
    }

    occupation(job)
    {
        cy.get('#user_occupation_id')
  .select(job)

    }
    address(adr)
    {
        cy.get('#user_address_attributes_street').type(adr)
    }
    city(cty)
    {
        cy.get('#user_address_attributes_city').type(cty)
    }
     country(cntry)
     {
        cy.get('#user_address_attributes_county').type(cntry)
     }
     postCode(code)
     {
        cy.get('#user_address_attributes_postcode').type(code)
     }
    
     email()
     
     {
        const uuid = () => Cypress._.random(0, 1e6)
        const id = uuid()
        const testname = `test${id}@gmail.com`
        //cy.get('input').type(testname);
        
        cy.get('#user_user_detail_attributes_email').type(testname)
     }
     password(psw)
     {
        cy.get('#user_user_detail_attributes_password').type(psw)
     }
     confirmPsw(psw)
     {
        cy.get('#user_user_detail_attributes_password_confirmation').type(psw)
     }

     createuser()
     {
      cy.get('[name="submit"]').click()
     }
}
export default registration;
