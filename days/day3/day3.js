//spread operator

//example 1
let num1=[1,2];
let num2=[...num1,3,4];
console.log(num2);

//example 2
let users={
    name:'kaushal',
    age:24
};
let user={
    ...users,
    city:'Agra'
}
console.log(user);


//Rest Operator
// What ...numbers means (Rest Parameter)

// The ... in a function parameter is called the rest parameter.
// It collects all remaining arguments passed to the function into a real array.
// In this case, numbers becomes an array of all the values you pass to add.

// Example:

function add(...numbers){
    return numbers.reduce((sum,n)=>sum+n,0);
}
console.log(add(1,2,4));



//Destructuring
//object destructuring

let userone = {
    name:'kaushal',
    age:24
}
let {name,age}=userone;
console.log(name);
console.log(age);


//array destructuring
let usertwo=["Red","blue"]
   
let [first,second]=usertwo;
console.log(first);
console.log(second);


//JSON-- Data format used in API's
let user4={
    name:'kaushal',
    age:24
}

//to convert in JSON
let obj=JSON.stringify(user4);

// console.log(user4);
console.log(obj);

//convert back to object
let obj2=JSON.parse(obj);
console.log(obj2);