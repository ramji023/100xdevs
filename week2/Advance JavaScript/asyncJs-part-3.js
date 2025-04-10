/*
function printName (){
console.log("Ram JI Mishra")
}

setTimeout(printName,3000)  // callback based approach


let str = "Zesicca"
console.log(str.toLocaleUpperCase());
* */

/**
//<---------------------------- promise based approach --------------------------->

// 1. using a promise 
function setTimeOutPromisified(delay) {
    return new Promise((resolve, reject) => {
        return setTimeout(resolve, delay)
    })
}

function callback() {
    console.log("run after setTimeout")
}
setTimeOutPromisified(3000).then(callback)



// 2 . defining a promise
function task1() {
    return new Promise((resolve) => {
        console.log("Task 1");
        // setTimeout(() => resolve(), 1000);
        setTimeout(resolve, 1000)
    });
}

function task2() {
    return new Promise((resolve) => {
        console.log("Task 2");
        // setTimeout(() => resolve(), 1000);
        setTimeout(resolve, 1000)
    });
}

function task3() {
    return new Promise((resolve) => {
        console.log("Task 3");
        // setTimeout(() => resolve(), 1000);
        setTimeout(resolve, 1000)
    });
}

task1()
    .then(() => task2())
    .then(() => task3())
    .then(() => console.log("All tasks done!"));
 */

// callback vs promisified version
const fs = require('fs')

// callback approach
const content = fs.readFile('tut01.txt', 'utf-8', (err, data) => {
    if (err) {
        return err;
    }
    console.log(data);
})

// promisified approach
const content_1 = () => {
    return new Promise((resolve) => {
        fs.readFile('tut.txt', 'utf-8', (err, data) => {
            if (err) {
                rejects(err)
            }
            resolve(data);
        })
    })
}
content_1().then((data) => console.log(data))




// this is how promise works under the hood
function promiseConstructor(resolve, reject) {
    // resolve()
    reject()
}
const p = new Promise(promiseConstructor);



function succeed() {
    console.log("passed");
}

function failed() {
    console.log("failed");
}

p.then(succeed).catch(failed);
