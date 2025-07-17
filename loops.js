// for loop

// we want to write a program that greets someone 10 times

// const myName = "Rizwan"

// for( let i = 0 ; i < myName.length ; i++){
//   console.log(myName[i])
// }

const theOwnerOfTheLaptop = "Eric"

const theThief = "Brayo"

const ourClass = ["Brayo" ,"James" , "Eric" , "Leonard", "Miriam"]

for(let i = 0 ; i < ourClass.length ; i++){

    if(ourClass[i] === theOwnerOfTheLaptop ){
        continue
    }

    if(ourClass[i] === theThief){
        console.log(`We have found the laptop at ${ourClass[i]}`)
        break
    }

   console.log("I have searched" + " " + ourClass[i])
}



