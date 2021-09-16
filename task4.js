
let colors = ['Red', 'Green', 'White', 'Black']


let first = ''
let second = ''
let third = ''

for (let i = 0; i < colors.length; i++) {
    first += colors[i]+','
}

for (let i = 0; i < colors.length; i++) {
    second += colors[i]+','
}
second = second.slice(0, -1) + '.';


for (let i = 0; i < colors.length; i++) {
    third += colors[i]+'+'
}


console.log(first)
console.log(second)
console.log(third)