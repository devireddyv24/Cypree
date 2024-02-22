/// <reference types="Cypress"/>
describe('Enhops page test', () => {

	it('verify Enhops', () => {
		let x = 0;
		let y = 0;
		let z = 0;
		cy.visit('https://demo.opencart.com/admin/')
		//cy.get('.d-md-block > .nav > :nth-child(4) > a',{force:true}).click(
		cy.get('#input-username').type('demo')
		cy.get('#input-password').type('demo')
		cy.get('.btn').click()
		cy.get('.btn-close').click()
		cy.get('[href="#collapse-4"]').click()
		cy.get('#collapse-4 > :nth-child(1) > a').click()
		const web = []
		//const web1 = []

  cy.xpath("//table[@class='table table-bordered table-hover']//tbody//td[8]");
  
   
   
		cy.xpath("//table[@class='table table-bordered table-hover']//tbody//td[8]").each((item1, index, list) => {

			web[index] = Cypress.$(item1).text();
			//newSet.add(web[index])
			//cy.log(newSet.size)
			//web1[index]=Cypress.$(item1).text();
			
			//storing arrray values in set
			
		/*	const letters = new Set(web);
			let i = 0;
			
			//store set values into array
			for (const x of letters.values()) {
				web1[i] += x;

				i++;
			}
*/
			//web1=Array.from(newset)

		})
		//cy.log(web1)
		let i = 0
   
       //create map object
		const fruits = new Map();


		let n = null
		cy.xpath("//table[@class='table table-bordered table-hover']//tbody//td[6]").each((item, index, list) => {
			const f = new Map();
			// f.set(web[index],0)
			let result = Cypress.$(item).text().substring(0, 1);
			// cy.log(result)
			if (result == '$') {
				result = Cypress.$(item).text().substring(1);
				result = result.replace(/,/g, "");

				// Create Objects
				const date = web[index] + ' is';

				if (web[index] != n) {
					i = (+result);
					n = web[index]
					fruits.set(date, i)
				}
				else if (web[index] == n) {
					i = i + (+result)
					fruits.set(date, i)
				}

			}


			// cy.log(list.length+'index of list')

			/*   // let date=Cypress.$(item1).text();
				if(web[index]=='22/08/2023'){
			   // cy.log(web[index])
		 
		 let result = Cypress.$(item).text().substring(0,1);
		// cy.log(result)
		 if(result=='$')
		 {
			 result = Cypress.$(item).text().substring(1);
			 // cy.log(result)
			 x=x+(+result) 
			 //cy.log('total amount')
			 //cy.log(x)
		 }
		 }
		  if(web[index]=='21/08/2023'){
			 //   cy.log(web[index])
		 
		 let result = Cypress.$(item).text().substring(0,1);
		// cy.log(result)
		 if(result=='$')
		 {
			 result = Cypress.$(item).text().substring(1);
			 // cy.log(result)
			 y=y+(+result) 
			 //cy.log('total amount')
			 //cy.log(y)
		 }
		 }
		  if(web[index]=='20/08/2023'){
			   // cy.log(web[index])
		 
		 let result = Cypress.$(item).text().substring(0,1);
		// cy.log(result)
		 if(result=='$')
		 {
			 result = Cypress.$(item).text().substring(1);
			 // cy.log(result)
			 z=z+(+result) 
			 //cy.log('total amount')
			 //cy.log(z)
		 }
		 }*/
			if (index == list.length - 1) {
				let itr = fruits.entries();
				for (i = 0; i < fruits.size; i++) {
					cy.log('total amount on ' + itr.next().value+'$');

				}

				// cy.log('total amount of 22 is'+x)
				//  cy.log('total amount of 21 is'+y)
				//  cy.log('total amount of 20 is'+z)
			}
		})

	})

})