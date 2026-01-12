//promises

// let orderFood=new Promise((resolve,reject)=>{
//     let isRestaurantOpen=true;
//     if(isRestaurantOpen){
//         resolve("food delivered");
//     }else{
//         reject("not delivered");
//     }
// });

// orderFood
// .then(msg=>console.log(msg))
// .catch(msg=>console.log(msg));

//now we understand same example with the help of both concept that is "promises" and "async await".


//first with promise
// function orderedFood(){
//     return new Promise((resolve,reject)=>{
//         let isOpen=true;
//         setTimeout(()=>{
//             if(isOpen){
//                 resolve("food delivered");
//             }else{
//                 reject("not delivered");
//             }

//         },2000);
//     });
// }

// orderedFood()
// .then((result)=>{
//     console.log(result);
// })
// .catch((error)=>{
//     console.log(error);
// });




//now with async await concept

// async function getFood(){
//     try{
//         let result=await orderedFood();
//         console.log(result);
//     }
//     catch(error){

//         console.log(error);
//     }


// }
// getFood();




// 🧠 Practice Problem 1 — Basic Promise
// Question
// Create a function that returns a Promise which resolves with "Hello World" after 1 second.
// Use async/await to print the result.

//solution:-

function prac1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("hello world");

        }, 1000)


    });

}
async function getPrac1() {
    let data = await prac1();
    console.log(data);
}
getPrac1();




// 🧠 Practice Problem 2 — Number Double
// Question
// Create a function that returns a Promise which resolves with a number 5.
// Using async/await, multiply it by 2 and print the result.

function prac2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(5)

        }, 1000);
    })
}
async function getPrac2() {
    let data = await prac2();
    console.log(data * 2);
}
getPrac2();

// 🧠 Practice Problem 3 — Fetch Users (API)
// Question
// Fetch users from this API and print only user names:
// https://jsonplaceholder.typicode.com/users

async function prac3() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let users = await response.json();
    users.forEach(user => {
        console.log(user.name);
    })
}
prac3();

// 🧠 Practice Problem 4 — Error Handling
// Question
// Call a wrong API URL using async/await and handle the error using try/catch.

async function prac4() {
    try {
        let response = await fetch("https://wrong-url.com");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("there is some error while fetching the data");
    }

}
prac4();





// 🧠 Practice Problem 5 — Sequential Async Calls (IMPORTANT)
// Question
// Create two Promises:
// First resolves "User fetched"
// Second resolves "Orders fetched"
// Print them in order using async/await.

function prac5() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("User fetched");

        }, 1000);
    });
}
function prac6() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Orders fetched");
        }, 1000);

    })
}
async function getPrac5() {
    let user = await prac5();
    console.log(user);

    let orders = await prac6();
    console.log(orders);
}

getPrac5();



// Here are 5 PROMISE practice problems, explained in very simple way, from basic → real-world.

// 🧠 Promise Practice Problem 1 — Basic Promise
// Question
// Create a Promise that resolves with "Success" after 1 second and print the result using .then().

const prac7 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Success");
    }, 1000);
});

prac7.then((result) => {
    console.log(result);
})



// 🧠 Promise Practice Problem 2 — Reject Case
// Question
// Create a Promise that rejects with "Error occurred" and handle it using .catch().

const prac8 = new Promise((resolve, reject) => {

    reject("Error occurred");
});
prac8
    .then((result => {
        console.log(result);
    }))
    .catch(error => {
        console.log(error);
    });



// 🧠 Promise Practice Problem 3 — Number Calculation
// Question
// Create a Promise that resolves with number 10.
// Multiply it by 3 inside .then() and print the result.

const prac9=new Promise((resolve,reject)=>{
    resolve(10);
})
prac9.then((result=>{
    console.log(result*3);
}))

// 🧠 Promise Practice Problem 4 — Chaining Promises (IMPORTANT)
// Question
// Create a Promise chain:
// First Promise resolves 5
// Second multiplies by 2
// Third adds 3
// Print final result

const prac10=new Promise((resolve,reject)=>{
    resolve(5);
})

prac10.then((result)=>{
    return result*2;
}).then((result)=>{
    return result+3;
}).then((finalResult)=>{
    console.log(finalResult);
})

// 🧠 Promise Practice Problem 5 — Dummy API Simulation
// Question
// Create a Promise that simulates an API call and resolves "User data received" after 2 seconds.

const prac11=new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("User data received of kaushal tyagi");
    },2000);
    
});

prac11.then((result)=>{
    console.log(result);
})