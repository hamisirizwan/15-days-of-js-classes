// arrays

// datatypes - string , numbers , booleans , objects , arrays

const school = {
  name: "Samsung Internation",
  location: "Nairobi",
  isHighSchool: false,
  teachers: [
    {
      name: "James",
      code: 10,
      role: "Principal",
    },
    {
      name: "Steve",
      code: 22,
      role: "normal",
    },
    {
      name: "Hezekiah",
      code: 30,
      role: "deputy",
    },
  ],
  grades: [
    {
      name: "grade 1",
      pupils: [
        {
          name: "Alex",
        },
        {
          name: "Rodgers",
        },
      ],
    },
    {
      name: "grade 2",
      pupils: [
        {
          name: "John",
        },
        {
          name: "Jane",
        },
           {
          name: "Elisha",
        },
      ],
    },
  ],
  hireAteacher(name , code= null , role = "normal"){
       this.teachers.push(
        {
            name:name,
            code:code,
            role:role
        }
       )
  }
};


// filter


// map


// foreach


// find

// hire a new teacher

// console.log(school.teachers.length)

school.hireAteacher("Chris")


console.log(school.teachers)

function assignAteacherToCode(code , teacherName){
    if(!code){
       console.log("Please provide the code")
       return
    }
     if(!teacherName){
       console.log("Please provide the teacher name")
       return
    }

    const {teachers} = school

    const existingTeacher = teachers.find((teacher)=>{
        return teacher.code === code
    })

    if(existingTeacher){
        console.log(`the code: ${code} has been taken by teacher:${existingTeacher.name} `)

        return
    }

    // 
        const theTeacher = teachers.find((teacher)=>{
        return teacher.name === teacherName
    })

    if(!theTeacher){
        console.log("Teacher is not found")

        return
    }

    theTeacher.code = code


}

assignAteacherToCode(33 , "Chris")


console.log(school.teachers)

const management = school.teachers.filter((teacher)=>{
    return  teacher.role !== "normal"
})

console.log(management)

const gradesReport = school.grades.map((grade)=>{

    const newGradeData =  {
    name: grade.name,
    numberOfPupils: grade.pupils.length
  }

  return newGradeData
})

console.log(gradesReport)

// school.grades[1].pupils.forEach((pupil)=>{
//     console.log(pupil.name)
// })

school.grades.forEach((grade)=>{
    grade.pupils.forEach((pupil)=>{
        console.log(pupil.name)
    })
    console.log("---------------------")
})

