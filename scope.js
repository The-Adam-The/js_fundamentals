// var, let, const

//LEXICAL SCOPE - var can be accessed inside a function
var fName = 'Anna';

var secretsFunction =  function () {
    var pinCode = [0, 0, 0, 0]; // var can be accessed outside the function
    console.groupCollapsed('pincode inside function:', fName);
}

// secretsFunction();

// console.log('pincode outside functin:', pinCode)

var filteredNamesByFirstLetter = function (names, letter) {
    var filteredNames = []
    //block scoping

    for(var name of names) {
        if (name[0] === letter) {
            filteredNames.push(name);
        }
        // console.log("Name after loop: " + name)
    } return filteredNames;
}

var students = ['Alice', 'Bob', 'Allyssia', 'Artem', 'Babs'];
var filteredStudents = filteredNamesByFirstLetter(students, 'A')

// console.log('filteredStudents: ', filteredStudents)


// var vs lets

//lets defines the scope within the block

let isItFive = function (number) {
    let result
    if (number === 5){
        result = true;
    } else {
        result = false;
    } 
    return result
}
// console.log(isItFive(4))


//const cannot be changed once assigned

// if something is not going to be reassigned: const, if it is: let
let calculateEnergy  = function (mass) {
    const speedOfLight = 299792458;
    return mass * speedOfLight ** 2;
}

let energyOfMe = calculateEnergy(88);
console.log(energyOfMe)


//the object is const, but elements within the object can be changed 'mutated'
const song = {
    title: 'Raspberry Beret',
    artist: 'Prince'
};

song.title = 'Purple rain'

// console.log(song)


//global scope
const helloWorld = function () {
    result = 'Hello';
}

helloWorld();
console.log(result)