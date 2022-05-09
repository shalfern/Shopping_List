// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


import {AddButton, CreateButton, ListTitleInput, SubmitButton} from "./ShoppingList.PageObject";

cy.CreateShoppingList = function () {
    cy.get(CreateButton).click();
    cy.wait(2000);
    cy.get(ListTitleInput).type('Shalani Shopping List');
    cy.wait(2000);
    cy.get(SubmitButton).click();
    cy.wait(2000);
}

cy.AddItemToShoppingList = function () {
    cy.CreateShoppingList();
    cy.scrollTo('bottom')
    cy.get('input[type=text]').eq(1).type('Grapes');
    // index 1 because there was 2 input types on the test
    cy.get(AddButton).click();
    cy.wait(2000);
    // to improve this test can include where user can enter multiple items per test
}


