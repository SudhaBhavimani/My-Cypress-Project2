import login from "../Pageobjects/loginPage";
import { data } from "../support/data.json";

Cypress. on('uncaught:exception', (err, runnable) => { return false; });
 
  
it('loginTest',()=>
  {
   
  cy.visit('https://demo.guru99.com/insurance/v1/index.php')
  cy.fixture('dataTest.json').then((data)=>{
    const ln = new login();

  ln.setUserName(data.email)
  ln.setPassword(data.password)
  ln.loginButton();
   
  })
  //const ln = new login();

  //ln.setUserName("kkbhavimani@gmail.com")
  //ln.setPassword("Sairam@123")
  //ln.loginButton();
  //ln.verifyLogin();

  
  })

  it('verifyloginTest',()=>
  {
   
  cy.visit('https://demo.guru99.com/insurance/v1/index.php')
  cy.fixture('dataTest.json').then((data)=>{
    const ln = new login();

  ln.setUserName(data.email)
  ln.setPassword(data.password)
  ln.loginButton();
  ln.verifyLogin();
  }) 
  })