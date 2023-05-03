const previousButton = document.querySelector('#prev')
const nextButton = document.querySelector('#next')
const submitButton = document.querySelector('#submit')
const tabTargets = document.querySelectorAll('.tab')
const tabPanels = document.querySelectorAll('.tabpanel')
const address= document.querySelector('.address')
const finalAddress= document.querySelector('.location')
const addGuest = document.querySelector('#addGuest')
const email = document.querySelector('#email')
const name = document.querySelector('#name')
let currentStep = 0
const guestArray =[]
nextButton.addEventListener('click', (event) => {
    event.preventDefault()
    tabPanels[currentStep].classList.add('hidden')
    tabTargets[currentStep].classList.remove('active')
    tabPanels[currentStep + 1].classList.remove('hidden')
    tabTargets[currentStep + 1].classList.add('active')
    currentStep += 1
})

addGuest.addEventListener('click', (event)=>{
    event.preventDefault()
    guestArray.push({
        email: email.value, name: name.value, address: address.value
    })
    localStorage.setItem("guestArray", JSON.stringify(guestArray))
})
previousButton.addEventListener('click', (event) => {
    event.preventDefault()
    tabPanels[currentStep].classList.add('hidden')
    tabTargets[currentStep].classList.remove('active')
    tabPanels[currentStep - 1].classList.remove('hidden')
    tabTargets[currentStep - 1].classList.add('active')
    currentStep -= 1
  })



// /**
//  * the section below describes the global Variables
//  */
let guestsObj = {};
let eventObj = {};

/**
 * The section below defines the contract for API integration
 * guestsList, array that contains list of guests represented as objects with the following fields:
 *  - salutation (string), guest's salutation format for email 
 *  - name (string), guest's Firs and Last name
 *  - email (string), guest's email adress
 */
guestsList = 
    {
        salutaion: "Mr.",
        name: "John Smith",
        email: "johnsmith@email.com",
        address: "New York",
        link: ""
    };
   
eventObj = {
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

var directionsButton = document.querySelector('#getDirections');

directionsButton.addEventListener('click', (event) => {
    console.log('working');
    // var start = "guestsList.address";
    var start = address.value;
    var end = finalAddress.value;
    var url = "https://rstreep.github.io/family-event-planner/map.html?start="+start+"&destination="+end;
    var directionsLink =document.createElement('a');
    directionsLink.setAttribute('href',url);
    directionsLink.textContent="directions";
    
    guestsList.directionsLink =url;
    console.log(directionsLink)
    document.getElementById('guests').appendChild(directionsLink);
  });

function init() {
    // guestsList.name = 'rich';
    setGuestsData();
    guestsList = getGuestsData();
    setEventData();
    eventObj = getEventData();

    console.log(eventObj);
}

function getGuestsData() {
    var saveData = JSON.parse(localStorage.getItem('guestsList'));
    if(saveData.length > 0) {
        localStorage.getItem('guestsList', JSON.parse(guestsList));
    };
    console.log(guestsList);
    return saveData;
}

function setGuestsData() {
    // localStorage.setItem('guestsList', JSON.stringify(guestsList));
    if(guestsList.length > 0) {
        localStorage.setItem('guestsList', JSON.stringify(guestsList));
    }
    console.log(guestsList);
}
// setEventData()

function setEventData() {
    if(eventObj) {
        localStorage.setItem('eventObj', JSON.stringify(eventObj));
    }
    console.log(eventObj);
}

function getEventData() {
    var saveData = JSON.parse(localStorage.getItem('eventObj'));
    if(saveData.length > 0) {
        localStorage.getItem('eventObj', JSON.parse(eventObj));
    };
    console.log(eventObj);
    return saveData;
}

window.addEventListener("load", init);



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
