describe('Sign-up page', () => {
  it('successfully load', () => {
    cy.visit('https://portal.hilalinvest.com/auth/signup')
    cy.get('input[name="legalName"]').type('Abdul Rasheed');
    cy.get('input[name="phoneNumber"]').type('3232900066');
    cy.get('input[name="email"').type('abdul.rasheed2511@gmail.com')
   // cy.get('.btn').click()
  })
})

/*context('Windows', () => {
  beforeEach('passes', () => {
   
    cy.visit('https://d24h4q4m8bv73t.cloudfront.net/auth/signin.html')})
   
    it('open hilal invest in ipad-mini', () => {
      
  
      // Corrected syntax for cy.get commands
      cy.wait(4000)
      cy.get('input[name="phoneNumber"]').type(3422929867)
        cy.get('button[type="button"]').click();
        const password = '75727'; // Replace this with your actual 5-digit password
for (let i = 0; i < password.length; i++) {
  cy.get('.input-group > :nth-child(' + (i + 1) + ')').type(password[i]);
}
  cy.wait(4000)
    });
   
   it('Signup Process',() => {
    cy.viewport(1460, 1100)
    cy.get('.fw-bold').click();
    cy.get('.needs-validation > :nth-child(1) > .form-control').type('Abdul Rasheed')
    cy.get('.phone_text > .form-control').type('3232900066')
    cy.get('#useremail').type('abdul.rasheed2511@gmail.com')
    cy.get('.btn').click()
    for (let i = 1; i <= 4; i++) {
      cy.get('.input-group > :nth-child(' + i + ')').type('1');
    }
    cy.get('.btn').click();
    cy.wait(4000)
    for (let i = 1; i <= 5; i++) {
      cy.get('.input-group > :nth-child(' + i + ')').type(1);
    }
    cy.get('.btn').click()
    cy.wait(4000)
    for (let i = 1; i <= 5; i++) {
      cy.get('.input-group > :nth-child(' + i + ')').type('1');
      
    }
    cy.get('.btn').click();
    cy.get('.styles_skipBtn__r4AWy').click();
    cy.get('.btn').click()
    cy.wait(4000)
    cy.get('.btn').click()
    cy.wait(4000)
    cy.get('.styles_listUl__r5zjv > :nth-child(1)').click()
    cy.wait(4000)
    cy.get('.styles_listUl__r5zjv > :nth-child(1)').click()
    cy.wait(4000)
    cy.get('.styles_listUl__r5zjv > :nth-child(2)').click()
    cy.wait(4000)
    cy.get('.styles_listUl__r5zjv > :nth-child(3)').click()
    cy.wait(4000)
    cy.get('.styles_listUl__r5zjv > :nth-child(2)').click()
    cy.wait(4000)
    cy.get('.styles_listUl__r5zjv > :nth-child(1)').click()
    cy.wait(4000)
    cy.get('.styles_listUl__r5zjv > :nth-child(1)').click()
    cy.wait(4000)
    cy.get('.btn').click()
    cy.wait(4000)
    cy.get(':nth-child(7) > .dropdown > .nav-link > .tab_name').click()
    cy.wait(4000)
    cy.get(':nth-child(1) > .btn').click()
    cy.wait(4000)
    cy.get('.PersonalInfo_FormDev__EGJx2 > :nth-child(1) > :nth-child(1) > .form-control').type('Abdul Rasheed')
    cy.get(':nth-child(1) > :nth-child(2) > .form-control').type('Muhammad Iftikharuddin')
    cy.get(':nth-child(1) > :nth-child(3) > .form-control').type('Farhana Begum')
    cy.get('#gender > .SelectCustom_LabelValue__nu7Z0').click()
    cy.get('.SelectCustom_ulList__05F9P > :nth-child(1)').click()
    cy.get('#religion > .SelectCustom_LabelValue__nu7Z0').click()
    cy.get('.SelectCustom_ulList__05F9P > :nth-child(1)').click()
    cy.get('.SelectCustom_LabelValue__nu7Z0').dblclick()
    cy.get('.SelectCustom_ulList__05F9P > :nth-child(2)').dblclick()
    cy.wait(4000)
    cy.get('#dateOfBirth').click()
    cy.wait(4000)

    



    


   })
    
  
})*/