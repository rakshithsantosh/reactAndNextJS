import { TriangleUpIcon } from "@radix-ui/react-icons";

export default function FeedbackList() {
  return (
    <ol className="feedback-list">
      <li className="feedback">
        <button>
          <TriangleUpIcon />
          <span>643</span>
        </button>
        <div>
          <p>B</p>
        </div>
        <div>
          <p>CompanyName</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perferendis ipsum necessitatibus iste voluptate aperiam qui.
          </p>
        </div>
        <p>4d</p>
      </li>
    </ol>
  );
}
