describe('Test E2E Form Steps', () => {
    beforeEach(() => {
        cy.visit('/'); 
    });

    it("Dovrebbe visualizzare Step1 all'avvio", () => {
        cy.contains('Step 1').should('be.visible');
    });

    it("Dovrebbe passare da Step1 a Step2 completando i campi richiesti", () => {
        cy.get('#attendees').select('2');
        cy.get('#id-0').type('Mario Rossi');
        cy.get('#id-1').type('Luigi Bianchi');
        cy.get('#step2').should('have.class', 'active');
    });

    it("Dovrebbe passare da Step2 a Step3 selezionando le opzioni richieste", () => {
        cy.get('#attendees').select('1');
        cy.get('#id-0').type('Mario Rossi');
        cy.get('#step2').should('have.class', 'active');

        cy.get('#comapnyYes').click();
        cy.get('#id-company-name').type('Tech Corp');
        cy.get('#accomodationNo').click();

        cy.get('#step3').should('have.class', 'active');
    });

    it("Dovrebbe permettere di completare la registrazione selezionando la checkbox", () => {
        cy.get('#attendees').select('1');
        cy.get('#id-0').type('Mario Rossi');
        cy.get('#comapnyNo').click();
        cy.get('#accomodationNo').click();
        cy.get('#ready').click();

        cy.get('button').contains('Complete Registration').should('not.be.disabled').click();
        cy.contains('Step 1').should('be.visible'); // Verifica che il form si resetti
    });

    describe('Complete Registration Test', () => {
        it('should complete the registration and reset the form', () => {
          
          cy.get('#attendees').select('3');
          cy.get('#id-0').type('John Doe');
          cy.get('#id-1').type('Jane Smith');
          cy.get('#id-2').type('Alice Johnson');
      
          cy.get('.greenCheck img').should('have.class', 'active');
      
          cy.get('input[name="comapny"][value="yes"]').check();
          cy.get('#id-company-name').type('Example Corp');
      
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
      
});
