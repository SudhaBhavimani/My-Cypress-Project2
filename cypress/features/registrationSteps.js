import { Given,Then,When } from "@badeball/cypress-cucumber-preprocessor";
import registration from "../Pageobjects/registrationPage";
const reg =new registration();

Given('Open guru99 demo project page',function()
{
    cy.visit('https://demo.guru99.com/insurance/v1/index.php')
})

Then('Enter user details',function(){
    reg.clickOnReg()
    reg.enterName(data.fname)
    reg.selectTitle(data.title)
    reg.surName(data.Lname)
    reg.phone(data.phone)
    reg.selectYear(data.year)
    reg.selectMonth(data.month)
    reg.selectDay(data.day)
    reg.licence(data.licence)
    reg.occupation(data.occupation)
    reg.address(data.address)
    reg.city(data.city)
    reg.country(data.country)
    reg.postCode(data.postCode)
    reg.password(data.password)
    reg.confirmPsw(data.password)
  
})

Then('Enter user details',function()
{
    reg.createuser()
})
