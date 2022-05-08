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
            cy.wrap($el).should('have.value', 'Grapes')
        }
    })
})
})

it(`Verify user can navigate back to the home page from the shopping list `, () => {
    cy.get('li').first().click()
    cy.get('a[class=link]', {timeout : 2000})
    cy.get('a[class=link]').click().wait(1000)
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

//Questions: 1. Can a user rename the shopping list with a same name? (currently you can)
           //2. Can a user add items to the list with the same name multiple times. (currently you can)
           //3. Can numbers/icons/symbols be added to the list? (currently you can)
           //4. Should user get valuable error/prompt messages when entering invalid data?


//Test Improvements:
           //1. Create a common wait method to wait until elements appear on page
           //2. Seperate the test to two folders so it's one spec file for each page