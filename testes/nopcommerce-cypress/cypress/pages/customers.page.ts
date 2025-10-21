// This file defines page object methods for the customers page, encapsulating interactions and assertions.

class CustomersPage {
    visit() {
        cy.visit('/admin/customers');
    }

    getCustomerList() {
        return cy.get('[data-test="customer-list"]');
    }

    searchCustomer(name) {
        cy.get('[data-test="customer-search-input"]').type(name);
        cy.get('[data-test="customer-search-button"]').click();
    }

    addCustomer(customerData) {
        cy.get('[data-test="add-customer-button"]').click();
        cy.get('[data-test="customer-name-input"]').type(customerData.name);
        cy.get('[data-test="customer-email-input"]').type(customerData.email);
        cy.get('[data-test="customer-save-button"]').click();
    }

    editCustomer(customerId, updatedData) {
        cy.get(`[data-test="edit-customer-${customerId}"]`).click();
        cy.get('[data-test="customer-name-input"]').clear().type(updatedData.name);
        cy.get('[data-test="customer-email-input"]').clear().type(updatedData.email);
        cy.get('[data-test="customer-save-button"]').click();
    }

    deleteCustomer(customerId) {
        cy.get(`[data-test="delete-customer-${customerId}"]`).click();
        cy.get('[data-test="confirm-delete-button"]').click();
    }

    assertCustomerExists(name) {
        this.getCustomerList().contains(name).should('exist');
    }

    assertCustomerNotExists(name) {
        this.getCustomerList().contains(name).should('not.exist');
    }
}

export const customersPage = new CustomersPage();