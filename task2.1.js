
const firstName ='Lauri'

const bday = new Date('1980', '10', '06')

const hobies = ['sports','coding']
const object = {
    firstName: firstName,
    birthDay: bday.getDate(), // getDay returns the day of the week
    birthMonth: bday.getMonth(),
    birthYear: bday.getFullYear(),
    hobies: hobies
}

const birthday = object.birthDay + '.' + object.birthMonth + '.' + object.birthYear

//console.log(object)
console.log(object)
console.log(birthday)

