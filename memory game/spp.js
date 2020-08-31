document.addEventListener('DOMContentLoaded', () =>{

const cardArray = [
    {
        name: 'bus',
        img: 'img/bus.png'
    },
    {
        name: 'bus',
        img: 'img/bus.png'
    },
    {
        name: 'car',
        img: 'img/car.png'
    },
    {
        name: 'car',
        img: 'img/car.png'
    },
    {
        name: 'plane',
        img: 'img/plane.png'
    },
    {
        name: 'plane',
        img: 'img/plane.png'
    },
    {
        name: 'excavator',
        img: 'img/excavator.png'
    },
    {
        name: 'excavator',
        img: 'img/excavator.png'
    },
    {
        name: 'truck',
        img: 'img/truck.png'
    },
    {
        name: 'truck',
        img: 'img/truck.png'
    },
    {
        name: 'helicopter',
        img: 'img/helicopter.png'
    },
    {
        name: 'helicopter',
        img: 'img/helicopter.png'
    }
]

cardArray.sort(() => 0.5 - Math.random())


const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
var cardsChosen = []
var cardsChosenId = []
var cardsWon = []

function createBoard(){
    for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img')
        card.setAttribute('src', 'img/blue.png')
        card.setAttribute('data-id', i )
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}
 

function checkForMatch(){
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]){
        alert('You found a mach')
        cards[optionOneId].setAttribute('src', 'img/white.png')
        cards[optionTwoId].setAttribute('src', 'img/white.png')
        cardsWon.push(cardsChosen)
    }else{
    cards[optionOneId].setAttribute('src', 'img/blue.png')
    cards[optionTwoId].setAttribute('src', 'img/blue.png')
    alert('Sorry try again')
    }
    cardsChosen = []
    cardsChosenId = [] 
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length/2){
        resultDisplay.textContent = 'WON!'
    }
}

function flipCard(){
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src' , cardArray[cardId].img)
    if (cardsChosen.length === 2 ){
        setTimeout(checkForMatch, 500)
    }
}

 
createBoard()
})
