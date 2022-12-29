import { defineConfig } from 'cypress';

export const config: Cypress.ConfigOptions = {
  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout: 20000,
  pageLoadTimeout: 80000,
  chromeWebSecurity: false,
  reporter: "mochawesome",
  reporterOptions: {
    reportDir:"cypress/reports",
    reportFilename: "report",
    overwrite: false,
    html: true,
    json: true,
    charts: true
  },
  video: true,
  screenshotsFolder:"/cypress/screenshots",
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, conf) {
      // eslint-disable-next-line global-require, import/extensions
      return require('./cypress/plugins/index.js')(on, conf);
    },
    baseUrl: 'https://www.browserstack.com/',
    specPattern: 'cypress/integration/**/*.{feature,features}',
  },
};

export default defineConfig(config);
