
function greet(name) {
    let result = 'Hello, ';
    let row = [];

    if  (Array.isArray(name)) {
        for (let i = 0; i < name.length; i++) {
            row.push(name[i])
        }
        row.splice(row.length - 1, 0, "and") //insert 'and' in pos length-1
        row = row.join(' ') // join the array as a string separated by a gap

    } else if (name) {
        result +=  name;
    } else {
        result +=  'my friend';
    }
    return result += row + '.';

};


console.log(greet('Bob'));
console.log(greet());
console.log(greet(['Jill', 'Jane']));
console.log(greet(['Jill', 'Jane', 'Judy']));