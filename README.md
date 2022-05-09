Setup: 
1. Need Cypress 
2. To access test I use the path "./node_modules/.bin/cypress open"
3. The tests are on the ShoppingList folder under Integration, Spec name "ShoppingList.spec.js"
4. I have supporting files on support folder "ShoppingList.PageObject.js" and "commands.js"
5. I have used comments to describe each test case written, some are automated and some are not. I have only gone through the basic behaviour of Adding shopping list and adding items to list.

Questions for Product Owner:
1. Can a user rename the shopping list with a same name? (currently you can)
2. Can a user add items to the list with the same name multiple times. (currently you can)
3. Can numbers/icons/symbols be added to the list? (currently you can)
4. Should user get valuable error/prompt messages when entering invalid data? (currently when user enters a space, it doesn't give any indication to the user as a message)

Test Improvements:
1. Create a common wait method to wait until elements appear on page, rather than telling it to wait number of seconds.
2. Separate the test to two folders so it's one spec file for each page.
3. I have had issues with the list method, currently it passes but would like time to look at it to improve. 
4. Cover other aspects of the application (Text assertion, error messages, network offline mode)
5. Extend the setup to clear cookies, move the env to a different folder and cover, browsers and device sizes. 