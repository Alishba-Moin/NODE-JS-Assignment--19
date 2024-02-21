// 19.Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
var guestArr = ["Alishba", "Mishal", "Zimal"];
var canNotattend = "Tooba";
var newGuest = "Ahsan";
guestArr[guestArr.indexOf(canNotattend)] = newGuest;
guestArr.unshift("Daniyal");
var middleGuest = "Ibad";
var middleIndex = guestArr.length / 2;
guestArr.splice(middleIndex, 0, middleGuest);
guestArr.push("Wasay");
// console.log(guestArr);
console.log(guestArr.length + " " + "people" + " " + "are invited to dinner");
