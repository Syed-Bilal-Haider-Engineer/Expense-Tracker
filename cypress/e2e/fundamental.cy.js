describe('template spec', () => {
  it('Contains correct header text', () => {
    cy.visit('http://192.168.0.101:5174/')
    cy.get('[data-test="expense-header"]').should('contain.text', "Expense Tracker")
  })

  it('Accordion works correctly', () => {
    cy.visit('http://192.168.0.101:5174/')
    
    cy.contains(/Text/i).should('not.be.visible')

    cy.get('[data-test="accordian-item-two"] div.accordion-header').click()

    cy.contains(/Text/i).should('be.visible')

    cy.get('[data-test="accordian-item-two"] div.accordion-header').click()

    cy.wait(500); 
    cy.contains(/Text/i).should('not.be.visible')

  })
})
