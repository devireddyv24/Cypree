describe("Zimyo login",()=>{
	let d;
	it("Zimyo login",()=>{
		cy.visit(d.url)
		cy.get(':nth-child(1) > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type(d.email)
		cy.get('#outlined-required').type(d.password,'{enter}')
		cy.get('#login > .MuiButton-label').click()
		cy.get('#Request > .MuiTab-wrapper > .wh-100 > .w-100').click()
		cy.get('#Timesheet > .MuiTab-wrapper > .wh-100 > .w-100 > .MuiTypography-root').click()
		cy.clearAllCookies()
		cy.get('.MuiAvatar-img').click()
		
	})
	before("featch the data from external file",()=>{
		cy.fixture("Zimyo").then((data)=>{
			d=data
		})
	})
})