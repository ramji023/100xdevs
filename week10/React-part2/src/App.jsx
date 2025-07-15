import { useRef, useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom"
// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/neet" element={<Layout />}>
//             <Route index element={<Home />} />
//             <Route path="neet" element={<NeetClass />} />
//             <Route path="jee" element={<JeeClass />} />
//             <Route path="*" element={<Error />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </>
//   )
// }


// <-------------- useRef() hook  ---------------------->


function App() {

  // const inputRef = useRef();

  // function focusOnInput() {
  //   // console.log(inputRef.current) // reference to that DOM element
  //    inputRef.current.focus()
  // }

  // return <div>
  //   <h2>Signup Form</h2>
  //   <input ref={inputRef} type="text" />
  //   <input type="text" />
  //   <button onClick={focusOnInput}>Submit</button>
  // </div>

  // <----- design a clock using useRef() hook

  const [counter, setCounter] = useState(0)
   console.log("component render")
   const timerRef= useRef()
  function startClock() {
   const timer =  setInterval(() => {
      setCounter(curr => curr + 1)
    }, 1000)
    timerRef.current = timer;
  }

  function stopClock() {
    clearInterval(timerRef.current)
  }
  return <div>
    <h1>clock</h1>
    <h2>{counter}</h2>

    <button onClick={startClock}>Start</button>
    <button onClick={stopClock}>Stop</button>
  </div>
}
function Layout() {
  return <div>
    <Link to="" >Allen</Link>  |   <Link to="neet" >NEET</Link>   | <Link to="jee" >JEE</Link>
    <Outlet />
    Footer  | Contact us
  </div>
}
function Home() {
  return <div>
    <span>Home</span>
    <br />
    <span>Neet class</span>
    <br />
    <span>JEE class</span>
  </div>
}

function NeetClass() {
  return <div>
    <li>Biology</li>
    <li>Physics</li>
    <li>Chemistery</li>
  </div>
}

function JeeClass() {
  return <div>
    <li>Math</li>
    <li>Physics</li>
    <li>Chemistery</li>
  </div>
}

function Error() {
  return <div><h1>Sorry Page Not Found</h1></div>
}
export default App
