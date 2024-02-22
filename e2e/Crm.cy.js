describe('hundle frames',()=>{
	let d;
	before('navigate to url',()=>{
		cy.fixture("crm").then(function(data){
			d=data
			cy.visit(d.url)
		})
		
	})
	beforeEach('login to test',()=>{
		cy.log(d.email)
		cy.xpath("//input[@name='username']").type(d.email)
		cy.xpath("//input[@name='password']").type(d.password)
		cy.xpath("//input[@value='Login']").click();
	})
	it('login',()=>{
		cy.log(d.url)

		
	})
})