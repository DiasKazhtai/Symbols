const numberInput = prompt('Введите  число от 1 до 26')

const symbolArray = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i' ,'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q',
    'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
]

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

shuffle(symbolArray)

const symbolsForShow = []

for(let i = 0; i < numberInput; i++) {
    symbolsForShow.push(symbolArray[i])
}
alert(symbolsForShow)
const symbolForReplaceFirst = prompt('Введите символ')

for(let i = 0; i < numberInput; i ++) {
    symbolsForShow[i] = symbolForReplaceFirst
}

alert(symbolsForShow)

const symbolForReplaceSecond = prompt('Введите символ')
for(let i = 0; i < numberInput; i ++) {
    symbolsForShow[i] = symbolForReplaceSecond
}
alert(symbolsForShow)
alert(`Количество заменненных символов ${numberInput}`)
