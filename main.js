

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

// let a = 1;
// let b = 2;

// [a, b] = [b, a];

// console.log(a);
// console.log(b);


// // ------------- Example 2 -----------
// // SWAP 2 ELEMENTS IN AN ARRAY 

// const colors = ["red", "green", "blue", "black", "white"];

// [colors[0], colors[4]] = [colors[4], colors[0]]

// console.log(colors);


// // ------------- Example 3 -----------
// // ASSIGN ARRAY ELEMENTS TO VARIABLES

// const Colors = ["red", "green", "blue", "black", "white"];

// const [firstColour, SecondColour, thirdColour, ...extraColor] = Colors;


// console.log(firstColour);
// console.log(SecondColour);
// console.log(thirdColour);
// console.log(extraColor);



// // ------------- Example 4 -----------
// // EXTRACT VALUES FROM OBJECTS

// const person1 = {
//     firstName: "Ankit",
//     lastName: "Kargupta",
//     age:"19",
//     job: "chilling",
// }

// const person2 = {
//     firstName: "shreya",
//     lastName: "dass",
//     age:"19",
// }

// const {firstName, lastName, age, job="unemployed"} = person2

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);


// // ----------------- EXAMPLE 5 ---------------------
// // DESTRUCTURE IN FUNCTION PARAMETERS

// function displayPerson({firstName, lastName, age, job="unemployed"}){
//     console.log(`name: ${firstName} ${lastName}`);
//     console.log(`age: ${age}`);
//     console.log(`job: ${job}`);
    
// }


// const person_1 = {
//     firstName: "Ankit",
//     lastName: "Kargupta",
//     age:"18",
//     job: "chilling",
// }

// const person_2 = {
//     firstName: "shreya",
//     lastName: "dass",
//     age:"18",
// }


// displayPerson(person_1)






//=====================================================================

// nesting objects = Objects inside of other objecys.
//                   Allow you to represent more complex data structure
//                   Child Object is enclosed by a parent Object

//                   Person{Address{}, ContactInfo{}}
//                   ShoppingCart(Keyboard(), Mouse{}, Monitor{})


// const person = {
//     fullName: "Ankit kargupta",
//     age: 30,
//     isStudent: true,
//     hobbies: ["cute", "chilling", "gaming"],
//     address: {
//         street: "124 Conch St.",
//         city: "Bikini Bottom",
//         country: "Int. Water"
//     }
// }

// // console.log(person.fullName);
// // console.log(person.age);
// // console.log(person.isStudent);
// // console.log(person.hobbies[2]);
// // console.log(person.address.city);

// for(const property in person.address){
//     console.log(person.address[property]);
    
// }

// class person{
//     constructor(name, age, ...address){
//         this.name = name
//         this.age = age
//         this.address = new Address(...address)
//     }
// }




// class Address{
//     constructor(street, city, country){
//         this.street = street
//         this.city = city
//         this.country = country
//     }
// }

// const person1 = new person("Spongebob", 30, "124 Cont St.", 
//                                             "Bikini Bottom",
//                                             "Int watter")

// const person2 = new person("Patrick", 37, "128 Cont St.", 
//                                             "Bikini Bottom", 
//                                             "Int watter")

// const person3 = new person("Squidward", 45, "126 Cont St.", 
//                                             "Bikini Bottom", 
//                                             "Int watter")

// console.log(person1.address.country);

// ====================================================================

// // ---------------- ARRAYS OF OBJECT --------------------------

// const fruits = [{name: "Apple", color: "red", calories: 95}, 
//                 {name: "Orange", color: "orange", calories: 45}, 
//                 {name: "Banana", color: "yellow", calories: 105}, 
//                 {name: "Coconut", color: "white", calories: 159}, 
//                 {name: "Pineapple", color: "yellow", calories: 37}];


// // --------------- foeEach() ---------------


// fruits.forEach(fruit => console.log(fruit.color))


// // ------------------------- map() ------------------------

// const fruitsName = fruits.map(fruit => fruit.name)
// const fruitsColor = fruits.map(fruit => fruit.color)
// const fruitsCalories = fruits.map(fruit => fruit.calories)

// console.log(fruitsName);
// console.log(fruitsColor);
// console.log(fruitsCalories);



// // ------------------------ FILTER() ------------------------

// const yellowFruits = fruits.filter(fruit => fruit.color === "yellow")
// const lowCAlFruits = fruits.filter(fruits => fruits.calories < 100)
// const highCAlFruits = fruits.filter(fruits => fruits.calories >= 100)

// console.log(yellowFruits);
// console.log(lowCAlFruits);
// console.log(highCAlFruits);


// // ---------------------- reduce () ----------------------------

