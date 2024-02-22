describe('template spec', () => {
  it('passes', () => {
   // cy.visit('https://example.cypress.io')
   cy.visit('https://www.decathlon.sg/')
   cy.get(':nth-child(2) > .css-1475vs3 > [data-testid="imgTextLinkThree-anchorTag"] > [data-testid="imgTextLinkThree-text-box"] > .css-1kw0tju > [data-testid="imgTextLinkThree-text-wrap"] > [data-testid="imgTextLinkThree-text"]').click();
  })
})