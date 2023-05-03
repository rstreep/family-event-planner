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