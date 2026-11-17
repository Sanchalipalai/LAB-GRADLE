
let events = [];

function addEvent() {

    let name = document.getElementById("eventName").value;
    let date = document.getElementById("eventDate").value;
    let venue = document.getElementById("eventVenue").value;

    if (name === "" || date === "" || venue === "") {
        alert("Please fill all fields!");
        return;
    }

    let event = {
        name: name,
        date: date,
        venue: venue
    };

    events.push(event);

    displayEvents();

    document.getElementById("eventName").value = "";
    document.getElementById("eventDate").value = "";
    document.getElementById("eventVenue").value = "";
}

function displayEvents() {

    let list = document.getElementById("eventList");

    list.innerHTML = "";

    if (events.length === 0) {
        list.innerHTML = "<p>No events added yet.</p>";
        return;
    }

    for (let i = 0; i < events.length; i++) {

        list.innerHTML += `
            <div class="event">
                <h3>${events[i].name}</h3>
                <p>Date: ${events[i].date}</p>
                <p>Venue: ${events[i].venue}</p>

                <button class="delete-btn"
                onclick="deleteEvent(${i})">
                    Delete
                </button>
            </div>
        `;
    }
}

function deleteEvent(index) {

    events.splice(index, 1);

    displayEvents();
}
