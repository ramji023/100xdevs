/**
 * 
// variables in js

let name = "Ram JI "
const num = 34;
var sum = name + num;
console.log(sum)

name = "Bob"
console.log(name)

num = 56;   //TypeError: Assignment to constant variable.
console.log(num)

 




// data types in js
let myName = "Zasicca"  // string
let number = 345;  //number
let isActive = true;//boolean
let allUsers = ['dave', 'gray', 'harkirat', 'bob'] // array
let studentName = {
    username: "ram mishra",
    age: 23,
    emailId: 'test@gmail.com'
}


// functions in js
function displayName(name) {
    console.log(`hello, Mr. ${name}`)
}
displayName("alex")


// if-else in js
let age = 14
if (age < 18) {
    console.log("you can not vote")
} else {
    console.log("you can vote")
}

age<18 ? console.log("you can not vote") :  console.log("you can vote")  // ternary operator


// loops in js

for(let i = 0;i<2;i++){
    console.log("index : ",i)
}



* 
*/


// <----------    array and objects   -------------->

let user = {
    name: "Ram Mishra",
    age: 23,
}

function greet(userData) {
    return `Hello , Mr. ${userData?.name}. So your age is ${userData?.age} ? `
}
console.log(greet(user))


let array = ["Ram", 23, true, "Shyam"]

const arr = [{
    name: "Ram Mishra",
    age: 23,
    gender: 'male',
}, {
    name: "Shyam Mishra",
    age: 12,
    gender: 'male',
}, {
    name: "Deepak Mishra",
    age: 19,
    gender: 'female',
}, {
    name: "Gpal Mishra",
    age: 10,
    gender: 'male',
}]

console.log(arr[1].age + ' ' + arr[1].name)

// function canVote(userData) {
//     let result = []
//     for (let i = 0; i < userData.length; i++) {
//         let user = (userData[i].age > 18 && userData[i].gender == 'male') ? userData[i].name : undefined
//         console.log("user is : ", user)
//         if (user) {
//             result.push(user)
//         }
//     }
//     return result;
// }

// console.log(canVote(arr))


// second method
function greet(arrayData) {
     return arrayData.filter((item)=>item.age>18 && item.gender==='male')
}
console.log(greet(arr));


