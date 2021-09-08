
function greet(name) {

    let result = 'Hello, ';

    if  (Array.isArray(name)) {
        result += name[0] + ' and ' +name[1];

    } else if (name) {
        result +=  name;

    } else {
        result +=  'my friend';

    }
    return result + '.';

};



console.log(greet('Bob'));
console.log(greet());
console.log(greet(['Jill', 'Jane']));
console.log(greet(['Jill', 'Jane', 'Judy']));
