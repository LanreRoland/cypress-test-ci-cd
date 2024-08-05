///<reference types = "cypress"/>

describe('Login Functionality', () => {
  beforeEach(() => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  });

  it('should login successfully with valid credentials', () => {
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
    cy.get("[name='password']").type('admin123');
    cy.get("button[type='submit']").click();
    cy.get('img[alt="client brand banner"]')//Validation assertsion
            .should('be.visible')
            .log('Application Login successful') 
  });

  it('should fail login with invalid credentials', () => {
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get("[name= 'password']").type('adminvvv')
    cy.get("button[type='submit']").click() 
          .should('be.visible')
            .log('Application Login unsuccessful')
   
  });

  it('should display error message on failed login', () => {
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get("[name= 'password']").type('adminvvv')
    cy.get("button[type='submit']").should('be.visible').click();
    cy.get('.oxd-alert-content > .oxd-text').should('be.visible').and('contain', 'Invalid credentials');
  });
});
