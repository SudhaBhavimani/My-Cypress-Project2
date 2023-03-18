import registration from "../Pageobjects/registrationPage";
import login from "../Pageobjects/registrationPage";
//<reference type="Cypress"/>

Cypress. on('uncaught:exception', (err, runnable) => { return false; });

 

it.only('registrationPom',()=>
{
  cy.visit('https://demo.guru99.com/insurance/v1/index.php')
  cy.fixture('registorTest.json').then((data)=>{
 
  const rg = new registration()

  rg.clickOnReg()
  rg.selectTitle()
  rg.enterName(data.fname)
  rg.surName(data.Lname)
  rg.phone(data.Phone)
  rg.selectYear(data.year)
  rg.selectMonth(data.month)
  rg.selectDay(data.day)
  rg.licence(data.licence)
  rg.occupation(data.occupation)
  rg.address(data.address)
  rg.city(data.city)
  rg.country(data.country)
  rg.postCode(data.postCode)
  rg.email()
  rg.password(data.password)
  rg.confirmPsw(data.password)
  rg.createuser();

})
})
  
 
  
