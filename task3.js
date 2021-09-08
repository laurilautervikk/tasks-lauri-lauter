
function greet(name) {

    if  (Array.isArray(name) == true) {
        //console.log('<asukoht array>')
        return 'Hello, ' + name[0] + ' and ' +name[1] + '.';
        

    } else if (name != null) {
        //console.log('<asukoht name>')
        return 'Hello, ' + name + '.';

    } else {
        //console.log('<asukoht friend>')
        return 'Hello, my friend.';

    }

};







console.log(greet('Bob'));
console.log(greet());
console.log(greet(['Jill', 'Jane']));

