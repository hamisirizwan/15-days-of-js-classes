// functions are some mini programs within out application that perform a particular task when called

// function declaration

// function findTheThief() {
//   const theOwnerOfTheLaptop = "Eric";

//   const theThief = "Brayo";

//   const ourClass = ["James", "Eric", "Leonard","Brayo", "Miriam"];

//   for (let i = 0; i < ourClass.length; i++) {
//     if (ourClass[i] === theOwnerOfTheLaptop) {
//       continue;
//     }

//     if (ourClass[i] === theThief) {
//       console.log(`We have found the laptop at ${ourClass[i]}`);
//       break;
//     }

//     console.log("I have searched" + " " + ourClass[i]);
//   }
// }

// function expressions

// const findTheThief = function() {
//   const theOwnerOfTheLaptop = "Eric";

//   const theThief = "Brayo";

//   const ourClass = ["James", "Eric", "Leonard","Brayo", "Miriam"];

//   for (let i = 0; i < ourClass.length; i++) {
//     if (ourClass[i] === theOwnerOfTheLaptop) {
//       continue;
//     }

//     if (ourClass[i] === theThief) {
//       console.log(`We have found the laptop at ${ourClass[i]}`);
//       break;
//     }

//     console.log("I have searched" + " " + ourClass[i]);
//   }
// }

const findTheThief = (theOwnerOfTheLaptop , theThief , ourClass) => {

  for (let i = 0; i < ourClass.length; i++) {
    if (ourClass[i] === theOwnerOfTheLaptop) {
      continue;
    }

    if (ourClass[i] === theThief) {
      console.log(`We have found the laptop at ${ourClass[i]}`);
      break;
    }

    console.log("I have searched" + " " + ourClass[i]);
  }
}

const theFirstClass = ["James", "Eric", "Leonard","Brayo", "Miriam"]

findTheThief("Leonard" , "Brayo" , theFirstClass)

console.log("--------------")
findTheThief("Mike" , "Stivo" , ["Mike" , "Pendo" , "June" , "Hope" , "Stivo" , "Reuben"])


