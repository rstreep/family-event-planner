function saveEventInfo() {
var eventName = $('#eventName').val();
var eventDate =$('#eventDate').val();
var eventLocation = $('#eventLocation').val();
eventObj.eventName = eventName;
eventObj.eventDate = eventDate;
eventObj.eventLocation = eventLocation;
localStorage.setItem('eventObj', JSON.stringify(eventObj));
return;
}


if (currentStep ===1){
    saveEventInfo();
}
else if
(currentStep === 2) {
    saveGuestInfo();
}
eventWizardLogic(currentStep);
return;

//to post to local storage update the object