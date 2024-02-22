describe('demo practice',()=>{
	before('lunch browser',()=>{
		//cy.visit('https://enhops.com/')
		cy.visit('https://demoqa.com/nestedframes',{failOnStatusCode:false})
	})
	it.skip('testing the enopes website',()=>
	{
		cy.log("demo")
		cy.contains('Contact').click()
		cy.lost(Careers)
	
	})
	it('practice frames',()=>{
		cy.get('#frame1').click()
	})
})