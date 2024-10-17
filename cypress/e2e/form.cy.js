describe('Form', () => {
    beforeEach(() => {
      cy.visit('http://192.168.0.101:5173/')
    })

    it('Test expense form', () => {
      cy.get('[data-test="accordian-item-two"] .accordion-header').click()
      cy.getData('subscribe-form').find("input").as("transaction-form")
      cy.contains(/50/i).should('not.exist')
      cy.get("@transaction-form").first().type("Grossery")
      cy.get("@transaction-form").eq(1).type("50")
      cy.getData("subscribe-btn").click()
      cy.contains(/50/i).should('exist')
    })
  })
  