import { useState } from "react";
import { MAX_CHARACTERS } from "../lib/constants";

export default function FeedbackForm() {
  const [text, setText] = useState("");
  const charCount = MAX_CHARACTERS - text.length;
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    if (newText.length > MAX_CHARACTERS) {
      return;
    }
    setText(newText);
  };

  return (
    <form className="form">
      <textarea
        value={text}
        onChange={handleChange}
        id="feedback-textarea"
        placeholder="something"
        spellCheck={false}
        maxLength={MAX_CHARACTERS}
      />
      <label htmlFor="feedback-textarea">
        Enter your Feedback here, remember to #hashtag the company
      </label>
      <div>
        <p className="u-italic">{charCount}</p>
        <button>
          <span>Button</span>
        </button>
      </div>
    </form>
  );
}
