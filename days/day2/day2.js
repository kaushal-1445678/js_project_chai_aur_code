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

let number=[1,2,4];
// let result=number.map(function(num){
//     return num*2;
// });
let result=number.map(num=>num*2);
console.log(result);


let ages=[10,20,25];
let selectAge=ages.filter(function(age){
    return age>=18;
});
console.log(selectAge);
let numbers=[1,2,4,5];
let sum=numbers.reduce((total,sum)=>{
    return total+sum;
},0);
console.log(sum);

let users=[
    {
        name:"kaushal",
        age:24
    },
    {
        name:"rahul",
        age:20
    }
];

let user=users.find(u=>u.age >=21);
console.log(user);