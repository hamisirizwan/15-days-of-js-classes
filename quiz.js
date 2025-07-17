// find the 4th multiple of 7

let theNumberOfMultiple = 0
let target;
for(let i  = 0 ; theNumberOfMultiple <= 5 ; i++ ){
    if(i % 7 === 0){
        theNumberOfMultiple++
    }

    if(theNumberOfMultiple === 5){
        target = i
    }
}

console.log(target)