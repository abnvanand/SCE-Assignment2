// latest comic url = "http://xkcd.com/info.0.json"
// specific comic url = "http://xkcd.com/{id}/info.0.json"

var current_id;
var last_id;    // will be set on page load

function update_button_state() {
    if (current_id === last_id) {
        // disable next and last buttons
        $(".last").addClass("btn-disabled").removeClass("btn-active");
        $(".first").addClass("btn-active").removeClass("btn-remove");
    }
    else if (current_id === 1) {
        $(".first").addClass("btn-disabled").removeClass("btn-active");
        $(".last").addClass("btn-active").removeClass("btn-disabled");
    }
    else {
        $(".first").addClass("btn-active").removeClass("btn-disabled");
        $(".last").addClass("btn-active").removeClass("btn-disabled");
    }
    console.log("currentid=", current_id, "lastid", last_id);
}

function send_ajax_request(url) {
    document.getElementById("comic-img").src = "loader.gif";
    console.log("Request URL: ", url);

    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);

    xhr.onreadystatechange = (e) => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const res = JSON.parse(xhr.responseText);
            console.log(res);

            // set image
            document.getElementById("comic-img").src = res.img;
            document.getElementById("comic-img").alt = res.title;   // set alt = title
            document.getElementById("comic-img").title = res.alt;   // and title = alt. it's NOT a bug

            // set title
            document.getElementById("title").innerText = res.title;
            current_id = res.num;

            update_button_state();
        }
    };

    xhr.send();
}

function fetchFirst() {
    if (current_id === 1)
        return;
    const url = "https://xkcd.com/" + (1) + "/info.0.json";

    send_ajax_request(url);
}

function fetchPrev() {
    if (current_id === 1)
        return;

    const url = "https://xkcd.com/" + (current_id - 1) + "/info.0.json";
    send_ajax_request(url);
}

function fetchRandom() {
    // Generate a random number in the range [1..last_id]
    const random_id = Math.floor((Math.random() * last_id) + 1);
    const url = "https://xkcd.com/" + (random_id) + "/info.0.json";
    send_ajax_request(url);
}

function fetchNext() {
    if (current_id === last_id)
        return;

    const url = "https://xkcd.com/" + (current_id + 1) + "/info.0.json";
    send_ajax_request(url);
}


/**
 * fetches the last (latest) comic
 */
// TODO: find a way to use send_ajax_request() here as well
function fetchLast() {
    document.getElementById("comic-img").src = "loader.gif";

    const xhr = new XMLHttpRequest();
    const url = "https://xkcd.com/info.0.json";
    xhr.open("GET", url, true);

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {

            const res = JSON.parse(xhr.responseText);
            console.log(res);
            document.getElementById("title").innerText = res.title;
            document.getElementById("comic-img").src = res.img;
            document.getElementById("comic-img").alt = res.title;   // set alt = title
            document.getElementById("comic-img").title = res.alt;   // and title = alt. it's NOT a bug

            current_id = res.num;
            last_id = current_id;   // FIXME: can't use our generic send_ajax_request() method due to this line.

            update_button_state();
        }
    };
    xhr.send();
}

// on page load we fetch the latest comic
fetchLast();