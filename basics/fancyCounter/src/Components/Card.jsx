import Title from "./Title";
import Count from "./Count";
import Reset from "./Reset";
import CountButtons from "./CountButtons";
function Card() {
  return (
    <div className="card">
      <Title />
      <Count />
      <Reset />
      <CountButtons />
    </div>
  );
}

export default Card;
