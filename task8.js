const rawdata = require('./moviedata.json')

let data = []


function rebuild(input) {
    for (i in input){
        let set = input[i]
        for (j in set) {
            if (set[j] == set.Year) {
                //convert year to number
                set[j] = +set[j]
            
            // ONLY needed when date is required in a different format
            // } else if (set[j] == set.Released) {
            //     //date to milliseconds
            //     set[j] = Date.parse(set[j])

            } else if (set[j] == set.Runtime) {
                set[j] = set[j].split(' ')
                // the time string is split
                newSet = []
                //converting time strings to numbers
                newSet.push(+set[j][0], +set[j][2])
                //convert hours and minutes to milliseconds
                set[j] = newSet[0] * 3600000 + newSet[1] * 60000

            } else if (set[j] == set.Genre) {
                //convert string to array
                set[j] = set[j].split(', ')

            } else if (set[j] == set.Director) {
                //convert string to array
                set[j] = set[j].split(', ')

            } else if (set[j] == set.Writer) {
                //convert string to array
                set[j] = set[j].split(', ')

            } else if (set[j] == set.Actors) {
                //convert string to array
                set[j] = set[j].split(', ')

            } else if (set[j] == set.imdbRating) {
                //convert string to number
                set[j] = +set[j]

            } else if (set[j] == set.imdbVotes) {
                //convert string to number, remove commas before that
                set[j] = +set[j].split(',').join('')

            } else {
                //console.log('Nothing found')  
            }
        }
        //push into new array
        data.push(input[i])
      }
    return data
};

data = rebuild(rawdata)



//Ex 1
console.log('\n' + 'Ex 1')

//1.1
// Find and log out all movies that are released between 1962 and 1972
function movieRange(y1, y2) {
    return data.filter((movie) => {
      return movie.Year >= y1 && movie.Year <= y2
    })
  }

//log out movies
function logMovies(input) {
    console.log('\n' + 'Movies released between 1962 and 1972 are: ', )
    for (let i = 0; i < input.length; i++) {
        console.log(input[i].Title)
    }
}

//an array that contains the below selection
const selection = movieRange(1962, 1972)

//set range of movies and log the result
const logSelectionTitle = logMovies(movieRange(1962, 1972))


//1.2
//get Highest Rating
let maxRating = selection.reduce((max, item) => max.imdbRating > item.imdbRating ? max : item);

//get Highest Votes
let maxVotes = selection.reduce((max, item) => max.imdbVotes > item.imdbVotes ? max : item);

//1.3
console.log('\n' + `Best rated movie is ${maxRating.Title}, directed by ${maxRating.Director} and was released in ${maxRating.Released}.`)
//1.3.1
console.log(`Most rated movie is ${maxVotes.Title}, directed by ${maxVotes.Director} and was released in ${maxVotes.Released}.`)


//Ex 2
console.log('\n' + 'Ex 2')

//2.1
// Find all movies, where genre includes Drama
const selectionByGenre = data.filter((movie) => {
if (movie.Genre.includes('Drama')) {
    return movie
}
})

//2.2
//get Highest Rating
let maxRating2 = selectionByGenre.reduce((max, item) => max.imdbRating > item.imdbRating ? max : item);

//get Highest Votes
let maxVotes2 = selectionByGenre.reduce((max, item) => max.imdbVotes > item.imdbVotes ? max : item);

//2.3
console.log('\n' + `Best rated drama is ${maxRating2.Title}, directed by ${maxRating2.Director} and was released in ${maxRating2.Released}.`)
//2.3.1
console.log(`Most rated drama is ${maxVotes2.Title}, directed by ${maxVotes2.Director} and was released in ${maxVotes2.Released}.`)




//Ex 3
console.log('\n' + 'Ex 3')

//3.1
// Find all movies, that are rated R
const selectionByRating = data.filter((movie) => {
if (movie.Rated.includes('R')) {
    return movie
}
})

//3.2
const names = []
function getMovieNames(input) {
    for (let i = 0; i < input.length; i++) {
        names.push(input[i].Title)
    }
    return names.join(', ')
}

