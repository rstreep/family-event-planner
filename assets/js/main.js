
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
    dietReswtrictions: 'vegan',
    healthConcerns: 'peanut-free',
    menuItems: [
        {
            dishType: "Appetizer 1",
            dishName: "shrimp cocktail",
            dishLink: 'http://127.0.0.1:5500/index.html?diets=low-carb&health-concerns=vegetarian#:~:text=Appetizer-,Oven%20Scrambled%20Eggs,-Smokey%20Deviled%20Eggs',

        }, {
            dishType: "Appetizer 2",
            dishName: "shrimp cocktail",
            dishLink: 'http://127.0.0.1:5500/index.html?diets=low-carb&health-concerns=vegetarian#:~:text=Appetizer-,Oven%20Scrambled%20Eggs,-Smokey%20Deviled%20Eggs',
        }, {
            dishType: "Main Dish",
            dishName: "shrimp cocktail",
            dishLink: 'http://127.0.0.1:5500/index.html?diets=low-carb&health-concerns=vegetarian#:~:text=Appetizer-,Oven%20Scrambled%20Eggs,-Smokey%20Deviled%20Eggs',
        }, {
            dishType: "Side 1",
            dishName: "shrimp cocktail",
            dishLink: 'http://127.0.0.1:5500/index.html?diets=low-carb&health-concerns=vegetarian#:~:text=Appetizer-,Oven%20Scrambled%20Eggs,-Smokey%20Deviled%20Eggs',
        }, {
            dishType: "Side 2",
            dishName: "shrimp cocktail",
            dishLink: 'http://127.0.0.1:5500/index.html?diets=low-carb&health-concerns=vegetarian#:~:text=Appetizer-,Oven%20Scrambled%20Eggs,-Smokey%20Deviled%20Eggs',
        }, {
            dishType: "Dessert",
            dishName: "shrimp cocktail",
            dishLink: 'http://127.0.0.1:5500/index.html?diets=low-carb&health-concerns=vegetarian#:~:text=Appetizer-,Oven%20Scrambled%20Eggs,-Smokey%20Deviled%20Eggs',
        }]
}

var directionsButton = document.querySelector('#getDirections');
const previousButton = document.querySelector('#prev')
const nextButton = document.querySelector('#next')
const submitButton = document.querySelector('#submit')
const tabTargets = document.querySelectorAll('.tab')
const tabPanels = document.querySelectorAll('.tabpanel')
let currentStep = 0

nextButton.addEventListener('click', (event) => {
    event.preventDefault()
    tabPanels[currentStep].classList.add('hidden')
    tabTargets[currentStep].classList.remove('active')
    tabPanels[currentStep + 1].classList.remove('hidden')
    tabTargets[currentStep + 1].classList.add('active')
    currentStep += 1
})

previousButton.addEventListener('click', (event) => {
    event.preventDefault()
    tabPanels[currentStep].classList.add('hidden')
    tabTargets[currentStep].classList.remove('active')
    tabPanels[currentStep - 1].classList.remove('hidden')
    tabTargets[currentStep - 1].classList.add('active')
    currentStep -= 1
  })

directionsButton.addEventListener('click', (event) => {
    console.log('working');
    // var start = "guestsList.address";
    var start = "Boston";
    var end ="New York";
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

// /**
//  * This function send invites to the guests by clicking Sans button
//  */
// function sendClicked() {
//     // Define what should happen when the Send button is clicked
//     console.log('Send button clicked! 0 ');
//     // ////////////////// POC of mailTo    /////////////////////////////////////////////
//     // Define the event object with details
//     var event = {
//         name: "Family Reunion",
//         location: "123 Main Street",
//         menu: "BBQ, hamburgers, hotdogs, and salads"
//     };
//     // Create an empty array to hold the email addresses
//     var emailList = [];

//     // Loop through the guestsList array and retrieve the email addresses
//     for (var i = 0; i < guestsList.length; i++) {
//         emailList.push(guestsList[i].email);
//     }

//     // Create the email subject
//     var subject = "Invitation to " + event.name;

//     // Create the email body with the event details
//     var body = "Dear family and friends,\n\nPlease join us for the " + event.name + " at " + event.location + ".\n\nThe menu includes " + event.menu + ".\n\nWe hope to see you there!\n\nBest regards,\nYour Name";

//     // Create the mailto URL with the email addresses, subject, and body
//     var mailtoUrl = "mailto:" + emailList.join(",") + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

//     // Open the mailto dialog box
//     window.location.href = mailtoUrl;


//     /////////////////////////////////////////////////////////////////
//     //ToDo  - save final objects to local storage
//     //ToDo - open MailTo dialog with pre-populated data 
//     //ToDo - navigate to the firsr page
//     //ToDo  - get data from local storage
//     //ToDo - render html elements
// }

