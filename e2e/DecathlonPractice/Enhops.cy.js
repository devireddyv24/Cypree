/// <reference types="Cypress"/>
describe('Enhops page test',() =>{
	it('verify Enhops',() =>{
		cy.visit("https://www.enhops.com/")
		//cy.get('.d-md-block > .nav > :nth-child(4) > a',{force:true}).click(
			cy.get(".d-md-block > .nav > :nth-child(2) > [href='#']").click		
	})
	
})