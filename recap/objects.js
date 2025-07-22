// // 
// // how to create an object

// const car = {
//     door: 4,
//     move (){
//      console.log("Hello world")
//     }
// }

// console.log(car.door)

// car.move()

// car.door = 5

// car.tyre =  4

// console.log(car.door)

// delete car.door

// console.log(car)

const user = {
    name:"Rizwan",
    email:"James@gmail.com",
    password:"jhsdfhhfnfuhd",
    balance: 40,
    isLoggedIn: false,
    deposit(amount){

        if(this.isLoggedIn){
             console.log("Deposit failed: user not logged in")
        }
        console.log(`deposit of ${amount} successful`)
   this.balance = this.balance + amount
    }
}

function login(email , password){

    const {email:userEmail , password: userPassword} = user

    if(email !== userEmail || password !== userPassword){
        return console.log("Error: invalid credentials")
    }

    delete user.password

    return console.log(user)

}

// login("James@gmail.com" , "jhsdfhhfnfuhd")

console.log(user.balance)

user.deposit(10)

console.log(user.balance)

user.deposit(50)

console.log(user.balance)



