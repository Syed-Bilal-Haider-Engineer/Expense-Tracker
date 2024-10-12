describe('template spec', () => {

  beforeEach(()=>{
    cy.visit('http://192.168.0.101:5173/')
  })
  it('Contains correct header text', () => {
    cy.getData("expense-header").should('contain.text', "Expense Tracker")
  })

  it('Accordion works correctly', () => {
    cy.contains(/Text/i).should('not.be.visible')

    cy.get('[data-test="accordian-item-two"] div.accordion-header').click()

    cy.contains(/Text/i).should('be.visible')

    cy.get('[data-test="accordian-item-two"] div.accordion-header').click()

    cy.wait(500); 
    cy.contains(/Text/i).should('not.be.visible')

  })
})
