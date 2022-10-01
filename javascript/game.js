const grid = document.querySelector('.grid')
const player = document.querySelector('.player')
const timer = document.querySelector('.timer')

const characters = [
    'allMight',
    'bakugou',
    'dabi',
    'deku',
    'kiribaku',
    'todoroki',
    'twice',
    'uraraka',
    'toga',
    'miruko',
]

const setPlayer = localStorage.getItem('Player')

const createCardElement = (tag, className)=>{
    const element = document.createElement(tag)

    element.className = className

    return element;
}

let firstCard = ''
let secondCard = ''

const checkEndGame = ()=>{
    const disabledCards = document.querySelectorAll('.disabledCard')

    if(disabledCards.length === 20){
        clearInterval(this.loop)
        alert(`parabéns ${player} !!, você venceu. Você terminou o jogo em ${timer.innerHTML} segundos !`)

    }
}

const checkCards = ()=>{
    const firstCharacter = firstCard.getAttribute('dataCharacter')
    const secondCharacter = secondCard.getAttribute('dataCharacter')

    if (firstCharacter === secondCharacter){
        firstCard.firstChild.classList.add('disabledCard')
        secondCard.firstChild.classList.add('disabledCard')

        firstCard = ''
        secondCard = ''

        checkEndGame()

    } else {
        
        setTimeout( () => {
            
            firstCard.classList.remove('reveal-card')
            secondCard.classList.remove('reveal-card')
        
            firstCard = ''
            secondCard = ''

        }, 500 )
    }
}

const revealCard = ({ target })=>{

    if (target.parentNode.className.includes('reveal-card')){
        return;
    }

    if (firstCard === ''){
        target.parentNode.classList.add('reveal-card')
        firstCard = target.parentNode;
    
    } else if(secondCard === ''){
        target.parentNode.classList.add('reveal-card')
        secondCard = target.parentNode;

        checkCards();
    }
}

const createCard = (character) => {
    const card = createCardElement('div' , 'card')
    const front = createCardElement('div' , 'face front')
    const back = createCardElement('div' , 'face back')

    front.style.backgroundImage = `url(../images/${character}.jpg)` 


    card.appendChild(front);
    card.appendChild(back)

    card.addEventListener('click', revealCard)
    card.setAttribute('dataCharacter', character)
    return card;
}

const loadGame = () => {

    const duplicateCharacters = [...characters , ...characters];

    const charactersShuffled = duplicateCharacters.sort(() => Math.random() - 0.5 )

    charactersShuffled.forEach((character)=> {
        const card = createCard(character)   

        grid.appendChild(card)
    });
}

const startTimer = ()=>{

    this.loop = setInterval(()=>{
        const currentTime = +timer.innerHTML

        timer.innerHTML = currentTime + 1
    },1000)
}


window.onload = ()=>{

    const setPlayer = localStorage.getItem('Player')

    player.innerHTML = setPlayer;
    startTimer()
    loadGame();
}
