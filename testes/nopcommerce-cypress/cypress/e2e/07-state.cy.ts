// cypress/e2e/07-state.cy.ts

describe('Error and Empty States', () => {
    beforeEach(() => {
        // Visit the relevant page before each test
        cy.visit('/admin/customers'); // Adjust the URL as necessary
    });

    it('should display an error message for invalid input', () => {
        // Simulate an invalid input scenario
        cy.get('[data-cy=customer-name-input]').type(''); // Assuming there's an input for customer name
        cy.get('[data-cy=submit-button]').click(); // Assuming there's a submit button

        // Assert that the error message is displayed
        cy.get('[data-cy=error-message]').should('be.visible').and('contain', 'This field is required');
    });

    it('should display an empty state message when no customers are found', () => {
        // Simulate the scenario where no customers exist
        cy.intercept('GET', '/api/customers', { body: [] }).as('getCustomers'); // Adjust the API endpoint as necessary
        cy.wait('@getCustomers');

        // Assert that the empty state message is displayed
        cy.get('[data-cy=empty-state-message]').should('be.visible').and('contain', 'No customers found');
    });

    it('should validate form fields before submission', () => {
        // Attempt to submit the form without filling required fields
        cy.get('[data-cy=submit-button]').click();

        // Assert that validation messages are displayed
        cy.get('[data-cy=error-message]').should('be.visible').and('contain', 'Please fill out this field');
    });
});