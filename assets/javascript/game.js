// Pseudocode
// Need to dynamically generate 4 crystal images to the HTML
// Each crystal needs a random value associated from 1-12
// Need to get a random target value from 19 - 120 and display in HTML
// If a crystal is clicked we add its randomized value to the user total.
// If user total matches the random target number, the user wins
// If user total exceeds random target number, the user loses.
// Reset the random target number and the crystal numbers after a win or loss.
// Increment the Wins and Loss totals based on outcomes. 


$(document).ready();{
    var crystalImages = ["assets/images/crystal1.jpg", "assets/images/crystal2.jpg", 
        "assets/images/crystal3.jpg", "assets/images/crystal4.jpg"];

    var counter = 0;
    var lossCount = 0;
    var winCount = 0;
    var max = 120;
    var min = 19;
    var randomNumber = randomInteger(min, max);

    var crystalDiv = $("#crystal-area");
    function imageHandler() {
        for(var i = 0; i < crystalImages.length; i++){
            var newImg = $("<img>");
            var crystalValue = Math.ceil(Math.random() * 11);
            newImg.addClass("crystal-image");
            newImg.attr("src", crystalImages[i]);
            newImg.attr("data-crystalvalue", crystalValue);
            newImg.css("width", 200);
            newImg.css("height", 200);
            crystalDiv.append(newImg);
        }
    }
    imageHandler();
    $(".crystal-image").on("click", function() {
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        counter += crystalValue;
        $("#score-display").text(counter);
        console.log(counter);
        outcomeHandler();
    })

    $("#random-number").text(randomNumber);
    

    // Game functions
    function randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min) )+ min;
    }

    function losingOutcome() {
        counter = 0;
        lossCount ++;
        $("#loss-count").text(lossCount);
        randomInteger(min, max);
        $("#random-number").text(randomNumber);
        imageHandler();
    }

    function winningOutcome() {
        counter = 0;
        winCount ++;
        $("#win-count").text(winCount);
        randomInteger(min, max);
        $("#random-number").text(randomNumber);
        imageHandler();
    }

    function outcomeHandler() {
        if(counter > randomNumber) {
            losingOutcome();
            console.log("Losing outcome runs");
        } else if(counter === randomNumber) {
            winningOutcome();
            console.log("winning outcome runs");
        }
    }
}

