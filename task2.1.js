let eesnimi ='Lauri'

let bday = new Date(1980, 10, 06)

let sünnipäev = bday.getDay()
let sünnikuu = bday.getMonth()
let sünniaasta = bday.geFullYear()



let hobid = ['ballett','voolimine']

let object = {
    eesnimi:eesnimi,
    sünnipäev:sünnipäev,
    sünnikuu:sünnikuu,
    sünniaasta:sünniaasta,
    hobid:hobid}

console.log(object)

console.log(object.sünnipäev + '.' + object.sünnikuu + '.' + object.sünniaasta)

console.log(`${object.sünnipäev}.${object.sünnikuu}.${object.sünniaasta}`)