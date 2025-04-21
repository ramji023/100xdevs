/* 
// fetch api
async function getRecentPost() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    const data = await response.json()
    console.log("data : ",data)
}
getRecentPost();
*/

async function getRecentPost() {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1")
    console.log("data : ",response.data)        // already convert  into json data     
}
getRecentPost()