const $letter = document.querySelector("#letter")
const $input = document.querySelector("#input")
const $body = document.querySelector("body")

const ru = 'йцукенгшщзхъфывапролджэячсмитьбю'
const en = "qwertyuiop[]asdfghjkl;'zxcvbnm,."
let letter;

const letter_gen = next_letter()
next()

$input.addEventListener('input', evt => {
    evt.target.value = ''
    evt.data === ru[letter] && next()
})


function next() {
    const nl = letter_gen.next().value
    console.log(nl)

    letter = ru.split('').indexOf(nl.toLowerCase())
    $letter.innerHTML = nl === nl.toLowerCase() ? en[letter] : en[letter].toUpperCase()
}

window.addEventListener('resize', () => {
    // For the rare legacy browsers that don't support it
    if (!window.visualViewport) return

    $body.style.height = window.visualViewport.height + 'px'
})

function* next_letter() {
    while (true) {
        const word = generate_word().split('')

        for (const letter of word) {
            yield letter
        }
    }
}

function generate_word() {
    const dictonary = `хвоя
Берлин
каморка
документ
баклажан
лунатик
курок
кактус
юар
икебана
шайба
карцер
старец
барабан
мыло
авиадесантник
термит
Курск
комель
вампир
перец
бампер
простыня
тополь
ангел
наушник
река
коврик
рукавица
ушиб
радуга
гарем
кратер
жасмин
лимон
дух
лед
мул
водоем
бульон
кастрюля
Мадагаскар
дыра
апач
квитанция
прядь
платформа
баркас
одеяло
пианино
бирка
африканец
буклет
посуда
Венесуэла
эрмитаж
грамота
акция
песок
манекен
бардак
живот
покрывало
башмак
барбос
колено
воск
инсулин
локатор
футляр
настойка
мрамор
помада
журналист
гранит
конюшня
жених
искра
карат
кляп
альбатрос
сахар
краб
кишка
афганец
температура
колесо
молния
вилка
каталка
гальюн
вундеркинд
луг
знаменитость
сверчок
ливень
кирка
автопокрышка
марля
комод
кариатида
браслет
шимпанзе
желудок
клубника
богема
костер
смола
банкет
бигуди
Кремль
мышьяк
желток
конфетка
комбайнер
калифорний
ожог
гинеколог
свирель
граница
акционер
луковка
фундамент
клюв
панель
бездорожье
жилплощадь
поднос
солярка
копье
ведро
крематорий
казино
консерватория
валет
линия
зоря
амброзия
розетка
кибернетик
загс
корректор
архитектор
феникс
каменщик
кикимора
архимиллионер
фиалка
форель
объявление
каторга
муравей
паразит
кузов
автобаза
княжество
морковь
обои
растение
кучер
иллюзионист
йог
железо
туя
закон
извилина
Лондон
икра
бацилла
закись
окись
старец
водитель
бат
баянист
дренаж
лопух
анаша
Бухарест
балдахин
Днестр
галактика
монстр
автомеханик
аммиак
обелиск
бородавка
бронетехника
мускул
авиастроитель
грунт
моллюск
кабак
монашка
конус
пион
алоэ
защелка
кубрик
государство`.split('\n')
    return dictonary[Math.floor(Math.random() * (dictonary.length - 1))]
        .split('')
        .map((_, index) => index === 0 ? _.toUpperCase() : _)
        .join('')
}