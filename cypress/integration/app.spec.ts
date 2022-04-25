/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />
// cypress/integration/app.spec.js

describe('Navigation', () => {
	it('should navigate to the about page', () => {
		// Start from the index page
		cy.visit('http://localhost:3000/')

		// Find a link with an href attribute containing "about" and click it
		cy.get('a[href*="about"]').click()

		// The new url should include "/about"
		cy.url().should('include', '/about')

		// The new page should contain an h1 with "About page"
		cy.findByRole('heading', { name: /about page/i }).contains(/about page/i)
	})
})

const asModule = {}
export default asModule
