import Stats from "./Stats";
import Textarea from "./Textarea";
import { useState } from "react";

export default function Container() {
  const [text, setText] = useState("");
  const numberOfWords = text.split(" ").length - 1;
  const numberOfCharacters = text.length;
  const instagramCharLeft = 280 - numberOfCharacters;
  const facebookCharLeft = 2200 - numberOfCharacters;
  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats
        numberOfCharacters={numberOfCharacters}
        instagramCharLeft={instagramCharLeft}
        facebookCharLeft={facebookCharLeft}
        numberOfWords={numberOfWords}
      />
    </main>
  );
}
