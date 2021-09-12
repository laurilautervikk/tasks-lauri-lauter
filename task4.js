
const colors = ['Red', 'Green', 'White', 'Black']
const list = []

for (let i = 0; i < colors.length; i++) {
    list.push(colors[i])
}

const first = list.toString() + '.'
const second = list.toString() + ','
const third = list.join('+') + '+'

console.log(first)
console.log(second)
console.log(third)