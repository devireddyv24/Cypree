///<reference types="cypress"/>
it('google search',() =>{
	cy.visit('https://www.amazon.in/')
	cy.get('#nav-link-accountList-nav-line-1').click()
	cy.get('#ap_email').type('devireddyv22@gmail.com')
	cy.get('.a-button-inner > #continue').click()
	cy.get('#ap_password').type('4221131989')
	cy.get('#signInSubmit').click()

})