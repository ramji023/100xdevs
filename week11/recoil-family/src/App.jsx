import "./App.css";
import { RecoilRoot, useRecoilState_TRANSITION_SUPPORT_UNSTABLE } from "recoil";
import { todosAtomFamily } from "./atom";

function App() {
  return (
    <RecoilRoot>
      <Todo id={1} />
      <Todo id={2} />
    </RecoilRoot>
  );
}

function Todo({ id }) {
  const [todo, setTodo] = useRecoilState_TRANSITION_SUPPORT_UNSTABLE(
    todosAtomFamily(id)
  );

  return (
    <>
      {todo.title}
      {/* {todo.description} */}
      <br />
    </>
  );
}

export default App;
