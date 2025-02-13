describe('Accessibility Tests', () => {
    beforeEach(() => {
        cy.visit('/'); 
        cy.injectAxe();
    });

    it('should have no detectable accessibility violations', () => {
        cy.checkA11y(); 
    });

    it('should have accessible labels for form inputs', () => {
        cy.get('label[for="attendees"]').should('exist');
        cy.get('#attendees').select('2');
        cy.get('label[for="id-0"]').should('exist');
        cy.get('label[for="id-1"]').should('exist');
        cy.get('label[for="id-company-name"]').should('exist');
        cy.get('label[for="ready"]').should('exist');
    });

    it("should be fully navigable with keyboard", () => {
        cy.visit("/");
      
        cy.get('body').realPress('Tab');
        cy.focused().should('have.attr', 'id', 'attendees');
      
        cy.get('#attendees').select('1');
        cy.realPress('Tab');
        cy.focused().should('have.attr', 'id', 'id-0');
      
        cy.get('#id-0').type('Rossi');
        cy.get('#comapnyYes').click();
        cy.realPress('Tab');
        cy.focused().should('have.attr', 'id', 'id-company-name');
      
        cy.get('#id-company-name').type('Subito.it');
        cy.get('#accomodationNo').click();
        cy.realPress('Tab');
        cy.focused().should('have.attr', 'id', 'ready');
      
        cy.get('#ready').click();
        cy.realPress('Tab');
        cy.focused().should('contain', 'Complete Registration');
      });
      

    it('should have alternative text for images', () => {
        cy.get('img').each(($img) => {
            cy.wrap($img).should('have.attr', 'alt').and('not.be.empty');
        });
    });
});
