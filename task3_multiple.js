
function greet(list) {
    let hello = 'Hello, '
    let names = []

    if  (Array.isArray(list)) {

        for (let i = 0; i < list.length; i++) {
            names.push(list[i])
            
        }
        //console.log('first: ' + list)
        for (let i = 0; i < list.length - 2; i++) {
            names[i] += ','
            
        }
        //console.log('second: ' + list)

        names.splice(names.length - 1, 0, "and") //insert 'and' in pos length-1
        names = names.join(' ') // join the array as a string separated by a gap

    } else if (list) {
        hello +=  list
    } else {
        hello +=  'my friend'
    }
    return hello += names + '.'

};


console.log(greet('Bob'))
console.log(greet())
console.log(greet(['Jill', 'Jane']))
console.log(greet(['Jill', 'Jane', 'Judy']))
console.log(greet(['Jill', 'Jane', 'Judy', 'Jim', 'Cody']))