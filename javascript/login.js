const loginInput = document.querySelector('.loginInput')
const button = document.querySelector('.loginButton')
const form = document.querySelector('.loginForm')


const validateInput = ({ target }) => {
    if(target.value.length >2 ){
        button.removeAttribute('disabled')
        return;
    } 
        button.setAttribute('disabled' , '')
}

const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('Player' , loginInput.value)
    window.location = 'pages/game.html'
}


loginInput.addEventListener('input' , validateInput)
form.addEventListener('submit' , handleSubmit)
