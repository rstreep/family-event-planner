// var map = L.map('map').setView([51.505, -0.09], 13);

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);

// L.marker([51.5, -0.09]).addTo(map)
//     .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
//     .openPopup();

// setting parameters
var map= L.map('map', {
    layer: MQ.mapLayer(),
    center: [49.228537499999995, -123.10585798903601],
    zoom: 12
});

var dir =MQ.routing.directions(); 
dir.route({
    locations: [
        'Vancouver, BC',
        'Richmond, BC'
    ]
});

CustomRouteLayer = MQ.Routing.RouteLayer.extend({
    createStartMarker: (location)=> {
        var custom_icon;
        var marker;

        custom_icon=L.icon({
            iconUrl:'C:\Users\alice\groupworkspace\project1\img\blue.png',
            iconSize: [20,29],
            iconAnchor: [10,29],
            popupAnchor: [0,29]
        });
        marker = L.marker(location.latLng,{icon:custom_icon}).addTo(map);
        return marker;
    },
    createEndMarker: (location)=> {
        var custom_icon;
        var marker;

        custom_icon=L.icon({
            iconUrl:'C:\Users\alice\groupworkspace\project1\img\destination icon.png',
            iconSize: [20,29],
            iconAnchor: [10,29],
            popupAnchor: [0,29]
        });
        marker = L.marker(location.latLng,{icon:custom_icon}).addTo(map);
        return marker;
    }
});
map.addLayer(new CustomRouteLayer({
    directions: dir,
}))
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
    weather: {},
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
 * screen should be populated with user unput get from local storage
 */
function backClicked() {
    // Define what should happen when the Back button is clicked
    console.log('Back button clicked!');
    //ToDo  - navigate to the previous page
    //ToDo - get values from local storage
    //ToDo - render html elements
}
/**
 * This funtion save event details to Local Storage by clicking Save button
 */
function saveClicked() {
    // Define what should happen when the Save button is clicked
    console.log('Save button clicked!');
    //ToDo  - save final objects to local storage
    //ToDo - navigate to the firsr page
    //ToDo  - get data from local storage
    //ToDo - render html elements

}

/**
 * This function send invites to the guests by clicking Sans button
 */
function sendClicked() {
    // Define what should happen when the Send button is clicked
    console.log('Send button clicked! 0 ');
    // ////////////////// POC of mailTo    /////////////////////////////////////////////
    // Define the event object with details
    var event = {
        name: "Family Reunion",
        location: "123 Main Street",
        menu: "BBQ, hamburgers, hotdogs, and salads"
    };
    // Create an empty array to hold the email addresses
    var emailList = [];

    // Loop through the guestsList array and retrieve the email addresses
    for (var i = 0; i < guestsList.length; i++) {
        emailList.push(guestsList[i].email);
    }

    // Create the email subject
    var subject = "Invitation to " + event.name;

    // Create the email body with the event details
    var body = "Dear family and friends,\n\nPlease join us for the " + event.name + " at " + event.location + ".\n\nThe menu includes " + event.menu + ".\n\nWe hope to see you there!\n\nBest regards,\nYour Name";

    // Create the mailto URL with the email addresses, subject, and body
    var mailtoUrl = "mailto:" + emailList.join(",") + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

    // Open the mailto dialog box
    window.location.href = mailtoUrl;

   
    /////////////////////////////////////////////////////////////////
    //ToDo  - save final objects to local storage
    //ToDo - open MailTo dialog with pre-populated data 
    //ToDo - navigate to the firsr page
    //ToDo  - get data from local storage
    //ToDo - render html elements
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

// fetch function to grab data from edamam API
// Rich API ID - e0e48aa8
// Rich API Key - 5ecc0a6a74140b8afe687fc73be0ddb2	—

fetch('insert api here')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })

<<<<<<< HEAD

=======
>>>>>>> bbe8067d5bf6ff65854434d71b8132a9e0500ef5
