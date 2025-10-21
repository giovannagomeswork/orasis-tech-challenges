import { adminSelectors } from '../selectors/admin.selectors';
import { loginPage } from '../pages/login.page';
import { dashboardPage } from '../pages/dashboard.page';

describe('Navigation Tests', () => {
    beforeEach(() => {
        // Visit the login page and log in before each test
        cy.visit('/login');
        loginPage.login('admin@example.com', 'password'); // Use valid credentials
    });

    it('should navigate to the dashboard', () => {
        cy.visit('/dashboard');
        cy.url().should('include', '/dashboard');
        cy.get(adminSelectors.dashboardHeader).should('be.visible');
    });

    it('should navigate to the customers page', () => {
        dashboardPage.navigateToCustomers();
        cy.url().should('include', '/customers');
        cy.get(adminSelectors.customersHeader).should('be.visible');
    });

    it('should navigate to the orders page', () => {
        dashboardPage.navigateToOrders();
        cy.url().should('include', '/orders');
        cy.get(adminSelectors.ordersHeader).should('be.visible');
    });

    it('should navigate to the products page', () => {
        dashboardPage.navigateToProducts();
        cy.url().should('include', '/products');
        cy.get(adminSelectors.productsHeader).should('be.visible');
    });

    afterEach(() => {
        // Log out after each test
        dashboardPage.logout();
    });
});