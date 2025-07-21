// objects are data types /structures that can hold multiple key value pairs , the values can be represented as any other primitive or non primitive datatypes

const { log}  = console

const person = {
    name:"Rizwan",
    age:12,
    residence:"Mombasa",
    "first name" : "Riz",
    isMale:true,
    run: function (){
    log("I am running")
    },
    head:{
        eyes:2,
        nose:"One"
    }
}

// accessing properties of an object

// const residence = person.residence
// const age = person.age
// const isMale = person.isMale


let {residence  , isMale , name , age , run } = person

// console.log(name)

// creating & updating

age = 30


log(age)
log(person.age)

log(person)


person["shoes"] = "Nike"

person.name = "james"

log(person)

delete person.isMale

log(isMale)
log(person)

// 

