// cypress/e2e/05-products.cy.ts

describe('Product Management', () => {
    beforeEach(() => {
        // Assuming there's a login function in commands.ts
        cy.login(); // Custom command to log in
    });

    it('should create a new product', () => {
        cy.visit('/admin/products'); // Navigate to products page
        cy.get('[data-test="add-product"]').click(); // Click on add product button
        cy.get('[data-test="product-name"]').type('New Product'); // Enter product name
        cy.get('[data-test="product-price"]').type('100'); // Enter product price
        cy.get('[data-test="save-product"]').click(); // Save the product
        cy.get('[data-test="success-message"]').should('be.visible'); // Assert success message
    });

    it('should edit an existing product', () => {
        cy.visit('/admin/products');
        cy.get('[data-test="edit-product-1"]').click(); // Click on edit for the first product
        cy.get('[data-test="product-name"]').clear().type('Updated Product'); // Update product name
        cy.get('[data-test="save-product"]').click(); // Save the changes
        cy.get('[data-test="success-message"]').should('be.visible'); // Assert success message
    });

    it('should list products with correct details', () => {
        cy.visit('/admin/products');
        cy.get('[data-test="product-list"]').should('exist'); // Assert product list exists
        cy.get('[data-test="product-item"]').should('have.length.greaterThan', 0); // Assert there are products listed
    });

    it('should delete a product', () => {
        cy.visit('/admin/products');
        cy.get('[data-test="delete-product-1"]').click(); // Click on delete for the first product
        cy.get('[data-test="confirm-delete"]').click(); // Confirm deletion
        cy.get('[data-test="success-message"]').should('be.visible'); // Assert success message
    });
});