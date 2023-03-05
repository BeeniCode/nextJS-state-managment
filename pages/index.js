import { useState } from "react";

export default function Home() {
  const [score, setScore] = useState(0);
  const increaseScore = () => setScore(score + 1);
  const decreaseScore = () => setScore(score - 1);

  return (
    <div>
      <h1>
        <h1>The useState Hook</h1>
      </h1>
      <p>Your score is {score}</p>
      <button onClick={increaseScore}>+</button>
      <button onClick={decreaseScore}>-</button>
    </div>
  );
}
