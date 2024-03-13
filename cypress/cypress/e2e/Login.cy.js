context('Window', () => {
  beforeEach(() => {
    cy.visit('https://d24h4q4m8bv73t.cloudfront.net/auth/signin.html');
  });

  it('open hilal invest in ipad-mini', () => {
    cy.viewport("ipad-mini");

    // Corrected syntax for cy.get commands
    cy.get('.phone_text  .form-control').type('03232900066');
    cy.get('.needs-validation > .mt-3').click();
    for (let i = 1; i <= 5; i++) {
      cy.get('.input-group > :nth-child(' + i + ')').type('1');
    }
    cy.get('.opt-form > :nth-child(3)').click();


  });
});
