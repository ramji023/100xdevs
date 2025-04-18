const fs = require("fs")
const express = require('express')
const { parse } = require("path")
const app = express()


app.get("/test", (req, res) => {
    res.send("<b>server is running properly.</b>")
})

// create a todo app backend

// read the todo file
function readFileAsync() {
    return new Promise((resolve, reject) => {
        fs.readFile('todos.json', 'utf-8', (err, data) => {
            if (err) {
                reject()
            }
            resolve(data)
        })
    })
}
//write into the file
function writeFileAsync(content) {
    return new Promise((resolve, reject) => {
        fs.writeFile('todos.json', content, (err) => {
            if (err) {
                reject()
            }
            resolve()
        })
    })
}

// show all the todos
app.get("/", async (req, res) => {
    const data = await readFileAsync();
    res.json(JSON.parse(data))
})


// add a todo
app.use(express.json())
app.post("/add-todo", async (req, res) => {
    const { title } = req.body;
    // console.log(req.body);
    const content = await readFileAsync();
    const parsedContent = JSON.parse(content);
    const newTodo = {
        id: parsedContent[parsedContent.length - 1]?.id + 1 || 1,
        title: title
    }
    parsedContent.push(newTodo);
    try {
        await writeFileAsync(JSON.stringify(parsedContent))
        res.send("add todo successfully")
    } catch (err) {
        console.log("something is wrong while adding todo in todos.json file")
        res.status(400).send(err)
    }
})

//delete the todo
app.delete("/delete-todo/:id", async (req, res) => {
    const { id } = req.params;
    const content = await readFileAsync();
    let parsedContent = JSON.parse(content);
    parsedContent = parsedContent.filter((todo) => todo.id !== Number(id))
    try {
        await writeFileAsync(JSON.stringify(parsedContent))
        res.send("delete todo successfully")
    } catch (err) {
        console.log("something is wrong while deleing todo in todos.json file")
        res.status(400).send(err)
    }
})

app.listen(3000);