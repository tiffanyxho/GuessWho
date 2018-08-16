 // initialize variables
 let characters = ["alex", "andy", "ashley", "emily", "james", "jon", "kyle", "nick", "sarah", "william"];   // all characters
 // below are the characters in the list with the attribute/trait of the list name
 let dark_skin = ["andy"];
 let light_skin = ["alex", "ashley"];
 let brown_eyes = ["alex", "andy", "ashley"];
 let blue_eyes = ["kyle"];
 // characteristic IDs in a list
 let characteristicIDs = ["brown-eyes", "blue-eyes", "female", "male", "hat", "glasses", 
                        "dark-skin", "light-skin", "beard", "mustache", "beard-and-mustache", "no-facial-hair", 
                        "black-hair", "white-hair", "red-hair", "yellow-hair", "brown-hair", 
                        "thin-eyebrows", "thick-eyebrows", "not-showing-eyebrows", "big-nose",
                        "regular-or-small-nose"];

 // Generate random character for user to guess
 function characterToGuess(){
     let randNum = Math.floor(Math.random() * characters.length);   // generate random number between 0 & length of characters list -1
     let charToGuess = characters[randNum]; // character to be guessed in characters list
     console.log(charToGuess);  
     return charToGuess;    // return character id/name
}

// check if element contains the class className
function removeEle(element, className){
    element.classList.contains(className);
}

// Checks if element has className, return true if so, else return false
function checkClass(className, element){
    if (element.classList.contains(className)){
        return true;
    }else{
        return false;
    }
}

// Adds an event listener when a dropdown menu hint button is pressed & disables buttons that do not fit the hint clicked
function checkHint(characteristicID, list, characterToBeGuessed){
    document.getElementById(characteristicID).addEventListener("click", function(){
        // Characteristic = boolean set based on whether the characterToBeGuessed has characteristicID as a class
        let characteristic = checkClass(characteristicID, characterToBeGuessed);

        for (let i = 0; i < list.length; i++){
            // if char has characteristic, then disable all char buttons that w/o characteristic
            if (characteristic){
                if (!checkClass(characteristicID, list[i])){
                    list[i].disabled = true;
                    list[i].classList.add("disabled-btn");
                    document.getElementById("hints-text").innerHTML = "Yes " + document.getElementById(characteristicID).innerHTML;
                }
            // if char doesn't have characteristic, then disable all char buttons w/ characteristic
            }else{
                if (checkClass(characteristicID, list[i])){
                    list[i].disabled = true;
                    list[i].classList.add("disabled-btn");
                    document.getElementById("hints-text").innerHTML = "No " + document.getElementById(characteristicID).innerHTML;
                }
            }
        }
    });
}

// Execution
function main(){
    let guesses = 3;    // number of guesses allowed
    let guessed = false;
    let hints = 8;  // number of hints left
    let charName = characterToGuess();   // name/id of character to be guessed
    let charElement = document.getElementById(charName);

    // get all buttons that user may guess
    let guessBtns = document.getElementsByClassName("standard-btn");
    
    // iterate through all character buttons - if a button is clicked, disable it, else you win! 
    // Also display end game text if you run out of guesses or guess the right character
    for (let i = 0; i < guessBtns.length; i++){
        guessBtns[i].addEventListener("click", function(){
            if (guessBtns[i].id === charName){   // you win
                document.getElementById("end-text").innerHTML = "You win!";
                guessed = true;
            }else{  
                guessBtns[i].disabled = true;   // disable button guessed when clicked
                guessBtns[i].classList.add("disabled-btn");
                guesses--;  // -1 from number of guesses left
            }
            // update number of guesses left
            document.getElementById("guessesLeft").innerHTML = "Guesses: " + guesses;

            // lose text
            if (guesses === 0){
                document.getElementById("end-text").innerHTML = "You lose! :(";
            }
        });
    }

    // Checks when a hint button is clicked
    for (let i = 0; i < characteristicIDs.length; i++){
        checkHint(characteristicIDs[i], guessBtns, charElement);
    }
}

window.onload = main();