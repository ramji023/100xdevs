const fs = require('fs')

/*
// read file synchronously
const fileContent = fs.readFileSync('tut01.txt', 'utf-8')
console.log(fileContent)

console.log("the sum of two number is : ", 23 + 34)



// read file asynchrosonously
const content = fs.readFile('tut01.txt', 'utf-8', (err, data) => {
    if (err) {
        throw new Error("there is something wrong")
    }
    console.log(data);
})
console.log("the sum of two number is : ", 23 + 34)
* */


/*
// functional arguments
function sum(a,b){
    return a+b
}

function multiply(a,b){
    return a*b
}

function doOperation (a,b,func){
 return func(a,b)
}

console.log(doOperation(23,34,multiply))
console.log(doOperation(12,23,sum))
* */




/*
// callbacks
function runAfterTime01() {
    console.log("I am a callback!! 01")
}
function runAfterTime02() {
    console.log("I am a callback!! 02")
}
function runAfterTime03() {
    console.log("I am a callback!! 03")
}
console.log("hello")

setTimeout(runAfterTime01, 7000)

setTimeout(runAfterTime02, 0)


setTimeout(runAfterTime03, 13000)

console.log("I am done")

let c = 0;
for (let i = 0; i < 100000000000; i++) {
    c = c + 1;
}

console.log("heavy CPU task done!!")
*/





