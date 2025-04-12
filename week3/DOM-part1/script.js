
/*
// fetching elements
There are 5 popular methods available for fetching DOM elements - 
1. querySelector
2. querySelectorAll
3. getElementById
4. getElementByClassName
5. getElementsByTagName


// updating elements
1. .innerHTML
2. .textContent


// adding elements
1. createElement


// deleting elements
1. remove()
2. removeChild()



// document.querySelector('button').addEventListener('click',addTodo)

function addTodo() {
    const inputElement = document.querySelector('input')
    console.log(inputElement.value);
}

const element = document.querySelector('h1')
// element.innerHTML = "<button>how are you</button>"
// element.innerText = "<button>how are you</button>"
// element.style.backgroundColor= 'purple' 



const counterElement = document.querySelector('h2')
console.log(counterElement.innerText);

setInterval(()=>{
  counterElement.innerText = parseInt(counterElement.innerText)+1;
},1000)

*/

// design todo app
let id = 1;  // first initilize the id

const todosElement = document.querySelector(".todos")

if (id === 1) {
  todosElement.innerHTML = "<p>There is no todo yet</p>"
}


// whenever user click to add todo button
function addTodo() {
  // fetch the input value from input box
  const inputElement = document.querySelector("input")
  const addTodo = inputElement.value
  if (addTodo) {
    inputElement.value = '';
    if (id === 1) {
      todosElement.innerHTML = '';
    }
    const newDiv = document.createElement('div');
    newDiv.setAttribute('id', id) // set the id attribute

    const newSpanElement = document.createElement('span')
    const newDeleteButton = document.createElement('button')
    newDeleteButton.setAttribute('onClick', `deleteTodo(${id})`);
    const newEditButton = document.createElement('button')
    newEditButton.setAttribute('onClick', `editTodo(${id})`);

    newSpanElement.innerText = `${id}. ${addTodo}`;
    newEditButton.innerText = 'Edit'
    newDeleteButton.innerText = 'delete'

    newDiv.appendChild(newSpanElement)
    newDiv.appendChild(newDeleteButton)
    newDiv.appendChild(newEditButton)

    todosElement.appendChild(newDiv)
    return id++;
  } else {
    alert("enter the todo")
  }
}

function deleteTodo(id) {
  const deletedElement = document.getElementById(String(id));
  console.log(deletedElement);
  todosElement.removeChild(deletedElement);
}

function editTodo(id) {
  const editTodoElement = document.getElementById(String(id));
  // console.log(editTodoElement)
  const editableContent = editTodoElement.children.item(0).textContent.slice(2).trim()
  console.log(editableContent);
  const inputElement = document.querySelector("input")
  inputElement.value = editableContent;
  todosElement.removeChild(editTodoElement);
}




