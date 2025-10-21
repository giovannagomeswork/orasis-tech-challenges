// cypress/e2e/01-auth.cy.ts

import { loginPage } from '../pages/login.page';
import { dashboardPage } from '../pages/dashboard.page';
import { users } from '../fixtures/users.json';

describe('Authentication Tests', () => {
    beforeEach(() => {
        cy.visit('/login');
    });

    it('should log in with valid credentials', () => {
        loginPage.login(users.valid.username, users.valid.password);
        dashboardPage.verifyDashboardIsVisible();
    });

    it('should not log in with invalid credentials', () => {
        loginPage.login(users.invalid.username, users.invalid.password);
        loginPage.verifyErrorMessage('Invalid login attempt.');
    });

    it('should log out successfully', () => {
        loginPage.login(users.valid.username, users.valid.password);
        dashboardPage.logout();
        loginPage.verifyLoginPageIsVisible();
    });

    it('should remember me functionality', () => {
        loginPage.login(users.valid.username, users.valid.password, true);
        cy.reload();
        dashboardPage.verifyDashboardIsVisible();
    });
});