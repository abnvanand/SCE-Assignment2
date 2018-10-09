const hourHand = document.getElementById("hour-hand");
const minuteHand = document.getElementById("minute-hand");
const secondHand = document.getElementById("second-hand");

function tick() {
    let date = new Date();
    let hrs = date.getHours(), mins = date.getMinutes(), sec = date.getSeconds(), degree;

    degree = (hrs / 12) * 360;
    hourHand.style.transform = `rotate(${degree}deg) translate(-50%, -50%)`;

    degree = (mins / 60) * 360;
    minuteHand.style.transform = `rotate(${degree}deg) translate(-50%, -50%)`;

    degree = (sec / 60) * 360;
    secondHand.style.transform = `rotate(${degree}deg) translate(-50%, -50%)`;

    setTimeout(tick, 1000);
}

// source: https://stackoverflow.com/a/6685414/5463404
tick();