
// var name = "jill";
// var secretsFunction = function(){
//   var pinCode = [0, 0, 0, 0]
//   console.log('pincode inside secretsFunction: ', name);
// }
//
// secretsFunction();
// console.log('pincode inside secretsFunction: ', name);
//

// var filterNamesByFirstLetter = function(names, letter){
//   var filteredNames = [];
//   for(let name of names){
//     if(name[0] === letter){
//       filteredNames.push(name)
//     }
//   }
//
//   return filteredNames;
// }
//
// var students = ["Alice", "Bob", "Alyssia", "Artem", "Babs"];
// var filteredStudents = filterNamesByFirstLetter(students, "A")
// console.log(filteredStudents);

// let isItFive = function(number){
//   if(number === 5){
//     var result = true;
//   } else{
//     var result = false;
//   }
//   console.log(result);
//   return result;
// }
//
// isItFive(5);

// let isItFive = function(number){
//   let result;
//   if(number === 5){
//     result= true;
//   } else {
//     result = false;
//   }
//   console.log(result);
//   return result;
// }

// isItFive(5);

// let temperature = 30;
//
// if (temperature > 15) {
//   let jacket = false;
//   var happy = true;
// } else {
//   let jacket = true;
//   var happy = false;
// }
//
// // console.log('jacket after if-else blocks:', jacket);
// console.log('happy after if-else blocks:', happy);```


// const calculateEnergy = function(mass){
//   const speedOfLight = 299792458;
//   return mass * speedOfLight ** 2;
// }
// let energyOfMe = calculateEnergy(65);
// console.log('Energy of me (if i am 65kg): ', energyOfMe);
//
// const song = {
//   title: "Rasberry Beret",
//   artist: "Prince"
// };
// console.log("song before mutation", song);
// song.title = "When Doves Cry"
// song.year = 1980;
// console.log("Song after mutation", song);

const helloWorld = function(){
  result = "Hello World";
}
helloWorld()
console.log(result);
