import Container from "./Container";
import Footer from "./Footer";
import HashtagList from "./HashtagList";
import { useEffect, useState } from "react";
import { TFeedBackItem } from "../lib/types";

function App() {
  const [feedbackItems, setFeedbackItems] = useState<TFeedBackItem[]>([]);
  const [isLoading, setiSLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleAddToList = (text: string) => {
    const companyName = text
      .split(" ")
      .find((word) => word.includes("#"))!
      .substring(1);
    const newItem: TFeedBackItem = {
      id: new Date().getTime(),
      text: text,
      upvoteCount: 0,
      daysAgo: 0,
      companyName: companyName,
      badgeLetter: companyName.substring(0, 1).toUpperCase(),
    };

    setFeedbackItems([...feedbackItems, newItem]);
  };

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
    <div className="app">
      <Footer />
      <Container
        feedbackItems={feedbackItems}
        isLoading={isLoading}
        errorMessage={errorMessage}
        handleAddToList={handleAddToList}
      />
      <HashtagList />
    </div>
  );
}

export default App;
