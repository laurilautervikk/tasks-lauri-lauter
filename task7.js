

// generate n amount of random numbers between 1 and 100
function randomize(n) {
    let numbers = []
    for (let i = 0; i < n; i++) {
        numbers.push(Math.floor((Math.random() * 100) + 1))
    }
    return numbers
}

//find max number in array
function max(arr) {
    return Math.max(...arr)
}

//find min number in array
function min(arr) {
    return Math.min(...arr)
}

//find the amount of even numbers in the array
function even(arr) {
    const bool = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            bool.push(true)
        }
    }
    return bool.length
}


const numbers = randomize(5)
console.log(numbers)

const maxNumber = max(numbers)  
console.log(maxNumber)

const minNumber = min(numbers)  
console.log(minNumber)

const evenNumber = even(numbers)  
console.log(evenNumber)

