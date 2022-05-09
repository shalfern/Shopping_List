import {
    NetworkStatus,
    PageTitle, ShoppingListName,
    ShoppingListTitle,
    ShoppingListUrl
} from "../../support/ShoppingList.PageObject";

beforeEach(() => {
    cy.visit(ShoppingListUrl);
    cy.title().should('include', PageTitle);
    //visit the site and assert the page title before each test is run.
})

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

it(`Verify user can access shopping cart page`, () => {
    cy.get(NetworkStatus).should('have.text', 'Network: Online')
    //Assert that the site is accessible online
})

it(`Verify user can create a shopping list`, () => {
    cy.CreateShoppingList();
    cy.get(ShoppingListTitle).should('have.text', ShoppingListName)
    //Create a shopping list and assert the shopping list name include what the user has inputted.
})

describe('Given the user already has a shopping list on the page', () => {
it(`Verify user can add items to shopping list `, () => {
    cy.AddItemToShoppingList();
    cy.wait(2000);
    cy.get('li').each(($el, ) => {

        if ($el.text() === 'Grapes'){
           cy.log('Item Found');
        }
    })
})
})

it(`Verify user can navigate back to the home page from the shopping list `, () => {
    cy.get('li').first().click()
    cy.get('a[class=link]').click().wait(2000)
    cy.title().should('include', PageTitle);
})

it(`Verify user can select and deselect items from the shopping list `, () => {
    //Given the user can access an existing shopping list
    //user can select the tick box to cross out items
    //user can deselect the items from the tick box
})

it(`Verify user can delete items from a shopping list `, () => {
    //Given the user can access an existing shopping list
    //user can select one or multiple items and select (x) to delete the items
})

it(`Verify user can delete a shopping list `, () => {
    cy.get('li').first().click();
    cy.wait(2000);
    cy.get('a.delete').click()
    //needs to handle the popup to confirm the deletion which I haven't done.
})

it(`Verify user can access the shopping list while offline`, () => {
    //Assert that the site is accessible off-line
})

//Failed Test Cases - Assumptions
it(`Verify user cannot add the same item multiple times `, () => {
    //Given the user can access an existing shopping list
    //user add the same item 2 times ('banana', 'banana')
    //Then user should be given an error message
})

it(`Verify user cannot add null items to the shopping list `, () => {
    //Given the user can access an existing shopping list
    //user add a "null" value
    //Then user should be given an error message - Assumption as it doesn't display anything currently.
})
