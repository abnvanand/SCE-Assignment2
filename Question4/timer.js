const hourHand = document.getElementById("hour-hand");
const minuteHand = document.getElementById("minute-hand");
const secondHand = document.getElementById("second-hand");

function tick() {
    let date = new Date();
    let hrs, mins, sec, degree;

    hrs = date.getHours();
    degree = (hrs / 12) * 360;
    hourHand.style.transform = `rotate(${degree}deg) translate(-50%, -50%)`;

    mins = date.getMinutes();
    degree = (mins / 60) * 360;
    minuteHand.style.transform = `rotate(${degree}deg) translate(-50%, -50%)`;

    sec = date.getSeconds();
    degree = (sec / 60) * 360;
    secondHand.style.transform = `rotate(${degree}deg) translate(-50%, -50%)`;

    setTimeout(tick, 1000);
}

// source: https://stackoverflow.com/a/6685414/5463404
tick();