import { OrderPage } from '../pages/orders.page';
import { AdminSelectors } from '../selectors/admin.selectors';

describe('Order Management Tests', () => {
    const orderPage = new OrderPage();

    beforeEach(() => {
        cy.login(); // Assuming a custom command for login
        orderPage.navigateToOrders();
    });

    it('should list all orders', () => {
        orderPage.getOrderList().should('be.visible');
        orderPage.getOrderListItems().should('have.length.greaterThan', 0);
    });

    it('should filter orders by status', () => {
        orderPage.filterOrdersByStatus('Completed');
        orderPage.getOrderListItems().each(($el) => {
            cy.wrap($el).find(AdminSelectors.orderStatus).should('contain', 'Completed');
        });
    });

    it('should paginate through orders', () => {
        orderPage.getPaginationNextButton().click();
        orderPage.getOrderListItems().should('have.length.greaterThan', 0);
    });

    it('should display no orders message when there are no orders', () => {
        orderPage.clearFilters(); // Assuming a method to clear filters
        orderPage.getOrderListItems().should('have.length', 0);
        orderPage.getNoOrdersMessage().should('be.visible');
    });
});