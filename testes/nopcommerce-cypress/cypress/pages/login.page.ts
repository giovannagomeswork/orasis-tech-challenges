// This file defines page object methods for the login page, encapsulating interactions and assertions.

class LoginPage {
    private usernameInput = '[data-test=username]';
    private passwordInput = '[data-test=password]';
    private loginButton = '[data-test=login-button]';
    private errorMessage = '[data-test=error-message]';

    public visit() {
        cy.visit('/login');
    }

    public enterUsername(username: string) {
        cy.get(this.usernameInput).type(username);
    }

    public enterPassword(password: string) {
        cy.get(this.passwordInput).type(password);
    }

    public clickLogin() {
        cy.get(this.loginButton).click();
    }

    public assertErrorMessage(expectedMessage: string) {
        cy.get(this.errorMessage).should('contain.text', expectedMessage);
    }
}

export const loginPage = new LoginPage();