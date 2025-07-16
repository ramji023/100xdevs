import { useEffect, useState, useRef } from "react";
import "./App.css";
import useFetch from "./hooks/useFetch";
// custom hooks

/*
// <-----------    useCounter hoook --------------->
function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue);

  function increaseCount() {
    setCount((curr) => curr + 1);
  }
  return { count, increaseCount };
}

function App() {
  // const [count, setCount] = useState(0);
  const { count, increaseCount } = useCounter(2);
  // function increment() {
  //   setCount((curr) => curr + 1);
  // }
  return (
    <>
      <button onClick={increaseCount}>Increase {count}</button>
    </>
  );
}
* */

/*
// <-----------    useFetch hook   ----------------->
function App() {
  // const [post, setPost] = useState("");

  // useEffect(() => {
  //   fetchPost();
  // }, []);
  // async function fetchPost() {
  //   const response = await fetch(
  //     "https://jsonplaceholder.typicode.com/posts/1"
  //   );
  //   const data = await response.json();
  //   setPost(data.title);
  // }
  // const [count, setCount] = useState(1);
  const { post, loading } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/1`
  );
  return (
    <>
      {!loading ? (
        <>
          <div>
            <h3>{post}</h3>
          </div>
        </>
      ) : (
        <h2>Loading....</h2>
      )}
      <button onClick={() => setCount((prev) => prev + 1)}>
        increment {count}
      </button>
    </>
  );
}
*/

/*
 <--------    usePrev hook    ----------->
import usePrev from "./hooks/usePrev";
function App() {
  const [anything, setAnything] = useState(false);
  const [count, setCount] = useState(1);
  // const { prev } = usePrev(count);
  const { prev } = usePrev(count, 1);
  function incrementCount() {
    setCount((curr) => curr + 1);
  }

  return (
    <>
      <h1>Hii There</h1>
      <h2>count : {count}</h2>
      <button onClick={incrementCount}>increment</button>
      <p>The previous value of count was : {prev}</p>
      <button onClick={() => setAnything((curr) => !curr)}>glitch</button>
    </>
  );
}

*/

import useDebounce from "./hooks/useDebounce";
function App() {
  function sendDataToBackend() {
    console.log("data send to backend");
  }
  const debouncedFn = useDebounce(sendDataToBackend);
  return (
    <>
      <input type="text" onChange={debouncedFn} />
    </>
  );
}

export default App;
