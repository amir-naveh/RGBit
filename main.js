// Generate a random RGB color
let correctColor = {
    red: Math.floor(Math.random() * 256),
    green: Math.floor(Math.random() * 256),
    blue: Math.floor(Math.random() * 256)
}

// Display the color
let colorDisplay = document.getElementById("colorDisplay");
colorDisplay.style.backgroundColor = `rgb(${correctColor.red}, ${correctColor.green}, ${correctColor.blue})`;

// Handle slider changes
let sliders = document.querySelectorAll(".slider");
sliders.forEach(slider => {
    slider.oninput = function() {
        document.getElementById(slider.id + "Val").textContent = this.value;
    }
});

// Compute the distance between the correct color and the user's guess
function submitGuess() {
    let redGuess = document.getElementById("red").value;
    let greenGuess = document.getElementById("green").value;
    let blueGuess = document.getElementById("blue").value;

    let redDistance = correctColor.red - redGuess;
    let greenDistance = correctColor.green - greenGuess;
    let blueDistance = correctColor.blue - blueGuess;

    let totalDistance = Math.abs(redDistance) + Math.abs(greenDistance) + Math.abs(blueDistance);
    document.getElementById("distance").textContent = `Total distance: ${totalDistance}`;

    if (distance === 0) {
        alert('Congratulations! You have found the exact color!');
        newColor();
    }
}
