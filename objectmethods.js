// const result = 40


const calculator = {
    result:20,

    add: function(num1 , num2){
        // result = num1 + num2
        console.log(this.result)
        //  console.log(num1 + num2) 
    },
    subtract(num1 , num2){
        this.result = num1 + num2
        console.log(this.result)
    //    console.log(num1 - num2) 
    }
}

calculator.add(30 , 20)

// calculator.subtract(30 , 10)