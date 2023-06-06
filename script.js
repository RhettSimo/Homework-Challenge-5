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
            $("#hour-" + i + " textarea").addClass("future");
        }
    }
}

function loadStoredData() {
    eventsData =  JSON.parse(localStorage.getItem("calendarEvents"));
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
    console.log(eventsData);
    $('#hour-9 textarea').text(localStorage.getItem('hour-9'));
    $('#hour-10 textarea').text(localStorage.getItem('hour-10'));
    $('#hour-11 textarea').text(localStorage).getItem('hour-11');
    $('#hour-12 textarea').text(localStorage).getItem('hour-12')
    $('#hour-13 textarea').text(localStorage).getItem('hour-13')
    $('#hour-14 textarea').text(localStorage).getItem('hour-14')
    $('#hour-15 textarea').text(localStorage).getItem('hour-15')
    $('#hour-16 textarea').text(localStorage).getItem('hour-16')
    $('#hour-17 textarea').text(localStorage).getItem('hour-17')

}


function handleSaveClick(event) {
    // grab data from html
    var hourBlock = $(event.target).parent();
    var value = hourBlock.children("textarea").val();
    var hour = hourBlock.attr('id').split("-")[1];
    var time = hourBlock.attr('id')
    // modify data object
    eventsData["hour" + hour] = value;
    
    // store data in local storage
    localStorage.setItem(time, value);
}

$('.saveBtn').on('click', handleSaveClick);

$(function() {
    loadStoredData();
    setHourColors();
});
