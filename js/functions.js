const input = document.querySelector('input')
const button = document.querySelector('button')

const getRandomIntNumberInRange = (min,max) => {
    return Math.floor(Math.random() * max) + min
}

button.addEventListener('click', () =>{
    //arvotaan satunnaisluku
    const randomizeNumber = getRandomIntNumberInRange(1,6)
    const guess = Number(input.value)
    //jos arvaus on sama kuin satunnaisluku
    if (guess === randomizeNumber) {
        alert("Arvasit oikein, numero on " + randomizeNumber)
    } else {
        alert("Arvasit väärin, numeron on " + randomizeNumber)
    }
})