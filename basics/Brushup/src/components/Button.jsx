function Button({ setCount }) {
  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
    </div>
  );
}

export default Button;
