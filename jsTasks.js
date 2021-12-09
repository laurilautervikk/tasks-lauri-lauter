// EX.1
console.log('EX.1')
let array1 = [1, 2, 3];
let array2 = [2, 30, 1];
let array3 = [];

const mergeArray = (array1, array2) => {
    array3 = [...array1, ...array2];
    return array3.filter((item, pos) => array3.indexOf(item) === pos);
}

console.log(mergeArray(array1, array2))



// EX.3
console.log('EX.3')

const persons = [
{
name: 'Julia',
age: 27
},
{
name: 'Martin',
age: 45
},
{
name: 'Taavi',
age: 17
},
{
name: 'Emma',
age: 2
},
{
name: 'Ricky',
age: 62
}
]

const totalSumOfAges = persons.reduce((accumulator, item) => accumulator + item.age, 0
);
console.log(totalSumOfAges)



// EX.4
console.log('EX.4')

const boyNames = ['Martin', 'Taavi', 'Ricky']
const girlNames = ['Julia', 'Emma']

const people = {
boys: persons.filter(item => !girlNames.includes(item.name)),
girls: persons.filter(item => !boyNames.includes(item.name)),
youngboys: persons.filter(item => !girlNames.includes(item.name) && item.age < 30),
younggirls: persons.filter(item => !boyNames.includes(item.name) && item.age < 30)
}

console.log(people)


// EX.5
console.log('EX.5')

const peopleUpperKeys = persons.map(item => Object.fromEntries(Object.entries(item).map(([key, val]) => [
  key.toUpperCase(),
  val
])));

console.log(peopleUpperKeys)





// EX.2
console.log('EX.2')

const net = require('net');
const client = net.connect({port: 80, host:"google.com"}, () => {
  console.log('MyIP='+client.localAddress);
  console.log('MyPORT='+client.localPort);
  client.end();
  return;
});
