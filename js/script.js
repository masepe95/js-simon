console.log('JS OK') 

// Recupero gli elementi dal DOM 
const countdownField = document.getElementById('countdown');
const resultField = document.getElementById('resultField');
const playButton = document.getElementById('playButton');
const refreshButton = document.getElementById('refreshButton');
const numbersListField = document.querySelector('.numberList');
const inputField = document.getElementById('inputs')
const instrucionsTitle = document.getElementById('instructions')


// Valore di partenza del timer
let timer = 30;

// Stampo in pagina il valore di partenza del timer 
countdownField.innerText = timer;

// Funzione in variabile per diminuire il valore del timer ad ogni secondo.
const countdown = setInterval(function(){
    countdownField.innerText = --timer;
},1000)

// Creo una funzione che mi generi un numero causale da 1 a 99.
const randomNumber = (max) => {
    const randomNumber = Math.floor(Math.random() * max) + 1;
    return randomNumber;
}

// Array per i numeri casuali
let numbers = [];

// Ciclo for per pushare in array 5 numeri casuali  
for (let i = 0; i < 5; i++){
    numbers.push(randomNumber(99));
}

// Stampo in pagina i 5 numeri creati nel for con una lista
let numbersList = `<ul>`

for (let i = 0; i < 5; i++){
    numbersList += `<li>${numbers[i]}</li>`
}
numbersList += `</ul>`

numbersListField.innerHTML = numbersList;

//Fermare il timer
const countdownTimeout = setTimeout(function(){
    timer = 'Input numbers showed:';
    countdownField.innerText = timer;
    clearInterval(countdown);
    numbersListField.classList.add('d-none')
    inputField.classList.remove('d-none')
    playButton.classList.remove('d-none')
    instrucionsTitle.classList.add('d-none')

},30000)

playButton.addEventListener('click', () => {
    // Stabilisco un punteggio iniziale
    let score = 0;
    // Array per numeri corretti
    let correctNumbers = [];

    for (let i = 0; i < 5; i++){
        const userInput = parseInt(document.getElementById(`${i}`).value)
        if (numbers.includes(userInput)) {
            score++
            correctNumbers.push(userInput);
        }

    }

    // Scrivo i risultati
    const winText = `You scored ${score} points and answered correctly to ${correctNumbers} `
    const loseText = 'You scored no points. You lost.'

    // Stampo il risultato in pagina 
    score ? resultField.innerText = winText : resultField.innerText = loseText;
    inputField.classList.add('d-none')
    playButton.classList.add('d-none')
    refreshButton.classList.remove('d-none')
})

// Refresho pagina per rigiocare
refreshButton.addEventListener('click', () => {
    location.reload()
})