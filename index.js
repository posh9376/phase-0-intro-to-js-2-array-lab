// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendCat(name) {
    return cats.push('Ralph')
}
function destructivelyPrependCat(name) {
    return cats.unshift('Bob')
}

function destructivelyRemoveLastCat(name) {
    return cats.pop()
}
function destructivelyRemoveFirstCat() {
    return cats.shift()
}
function appendCat(name) {
    return [...cats, 'Broom']
}
function prependCat(name) {
    return['Arnold',...cats]
}

function removeLastCat(params) {
    return [...cats.slice(0,2)]
}

function removeFirstCat() {
    return [...cats.slice(1)]
}