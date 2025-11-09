// lecture 10 (heap and stack memory)


// stack(primitive) heap(non-primitive)
// Primitive datatype uses stack memory,
//  while non-primitive datatype uses heap memory
// Whenever stack memory is used it means we get the copy of our declared variable.
// Whenever heap is used it means w get the reference of original value and anything we want to change it get changes to it’s original value.



let myName="kaushal";
let my2name=myName;

my2name='tyagi';
// console.log(my2name);
// console.log(myName);//it's value doesn't changes

// The value of myName is not being changed because they gives you the copy of myName not the original.
let userOne={
    name:'kaushal',
    upi:'user@ybl'
}

let userTwo=userOne;

userTwo.name='tyagi';
console.log(userOne.name);
console.log(userTwo.name);

// in this case we get the reference of it's orignal value so the value get changed




