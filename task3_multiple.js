
function greet(name) {

    let result = 'Hello, ';
    
    let row = ''; //finish this puzzle


    if  (Array.isArray(name)) {

        row.push();
        //result += name[0] + ' and ' +name[1];

    } else if (name) {
        result +=  name;

    } else {
        result +=  'my friend';

    }
    return result + row + '.';

};



console.log(greet('Bob'));
console.log(greet());
console.log(greet(['Jill', 'Jane']));
console.log(greet(['Jill', 'Jane', 'Judy'])); // Make this work