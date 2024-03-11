const $letter = document.querySelector("#letter")
const $input = document.querySelector("#input")

const ru = 'йцукенгшщзхъфывапролджэячсмитьбю'
const en = "qwertyuiop[]asdfghjkl;'zxcvbnm,."
let letter;

next()

$input.addEventListener('input', evt => {
    evt.data === en[letter] && next()
})

function next() {
    letter = Math.floor(Math.random() * ru.length)
    $letter.innerHTML = ru[letter]
}
