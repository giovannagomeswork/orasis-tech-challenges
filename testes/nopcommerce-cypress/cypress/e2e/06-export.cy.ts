// cypress/e2e/06-export.cy.ts

describe('Export Data Tests', () => {
    beforeEach(() => {
        cy.login(); // Assuming a custom command for login
        cy.visit('/admin/export'); // Navigate to the export page
    });

    it('should export customer data in CSV format', () => {
        cy.get('[data-testid="export-customers"]').click(); // Click on the export button
        cy.get('[data-testid="export-format-csv"]').click(); // Select CSV format
        cy.get('[data-testid="confirm-export"]').click(); // Confirm export

        // Verify the download
        cy.verifyDownload('customers_export.csv'); // Custom command to verify download
    });

    it('should export order data in Excel format', () => {
        cy.get('[data-testid="export-orders"]').click(); // Click on the export button
        cy.get('[data-testid="export-format-excel"]').click(); // Select Excel format
        cy.get('[data-testid="confirm-export"]').click(); // Confirm export

        // Verify the download
        cy.verifyDownload('orders_export.xlsx'); // Custom command to verify download
    });

    it('should show an error message for invalid export', () => {
        cy.get('[data-testid="export-invalid"]').click(); // Attempt to export invalid data
        cy.get('[data-testid="error-message"]').should('be.visible').and('contain', 'Invalid export request'); // Check for error message
    });
});