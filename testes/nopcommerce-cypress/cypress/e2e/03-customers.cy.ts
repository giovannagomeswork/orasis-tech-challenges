// This file contains tests for customer management, including listing, filtering, and CRUD operations.

import { customersPage } from '../pages/customers.page';
import { adminSelectors } from '../selectors/admin.selectors';

describe('Customer Management', () => {
    beforeEach(() => {
        cy.visit('/admin/customers');
    });

    it('should list customers', () => {
        customersPage.getCustomerList().should('be.visible');
        customersPage.getCustomerList().children().should('have.length.greaterThan', 0);
    });

    it('should filter customers by name', () => {
        const customerName = 'John Doe';
        customersPage.getFilterInput().type(customerName);
        customersPage.getCustomerList().children().each(($el) => {
            cy.wrap($el).contains(customerName).should('exist');
        });
    });

    it('should create a new customer', () => {
        customersPage.getAddCustomerButton().click();
        customersPage.fillCustomerForm({
            name: 'New Customer',
            email: 'newcustomer@example.com',
            password: 'password123',
        });
        customersPage.getSubmitButton().click();
        customersPage.getSuccessMessage().should('contain', 'Customer created successfully');
    });

    it('should edit an existing customer', () => {
        customersPage.getEditCustomerButton('Existing Customer').click();
        customersPage.fillCustomerForm({
            name: 'Updated Customer',
            email: 'updatedcustomer@example.com',
        });
        customersPage.getSubmitButton().click();
        customersPage.getSuccessMessage().should('contain', 'Customer updated successfully');
    });

    it('should delete a customer', () => {
        customersPage.getDeleteCustomerButton('Customer to Delete').click();
        customersPage.getConfirmDeleteButton().click();
        customersPage.getSuccessMessage().should('contain', 'Customer deleted successfully');
    });
});