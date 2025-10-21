import { AdminSelectors } from '../selectors/admin.selectors';

class DashboardPage {
    visit() {
        cy.visit('/dashboard');
    }

    getPageTitle() {
        return cy.get(AdminSelectors.dashboardPageTitle);
    }

    getSidebarMenu(menuName: string) {
        return cy.get(AdminSelectors.sidebarMenu).contains(menuName);
    }

    getLogoutButton() {
        return cy.get(AdminSelectors.logoutButton);
    }

    verifyDashboardElements() {
        this.getPageTitle().should('be.visible');
        this.getSidebarMenu('Customers').should('be.visible');
        this.getSidebarMenu('Orders').should('be.visible');
        this.getSidebarMenu('Products').should('be.visible');
    }

    logout() {
        this.getLogoutButton().click();
    }
}

export const dashboardPage = new DashboardPage();