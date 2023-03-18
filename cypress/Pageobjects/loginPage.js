class login
{
txtUser="#email";
txtPassword="#password";
btn=":nth-child(3) > .btn";
loginMsg="#tabs-1 > h2";

    setUserName(username)
    {
        cy.get(this.txtUser).type(username)
    }
    setPassword(password)
    {
        cy.get(this.txtPassword).type(password)
    }
    loginButton()
    {
        cy.get(this.btn).click();
    }
    verifyLogin()
    {
        cy.wait(3000)
        cy.url().should('eq', 'https://demo.guru99.com/insurance/v1/index.php')
        //cy.title().should('eq','Insurance Broker System')
      
        //cy.url().should('include', '/header');
        //cy.get(this.loginMsg).should('have.value',"Broker Insurance WebPage")
    }
}

export default login;
