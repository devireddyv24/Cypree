///<reference types="cypress"/>

describe('facebook',()=>{
	let d;
	before(function(){
		cy.fixture('example').then((data)=>{
			cy.log(data.email)
			d=data
			
			//cy.log(this.data.email)
			/*cy.visit('https://www.facebook.com/')
			cy.get('.fb_logo').screenshot("facebook_logo")*/
		//cy.log(this.d.email)
		/*cy.get('[data-testid="royal_email"]').type(this.d.email)
		cy.get('[data-testid="royal_pass"]').type(this.d.psw,'{enter}')*/
		})
		})
		it('functions testing',() =>{
			cy.visit('https://www.facebook.com/')
			cy.get('.fb_logo').screenshot("facebook_logo")
			cy.get('[data-testid="royal_email"]').type(d.email)
		cy.get('[data-testid="royal_pass"]').type(d.psw,'{enter}')
		cy.log(d.email)
		cy.get('[data-testid="royal_login_button"]').click()
		})
	
})