const { Person, sortService } = require('./people')

let personThree = new Person("Ivana", "Ivanova", 30)
let personOne = new Person("Andrej", "Taneski", 23)
let personTwo = new Person("Petar", "Petrovski", 25)

let peopleList = [personOne, personTwo, personThree]

console.log(peopleList)
console.log(sortService.sortByFirstName(peopleList))
console.log(sortService.sortByAge(peopleList))
