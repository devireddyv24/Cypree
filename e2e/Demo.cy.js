///<reference types="Cypress"/>

const cypress = require("cypress");

it('window handiling',()=>{
	
	cy.on("uncaught:exception", (e, runnable) => {
console.log("error", e);
console.log("runnable", runnable);
return false;
});

	cy.visit('https://demoqa.com/alertsWindows')
		//cy.get(':nth-child(3) > .element-list > .menu-list > #item-0 > .text').click()
		//let url=cy.get('#tabButton').invoke('removeAttr','target').then(cy.wrap);
		//cy.log(url);
		//url.click();
		cy.get(':nth-child(2) > .group-header > .header-wrapper').click()
		cy.get(':nth-child(2) > .element-list > .menu-list > #item-0 > .text').click()
		cy.get('#firstName').type('vamshi')
		cy.get('#lastName').type('dhar')
		cy.get('#userEmail').type('dhar@gmail.com')
		cy.get('#genterWrapper > .col-md-9 > :nth-child(1) > .custom-control-label').click()
		cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1) > .custom-control-label').click()
		cy.get('#dateOfBirthInput').click()
		cy.get('.react-datepicker__month-select').select(5)
		cy.get('.react-datepicker__year-select').select('2012')
		//let c=cy.get('.react-datepicker__year-select').then(cy.wrap);
      // cy.log(cypress.c.text());
		
		
		
})