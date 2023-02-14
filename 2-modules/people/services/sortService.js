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

function sortByFirstName(people) {
    return people.sort(compareByFirstName)
}

function sortByAge(people) {
    return people.sort(compareByAge)
}

module.exports = {
    sortByFirstName,
    sortByAge
}