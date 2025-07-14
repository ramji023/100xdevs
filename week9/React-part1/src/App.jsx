
function App() {

  const todos = [
    {
      title: "Go to gym",
      done: true,
    },
    {
      title: "Having lunch",
      done: false,
    },
    {
      title: "Doing Sex",
      done: false
    }
  ]

  return (
    <>
      <div style={{ display: "flex" }}>
        <Card children={"hi folks"} />
        {/* <Card innerContent={<div style={{color:"purple"}}> <span>How are you champ ??</span></div>}/> */}

        <Card>
          <div style={{ color: "purple" }}> <span>How are you champ ??</span></div>
        </Card>
        <Todo todos={todos} />
      </div>

      {/* inline styles */}
    </>
  )
}


function Card({ children }) {
  return <div style={{ backgroundColor: "black", borderRadius: 10, color: "white", padding: 10, margin: 10 }}>
    {children}
  </div>
}



function Todo(props) {
  return (
    <div>
      {props.todos.map((todo, index) => (
        <div key={index}>
          <span>{todo.title}</span>
          <span>{todo.done}</span>
        </div>
      ))}
    </div>
  )
}



export default App
