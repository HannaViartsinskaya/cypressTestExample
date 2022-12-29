import { defineConfig } from 'cypress';

import { config } from './cypress.config';

export default defineConfig({
  ...config,
  retries: {
    runMode: 0,
    openMode: 0,
  },
  e2e: {
    ...config.e2e,
    baseUrl: 'https://www.browserstack.com/',
    specPattern: 'cypress/integration/smoke/*.{feature,features}',
  },
});
