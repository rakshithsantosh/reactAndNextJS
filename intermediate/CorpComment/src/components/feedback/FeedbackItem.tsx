import { TriangleUpIcon } from "@radix-ui/react-icons";
import { TFeedBackItem } from "../../lib/types";

type FeedBackItemProps = {
  feedbackItem: TFeedBackItem;
};

export default function FeedbackItem({ feedbackItem }: FeedBackItemProps) {
  return (
    <li className="feedback">
      <button>
        <TriangleUpIcon />
        <span>{feedbackItem.upvoteCount}</span>
      </button>
      <div>
        <p>{feedbackItem.badgeLetter}</p>
      </div>
      <div>
        <p>{feedbackItem.company}</p>
        <p>{feedbackItem.text}</p>
      </div>
      <p>{feedbackItem.daysAgo === 0 ? "New" : `${feedbackItem.daysAgo} d`}</p>
    </li>
  );
}
