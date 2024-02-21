// 19.Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

let guestArr: string[] = ["Alishba", "Mishal", "Zimal"];

let canNotattend: string = "Tooba";

let newGuest: string = "Ahsan";

guestArr[guestArr.indexOf(canNotattend)] = newGuest;
guestArr.unshift("Daniyal");

let middleGuest: string = "Ibad";

let middleIndex = guestArr.length / 2;

guestArr.splice(middleIndex, 0, middleGuest);
guestArr.push("Wasay");
// console.log(guestArr);


 console.log(guestArr.length + " " + "people" + " " + "are invited to dinner");