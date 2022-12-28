import { defineConfig } from 'cypress';

import { config } from './cypress.config';

export default defineConfig({
  ...config,
  retries: {
    runMode: 2,
    openMode: 2,
  },
  e2e: {
    ...config.e2e,
    baseUrl: 'https://www.browserstack.com/',
    specPattern: 'cypress/integration/smoke/*.{feature,features}',
  },
});
