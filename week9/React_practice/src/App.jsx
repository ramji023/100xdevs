import { useState, useEffect } from "react"

function App() {
  // const [clockVisible, setClockVisible] = useState(true)

  // useEffect(() => {
  //   setInterval(() => {
  //     setClockVisible(curr => !curr)
  //   }, 5000)
  // }, [])


  return <div>
    <h1>Welcome to React practice page</h1>
    {/* <Counter /> */}
    {/* {clockVisible && <Clock />} */}
    <Count />
  </div>

}

/*
function Counter() {
  const [count, setCount] = useState(1)


  function incrementCount() {
    setCount(count + 1)
  }


  return <div>
    <h2>{count}</h2>
    <button onClick={incrementCount}>Increase count</button>
  </div>
}



// mount --> re-renders --> unmount
function Clock() {
  const [count, setCount] = useState(1)

  // protect our setInterval from re-renders
  useEffect(() => {
    let clock = setInterval(() => {
      setCount(curr => curr + 1)
    }, 1000)

    return () => {
      clearInterval(clock)
    }
  }, [])

  return <div>
    <h2>{count}</h2>
  </div>
}
* */


function Count() {
  const [count, setCount] = useState(0)



  useEffect(() => {
    console.log("component mount")

    return () => {
      console.log("component unmount")
    }
  }, [count])
  function increment() {
    setCount((prev) => prev + 1)
  }

  function decrement() {
    setCount((prev) => prev - 1)
  }
  return <div>
    <h2>{count}</h2>
    <button onClick={increment}>increment</button>
    <button onClick={decrement}>decrement</button>
  </div>
}

export default App