console.log('\n' + 'Movies that are rated R are:' + '\n', getMovieNames(selectionByRating) + '.')

//3.3

const actors = []
function getActorNames(input) {
    //loop over movies
    for (let i = 0; i < input.length; i++) {
        n = input[i].Actors
        //loop over actors
        for (let j = 0; j < n.length; j++) {
            actors.push(n[j])
        }
    }
    //remove duplicates
    let uniqActors = [...new Set(actors)]  
    //retun actors without duplicates, separated by commas
    return uniqActors.join(', ')
}
//3.4
console.log('\n' + 'Actors that played in those movies:' + '\n', getActorNames(selectionByRating) + '.')//the '.' was not required, but it looks ok



//Ex 4*
console.log('\n' + 'Ex 4*')

//4.1
// Find all movies that have imdb rating higher than 9.0
const selectionByImdbRating = data.filter((movie) => {
    if (movie.imdbRating >= 9.0) {
        return movie
    }
    })

//console.log('9.0 ', selectionByImdbRating)

//4.2
const listNiners = []
function titleList(input) {
    for (i in input) {
        listNiners.push(input[i].Title)
    }
    return listNiners.join(', ')
}
//log out the sentence
console.log('\n' + `There are ${selectionByImdbRating.length} movies that have been rated more than 9.0. These movies are: ${titleList(selectionByImdbRating)}` + '.')


//Ex 5*
console.log('\n' + 'Ex 5*')

//5.1
// Find all movies, where Leonardo DiCaprio has played
const selectionByLeonardo = data.filter((movie) => {
    if (movie.Actors.includes('Leonardo DiCaprio')) {
        return movie
    }
    })

//5.2
function leonardoData(input) {
    input.forEach(input => {
        //log out movie info
        console.log('\n' +`Movie title: ${input.Title}`),
        console.log(`Director: ${input.Director.join(' ')}`),
        console.log(`Plot: ${input.Plot}` )
    })
}

const movieList = leonardoData(selectionByLeonardo)


//console.log('sel', selectionByLeonardo)



//Genre:
console.log('\n' + 'Genre:')

function matchingGenre(input) {
    //make an empty array
    let array = []
    let finalArray = []
    //for each movie
    for (i in input) {
        //for each Genre set
        for (j in input[i].Genre) {
            //push individual Genre names to array
            array.push(input[i].Genre[j])
        }
    }
    
    //console.log('array', array)

    for (i in array) { //outer loop
        for (j in array) { //inner loop
            if (i !== j) {
                // check if elements' values are equal
                if (array[i] === array[j]) {
                        //push the match
                    finalArray.push(array[j])
                }
            }
        }
    }
    const match = [...new Set(finalArray)]
    //const match = []  //testing with empty array

    if (match.length > 0) {
                return `Matching genre(s): ${match.join(', ') + '.'}`
            } else {
                return 'There are no matching genres.'
            }

}

//check genre match
console.log(matchingGenre(selectionByLeonardo))




//Released:
console.log('\n' + 'Released:')

//create an array of years
function firstAndLast(input) {
    let released = []
    for (i in input) {
        released.push(input[i].Year)
    }
    return released
}

//return an array of years
const yearsList = firstAndLast(selectionByLeonardo)
//get min and max
let maxYear = Math.max(...yearsList).toString(10)
let minYear = Math.min(...yearsList).toString(10)
//get gap
let gap = maxYear - minYear.toString(10)


console.log(`First Leonardo DiCaprio movie in this list was released on ${minYear}, last one was released on ${maxYear} and they have ${gap} years apart` + '.')




console.log('\n' + 'Rating:')

//make an array of ratings
let rating = []
function getRating(input) {
    for (i in input) {
        rating.push(input[i].imdbRating)
    }
    return rating
}

rating = getRating(selectionByLeonardo)
//get min and max
let maxLeonardoRating = Math.max(...rating).toString(10)
let minLeonardoRating = Math.min(...rating).toString(10)

console.log(`Best rating for Leonardo DiCaprio movie in this list is ${maxLeonardoRating} and worse is ${minLeonardoRating}` + '.')
