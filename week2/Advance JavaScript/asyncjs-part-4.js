const fs = require('fs')
/*
// first approach 
// read the file asynchronously
function readFileAsynchronously(filePath){
    return new Promise((resolve,reject)=>{
      fs.readFile(filePath,'utf-8',(error,data)=>{
        if(error) reject(error);
        else resolve(data)
      })
    })
  }
  
  readFileAsynchronously('tut.txt').then((value)=>console.log(value)).catch((error)=>console.log("something went wrong",error))
  
  
  // write the file asynchronously
  function writeFileAsynchronously(filePath,data){
    return new Promise((resolve,reject)=>{
      fs.writeFile(filePath,data,(error)=>{
        if(error) reject(error);
        else resolve("file written successfully")
      })
    })
  }
  
  let data = "this is the data to be written in the file"
  writeFileAsynchronously('tut.txt',data).then((value)=>console.log(value)).catch((error)=>console.log("something went wrong",error))
  
  
  
  // clean the file asynchronously
  function cleanWhiteSpaces(filePath){
    return new Promise((resolve,reject)=>{
      fs.readFile(filePath,'utf-8',(err,data)=>{
        if(err) reject(err);
        else resolve(data);
      })
    })
  }
  
  cleanWhiteSpaces('tut.txt').then((value)=>{
    let newData = value.replace(/\s+/g, '').trim();
    console.log(newData)
    return newData
  }).then((newData)=> writeFileAsynchronously('tut.txt',newData)).then((value)=>{
    console.log(value)
  }).catch((error)=>console.log("something went wrong",error))
* */

// cleaned approach
const fs = require("fs");

// read the file asynchronously
function readFileAsynchronously(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf-8", (error, data) => {
      if (error) reject(error);
      else resolve(data);
    });
  });
}

// readFileAsynchronously("tut.txt")
//   .then((value) => console.log(value))
//   .catch((error) => console.log("something went wrong", error));

// write the file asynchronously
function writeFileAsynchronously(filePath, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, data, (error) => {
      if (error) reject(error);
      else resolve("file written successfully");
    });
  });
}

// let data = "this is the data to be written in the file";
// writeFileAsynchronously("tut.txt", data)
//   .then((value) => console.log(value))
//   .catch((error) => console.log("something went wrong", error));

// clean the file asynchronously
function cleanWhiteSpaces(filePath) {
  return readFileAsynchronously(filePath)
    .then((value) => value.replace(/\s+/g, "").trim())
    .then((newData) => writeFileAsynchronously(filePath, newData))
    .then((value) => console.log(value));
}

cleanWhiteSpaces("tut.txt")
  .then(() => console.log("file cleaned successfully"))
  .catch((error) => console.log("something went wrong", error));
