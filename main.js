

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

// class Animal{
//     alive = true

//     eat(){
//         console.log(`this${this.name} is eating`);
        
//     }
//     sleep(){
//         console.log(`this${this.name} is sleeping`);
        
//     }
// }

// class rabbit extends Animal{
//     name = "rabbit"
// }

// class fish extends Animal{
//     name = "fish"
// }

// class hawk extends Animal{
//     name = "hawk"
// }

// const Rabbit = new rabbit()
// const Fish = new fish()
// const Hawk = new hawk()



// console.log(Rabbit.alive);
// Rabbit.eat()
// Rabbit.sleep()


//======================================================================

// super = keyword is used in class to call the constructor or 
//         acces the properties and methods of a parent (superclass)
//         this = this object
//         super = the parent

// class Animal{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     move(speed){
//         console.log(`The ${this.name} moves at a speed of ${speed}mph`);
        
//     }
// }

// class Rabbit extends Animal{
//     constructor(name, age, runSpeed){
//         super(name, age);
//         this.runSpeed = runSpeed;
//     }
//     run(){
//         console.log(`this ${this.name} can run`);
//         super.move(this.runSpeed)
//     }
// }

// class Fish extends Animal{
//     constructor(name, age, swimSpeed){
//         super(name, age);
//         this.swimSpeed = swimSpeed;
//     }
//     swim(){
//         console.log(`this ${this.name} can swim`);
//         super.move(this.swimSpeed)
//     }
// }

// class Hawk extends Animal{
//     constructor(name, age, flySpeed){
//         super(name, age);
//         this.flySpeed = flySpeed;
//     }
//     fly(){
//         console.log(`this ${this.name} can fly`);
//         super.move(this.flySpeed)
//     }
// }


// const rabbit = new Rabbit("Rabbitboi", 1, 25);
// const fish = new Fish("Fishboi", 2, 12);
// const hawk = new Hawk("Hawkboi", 3, 50);

// rabbit.run()
// rabbit.move
//======================================================================

// getter = special method that makes a property redable
// setter = special method that makes a oroperty writeable

// validate and modify a value when reading/writting a property


// class Rectangle{
//     constructor(width, height){
//         this.width = width
//         this.height = height
//     }
//     set width(newWidth){
//         if(newWidth > 0){
//             this._width = newWidth
//         }
//         else{
//             console.error("width must be a possative number");
//         }
//     }
//     set height(newHeight){
//         if(newHeight > 0){
//             this._height = newHeight
//         }
//         else{
//             console.error("height must be a possative number");
//         }
//     }
//     get width(){
//         return this._width;
//     }
//     get height(){
//         return this._height;
//     }
// }

// const rectangle = new Rectangle(3, 4)


// rectangle.width = 5;
// rectangle.height = 6;


// console.log(rectangle.width);
// console.log(rectangle.height);



// class Person{
//     constructor(firstName, lastName, age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     set firstName(newFirstName){
//         if(typeof newFirstName === "string" && newFirstName.length > 0){
//             this._firstName = newFirstName
//         }
//         else{
//             console.log("First namer should be non epmty");
            
//         }
//     }
//     set lastName(newlastName){
//         if(typeof newlastName === "string" && newlastName.length > 0 ){
//             this._lastname = newlastName
//         }
//         else{
//             console.log("last namer should be non epmty");
            
//         }
//     }
//     set age(newAge){
//         if(typeof newAge === "number" && newAge >= 0){
//             this._age = newAge
//         }
//         else{
//             console.log("put a valid age");
            
//         }
//     }
//     get firstName(){
//         return this._firstName
//     }
//     get lastName(){
//         return this._lastname
//     }
//     get age(){
//         return this._age
//     }
//     get fullName(){
//         return this._firstName + " " + this._lastname
//     }
// }

// const person = new Person("hamiu", "harami", 66);

// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.fullName);
// console.log(person.age);

//====================================================================


// destructuring = extract values from array and object
//                 then assign them to variables in a convenient way
//                 [] = to perform array destruring
//                 {} = to perform object destruring
//                 5 exampls

// ------------- Example 1 -----------
// SWAP THE VALUE OF TWO VARIABLES

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a);
console.log(b);


// ------------- Example 2 -----------
// SWAP 2 ELEMENTS IN AN ARRAY 

const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[4]] = [colors[4], colors[0]]

console.log(colors);


// ------------- Example 3 -----------
// ASSIGN ARRAY ELEMENTS TO VARIABLES

const Colors = ["red", "green", "blue", "black", "white"];

const [firstColour, SecondColour, thirdColour, ...extraColor] = Colors;


console.log(firstColour);
console.log(SecondColour);
console.log(thirdColour);
console.log(extraColor);



// ------------- Example 4 -----------
// EXTRACT VALUES FROM OBJECTS

const person1 = {
    firstName: "Ankit",
    lastName: "Kargupta",
    age:"19",
    job: "chilling",
}

const person2 = {
    firstName: "shreya",
    lastName: "dass",
    age:"19",
}

const {firstName, lastName, age, job="unemployed"} = person2

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);


// ----------------- EXAMPLE 5 ---------------------
// DESTRUCTURE IN FUNCTION PARAMETERS

function displayPerson({firstName, lastName, age, job="unemployed"}){
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
    
}


const person_1 = {
    firstName: "Ankit",
    lastName: "Kargupta",
    age:"18",
    job: "chilling",
}

const person_2 = {
    firstName: "shreya",
    lastName: "dass",
    age:"18",
}


displayPerson(person_1)























