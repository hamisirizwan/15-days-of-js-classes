// create a function that finds the number of a word in an array

  const list1 = ["hello" , "world" ,"hello", "john", "doe" , "hello"]
  const list2 = ["wow" , "smith" ,"wow", "react", "nodejs" , "smith"]
    
function findNumberOfWordInAlist(theWordToFind , list){

  let numberOfHello = 0

   for(let i = 0; i < list.length; i++){
       if(list[i] === theWordToFind){
        numberOfHello++
       }
   }

   console.log(numberOfHello)
}

findNumberOfWordInAlist("hello" , list1)
findNumberOfWordInAlist("smith" , list2)


