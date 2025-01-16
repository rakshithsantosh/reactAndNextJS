import { TFeedBackItem } from "../../lib/types";
import FeedbackList from "../feedback/FeedbackList";
import Header from "./Header";

type ContainerProps = {
  isLoading: boolean;
  feedbackItems: TFeedBackItem[];
  errorMessage: string;
  handleAddToList: (text: string) => void;
};

export default function Container({
  feedbackItems,
  errorMessage,
  isLoading,
  handleAddToList,
}: ContainerProps) {
  return (
    <main className="container">
      <Header handleAddToList={handleAddToList} />
      <FeedbackList
        feedbackItems={feedbackItems}
        errorMessage={errorMessage}
        isLoading={isLoading}
      />
    </main>
  );
}
