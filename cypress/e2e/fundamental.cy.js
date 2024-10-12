describe('template spec', () => {
  it('Contains correct header text', () => {
    cy.visit('http://192.168.0.101:5173/')
    cy.get('[data-test="expense-header"]').contains(/Expense Tracker/i)
    cy.get('[data-test="expense-header"]').should('contain.text',"Expense Tracker")
  })
})