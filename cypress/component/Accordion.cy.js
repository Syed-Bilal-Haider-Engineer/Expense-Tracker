import Balance from "../../src/components/Balance.vue";

describe('Accordion.cy.js', () => {
  it('playground', () => {
    cy.mount(Balance, { props: { total: 40 } });
    cy.get('[data-test="Balance-record"]').within(()=>{
      cy.get('[data-test^="balance-item"]').should('have.length',2)
    })
  });
});
