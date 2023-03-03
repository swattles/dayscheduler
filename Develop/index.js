let savedEventsArray;
const saveButtonElements = document.querySelectorAll('.event-save');
// console.log(saveButtonElements);

// upon page load, let's get saved events from the local storage, i.e. localstorage.getItem()
function getSavedEvents () {
    let savedEventsArray = document.querySelectorAll("textarea")
    for (let i = 0; i<savedEventsArray.length; i++) {
        let key = i 
        let pastSavedEvents = JSON.parse(localStorage.getItem(key))
        console.log(pastSavedEvents)
    }
    // savedEventsArray = JSON.parse(localStorage.getItem(key));
    // console.log(savedEventsArray)
}

// from the saved events, populate the current day's timeblocks
// allow for clicking in on the event description, i.e. add an event listener, right?
// allow for saving an event as well, also add an event listener
// when save an event, we are going to want to set local storage too.
function savetheEvent(description,index) {
    //console.log('you clicked the save button');
    //console.log(e.target);
    let key = index
    let value = JSON.stringify(description);
   
    // document.querySelectorAll("textarea")[i].value
    window.localStorage.setItem(key, value);     
    console.log(key, value);
}


// get the saved events from local storage, if any exist...
getSavedEvents();


saveButtonElements.forEach(btn => btn.addEventListener('click',(e)=>{
    e.preventDefault()
    let index = e.target.attributes[2].value;
    let description = document.querySelectorAll("textarea")[index].value;
    savetheEvent(description, index)
}))


// upon page load, get the current time
var time = moment().format("hh:mm:ss");
$("#currentDay").text(time);
// upon page load, make elapsed times grey
// display the current day date at the top of the page 