// const maxFruit = fruits.reduce( (max, fruit) => 
//                                 fruit.calories > max.calories ?
//                                 fruit : max)
// const minFruit = fruits.reduce( (min, fruit) => 
//                                 fruit.calories < min.calories ?
//                                 fruit : min)

// console.log(maxFruit);
// console.log(minFruit);




// sort() = method used to short element of an array in place.
//   Sort elementas as strings in lexicographic order, not alphabetical
//   lexicograpic = {alphabet + numbers + symbols} as strings

// let numbers = [2, 4, 6, 1, 6, 10, 9, 8, 3, 7, 5]


// numbers.sort((a, b) => a - b);

// // console.log(numbers);

// const people = [{name: "Spongebob", age: 30, gpa: 3.0}, 
//                 {name: "Patrick", age: 37, gpa: 1.5}, 
//                 {name: "Squodward", age: 51, gpa: 2.5}, 
//                 {name: "Sandy", age: 25, gpa: 4.0}]

// // people.sort((a, b) => a.age - b.age)
//  people.sort((a, b) => a.name.localeCompare(b.name))


// console.log(people);


//=====================================================================

// //Date Objects= Objects that contain values that represent datas & time
// //              These date objects can be changed and formatted

// const date = new Date(); 
// // Date(year , month, day, hour, minite, second, ms)

// // const year = date.getFullYear()
// // const month = date.getMonth()
// // const day = date.getDate()





// // console.log(year);
// // console.log(month);
// // console.log(day);

// const date1 = new Date("2023-12-31")
// const date2 = new Date("2023-01-1")

// if(date2 > date1){
//     console.log("Happy New Year");
    
// }


//=====================================================================

// Closure = A function defined inside of another function,
//           the inner function has access to the variables
//           and scop of the outer function.
//           Allow for private variables and state maintenance
//           Used frequently in JS frameworks: React, Vue, Angular




// function outer(){

//     let message = "Hello";

//     function inner(){
//         console.log(message);
        
//     }

//     inner();
// }



// outer()


// function creatCounter(){

//     let count = 0;

//     function increment(){
//         count++
//         console.log(`Count increase to ${count}`);
        
//     }
//     return {increment}
// }

// const counter = creatCounter();

// counter.increment()
// counter.increment()
// counter.increment()

//=====================================================================

// setTimeOut = Function in javaScript that allows you to schedule 
//              the execution of a fuction after an amout of time
//         time are approximate(varies based on the workload of the
//                               javascript runtime env)

//          setTimeout(callback, delay);


// function sayHello(){
//     window.alert("Hello");
// }


// setTimeout(sayHello, 3000)

// const timeout = setTimeout(() => window.alert("hello"), 3000)

// clearTimeout(timeout)


//--------------------button---------------------------

// let timeoutid;


// function startTimer(){
//     timeoutid = setTimeout(() => window.alert("hello"), 3000)
//     console.log("STARTED");
    
// }

// function clearTimer(){
//     clearTimeout(timeoutid)
//     console.log("CLEAR");
    
// }

//====================================================================

// ES6 Module = An external file that contains reusable code
//              that can be imported into other Javescript files.
//              Write resusable code for many different apps
//              Can contain variables, class, functions ... and more 
//              Introduced as part of ECMAScript 2015 update

// import {PI, getCircumference, getArea, getVolume} from './mathUtil.js';


// console.log(PI);

// const cir = getCircumference(10)
// const area = getArea(10)
// const vol = getVolume(10)

// console.log(cir.toFixed(2));
// console.log(area.toFixed(2));
// console.log(vol.toFixed(2));






//====================================================================



// synchronous = Executes line by line consecutively in a sequential manner
//               Code that waits for an operation to complete.

// asynchoronous = Allows multiple operations to be performed concurrently without waiting
//                 Dosen't block the execution flow and allows the program to continue 
//                 (I/O operation, network requests, fetching date)
//                  Handled with: Callbacks, Promises, Async/Await

// function funk1(callback){
//     setTimeout(() => {console.log("Task 1")
//                         callback()}, 3000)
// }

// function funk2(){
//     console.log("Task 2");
//     console.log("Task 3");
//     console.log("Task 4");
// }

// funk1(funk2)

//====================================================================

// Error = An Object that is created to represent a problem that occurs
//        Occur often with user input or establishing a connection 

// try { } = Encloses code that might potentially cause an error 
// catch { } = Catch snd handle any thrown Error from try { }
// finally { } = {optional} Always executes, used mostly for clean up
// //               ex. close files, close connection, release resources  

// try{
//     console.log("HELLO");
//     // NETWORK ERROR
//     // PROMISE REJECTION
//     // SECURITY ERRORS
// }

// catch(error){
//     console.error(error);
    
// }
// finally{
//     // CLOSE FILES
//     // CLOSE CONNECTIONS
//     // RELEASE RESOURCES
//     console.log("THIS AWLAYS EXECUTE");
    
