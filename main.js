// Generate a random RGB color
let correctColor = {
    red: Math.floor(Math.random() * 256),
    green: Math.floor(Math.random() * 256),
    blue: Math.floor(Math.random() * 256)
}

// Display the color
let colorDisplay = document.getElementById("colorDisplay");
colorDisplay.style.backgroundColor = `rgb(${correctColor.red}, ${correctColor.green}, ${correctColor.blue})`;

// Display the correct RGB values (for debugging)
document.getElementById("correctRGB").textContent = `Correct RGB values: R${correctColor.red} G${correctColor.green} B${correctColor.blue}`;


// Handle slider changes
let sliders = document.querySelectorAll(".slider");
sliders.forEach(slider => {
    slider.oninput = function() {
        document.getElementById(slider.id + "Num").value = this.value;
    }
});

// Handle number input changes
let numberInputs = document.querySelectorAll('input[type="number"]');
numberInputs.forEach(numberInput => {
    numberInput.oninput = function() {
        document.getElementById(this.id.replace("Num", "")).value = this.value;
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

    // Add congratulatory message if the guess is correct
    // Add congratulatory message if the guess is correct
    if (totalDistance === 0) {
        document.getElementById("result").textContent = "Congratulations! You've guessed the color correctly.";
    } else {
        document.getElementById("result").textContent = "";
    }


}
