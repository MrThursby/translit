const $letter = document.querySelector("#letter")
const $input = document.querySelector("#input")

const ru = 'йцукенгшщзхъфывапролджэячсмитьбю'
const en = "qwertyuiop[]asdfghjkl;'zxcvbnm,."
let letter;

next()

$input.addEventListener('input', evt => {
    evt.data === ru[letter] && next()
})

function next() {
    const _new =  Math.floor(Math.random() * ru.length)

    if (_new === letter) return next()

    letter = _new
    $letter.innerHTML = en[letter]
}
