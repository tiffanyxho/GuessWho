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
     return charToGuess;    // return character
}

// 
function removeEle(element, className){
    element.classList.contains(className);
}

// 
function checkClass(className, list){
    for (let i = 0; i < list.length; i++){
        if (list[i].classList.contains(className)){
            
        }
    }
}

// main - everything executes here
function main(){
    // load character to be guessed
    characterToGuess();
}

window.onload = main();