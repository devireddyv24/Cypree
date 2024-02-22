///<reference types="Cypress"/>




it('amzon demo practice',()=>{
	cy.visit('https://www.amazon.in/')
	cy.get('#twotabsearchtextbox').type('mi mobiels')
cy.get('#nav-search-submit-button').click()
cy.xpath("//span[contains(text(),'Redmi')]").each((cell,i,list) =>{
	let c=Cypress.$(cell).text();
	cy.log(c);
	//cell.click();
})
 let f=cy.get('[data-index="4"] > .sg-col-inner > .s-widget-container > [data-action="puis-card-container-declarative"] > .puis-card-container > :nth-child(1) > :nth-child(1) > .puisg-col-8-of-16 > :nth-child(1) > .a-spacing-small > .puis-padding-right-small > .a-spacing-none > .a-link-normal > .a-size-medium').invoke('text').then(cy.wrap);
cy.log(f)
})