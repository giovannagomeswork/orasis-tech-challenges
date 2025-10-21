// This file contains custom Cypress commands to enhance test functionality.

// Example of a custom command for logging in
Cypress.Commands.add('login', (username, password) => {
    cy.get('[data-test=username]').type(username);
    cy.get('[data-test=password]').type(password);
    cy.get('[data-test=login-button]').click();
});

// Example of a custom command for logging out
Cypress.Commands.add('logout', () => {
    cy.get('[data-test=logout-button]').click();
});

// Add more custom commands as needed to enhance test functionality.