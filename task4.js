
let colors = ['Red', 'Green', 'White', 'Black']

const first = colors.toString() + '.'
const second = colors.toString() + ','
let third = ''

for (let i = 0; i < colors.length; i++) {
    third += colors[i]+'+'
}


console.log(first)
console.log(second)
console.log(third)