/* Different guessing combinations
 * Hair color
 * Eye color
 * Facial hair: mustache, beard
 * Hair or no hair
 * Female or male
 * Accessories: glasses, earrings, cap/hat
 * Skin color
 * Big nose
 * Bushy eyebrows
 * Facial expression
 * 
 * Start with: 3-4 people, make game work first --> guessing dims player pictures?/ "flips player pictures"
 * Add in player pictures at top for guessing or make a guess button
 * Add guessing options for diff. traits
 */

 let characters = ["alex", "andy", "ashley", "kyle"];   // all characters
 // below are the characters in the list with the attribute/trait of the list name
 let dark_skin = ["andy"];
 let light_skin = ["alex", "ashley"];
 let brown_eyes = ["alex", "andy", "ashley"];
 let blue_eyes = ["kyle"];

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

// idk yet
function checkClass(className, element){
    if (element.classList.contains(className)){
        return true;
    }else{
        return false;
    }
}

// main - everything executes here
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

    // CHECKING WHEN HINTS ARE CLICKED BEGIN

    // Brown eyes button clicked
    document.getElementById("brown-eyes").addEventListener("click", function(){
        // does the character to be guessed have brown eyes
        let charBrownEyes = checkClass("brown-eyes", charElement);

        for (let i = 0; i < guessBtns.length; i++){
            // if char has brown eyes, then disable all char buttons that don't have brown eyes
            if (charBrownEyes){
                if (!checkClass("brown-eyes", guessBtns[i])){
                    guessBtns[i].disabled = true;
                    guessBtns[i].classList.add("disabled-btn");
                }
            // if char doesn't have brown eyes, then disable all char buttons w/ brown eyes
            }else{
                if (checkClass("brown-eyes", guessBtns[i])){
                    guessBtns[i].disabled = true;
                    guessBtns[i].classList.add("disabled-btn");
                }
            }
        }
    });

    // Blue eyes button clicked
    document.getElementById("blue-eyes").addEventListener("click", function(){
        // does the character to be guessed have blue eyes
        let charBlueEyes = checkClass("blue-eyes", charElement);

        for (let i = 0; i < guessBtns.length; i++){
            // if char has blue eyes, then disable all char buttons that don't have blue eyes
            if (charBlueEyes){
                if (!checkClass("blue-eyes", guessBtns[i])){
                    guessBtns[i].disabled = true;
                    guessBtns[i].classList.add("disabled-btn");
                }
            // if char doesn't have blue eyes, then disable all char buttons w/ blue eyes
            }else{
                if (checkClass("blue-eyes", guessBtns[i])){
                    guessBtns[i].disabled = true;
                    guessBtns[i].classList.add("disabled-btn");
                }
            }
        }
    });
}

window.onload = main();