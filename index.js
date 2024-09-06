console.log('Hello,world!');

var student ={
    100 : 'Hundreds',
    "student Id" : 1,
    studentName : "John",
    studentAge : 20,
    city : "New York"
}
console.log (student);
console.log (student.studentName);
console.log(typeof student)
console.log(student[100])
console.log(student["student Id"])

for(let key in student){
    console.log(`${key} -> ${student[key]}`)
}

var emp ={
    empId : 1,
    empName : "Drasti",
    empAge : 20,
    empCity : "New York"
}

// Object Destructuring

var {empId, empName, empAge, empCity} = emp
var result = "Pass"
console.log(empId)

var newEmp = {
    empId,
    empName,
    empAge,
    empCity,
    result
}

console.log(newEmp)

var emp1 = {
    ...emp,
    result
}
console.log(emp1)