
describe('actitime login',()=>{
	it("scroling",()=>{
		cy.visit("https://demo.actitime.com/login.do")
		cy.get('#username').type("trainee")
		cy.get(':nth-child(5) > :nth-child(1) > .textFieldsArea > .textFieldsTable > tbody > :nth-child(2) > td > .textField').type("trainee")
	cy.get('#loginButton > div').click()
	//cy.get('#closeProjectLightBoxBtn').click()
	cy.get('[align="right"] > .weekApprovalStatusControlOuterContainer > .controlInnerContainer > .changeWeekApprovalStatusControl > table > tbody > tr > .switcherImageCell > .switcherBackground').click()
	})
})