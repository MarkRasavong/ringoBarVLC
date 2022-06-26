///<reference types="cypress" />
///<reference types="@testing-library/cypress" />

describe('read airtable at index', () => {
  it('user can read hours coming from live airtable api', () => {
    //goes to main pages
    cy.visit("http://localhost:3000");
    //sees one of the days being rendered from main page
    cy.get('p').contains(/lunes/i).should('be.visible')
  })
})