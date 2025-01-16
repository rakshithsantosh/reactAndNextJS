import { useEffect, useState } from "react";
import FeedbackItem from "./FeedbackItem";
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";

export default function FeedbackList() {
  const [feedbackItems, setFeedbackItems] = useState([]);
  const [isLoading, setiSLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchFeedbackItems = async () => {
    setiSLoading(true);

    try {
      const response = await fetch(
        "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
      );

      if (!response.ok) {
        throw new Error();
      }

      const data = await response.json();
      setFeedbackItems(data.feedbacks);
    } catch (error) {
      setErrorMessage("something went wrong");
    }

    setiSLoading(false);
  };

  useEffect(() => {
    fetchFeedbackItems();

    // setiSLoading(true);
    // fetch(
    //   "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
    // )
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error();
    //     }
    //     return response.json();
    //   })
    //   .then((data) => {
    //     setFeedbackItems(data.feedbacks);
    //     setiSLoading(false);
    //   })
    //   .catch((error) => {
    //     setErrorMessage("Something went Wrong");
    //     setiSLoading(false);
    //   });
  }, []);

  return (
    <ol className="feedback-list">
      {isLoading && <Spinner />}
      {errorMessage && <ErrorMessage message={errorMessage} />}
      {feedbackItems.map((feedbackItem) => (
        <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}
