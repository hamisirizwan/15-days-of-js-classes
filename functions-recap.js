// functions

// how to declare



function addTwoNumbers(num1 , num2 ){

    if(!num1 || !num2){
         console.log("please provide all numbers")
         return
    }

    const result  = num1 + num2

    return result

}

function multipleSumBy2(sum){
    console.log(typeof sum , sum)
    console.log(`the product is ${sum * 2}`)
}


const num1 = Number(prompt("Enter the first number"))
const num2 = Number(prompt("Enter the Second number"))

const theSum = addTwoNumbers(num1 , num2)

// console.log(theSum)
document.getElementById("sum").innerHTML = `<h1 style="color:red">${theSum}<h1>`

multipleSumBy2(theSum)
