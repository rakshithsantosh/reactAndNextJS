import { TriangleUpIcon } from "@radix-ui/react-icons";

type FeedBackItem = {
  upvoteCount: number;
  badgeLetter: string;
  companyName: string;
  text: string;
  daysAgo: number;
};

type FeedBackItemProps = {
  feedbackItem: FeedBackItem;
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
        <p>{feedbackItem.companyName}</p>
        <p>{feedbackItem.text}</p>
      </div>
      <p>{feedbackItem.daysAgo}d</p>
    </li>
  );
}
