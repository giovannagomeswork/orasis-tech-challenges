// This file contains stable selectors (using data-* attributes) for various elements in the admin interface.

export const adminSelectors = {
    login: {
        usernameInput: '[data-test="username"]',
        passwordInput: '[data-test="password"]',
        loginButton: '[data-test="login-button"]',
        logoutButton: '[data-test="logout-button"]',
    },
    dashboard: {
        dashboardHeader: '[data-test="dashboard-header"]',
        customersLink: '[data-test="customers-link"]',
        ordersLink: '[data-test="orders-link"]',
        productsLink: '[data-test="products-link"]',
    },
    customers: {
        addCustomerButton: '[data-test="add-customer-button"]',
        customerList: '[data-test="customer-list"]',
        customerFilterInput: '[data-test="customer-filter-input"]',
    },
    orders: {
        orderList: '[data-test="order-list"]',
        orderFilterInput: '[data-test="order-filter-input"]',
    },
    products: {
        addProductButton: '[data-test="add-product-button"]',
        productList: '[data-test="product-list"]',
    },
    export: {
        exportButton: '[data-test="export-button"]',
    },
    errorStates: {
        errorMessage: '[data-test="error-message"]',
        emptyStateMessage: '[data-test="empty-state-message"]',
    },
};