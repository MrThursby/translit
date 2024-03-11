const $letter = document.querySelector("#letter")
const $input = document.querySelector("#input")
const $body = document.querySelector("body")

const ru = 'йцукенгшщзхъфывапролджэячсмитьбю'
const en = "qwertyuiop[]asdfghjkl;'zxcvbnm,."
let letter;

next()

$input.addEventListener('input', evt => {
    evt.target.value = ''
    evt.data === ru[letter] && next()
})

function next() {
    const _new =  Math.floor(Math.random() * ru.length)

    if (_new === letter) return next()

    letter = _new
    $letter.innerHTML = en[letter]
}

window.addEventListener('resize', () => {
    // For the rare legacy browsers that don't support it
    if (!window.visualViewport) return

    $body.style.height = window.visualViewport.height + 'px'
})