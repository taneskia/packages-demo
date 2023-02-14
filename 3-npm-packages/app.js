const express = require('express')
const { Person, sortService } = require('./people')

const app = express()

let personOne = new Person("Ivana", "Ivanova", 30)
let personTwo = new Person("Andrej", "Taneski", 23)
let personThree = new Person("Petar", "Petrovski", 25)

let peopleList = [personOne, personTwo, personThree]

app.get('/people', (req, res) => {

    let sortByName = req.query.sortByName;
    let sortByAge = req.query.sortByAge;

    if(sortByName !== undefined && sortByName === 'true'){
        res.send(sortService.sortByFirstName(peopleList))
    } else if(sortByAge !== undefined && sortByAge === 'true'){
        res.send(sortService.sortByAge(peopleList))
    } else {
        res.send(peopleList)
    }
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})