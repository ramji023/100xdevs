// <--------   learn about async - await  ----------->

/*
//callback hell example

function start() {
    setTimeout(() => {
        console.log("hii");
        setTimeout(() => {
            console.log("hello");
            setTimeout(() => {
                console.log("hello there")
            }, 5000)
        }, 3000)
    }, 1000)
}

start();


function printHii(callback) {
    setTimeout(() => {
        console.log("hii")
        callback()
    }, 1000)
}
function printHlw(callback) {
    setTimeout(() => {
        console.log("hlw")
        callback()
    }, 3000)
}
function printHlwThere() {
    setTimeout(() => {
        console.log("hello there")
    }, 5000)
}

printHii(() => printHlw(() => printHlwThere()));


//promisified version of above callback hell

function promisifiedSetTimeout(duration) {
    return new Promise((resolve) => setTimeout(resolve, duration))
}

promisifiedSetTimeout(1000).then(() => {
    console.log("hii");
    promisifiedSetTimeout(3000).then(()=>{
        console.log("hlw");
        promisifiedSetTimeout(5000).then(()=>{
            console.log("hello there")
        })
    })
})


promisifiedSetTimeout(1000).then(() => {
    console.log("hii");
    return promisifiedSetTimeout(3000)
}).then(() => {
    console.log("hlw");
    return promisifiedSetTimeout(5000)
}).then(() => {
    console.log("hello there")
})



// async-await syntax

function promisifiedSetTimeout(duration) {
    return new Promise((resolve) => setTimeout(resolve, duration))
}
async function solve() {
    await promisifiedSetTimeout(1000);
    console.log("hii")
    await promisifiedSetTimeout(3000)
    console.log("hlw")
    await promisifiedSetTimeout(5000)
    console.log("hello there")
}

solve();
console.log("after solve function");
*/

// read file async operation
const fs = require("fs")
function readFileAsync(filePath) {
    return new Promise((resolve) => {
        fs.readFile(filePath, 'utf-8', (err, data) => {
            resolve(data);
        })
    })
}

async function startAsync() {
    const content = await readFileAsync('tut01.txt');
    console.log(content);
    console.log("reading file successfully")
}
startAsync();