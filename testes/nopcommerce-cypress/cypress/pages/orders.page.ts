// This file defines page object methods for the orders page, encapsulating interactions and assertions.

class OrdersPage {
    visit() {
        cy.visit('/admin/orders');
    }

    getOrderList() {
        return cy.get('[data-test="order-list"]');
    }

    filterOrders(status) {
        cy.get('[data-test="order-status-filter"]').select(status);
        cy.get('[data-test="filter-button"]').click();
    }

    getOrderRow(orderId) {
        return cy.get(`[data-test="order-row-${orderId}"]`);
    }

    assertOrderExists(orderId) {
        this.getOrderRow(orderId).should('exist');
    }

    assertOrderNotExists(orderId) {
        this.getOrderRow(orderId).should('not.exist');
    }
}

export const ordersPage = new OrdersPage();