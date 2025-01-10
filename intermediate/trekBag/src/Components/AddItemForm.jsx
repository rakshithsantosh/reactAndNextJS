import { useRef, useState } from "react";
import Button from "./Button";

export default function AddItemForm({ setItems }) {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    //basic validation
    if (!itemText) {
      alert("Item can't be empty");
      inputRef.current.focus();
      return;
    }

    const newItem = {
      id: new Date().getTime(),
      name: itemText,
      packed: false,
    };
    setItems((prev) => [...prev, newItem]);
    setItemText("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        ref={inputRef}
        autoFocus={true}
        value={itemText}
        onChange={(e) => {
          setItemText(e.target.value);
        }}
        type="text"
      />
      <Button>Add to list </Button>
    </form>
  );
}