// }
// console.log("You reach the end");



// try{
//     const dividend = Number(window.prompt("Enter a dividend:  "))
//     const divisor = Number(window.prompt("Enter a divisor:  "))
//     if(divisor == 0){
//         throw new Error("you cant")
//     }
//     if(isNaN(dividend) || isNaN(dividend)){
//         console.error("choose number");
//     }
//     const result = dividend / divisor
//     console.log(result);
// }

// catch(error){
//     console.error(error);
    
// }
// console.log("end");



//=======================================================================


// DOM = DOCUMENT OBJECT MODEL
//       Object() that represents the peg you see in the web browser
//       and provides you with an API to interact with it
//       web beowser constructs the DOM when it loads an HTML document,
//       and structures all the element in a tree-like representation.
//       JavaScript can access the DOM to dynamically
//       Change the content, structure, and style of a web page.

// const username = " "
// const welcomeMsg = document.getElementById("welcome-msg")

// welcomeMsg.textContent += username === "" ? `Guest` : username


//=========================================================================

// Element selectors = Methods used to taget and manipulate HTML element
//                   They allow you to select one or multiple HTML element 
//                   from the DOM (DOCUMENT OBJECT MODEL) 

//  1. document.getElementById()             // ELEMENT OR NULL
//  2. document.getElementsByClassName()     // HTML COLLECTION 
//  3. document.getElementsByTagName         // HTML COLLECTION
//  4. document.querySelector()              // ELEMENT OR NULL
//  5. document.querySelectorAll()           // NODELIST

// const myHedding = document.getElementById("my-headingg");
// myHedding.style.backgroundColor = "yellow";
// myHedding.style.textAlign = "center";

// console.log(myHedding);

// const Fruits = document.getElementsByClassName("fruits")

// for(let fruit of Fruits){
//     fruit.style.backgroundColor = "yellow"
// }

// Array.from(Fruits).forEach(Fruits => {
//     Fruits.style.backgroundColor = "yelow"
// })

// const h4Elements = document.getElementsByTagName("h4")
// const liElements = document.getElementsByTagName("li")

// console.log(h4Elements);

// h4Elements[0].style.backgroundColor = "yellow"


// for(let h4Element of h4Elements){
//     h4Element.style.backgroundColor = "yellow"
// }
// for(let liElement of liElements){
//     liElement.style.backgroundColor = "green"
// }

// Array.from(h4Elements).forEach(h4Elements => {
//     h4Elements.style.backgroundColor = "Yellow"
// })

// Array.from(liElements).forEach(liElements => {
//     liElements.style.backgroundColor = "lightblue"
// })

// const element = document.querySelector("ol");
// element.style.backgroundColor = "yellow"
// console.log(element);


// const li = document.querySelectorAll("li")

// li[].style.backgroundColor = "yellow"


// li.forEach(food =>{
//     food.style.backgroundColor = "yellow"
// } )

//=========================================================================

// DOM Navigation = The process of navigating through the structure
//                  of an HTML document using javascript

// .firstElementChild
// .lastElementChild
// .nextElementrSibling
// .previousElementSibling
// .partentElement
// .childern

//--------------------------- firstElementChild -----------------------

// const element = document.getElementById("vegetables");
// const firstChild = element.firstElementChild
// firstChild.style.backgroundColor = ""

// const ULelements = document.querySelectorAll("ul")

// ULelements.forEach(ulElements => {
//     const firstChild1 = ulElements.firstElementChild;
//     firstChild1.style.backgroundColor = "yellow"
// })

//--------------------------- lastElementChild -----------------------

// const element = document.getElementById("fruits")
// const lastchild = element.lastElementChild
// lastchild.style.backgroundColor = "yellow"

// const ulElements = document.querySelectorAll("ul")

// ulElements.forEach(ulElement => {
//     const lastchild = ulElement.lastElementChild
//     lastchild.style.backgroundColor = "yellow"
// })


//--------------------------- lastElementChild -----------------------

// const elemet = document.getElementById("fruits")
// const nextsibling = elemet.nextElementSibling
// nextsibling.style.backgroundColor = "yellow"


//------------------------ previousElementSibling -------------------

// const  element = document.getElementById("vegetables")
// const pervsibling = element.previousElementSibling
// pervsibling.style.backgroundColor = "yellow"

//--------------------------- partentElement -----------------------

//  const element = document.getElementById("pie")
// const parent = element.parentElement
// parent.style.backgroundColor = "yellow"


//------------------------- childern -------------------------

//  const element = document.getElementById("fruits")
// const childern = element.children

// // Array.from(childern).forEach(child => {
// //     child.style.backgroundColor = "yellow"
// // })

// childern[1].style.backgroundColor = "yellow"

















