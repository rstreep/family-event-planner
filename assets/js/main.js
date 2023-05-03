
// /**
//  * the section below describes the global Variables
//  */
let guestsList = {};
let eventObj = {};

/**
 * The section below defines the contract for API integration
 * guestsList, array that contains list of guests represented as objects with the following fields:
 *  - salutation (string), guest's salutation format for email 
 *  - name (string), guest's Firs and Last name
 *  - email (string), guest's email adress
 */
// guestsList =
// {
//     salutaion: "Mr.",
//     name: "John Smith",
//     email: "johnsmith@email.com",
//     address: "New York",
//     link: "link"
// };

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
    if (currentStep === 3) return;
    event.preventDefault()
    console.log("Next" + currentStep);
    tabPanels[currentStep].classList.add('hidden')
    tabTargets[currentStep].classList.remove('active')
    tabPanels[currentStep + 1].classList.remove('hidden')
    tabTargets[currentStep + 1].classList.add('active')
    currentStep += 1
    if (currentStep === 2) {
        saveGuestInfo();
    }
    eventWizardLogic(currentStep);
    return;
})

previousButton.addEventListener('click', (event) => {
    if (currentStep === 0) return;
    event.preventDefault()
    console.log("Previous" + currentStep);
    tabPanels[currentStep].classList.add('hidden')
    tabTargets[currentStep].classList.remove('active')
    tabPanels[currentStep - 1].classList.remove('hidden')
    tabTargets[currentStep - 1].classList.add('active')
    currentStep -= 1
    eventWizardLogic(currentStep);
    return;
})

directionsButton.addEventListener('click', (event) => {
    event.preventDefault();
    var start = $('#address').val();
    var end = $('#eventLocation').val();

    var url = "https://rstreep.github.io/family-event-planner/map.html?start=" + start + "&destination=" + end;
    if ($('#directionsLink').html()) {
        console.log('it is direction link');
    } else {
        var directionsLink = $('#directionsLink')
        directionsLink = document.createElement('a');
        directionsLink.setAttribute('id', 'directionsLink');
        directionsLink.textContent = "directions";

        guestsList.directionsLink = url;
        console.log(directionsLink)
        document.getElementById('guests').appendChild(directionsLink);
    }
    directionsLink.setAttribute('href', url);
    return;
});

function init() {

    eventWizardLogic(0);

    // guestsList.name = 'rich';
    setGuestsData();
    guestsList = getGuestsData();
    setEventData();
    eventObj = getEventData();

    console.log(eventObj);
}
function saveGuestInfo() {
    var email = $('#email').val();
    var name = $('#name').val();
    var address = $('#address').val();
    var directionLink = $('#directionsLink').attr('href');
    guestsList.name = name;
    guestsList.email = email;
    guestsList.address = address;
    guestsList.link = directionLink;
    localStorage.setItem("guestArray", JSON.stringify(guestsList));
    setGuestsData();
    return;
}
function getGuestsData() {
    var saveData = JSON.parse(localStorage.getItem('guestsList'));
    if (saveData.length > 0) {
        localStorage.getItem('guestsList', JSON.parse(guestsList));
    };
    console.log(guestsList);
    return saveData;
}

function setGuestsData() {
    // localStorage.setItem('guestsList', JSON.stringify(guestsList));
    if (guestsList.length > 0) {
        localStorage.setItem('guestsList', JSON.stringify(guestsList));
    }
    console.log(guestsList);
}

function setEventData() {
    if (eventObj) {
        localStorage.setItem('eventObj', JSON.stringify(eventObj));
    }
    console.log(eventObj);
}

function getEventData() {
    var saveData = JSON.parse(localStorage.getItem('eventObj'));
    if (saveData.length > 0) {
        localStorage.getItem('eventObj', JSON.parse(eventObj));
    };
    console.log(eventObj);
    return saveData;
}
function eventWizardLogic(currentStep) {
    var stepIcon = $('#' + currentStep);
    var greyColor = '#bbbbbb';
    var purpleColor = 'blueviolet';


    // //set default values for the class
    // previousButton.classList.add('hidden');
    // nextButton.classList.add('hidden');
    // submitButton.classList.add('hidden');

    // console.log('currentStep- ' + stepIcon.attr('id'))
    switch (currentStep) {
        case 0:
            $('#' + currentStep).css('background-color', purpleColor);
            $('#' + currentStep).next().css('background-color', greyColor);
            previousButton.classList.replace('active', 'hidden');
            nextButton.classList.replace('hidden', 'active');
            submitButton.classList.replace('active', 'hidden');
            console.log("Event Details");
            break;
        case 1:
            $('#' + currentStep).css('background-color', purpleColor);
            $('#' + currentStep).prev().css('background-color', greyColor);
            $('#' + currentStep).next().css('background-color', greyColor);
            previousButton.classList.replace('hidden', 'active');
            nextButton.classList.replace('hidden', 'active');
            submitButton.classList.replace('active', 'hidden');
            console.log("Add Guest");
            break;
        case 2:
            $('#' + currentStep).css('background-color', purpleColor);
            $('#' + currentStep).prev().css('background-color', greyColor);
            $('#' + currentStep).next().css('background-color', greyColor);
            previousButton.classList.replace('hidden', 'active');
            nextButton.classList.replace('hidden', 'active');
            submitButton.classList.replace('active', 'hidden');
            console.log("Add Menu");
            break;
        case 3:
            $('#' + currentStep).css('background-color', purpleColor);
            $('#' + currentStep).prev().css('background-color', greyColor);
            previousButton.classList.replace('hidden', 'active');
            nextButton.classList.replace('active', 'hidden');
            submitButton.classList.replace('hidden', 'active');
            console.log("Preview");
            break;
        default:
            console.log("Unknown step");
    }

}
window.addEventListener("load", init);

