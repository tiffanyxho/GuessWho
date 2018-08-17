 // initialize variables
 let characters = ["alex", "andy", "ashley", "brandon", "chris", "connor", "daniel", "david", 
 "emily", "jake", "james", "jon", "joseph", "joshua", "justin", "kyle", "megan", "matt", "nick", 
 "rachael", "sarah", "tyler", "william", "zachary"];   // list of all characters
 // below are the characters in the list with the attribute/trait of the list name
 let dark_skin = ["andy"];
 let light_skin = ["alex", "ashley"];
 let brown_eyes = ["alex", "andy", "ashley"];
 let blue_eyes = ["kyle"];
 // characteristic IDs in a list
 let characteristicIDs = ["brown-eyes", "blue-eyes", "female", "male", "hat", "glasses", 
                        "dark-skin", "light-skin", "beard", "mustache", "beard-and-mustache", 
                        "no-facial-hair", "black-hair", "white-hair", "red-hair", "yellow-hair", 
                        "brown-hair", "thin-eyebrows", "thick-eyebrows", "not-showing-eyebrows", 
                        "big-nose", "regular-or-small-nose"];

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
function checkHint(characteristicID, list, characterToBeGuessedp){
    document.getElementById(characteristicID).addEventListener("click", function(){
        // Characteristic = boolean set based on whether the characterToBeGuessed has characteristicID as a class
        let characteristic = checkClass(characteristicID, characterToBeGuessed);

        for (let i = 0; i < list.length; i++){
            // if char has characteristic, then disable all char buttons that w/o characteristic
            if (characteristic){
                if (!checkClass(characteristicID, list[i])){
                    list[i].disabled = true;
                    list[i].classList.add("disabled-btn");
                    document.getElementById("hints-text").innerHTML = document.getElementById(characteristicID).parentElement.parentElement.children[0].innerHTML + ": " + document.getElementById(characteristicID).innerHTML + "? <br> Yes";
                }
            // if char doesn't have characteristic, then disable all char buttons w/ characteristic
            }else{
                if (checkClass(characteristicID, list[i])){
                    list[i].disabled = true;
                    list[i].classList.add("disabled-btn");
                    document.getElementById("hints-text").innerHTML = document.getElementById(characteristicID).parentElement.parentElement.children[0].innerHTML + ": " + document.getElementById(characteristicID).innerHTML + "? <br> No";
                }
            }
        }
    });
}

// Refresh page / restart game
function refreshPage(){
    window.location.reload();
}

// Disables all buttons in list
function disableButtonsInList(list){
    for (let i = 0; i < list.length; i++){
        list[i].disabled = "true";
    }
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
    let hintBtns = document.getElementsByClassName("characteristic");

    document.getElementById("guesses-left").innerHTML = "Guesses: " + guesses;
    document.getElementById("hints-left").innerHTML = "Hints: " + hints;

    document.getElementById("refresh-btn").addEventListener("click", refreshPage);
    
    // AddEventListeners to all character buttons - if a button is clicked & it's not the char, disable it, else you win!
    for (let i = 0; i < guessBtns.length; i++){
        guessBtns[i].addEventListener("click", function update(){
            if (guesses > 0 && hints >= 0){
                if (guessBtns[i].id === charName){   // you win
                    document.getElementById("end-text").innerHTML = "You win!";
                    guessed = true;

                    // disables all character buttons & hint buttons so that user cannot click when they win
                    disableButtonsInList(guessBtns);
                    disableButtonsInList(hintBtns);
                }else{  
                    guessBtns[i].disabled = true;   // disable button guessed when clicked
                    guessBtns[i].classList.add("disabled-btn");
                    guesses--;  // -1 from number of guesses left
                }
                // update number of guesses left
                document.getElementById("guesses-left").innerHTML = "Guesses: " + guesses;
            }
            if (hints === 0){
                // disables all hint buttons so that user cannot click when they win
                disableButtonsInList(hintBtns);
            }
            if (guesses === 0){
                // disables all character buttons & hint buttons so that user cannot click when they win
                disableButtonsInList(guessBtns);
                disableButtonsInList(hintBtns);
            }
        });
    }

    // Add EventListeners to check when a hint button is clicked
    for (let i = 0; i < characteristicIDs.length; i++){
        checkHint(characteristicIDs[i], guessBtns, charElement);
    }
}

window.onload = main();