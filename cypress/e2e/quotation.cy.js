import quotation from "../Pageobjects/quotation"

Cypress. on('uncaught:exception', (err, runnable) => { return false; });
 
describe('my test cases', () =>{

it('quotaionSave',()=>
{
    cy.visit('https://demo.guru99.com/insurance/v1/header.php')
    cy.fixture('quotationTest.json').then((data)=>
    {
 
    const quot = new quotation();
    
    quot.clickOnReqQuot()
    quot.selectCover(data.breakDownCover)
    quot.setRegistration(data.registration)
    quot.setIncident(data.incident)
    quot.setAnnual(data.annualMileage)
    quot.setEst(data.estimation)
    quot.setParkingLocation(data.parking)
    quot.selectYear(data.year)
    quot.selectMonth(data.month)
    quot.selectDay(data.day)
    quot.clickOnSave()
    //quot.verifyQuot()
    
})
})

it('VerifyquotaionSave',()=>
{
    cy.visit('https://demo.guru99.com/insurance/v1/header.php')
    cy.fixture('quotationTest.json').then((data)=>
    {
 
    const quot = new quotation();
    
    quot.clickOnReqQuot()
    quot.selectCover(data.breakDownCover)
    quot.setRegistration(data.registration)
    quot.setIncident(data.incident)
    quot.setAnnual(data.annualMileage)
    quot.setEst(data.estimation)
    quot.setParkingLocation(data.parking)
    quot.selectYear(data.year)
    quot.selectMonth(data.month)
    quot.selectDay(data.day)
    quot.clickOnSave()
    quot.verifyQuot()
    
})
})

it('ResetQuot',()=>
{
    cy.visit('https://demo.guru99.com/insurance/v1/header.php')
    cy.fixture('quotationTest.json').then((data)=>
    {
 
    const quot = new quotation();
    
    quot.clickOnReqQuot()
    
    quot.selectCover(data.breakDownCover)
    quot.setRegistration(data.registration)
    quot.setIncident(data.incident)
    quot.setAnnual(data.annualMileage)
    quot.setEst(data.estimation)
    quot.setParkingLocation(data.parking)
    quot.selectYear(data.year)
    quot.selectMonth(data.month)
    quot.selectDay(data.day)
    //quot.clickOnSave()
    quot.verifyReset()
    
})
})

})

 