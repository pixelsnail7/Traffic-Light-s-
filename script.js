const red = document.getElementById("red");
const yellow = document.getElementById("yellow");
const green = document.getElementById("green");


// This active red light and off other lights
function redLight(callback) {
    red.style.backgroundColor = "red";
    yellow.style.backgroundColor = "black";
    green.style.backgroundColor = "black";
    setTimeout(callback, 3000); // 3 seconds
}

// This active yellow light and off other lights
function yellowLight(callback) {
    red.style.backgroundColor = "black";
    yellow.style.backgroundColor = "yellow";
    green.style.backgroundColor = "black";
    setTimeout(callback, 1000); // 1 second
}

// This active green light and off other lights
function greenLight(callback) {
    red.style.backgroundColor = "black";
    yellow.style.backgroundColor = "black";
    green.style.backgroundColor = "green";
    setTimeout(callback, 3000); // 3 seconds
}

function trafficLight() {
    redLight(() => {
        yellowLight(() => {
            greenLight(() => {
                yellowLight(() => {
                    trafficLight(); // Recursive call to continue the sequence
                }) // Loop back to the start
            });
        });
    });
}

trafficLight(); // Start the traffic light sequence