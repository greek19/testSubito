describe('Test E2E Form Steps', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it("Should display Step1 at startup.", () => {
        cy.contains('Step 1').should('be.visible');
    });

    it("Should go from Step1 to Step2 by completing the required fields", () => {
        cy.get('#attendees').select('2');
        cy.get('#id-0').type('Rossi');
        cy.get('#id-1').type('Bianchi');
        cy.get('#step2').should('have.class', 'active');
    });

    it("Should go from Step2 to Step3 by selecting the required options", () => {
        cy.get('#attendees').select('1');
        cy.get('#id-0').type('Rossi');
        cy.get('#step2').should('have.class', 'active');

        cy.get('#comapnyYes').click();
        cy.get('#id-company-name').type('Subito.it');
        cy.get('#accomodationNo').click();

        cy.get('#step3').should('have.class', 'active');
    });

    it("Should allow to complete the registration by selecting the checkbox", () => {
        cy.get('#attendees').select('1');
        cy.get('#id-0').type('Rossi');
        cy.get('#comapnyNo').click();
        cy.get('#accomodationNo').click();
        cy.get('#ready').click();

        cy.get('button').contains('Complete Registration').should('not.be.disabled').click();
        cy.contains('Step 1').should('be.visible');
    });

    it('should complete the registration and reset the form', () => {

        cy.get('#attendees').select('3');
        cy.get('#id-0').type('Rossi');
        cy.get('#id-1').type('Bianchi');
        cy.get('#id-2').type('Verdi');

        cy.get('.greenCheck img').should('have.class', 'active');

        cy.get('input[name="comapny"][value="yes"]').check();
        cy.get('#id-company-name').type('Subito.it');

        cy.get('input[name="accomodation"][value="1"]').check();

        cy.get('.greenCheck img').should('have.class', 'active');

        cy.get('#ready').check();
        cy.get('button[type="button"]').click();

        cy.get('#attendees').should('have.value', '0');
        cy.get('#id-company-name').should('have.value', '');
        cy.get('input[name="accomodation"]:checked').should('not.exist');

        cy.get('#step2').should('have.class', 'lowerOpacity');
        cy.get('#step3').should('have.class', 'lowerOpacity');

        cy.get('#ready').should('not.be.checked');
    });

});
