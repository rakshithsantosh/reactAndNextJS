export default function Stats({
  numberOfCharacters,
  instagramCharLeft,
  facebookCharLeft,
  numberOfWords,
}) {
  return (
    <section className="stats">
      <Stat number={numberOfWords} label="Words" />
      <Stat number={numberOfCharacters} label="Characters" />
      <Stat number={instagramCharLeft} label="Instagram" />
      <Stat number={2200} label="Facebook" />
    </section>
  );
}

function Stat({ label, number }) {
  return (
    <section className="stat">
      <span
        className={`stat__number ${number < 0 ? "stat__number--limit" : ""}`}
      >
        {}
        {number}
      </span>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
}
