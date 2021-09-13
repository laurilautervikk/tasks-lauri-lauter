
const numbers = []

// generate 5 random numbers between 1 and 100
function randomize() {
    for (let i = 0; i < 5; i++) {
        numbers.push(Math.floor((Math.random() * 100) + 1))
    }
}

//find max
function max(arr) {
    console.log('Max number: ' + Math.max(...arr))
}

//find min
function min(arr) {
    console.log('Min number: ' + Math.min(...arr))
}

//check if even, via reminder
//generate a new array with the boolean results
//log the lenght of the new array
function even(arr) {
    const bool = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            bool.push(true)
        }
    }
    console.log('Count even: ' + bool.length)
}



randomize()
max(numbers)
min(numbers)
even(numbers)

console.log('Numbers are: ' + numbers)
