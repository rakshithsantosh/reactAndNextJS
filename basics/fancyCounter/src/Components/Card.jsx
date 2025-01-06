import Title from "./Title";
import Count from "./Count";
import Reset from "./Reset";
import CountButtons from "./CountButtons";
import { useState } from "react";
function Card() {
  const [count, setCount] = useState(0);
  return (
    <div className="card">
      <Title />
      <Count count={count} />
      <Reset setCount={setCount} />
      <CountButtons setCount={setCount} count={count} />
    </div>
  );
}

export default Card;
