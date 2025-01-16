import Container from "./layout/Container";
import Footer from "./layout/Footer";
import HashtagList from "./hastag/HashtagList";
import { useEffect, useState } from "react";
import { TFeedBackItem } from "../lib/types";

function App() {
  const [feedbackItems, setFeedbackItems] = useState<TFeedBackItem[]>([]);
  const [isLoading, setiSLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedCompany, setSelectedCompany] = useState();

  const filteredFeebackItem = selectedCompany
    ? feedbackItems.filter(
        (feedbackItems) => feedbackItems.company === selectedCompany
      )
    : feedbackItems;

  const companyList = feedbackItems
    .map((item) => item.company)
    .filter((company, index, array) => {
      return array.indexOf(company) === index;
    });

  const handleAddToList = async (text: string) => {
    const companyName = text
      .split(" ")
      .find((word) => word.includes("#"))!
      .substring(1);
    const newItem: TFeedBackItem = {
      id: new Date().getTime(),
      text: text,
      upvoteCount: 0,
      daysAgo: 0,
      company: companyName,
      badgeLetter: companyName.substring(0, 1).toUpperCase(),
    };

    setFeedbackItems([...feedbackItems, newItem]);

    await fetch(
      "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",
      {
        method: "POST",
        body: JSON.stringify(newItem),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
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

  const handleSelectedCompany = (company: string) => {
    setSelectedCompany(company);
  };

  return (
    <div className="app">
      <Footer />
      <Container
        feedbackItems={filteredFeebackItem}
        isLoading={isLoading}
        errorMessage={errorMessage}
        handleAddToList={handleAddToList}
      />
      <HashtagList
        companyList={companyList}
        handleSelectedCompany={handleSelectedCompany}
      />
    </div>
  );
}

export default App;
