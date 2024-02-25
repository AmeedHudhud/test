

describe('template spec', () => {
  
  it('passes', () => {
    cy.visit('https://example.cypress.io/todo#/')
    cy.get('h1')
  })
})