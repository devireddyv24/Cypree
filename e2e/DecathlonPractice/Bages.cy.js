///<reference types="cypress"/>
describe('BagsFunctions',() =>{
	it('Verify bagsfunctionn title',() =>{
		cy.visit("https://www.decathlon.sg/")
		cy.get('[data-testid="navbar-user"]').click()
		/*//cy.visit('https://www.flipkart.com/')
		cy.visit('https://www.opencart.com/')
		console.log(cy.title());
		//cy.get('[data-testid="navbar-user"]').first().click();
		//cy.xpath("//div[text()='Mobiles']").click()
		//console.log(cy.title());
		cy.get('.nav > :nth-child(3) > a').click()
		cy.get(':nth-child(12) > a').click()
		cy.get(':nth-child(5) > :nth-child(1) > section > .extension-preview > a > .extension-description').click()*/
	})
})