const fs = require("fs").promises
const { Command } = require('commander')
const program = new Command;

async function readFileAsync() {
    try {
        const data = await fs.readFile('todos.json', 'utf-8');
        return data;
    } catch (err) {
        console.error("Something went wrong", err);
    }
}

async function writeFileAsync(content) {
    try {
        await fs.writeFile('todos.json', content)
        return "add todo successfully"
    } catch (err) {
        console.error("something went wrong", err)
    }
}

program
    .name('Todo Application')
    .description('Write and Delete Todos using CLI')
    .version('0.8.0')

program
    .command('add-todo')
    .description('add the todos')
    .argument('<string>', 'add the todo')
    .action((string) => {
        readFileAsync().then((data) => {
            // console.log("todos data : ", data);
            // console.log("given string : ", string)
            const content = JSON.parse(data);
            const newTodo = {
                id: content[content.length - 1]?.id + 1 || 1,
                title: string,
            }
            content.push(newTodo);
            writeFileAsync(JSON.stringify(content)).then((data) => {
                console.log(data)
            })
        })
    })

program
    .command('check-todo')
    .description('check all the todos')
    .action(() => {
        readFileAsync().then((data) => {
            console.log(data)
        })
    })

program
    .command('delete')
    .description('delete that particular todo')
    .argument('<string>', 'delete the todo')
    .action((string) => {
        readFileAsync().then((data) => {
            const content = JSON.parse(data);
            content = content.filter((todo) => todo.title !== string)
            writeFileAsync(JSON.stringify(content)).then((data) => {
                console.log(data)
            })
        })
    })


program.parse()