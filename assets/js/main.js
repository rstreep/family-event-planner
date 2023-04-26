/**
 * the section below describes the global Variables
 */
let guestsObj = [];
let eventObg = {};

/**
 * The section below defines the contract for API integration
 * guestsList, array that contains list of guests represented as objects with the following fields:
 *  - salutation (string), guest's salutation format for email 
 *  - name (string), guest's Firs and Last name
 *  - email (string), guest's email adress
 */
guestsList = [
    {
        salutaion: "Mr.",
        name: "John Smith",
        email: "johnsmith@email.com"
    }, {
        salutaion: "Ms.",
        name: "Jane Doe",
        email: " janedoe@email.com"
    }, {
        salutaion: "Mrs.",
        name: "Sarah Lee ",
        email: "sarahlee@email.com"
    }];
eventObg = {
    eventName: "Family Reunion",
    eventDate: "Thu May 4th, 2023, 7pm est",
    eventLocation: "The Franklin Institute, Center City, Address: 222 N 20th Street, Philadelphia, PA 19103",
    isOutside: false,
    diet: ['vegan', 'peanut-free', 'spicy-hot'],
    menuItems: [
        {
            dishType: "Appetizer 1",
            dishName: "shrimp cocktail",
            coocingtime: "15 min",
            ingridients: ['6 cups water', '1 small lemon thinly sliced', '1 teaspoon minced fresh garlic', '2 bay leaves', '5 black peppercorns', '3 to 4 sprigs fresh Italian parsley', '¾ teaspoon kosher salt', '1 pound medium to large shrimp peeled and deveined (tails left on)'],
            recipe: "Bring water to a boil. Add shrimp, cover; remove from heat. Let stand until shrimp are  bright pink and curled; 3 to 5 minutes. Drain and transfer to prepared tray of ice to cool completely.",
            imageLink: "/Users/innafedorenko/family-event-planner/assets/images/shrimpt_coctail.jpeg",
        }, {
            dishType: "Appetizer 2",
            dishName: "shrimp cocktail",
            coocingtime: "15 min",
            ingridients: ['6 cups water', '1 small lemon thinly sliced', '1 teaspoon minced fresh garlic', '2 bay leaves', '5 black peppercorns', '3 to 4 sprigs fresh Italian parsley', '¾ teaspoon kosher salt', '1 pound medium to large shrimp peeled and deveined (tails left on)'],
            recipe: "Bring water to a boil. Add shrimp, cover; remove from heat. Let stand until shrimp are  bright pink and curled; 3 to 5 minutes. Drain and transfer to prepared tray of ice to cool completely.",
            imageLink: "/Users/innafedorenko/family-event-planner/assets/images/shrimpt_coctail.jpeg",
        }, {
            dishType: "Main Dish",
            dishName: "shrimp cocktail",
            coocingtime: "15 min",
            ingridients: ['6 cups water', '1 small lemon thinly sliced', '1 teaspoon minced fresh garlic', '2 bay leaves', '5 black peppercorns', '3 to 4 sprigs fresh Italian parsley', '¾ teaspoon kosher salt', '1 pound medium to large shrimp peeled and deveined (tails left on)'],
            recipe: "Bring water to a boil. Add shrimp, cover; remove from heat. Let stand until shrimp are  bright pink and curled; 3 to 5 minutes. Drain and transfer to prepared tray of ice to cool completely.",
            imageLink: "/Users/innafedorenko/family-event-planner/assets/images/shrimpt_coctail.jpeg",
        }, {
            dishType: "Side 1",
            dishName: "shrimp cocktail",
            coocingtime: "15 min",
            ingridients: ['6 cups water', '1 small lemon thinly sliced', '1 teaspoon minced fresh garlic', '2 bay leaves', '5 black peppercorns', '3 to 4 sprigs fresh Italian parsley', '¾ teaspoon kosher salt', '1 pound medium to large shrimp peeled and deveined (tails left on)'],
            recipe: "Bring water to a boil. Add shrimp, cover; remove from heat. Let stand until shrimp are  bright pink and curled; 3 to 5 minutes. Drain and transfer to prepared tray of ice to cool completely.",
            imageLink: "/Users/innafedorenko/family-event-planner/assets/images/shrimpt_coctail.jpeg",
        }, {
            dishType: "Side 2",
            dishName: "shrimp cocktail",
            coocingtime: "15 min",
            ingridients: ['6 cups water', '1 small lemon thinly sliced', '1 teaspoon minced fresh garlic', '2 bay leaves', '5 black peppercorns', '3 to 4 sprigs fresh Italian parsley', '¾ teaspoon kosher salt', '1 pound medium to large shrimp peeled and deveined (tails left on)'],
            recipe: "Bring water to a boil. Add shrimp, cover; remove from heat. Let stand until shrimp are  bright pink and curled; 3 to 5 minutes. Drain and transfer to prepared tray of ice to cool completely.",
            imageLink: "/Users/innafedorenko/family-event-planner/assets/images/shrimpt_coctail.jpeg",
        }, {
            dishType: "Dessert",
            dishName: "shrimp cocktail",
            coocingtime: "15 min",
            ingridients: ['6 cups water', '1 small lemon thinly sliced', '1 teaspoon minced fresh garlic', '2 bay leaves', '5 black peppercorns', '3 to 4 sprigs fresh Italian parsley', '¾ teaspoon kosher salt', '1 pound medium to large shrimp peeled and deveined (tails left on)'],
            recipe: "Bring water to a boil. Add shrimp, cover; remove from heat. Let stand until shrimp are  bright pink and curled; 3 to 5 minutes. Drain and transfer to prepared tray of ice to cool completely.",
            imageLink: "/Users/innafedorenko/family-event-planner/assets/images/shrimpt_coctail.jpeg",
        }],
    drinks: [
        {
            typeDrink: "water",
            nameDrink: "sparkling",
            kidsAllowed: "yes"
        }, {
            typeDrink: "vine",
            nameDrink: "Malbec",
            kidsAllowed: "no"
        }, {
            typeDrink: "cola",
            nameDrink: "diet cola",
            kidsAllowed: "yes"
        }, {
            typeDrink: "tea",
            nameDrink: "green",
            kidsAllowed: "yes"
        }],
    advertisements: ['cards games', 'dancing', 'live music']
}


/**
 * This function navigates to the main page to continue edining by selecting Back button
 */
function backClicked() {
    // Define what should happen when the Back button is clicked
    console.log('Back button clicked!');
}
/**
 * This funtion save event details to Local Storage by clicking Save button
 */
function saveClicked() {
    // Define what should happen when the Save button is clicked
    console.log('Save button clicked!');
}

/**
 * This function send invites to the guests by clicking Sans button
 */
function sendClicked() {
    // Define what should happen when the Send button is clicked
    console.log('Send button clicked!');
}


/**
 * This is main function that is going to run during opening the preview page
 */
//console.log ('Script is connected');

$(document).ready(function () {
    // Define click event handlers for each button
    $('#backBtn').click(function () {
        backClicked();
    });

    $('#saveBtn').click(function () {
        saveClicked();
    });

    $('#sendBtn').click(function () {
        sendClicked();
    });
});