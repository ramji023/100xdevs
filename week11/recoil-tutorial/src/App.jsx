import {
  RecoilRoot,
  useRecoilValue_TRANSITION_SUPPORT_UNSTABLE,
  useSetRecoilState,
} from "recoil";
import "./App.css";
import { counterAtom, evenSelector } from "./store/atoms/counter";

function App() {
  return (
    <>
      <RecoilRoot>
        <h1>Hii There</h1>
        <Counter />
      </RecoilRoot>
    </>
  );
}

function Counter() {
  return (
    <div>
      <CurrentCount />
      <Increase />
      <Decrease />
      <IsEven/>
    </div>
  );
}

function Increase() {
  const setCount = useSetRecoilState(counterAtom);
  return <button onClick={() => setCount((curr) => curr + 2)}>Increase</button>;
}

function Decrease() {
  const setCount = useSetRecoilState(counterAtom);
  return <button onClick={() => setCount((curr) => curr - 1)}>Decrease</button>;
}

function CurrentCount() {
  const count = useRecoilValue_TRANSITION_SUPPORT_UNSTABLE(counterAtom);
  console.log(count);
  return <h2>{count}</h2>;
}

function IsEven() {
  const isEven = useRecoilValue_TRANSITION_SUPPORT_UNSTABLE(evenSelector);
  return <div>{isEven ? "Even" : "Odd"}</div>;
}
export default App;
