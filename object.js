// Problem 1

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
};

console.log(person3['pizza'][0], 'Pizza');
console.log(person3['pizza'][1], 'Pizza');
console.log(person3['tacos']);
console.log(person3['burgers']);
console.log(person3['ice_cream'][0], 'Ice Cream');
console.log(person3['ice_cream'][1], 'Ice Cream');
console.log(person3['ice_cream'][2], 'Ice Cream');
console.log(person3['shakes'][0]['oberwise'], 'Shake from Oberwise');
console.log(person3['shakes'][0]['dunkin'], 'Shake from Dunkin');
console.log(person3['shakes'][0]['culvers'], 'Shake from Culvers');
console.log(person3['shakes'][0]['mcDonalds'], 'Shake from McDonalds');
console.log(person3['shakes'][0]['cupids_candies'], 'Shake from Cupids Candies');


// Problem 2

// let personProto = {
//     name :'Tiffany',
//     age: '88'
// };

// let printInfo = (name) => {
//     console.log(name);
// };

// printInfo(personProto['name']);
// printInfo(personProto['age']);

// let addAge = () => {
//     personProto['age'] ++; 
//     console.log(personProto['age']);
// };

// addAge();
// addAge();

// let person2= new personProto('Janise', '92');

function Person(name,age){
    this.name=name;
    this.age=age;

    this.printInfo = function (){
        console.log(`My name is ${name} and I am ${age} years young.`)
    } 
    this.addAge = function (){
        age ++;
        console.log(`${name}'s new age is ${age}`)
    }
    this.addThree = function (){
        age++;
        age++;
        age++;
        console.log(`${name}'s new age is ${age}`)
    }
};

let person1 = new Person('Tiffany', "88");
person1.printInfo();
person1.addAge()
let person2 = new Person('Judith', '22');
person2.printInfo();
person2.addThree()
person1.addAge()


// Problem 3

let Ten = (str) => {
    return new Promise((resolve, result)=>{
        if (str.length>10){
            resolve(str);
        }else{
            reject(str);
        }
    }

    )
}

Ten('Hello, How Are You?')
.then((result)=>{
    console.log(`Big word`);
}).catch((result)=> {
    console.log(`small number`);
});

Ten('Amazing')
.then((result)=>{
    console.log(`Big word`);
}).catch((result)=> {
    console.log(`small number`);
});



// python to javascript

//convert from CamelCase to snake_case

// def snake_case(str):
//      stringList= list(str)
//      new_string= ''
//      for i in range(len(stringList)):
//          if i == 0:
//              new_string+=stringList[i].lower()
//          elif stringList[i] == stringList[i].upper():
//              new_string+= stringList[i].lower()
//          else:
//              new_string += stringList[i]


function snake_case(str){
new_string = ''
for(i=0; i<str.length; i++){
    if(i === 0){
        new_string+= str[i].toLowerCase()
    }else if (str[i] == str[i].toUpperCase()){
        new_string+= '_'+str[i].toLowerCase()
    } else {
        new_string+= str[i]
    }
}
return new_string
}
console.log(snake_case('HiHowAreYou'));

/*You forgot to count the number of toast you put into there, 
you don't know if you put exactly six pieces of toast into the toasters.

Define a function that counts how many more (or less) pieces of toast 
you need in the toasters. Even though you need more or less, 
the number will still be positive, not negative. */

function six_toast(num){
    if(6-num>=0){
        return 6-num
    }else {
        return Math.abs(6-num)
    }
}
console.log(six_toast(8))

