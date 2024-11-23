
// object = A collection of related properties and/or methods can 
//          represent real world objects (people, products, places)
//          object = {key:value,
//                    function()}

const person1 = {
    firstName: "spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmplopyed: true,
    sayHello: function(){console.log("Hi i am spongebob!")},
    eat: () => {console.log("I am eating a krabby patty")},
}

const person2 = {
    firstName: "Patric",
    lastName: "star",
    age: 42,
    isEmplopyed: false,
    sayHello: () => {console.log("Hay i am Patric...")},
    eat: function(){console.log("I am eating a roast beef, chicken and pizza")},

}





 console.log(person1.firstName);
 console.log(person1.lastName);
 console.log(person1.age);
 console.log(person1.isEmplopyed);
 person1.sayHello();
 person1.eat()
 
 console.log(person2.firstName);
 console.log(person2.lastName);
 console.log(person2.age);
 console.log(person2.isEmplopyed);
 person2.sayHello();
 person2.eat()
 








