import { Given,Then,When } from "@badeball/cypress-cucumber-preprocessor";
import login from "../../Pageobjects/loginPage";

const ln = new login();

Given('Open guru99 demo project page',function()
{
    cy.visit('https://demo.guru99.com/insurance/v1/index.php')
})

Then('Enter user name',function()
{
    ln.setUserName(data.email)
})
Then('Enter password',function()
{
    ln.setPassword(data.password)
})
Then('Click on login button',function()
{
    ln.loginButton();
})