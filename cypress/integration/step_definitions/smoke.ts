import {Given, Then} from 'cypress-cucumber-preprocessor/steps';
import { BasePage } from './pageObjects/BasePage';

Given(/^I go to Browserstack main page$/, function () {
    cy.visit('https://www.browserstack.com/');
});

Then(/^Browserstack logo is visible$/, function () {
    cy.get(BasePage.logo_image).should('be.visible');
});

Then(/^Header is present$/, function () {
    cy.get(BasePage.header).first().should('be.exist');
});

Then(/^Product menu are present$/, function () {
    cy.get(BasePage.toggle_product_menu).first().should('be.exist');
    cy.get(BasePage.devs_product_menu).first().should('be.exist');
});

Then(/^Menu Links are  present$/, function () {
    cy.get(BasePage.menu_link_pricing).first().should('be.exist');
    cy.get(BasePage.menu_link_sign_in).first().should('be.exist');
    cy.get(BasePage.menu_link_live_for_teams).first().should('be.exist');
});