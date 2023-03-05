import { useState } from "react";

const Message = ({ active }) => {
  return <h1>The switch is {active ? "active" : "disabled"}</h1>;
};

const Button = ({ onToggle }) => {
  return <button onClick={onToggle}>Change</button>;
};

const Switch = ({ active, onToggle }) => {
  return (
    <div>
      <h1>Prop drilling technique for state management</h1>
      <br />
      <br />
      <Message active={active} />
      <Button onToggle={onToggle} />
    </div>
  );
};

export default function Home() {
  const [active, setActive] = useState(false);
  const toggle = () => setActive((active) => !active);

  return <Switch active={active} onToggle={toggle} />;
}
