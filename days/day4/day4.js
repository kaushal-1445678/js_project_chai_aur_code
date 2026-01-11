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
function orderedFood(){
    return new Promise((resolve,reject)=>{
        let isOpen=true;
        setTimeout(()=>{
            if(isOpen){
                resolve("food delivered");
            }else{
                reject("not delivered");
            }

        },2000);
    });
}

// orderedFood()
// .then((result)=>{
//     console.log(result);
// })
// .catch((error)=>{
//     console.log(error);
// });




//now with async await concept

async function getFood(){
    try{
        let result=await orderedFood();
        console.log(result);
    }
    catch(error){
       
        console.log(error);
    }
    
     
}
getFood();




// 🧠 Practice Problem 1 — Basic Promise
// Question
// Create a function that returns a Promise which resolves with "Hello World" after 1 second.
// Use async/await to print the result.

//solution:-

