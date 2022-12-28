import 'cypress-real-events/support';

/* eslint-disable @typescript-eslint/no-namespace */


Cypress.on('uncaught:exception', () => {
  return false;
});
