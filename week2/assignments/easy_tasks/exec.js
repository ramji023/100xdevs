/*
// question 1 :  Create a counter in JavaScript
let counter = 0;
setInterval(()=>{
  counter++
  console.log(counter);
},1000)



// question 2 : Create a counter in JavaScript with setTimeout
let counter = 0;
function updateCounter() {
  counter++;
  console.log(counter);
  setTimeout(updateCounter, 1000);
}
setTimeout(updateCounter, 1000);



// Question 3 : Reading the contents of a file
const fs = require("fs");
console.log("reading from file task started.....");
const readFileAsync = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf-8", (error, data) => {
      if (error) {
        reject(error);
      }
      resolve(data);
    });
  });
};
readFileAsync("tut.txt").then((value) => {
  console.log(value);
});

console.log("doing a expensive cpu task");

let c = 0;
for (let i = 0; i < 10000000000; i++) {
  c++;
}

console.log("expensive cpu task done");

console.log("all tasks done.....");



// question 4 : Write to a file
const fs = require("fs");
const writeContentToFileAsync = (filePath,content)=>{
  return new Promise((resolve,reject)=>{
    fs.writeFile(filePath,content,(error)=>{
      if(error){
        reject(error)
      }
      resolve("content written to file successfully")
    })
  })
}
writeContentToFileAsync('tut.txt','hello brother').then((value)=>console.log(value));
* */