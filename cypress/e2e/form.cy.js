describe('Form', () => {
    beforeEach(() => {
      cy.visit('http://192.168.0.101:5173/')
    })

    it('Test expense form', () => {
      cy.contains(/Text/i).should('not.be.visible')
      cy.get('[data-test="accordian-item-two"] .accordion-header').click()
      cy.contains(/Text/i).should('be.visible')
      cy.contains(/50/i).should('not.exist')
      cy.getData("subscribe-title").type("Grossery")
      cy.getData("subscibre-input").type("50")
      cy.getData("subscribe-btn").click()
      cy.contains(/50/i).should('exist')
    })
  })
  