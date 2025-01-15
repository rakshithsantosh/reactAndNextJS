export default function FeedbackForm() {
  return (
    <form className="form">
      <textarea
        id="feedback-textarea"
        placeholder="something"
        spellCheck={false}
      />
      <label htmlFor="feedback-textarea">
        Enter your Feedback here, remember to #hashtag the company
      </label>
      <div>
        <p className="u-italic">150</p>
        <button>
          <span>Button</span>
        </button>
      </div>
    </form>
  );
}
