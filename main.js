

// object = A collection of related properties and/or methods can 
//          represent real world objects (people, products, places)
//          object = {key:value,
//                    function()}

// const person1 = {
//     firstName: "spongebob",
//     lastName: "Squarepants",
//     age: 30,
//     isEmplopyed: true,
//     sayHello: function(){console.log("Hi i am spongebob!")},
//     eat: () => {console.log("I am eating a krabby patty")},
// }

// const person2 = {
//     firstName: "Patric",
//     lastName: "star",
//     age: 42,
//     isEmplopyed: false,
//     sayHello: () => {console.log("Hay i am Patric...")},
//     eat: function(){console.log("I am eating a roast beef, chicken and pizza")},

// }





//  console.log(person1.firstName);
//  console.log(person1.lastName);
//  console.log(person1.age);
//  console.log(person1.isEmplopyed);
//  person1.sayHello();
//  person1.eat()
 
//  console.log(person2.firstName);
//  console.log(person2.lastName);
//  console.log(person2.age);
//  console.log(person2.isEmplopyed);
//  person2.sayHello();
//  person2.eat()
 
//==================================================================



// this = reference to the object where THIS is used
// //        (the object depends on the immediate context)
// //         person.name = this.name
// //         dosent work with => 


// const person1 ={
//     name: "Spongebob",
//     favfood: "hamburgers",
//     sayHello: function () {console.log(`Hi, i am ${this.name}`)},
// }

// person1.sayHello();


// console.log(this);


//==================================================================

// constructor = special method for defining the
//               properties and method of objects


// function car(make, model, year, color){
//     this.make = make,
//     this.model = model,
//     this.year = year,
//     this.color = color,
//     this.drive = function(){console.log(`You drive the ${this.model}`)}
// }

// const car1 = new car("foed", "mustang", 2024, "red");
// const car2 = new car("chevrolet", "camaro", 2025, "blue")
// const car3= new car("dodge", "charger", 2026, "silver")

// console.log(car1.make);
// console.log(car1.model);
// console.log(car2.year);
// console.log(car1.color);

// console.log(car2.make);
// console.log(car2.model);
// console.log(car2.year);
// console.log(car2.color);

// console.log(car3.make);
// console.log(car3.model);
// console.log(car3.year);
// console.log(car3.color);

// car1.drive()
// car2.drive()
// car3.drive()

//==================================================================

// class = (ES6 feature) provides a more structured and cleaner way to
//          work with objects compared to tradiyinal constructor function
//          ex. static keywords, ancapsulation, inheritance


// class products{
//     constructor(name, price){
//         this.name = name;
//         this.price = price;
//     }
//     displayProduct(){
//         console.log(`product: ${this.name}`);
//         console.log(`product: $${this.price.toFixed(2)}`);
        
//     }

//     calculateTotal(salesTax){
//         return this.price + (this.price * salesTax)
//     }
// }

// const salesTax = 0.05

// const product1 = new products("shirt", 19.99)
// const product2 = new products("pants", 22.50)
// const product3 = new products("underwere", 100.00)

// product1.displayProduct()
// product2.displayProduct()
// product3.displayProduct()

// const total = product1.calculateTotal(salesTax);

// console.log(`Total price for product one is $${total.toFixed(2)}`);

//========================================================================



// Static = keyword that defins properties or method that belong
//          to a class itself rather than the objects created
//          from that class (class owns anything static, not the objects)


// class mathUtil{
//     static PI = 3.14159

//     static getDiameter(radius){
//         return radius * 2
//     }

//     static getcircumference(radius){
//         return 2 * this.PI * radius;
//     }
//     static getArea(radius){
//         return this.PI * radius * radius
//     }
// }

// console.log(mathUtil.PI);
// console.log(mathUtil.getDiameter(10));
// console.log(mathUtil.getcircumference(10));
// console.log(mathUtil.getArea(10));


// class user{
//     static userCount = 0;

//     constructor(username){
//         this.username = username
//         user.userCount++
//     }
//     static getUserCount(){
        
//     }
//     sayHello(){
//         console.log(`Hello, my userame is ${this.username}`);
        
//     }
// }

// const user1 = new user("Ankit")
// const user2 = new user("Dass")
// const user3 = new user("shreya")

// console.log(user1.username);
// console.log(user2.username);
// console.log(user3.username);
// // console.log(user1.userCount); as it doesnt have usercount as a property
// console.log(user.userCount);

// user1.sayHello()

//======================================================================

//  inheritance = allows a new class to inherit properties and methods
//                from an existing class (parent -> child)
//                helps with code reusability

class Animal{
    alive = true

    eat(){
        console.log(`this${this.name} is eating`);
        
    }
    sleep(){
        console.log(`this${this.name} is sleeping`);
        
    }
}

class rabbit extends Animal{
    name = "rabbit"
}

class fish extends Animal{
    name = "fish"
}

class hawk extends Animal{
    name = "hawk"
}

const Rabbit = new rabbit()
const Fish = new fish()
const Hawk = new hawk()



console.log(Rabbit.alive);
Rabbit.eat()
Rabbit.sleep()


































