



// conditionals

// comparison operators -

// ==  - compares the value with caring about the datatype
// === - compares both the value and datatype
// !=
// !==
// >
// <
// >=
// <=

// let name  = "James"

// console.log(typeof name)

// name = 20

// console.log(typeof name)

// if

// const savedPassword = "password"

// const userInput = "password"

// if(userInput !== savedPassword){
// console.log("wrong password")
// } else{
//     console.log("You are in to proceed with the request")
// }

const marks = 81;

// cancelled , fail , pass , distinction

// if (marks > 80) {
//   console.log("You have passed excellently");
// } else if (marks > 50) {
//   console.log("You haved passed");
// } else if (marks > 30) {
    //   console.log("you have failed");
    // } else {
        //   console.log("you results have been canceled");
        // }

// switch case

const role = "secretary";

// manager  = 200,000 , ceo - 500,000 , secretary - 50,000 , cto = 350,000

switch (role) {
  case "Manager":
    console.log("Give 200,000");
    break
  case "ceo":
    console.log("Give 500,000");
    break
  case "secretary":
    console.log("Give 50,000");
    break
  case "cto":
    console.log("Give 350,000");
    break
  default:
    console.log("You are not an employee");
}

