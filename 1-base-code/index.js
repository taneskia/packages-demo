class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}

let personThree = new Person("Ivana", "Ivanova", 30)
let personOne = new Person("Andrej", "Taneski", 23)
let personTwo = new Person("Petar", "Petrovski", 25)

let people = [personOne, personTwo, personThree]

console.log(people)

people.sort(compareByFirstName)

console.log(people)

people.sort(compareByAge)

console.log(people)

function compareByFirstName(a, b) {
    if (a.firstName < b.firstName) {
        return -1;
    }
    if (a.firstName > b.firstName) {
        return 1;
    }
    return 0;
}

function compareByAge(a, b) {
    if (a.age < b.age) {
        return -1;
    }
    if (a.age > b.age) {
        return 1;
    }
    return 0;
}

