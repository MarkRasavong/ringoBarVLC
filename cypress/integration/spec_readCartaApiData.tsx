///<reference types="cypress" />
///<reference types="@testing-library/cypress" />

describe('read airtable at /carta', () => {
  it('user can read and interact with menu', () => {
      //goes to main pages
      cy.visit("http://localhost:3000/carta");
      //sees one of the days being rendered from main page
      cy.findByText('pizzas').should('be.visible').click({force: true})
      cy.findByRole('heading', {  name: /margherita/i}).should('be.visible');
  })
})