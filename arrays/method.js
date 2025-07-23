const doctors = [
  {
    name: "James",
    wardNo: 201,
  },
  {
    name: "Leticia",
    wardNo: null,
  },
  {
    name: "Alex",
    wardNo: 104,
  },
  {
    name: "Hope",
    wardNo: null,
  },
];


// forEach - loop and perform something with an item of an array
doctors.forEach((doc)=>{

    let message = `Dr. ${doc.name} has been assigned ward: ${doc.wardNo}`

    if(doc.wardNo === null){
       message = `Dr. ${doc.name} has not been assigned any ward`
    }

    // console.log(message)
})

// map - perform and operation and return a new array
const result = doctors.map((doc)=>{
    if(!doc.wardNo){
        doc.wardNo = 404
    }

    return doc
})

console.log(result)
// filter - will return a new array with items that met a certain conditio

const doctorsWithNoWard = doctors.filter((doc)=>{
   return doc.wardNo === null
})

// console.log(doctorsWithNoWard)

// find - the first item matching the condition
const singleDoctor = doctors.find((doc)=>{
   return doc.wardNo === 104
})

function findAdoctorByWardNumber(num){

    const singleDoctor = doctors.find((doc)=>{
   return doc.wardNo === num
})

if(!singleDoctor){

     return "Doctor not found"
}

return singleDoctor
}


console.log(findAdoctorByWardNumber(106))