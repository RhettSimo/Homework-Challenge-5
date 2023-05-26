var eventsData;

function setHourColors() {
    var now = dayjs();
    
    for (var i = 9; i < 18; i++) {
        // $("#hour-" + i + " textarea").removeClass("future");
        if (i < now.hour()) {
            $("#hour-" + i + " textarea").addClass("past");
        } else if (i == now.hour()) {
            $("#hour-" + i + " textarea").addClass("present");     
        } else if (i > now.hour()) {
            $("#hour-" + i + " textarea").addclass("future");
        }
    }
}

function loadStoredData() {
    var eventsData =  JSON.parse(localStorage.getItem("calendarEvents"));
    if (!eventsData) (
        eventsData = {
            hour9: "",
            hour10: "",
            hour11: "",
            hour12: "",
            hour13: "",
            hour14: "",
            hour15: "",
            hour16: "",
            hour17: "",
        }
    )
}

function handleSaveClick(event) {
    // grab data from html
    var hourBlock = $(event.target).parent();
    var value = hourBlock.children("textarea").val();
    var hour = hourBlock.attr('id').split("-")[1];

    // modify data object
    eventsData["hour" + hour] = value;
    
    // store data in local storage
    localStorage.setItem("calendarEvents", JSON.stringify(eventsData));
}

$('.saveBtn').on('click', handleSaveClick);

$(function() {
    loadStoredData();
    setHourColors();
});
