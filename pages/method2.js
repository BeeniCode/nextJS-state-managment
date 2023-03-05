import { useReducer } from "react";

export default function Home() {
  const [multiplication, dispatch] = useReducer((state, action) => {
    return state * action;
  }, 10);
  const [addition, add] = useReducer((state, action) => {
    return state + action;
  }, 10);
  return (
    <>
      <div>
        <h1>The useReducer Hook</h1>
        <p>The result is {multiplication}</p>
        <button onClick={() => dispatch(2)}>Multiply by 2</button>
      </div>
      <div>
        <p>The result is {addition}</p>
        <button onClick={() => add(2)}>add 2</button>
      </div>
    </>
  );
}
