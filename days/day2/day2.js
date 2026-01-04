let students=["kaushal","tyagi","singh"];
console.log(students);
console.log(students[0]);
students[1]="devta";
console.log(students);
console.log(students.length);
students.push("inevitable");
console.log(students);
students.pop();
console.log(students);

let number=[1,2,3];
let result=number.map(function(num){
    return num*2;
})
console.log(result);
// let result=number.map(num=>num*2)

let ages=[10,20,15,25];
let selectAge=ages.filter(function(age){
    return age>=18;
})
console.log(selectAge);