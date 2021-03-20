var myPetsArray = [
{    animalTayp: "Dog",
     name : "Pujdo"
},
{
    animalTayp: "Cat",
     name : "Maca"
},
{
    animalTayp: "Bird",
     name : "Tweety"
}

];



function myPetsFunction(pets)
{

var myPets = myPetsArray[1].name;
return myPets;
}
console.log(myPetsFunction(myPetsArray));
module.exports = myPetsFunction;
module.exports.myPets = myPetsArray;