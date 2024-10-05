// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var textToSpeak = 'This is the text string that you will generate with your script';
var speakButton = document.querySelector('button');
var resultDisplay = document.getElementById

// Arrays for random phrases
var nouns = ['cat', 'dog', 'car', 'house', 'tree'];
var verbs = ['jumps', 'runs', 'flies', 'sits', 'sleeps'];
var adjectives = ['quick', 'lazy', 'happy', 'sad', 'angry'];
var anotherNouns = ['ball', 'cup', 'book', 'pen', 'shoe'];
var places = ['park', 'school', 'home', 'store', 'beach'];

/* Functions
-------------------------------------------------- */
// Function to speak text (kept as it is in the original code)
function speakNow(string) {
    // Create a new speech object, attaching the string of text to speak
    var utterThis = new SpeechSynthesisUtterance(string);
    // Actually speak the text
    synth.speak(utterThis);
}

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function addRandomPhrase(phrase) {
    textToSpeak += phrase + ' ';
    resultDisplay.textContent = textToSpeak; 
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the variable textToSpeak (original button)
speakButton.onclick = function() {
    speakNow(textToSpeak);
};

document.getElementById('nounButton').onclick = function() {
    addRandomPhrase(getRandomItem(nouns));
};
document.getElementById('verbButton').onclick = function() {
    addRandomPhrase(getRandomItem(verbs));
};
document.getElementById('adjectiveButton').onclick = function() {
    addRandomPhrase(getRandomItem(adjectives));
};
document.getElementById('anotherNounButton').onclick = function() {
    addRandomPhrase(getRandomItem(anotherNouns));
};
document.getElementById('placeButton').onclick = function() {
    addRandomPhrase(getRandomItem(places));
};

// Reset functionality to clear the current phrase
document.getElementById('resetButton').onclick = function() {
    textToSpeak = '';  
    resultDisplay.textContent = '';  
};

// Random story generation
document.getElementById('randomStoryButton').onclick = function() {
    textToSpeak = `${getRandomItem(nouns)} ${getRandomItem(verbs)} ${getRandomItem(adjectives)} ${getRandomItem(anotherNouns)} ${getRandomItem(places)}`;
    resultDisplay.textContent = textToSpeak; 
};