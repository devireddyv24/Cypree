const cypress = require("cypress");
const { wrap } = require("cypress/types/lodash");

describe('demo qa applicatio testing',()=>{
	
	it.skip('test the frame',()=>{
		cy.on("uncaught:exception", (e, runnable) => {
console.log("error", e);
console.log("runnable", runnable);
return false;
});

		cy.visit('https://demoqa.com/alertsWindows')
		cy.get(':nth-child(3) > .element-list > .menu-list > #item-1 > .text').click()
		cy.get(':nth-child(3) > .element-list > .menu-list > #item-2 > .text').click()
		cy.frameLoaded('#frame1');
		cy.wait(3000)
		let frame=
		cy.iframe('#frame1').then(cy.wrap);
	
	let text=	cy.iframe('#frame1').find('#sampleHeading').invoke('text').then(cy.wrap);
	cy.log(text)
			
			//cy.log($b.text())
		
	   //.xpath("//h1[text()='This is a sample page']").then(a);
		
		
	})
	
	
	
	it('Windo handiling',()=>{
		
		cy.on("uncaught:exception", (e, runnable) => {
console.log("error", e);
console.log("runnable", runnable);
return false;
});
		cy.visit('https://demoqa.com/alertsWindows')
		cy.get(':nth-child(3) > .element-list > .menu-list > #item-0 > .text').click()
	//	let url=cy.get('#tabButton').invoke('attr','href').then(cy.wrap);
		//cy.log(url);
	})
})