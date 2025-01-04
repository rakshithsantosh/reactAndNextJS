import { useState } from "react";
import Counter from "./components/Counter";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Counter count={count} />
      <Button setCount={setCount} />
    </>
  );
}

export default App;
