
function check(string) {
    if (!string) {
        return true
    } else {
        return false
    }
}

function up(string) {
    if (!string) {
        return string
    } else {
        return string = string.charAt(0).toUpperCase() + string.slice(1);
    }
}

const a = ''
const b = 'tere'
const c = 'minu nimi on John'


console.log(check(a))
console.log(check(b))
console.log(check(c))

console.log(up(a))
console.log(up(b))
console.log(up(c))


