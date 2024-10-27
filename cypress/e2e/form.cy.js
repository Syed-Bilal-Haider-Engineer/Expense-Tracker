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

    it('Intercept',() => {
      cy.get('[data-test="accordian-item-two"] .accordion-header').click()
        cy.intercept("GET", 'https://fakestoreapi.com/products?limit=5', (req) => {
          return req.json();
        })
        cy.getData("subscribe-btn").click()
    })

    it.only("Grudge-list-test",() => {
      cy.getData('Grudge-list').within(()=>{
        cy.get('li').should('have.length',0)
       })
      cy.get('[data-test="accordian-item-two"] .accordion-header').click()
      cy.getData('subscribe-form').find("input").as("transaction-form")
      cy.contains(/50/i).should('not.exist')
      cy.get("@transaction-form").first().type("Grossery")
      cy.get("@transaction-form").eq(1).type("50")
      cy.getData("subscribe-btn").click()
      cy.getData('Grudge-list').within(()=>{
        cy.get('li').should('have.length',1)
       })
     })
  })
  