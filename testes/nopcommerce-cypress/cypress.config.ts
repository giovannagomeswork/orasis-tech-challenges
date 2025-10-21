import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://admin-demo.nopcommerce.com/admin/',
    specPattern: 'cypress/e2e/**/*.cy.ts',
    supportFile: 'cypress/support/e2e.ts',
    fixturesFolder: 'cypress/fixtures',
    videosFolder: 'cypress/videos',
    screenshotsFolder: 'cypress/screenshots',
    downloadsFolder: 'cypress/downloads',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});