
// DATATYPES

// STRING , NUMBERS , BOOLEAN , OBJECTS , ARRAYS 

const mystring = "Hello" 
const mynum = 3 
const mybool = true

const myobj = {
    name: "Riz",
    age:10
}

const myarr = ["hello" , "world", 50 , 30]

const findTheThief = ({theThief , ourClass ,theOwnerOfTheLaptop }) => {


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

findTheThief({
   theThief :"Brayo" , theOwnerOfTheLaptop : "Eric" , ourClass: theFirstClass
})

console.log("--------------")
// findTheThief("Mike" , "Stivo" , ["Mike" , "Pendo" , "June" , "Hope" , "Stivo" , "Reuben"])
