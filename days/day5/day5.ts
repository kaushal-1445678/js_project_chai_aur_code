// npm install -D ts-node typescript @types/node
// npx ts-node days/day5/day5.ts
let age:number=24;
let name1:string="kaushal";

console.log(name1);

let data:any=10;
data="tyagi";

console.log(data);

let id:number|string;

id=11;
id="true";
console.log(typeof id);

interface User{
    id:number,
    name:string,
    mail:string
}

let user1:User={
    id:1,
    name:"kaushal",
    mail:"test@gmail.com"
};

console.log(user1);

function add(a:number,b:number):number{
    return a+b;
}

console.log(add(20,20));

enum Status{
    Active,
    Inactive,
    Blocked
}
let userStatus:Status=Status.Active;
console.log(userStatus);
console.log(Status[userStatus]);

enum OrderStatus{
    Pending="PENDING",
    Shipped="SHIPPED",
    Delivered="DELIVERED"
}
function trackOrder(status:OrderStatus):void{
    console.log(`order is ${status}`);
}
trackOrder(OrderStatus.Shipped);

interface Product{
    id:number,
    name:string,
    price:number
}

let p1:Product={
    id:1,
    name:"Lenevo",
    price:40000
}
function printProduct(pr:Product):void{
    console.log(`product is ${pr.name} with price ${pr.price}`);
}
printProduct(p1);





