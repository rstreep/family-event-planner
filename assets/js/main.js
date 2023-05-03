
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
    dietRestrictions: 'vegan',
    healthConcerns: 'peanut-free',
    menuItems: [
        {
            // dishType: "Appetizer 1",
            dishName: "shrimp cocktail",
            dishLink: 'http://127.0.0.1:5500/index.html?diets=low-carb&health-concerns=vegetarian#:~:text=Appetizer-,Oven%20Scrambled%20Eggs,-Smokey%20Deviled%20Eggs',

        }, {
            // dishType: "Appetizer 2",
            dishName: "shrimp cocktail",
            dishLink: 'http://127.0.0.1:5500/index.html?diets=low-carb&health-concerns=vegetarian#:~:text=Appetizer-,Oven%20Scrambled%20Eggs,-Smokey%20Deviled%20Eggs',
        }, {
            // dishType: "Main Dish",
            dishName: "shrimp cocktail",
            dishLink: 'http://127.0.0.1:5500/index.html?diets=low-carb&health-concerns=vegetarian#:~:text=Appetizer-,Oven%20Scrambled%20Eggs,-Smokey%20Deviled%20Eggs',
        }, {
            // dishType: "Side 1",
            dishName: "shrimp cocktail",
            dishLink: 'http://127.0.0.1:5500/index.html?diets=low-carb&health-concerns=vegetarian#:~:text=Appetizer-,Oven%20Scrambled%20Eggs,-Smokey%20Deviled%20Eggs',
        }, {
            // dishType: "Side 2",
            dishName: "shrimp cocktail",
            dishLink: 'http://127.0.0.1:5500/index.html?diets=low-carb&health-concerns=vegetarian#:~:text=Appetizer-,Oven%20Scrambled%20Eggs,-Smokey%20Deviled%20Eggs',
        }, {
            // dishType: "Dessert",
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
    // console.log("Next" + currentStep);
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
    // console.log("Previous" + currentStep);
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
        // console.log('it is direction link');
    } else {
        var directionsLink = $('#directionsLink')
        directionsLink = document.createElement('a');
        directionsLink.setAttribute('id', 'directionsLink');
        directionsLink.textContent = "directions";

        guestsList.link = url;
        // console.log(directionsLink)
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

// function saveMenuInfo() {
//     var diet = $('#diets').val();
//     var health = $('#health-concerns').val();
//     var appetizer1 = $('#app1').val();
//     var appetizer2 = $('#app2').val();
//     var entree1 = $('#ent1').val();
//     var entree2 = $('#ent2').val();
//     var dessert1 = $('#des1').val();
//     var dessert2 = $('#des2').val();
//     eventObj.dietRestrictions = diet;
//     eventObj.healthConcerns = health;
//     localStorage.setItem('eventObj', JSON.stringify(eventObj));
//     setEventData();
//     return;
// }

function saveGuestInfo() {
    var email = $('#email').val();
    var name = $('#name').val();
    var address = $('#address').val();
    var directionLink = $('#directionsLink').attr('href');
    guestsList.name = name;
    guestsList.email = email;
    guestsList.address = address;
    guestsList.link = directionLink;
    localStorage.setItem("guestsList", JSON.stringify(guestsList));
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
function renderPreview() {
    console.log('Render Preview');
    var previewContainer = $('#invite');
// guestsList =
// {
//     salutaion: "Mr.",
//     name: "John Smith",
//     email: "johnsmith@email.com",
//     address: "New York",
//     link: "link"
// };
// eventObj = {
//     eventName: "Family Reunion",
//     eventDate: "Thu May 4th, 2023, 7pm est",
//     eventLocation: "The Franklin Institute, Center City, Address: 222 N 20th Street, Philadelphia, PA 19103",
//     dietReswtrictions: 'vegan',
//     healthConcerns: 'peanut-free',
//     menuItems: [
    // dishType: "Appetizer 1",
    // dishName: "shrimp cocktail",
    // dishLink: 'http://127.0.0.1:5500/index.html?diets=low-carb&health-concerns=vegetarian#:~:text=Appetizer-,Oven%20Scrambled%20Eggs,-Smokey%20Deviled%20Eggs',    

    guestsList = getGuestsData();
    
    console.log ('guestsList - '+guestsList);

    // Define variables for the different components of the event preview
    var recipient = guestsList.email; //"test@gmail.com";
    var eventName = eventObj.eventName;//"Family Event";
    var location = eventObj.eventLocation; //"123 Main St.";
    var direction = guestsList.link;
    var date = eventObj.eventDate; //"June 1st, 2023";
    var menu = eventObj.menuItems//"BBQ, hamburgers, hot dogs, and sides";
    var name = guestsList.name;//"John Doe";
    var emailBody = `
          <p>
            Dear <strong>${name}</strong>,
            <br><br>
            You are cordially invited to our family event, <strong>${eventName}</strong>, 
            which will take place at <strong><a href="${direction}">${location}</a></strong> on <strong>${date}</strong>. 
            We would love for you to join us for a day of fun and celebration with family and friends. 
            <br><br>
            We will be serving a delicious <strong>Menu</strong>, including:
            <hr>
            <strong>Appetizer<strong>
            <br> <em><a href="${eventObj.menuItems[0].dishLink}">${eventObj.menuItems[0].dishName}</a></em><br>
            <em><a href="${eventObj.menuItems[1].dishLink}">${eventObj.menuItems[1].dishName}</a></em><br><br>
            <strong>Entree</strong>
            <br> <em><a href="${eventObj.menuItems[2].dishLink}">${eventObj.menuItems[2].dishName}</a></em><br>
            <em><a href="${eventObj.menuItems[3].dishLink}">${eventObj.menuItems[3].dishName}</a></em><br><br>
            <strong>Dessert<strong>
            <br> <em><a href="${eventObj.menuItems[4].dishLink}">${eventObj.menuItems[4].dishName}</a></em><br>
            <em><a href="${eventObj.menuItems[5].dishLink}">${eventObj.menuItems[5].dishName}</a></em><br><br>
            <hr>
            There will be plenty of activities for all ages to enjoy. 
            <br><br>
            We hope you can make it, and we look forward to seeing you there!
            <br><br>
            Best regards,
            <br>
            <strong>Family Fiesta team!</strong>
          </p>
        `;

    // Create the event preview container
    var eventPreview = $("<div>").attr({
        "id": "event-preview",
        "class": "container"
    });

    // Create the recipient container and add it to the event preview
    var recipientContainer = $("<div>").attr("class", "container").css("border", "2px solid violet");
    recipientContainer.append($("<h4>").text("MailTo: " + recipient));
    eventPreview.append(recipientContainer);

    // Create the subject container and add it to the event preview
    var subjectContainer = $("<div>").attr("class", "container").css("border", "2px solid violet");
    subjectContainer.append($("<h4>").text("Subject: Invitation for " + eventName));
    eventPreview.append(subjectContainer);

    // // Create the email body container and add it to the event preview
    var emailContainer = $("<div>").attr("class", "container").css("border", "2px solid violet");
    emailContainer.append($("<h4>").text("Email"));
    emailContainer.append(emailBody);
    eventPreview.append(emailContainer);

    $("#invite").append(eventPreview);
}
function eventWizardLogic(currentStep) {
    // var stepIcon = $('#' + currentStep);
    var greyColor = '#bbbbbb';
    var purpleColor = 'blueviolet';
    switch (currentStep) {
        case 0:
            $('#' + currentStep).css('background-color', purpleColor);
            $('#' + currentStep).next().css('background-color', greyColor);
            previousButton.classList.replace('active', 'hidden');
            nextButton.classList.replace('hidden', 'active');
            submitButton.classList.replace('active', 'hidden');
            // console.log("Event Details");
            break;
        case 1:
            $('#' + currentStep).css('background-color', purpleColor);
            $('#' + currentStep).prev().css('background-color', greyColor);
            $('#' + currentStep).next().css('background-color', greyColor);
            previousButton.classList.replace('hidden', 'active');
            nextButton.classList.replace('hidden', 'active');
            submitButton.classList.replace('active', 'hidden');
            // console.log("Add Guest");
            break;
        case 2:
            $('#' + currentStep).css('background-color', purpleColor);
            $('#' + currentStep).prev().css('background-color', greyColor);
            $('#' + currentStep).next().css('background-color', greyColor);
            previousButton.classList.replace('hidden', 'active');
            nextButton.classList.replace('hidden', 'active');
            submitButton.classList.replace('active', 'hidden');
            // console.log("Add Menu");
            break;
        case 3:
            $('#' + currentStep).css('background-color', purpleColor);
            $('#' + currentStep).prev().css('background-color', greyColor);
            previousButton.classList.replace('hidden', 'active');
            nextButton.classList.replace('active', 'hidden');
            submitButton.classList.replace('hidden', 'active');
            // console.log("Preview");
            //ToDo - page renderring
            renderPreview();
            //ToDo - click event for MailTo

            break;
        default:
            console.log("Unknown step");
    }

}
window.addEventListener("load", init);

