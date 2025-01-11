export default function Button({ buttontype, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`btn ${buttontype === "secondary" ? "btn--secondary" : ""}`}
    >
      {children}
    </button>
  );
}
