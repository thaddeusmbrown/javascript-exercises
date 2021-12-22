const findTheOldest = function(names) {
    const oldest = names.reduce((lastPerson, nextPerson) => {
        if (!lastPerson.yearOfDeath) {
            lastPerson.yearOfDeath = new Date().getFullYear();
        }
        if (!nextPerson.yearOfDeath) {
            nextPerson.yearOfDeath = new Date().getFullYear();
        }
        const lastAge = lastPerson.yearOfDeath - lastPerson.yearOfBirth;
        const nextAge = nextPerson.yearOfDeath - nextPerson.yearOfBirth;
        return (lastAge > nextAge) ? lastPerson : nextPerson;
    });
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
