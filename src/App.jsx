import { useState } from "react";
import Entry from "./components/Entry";
import "./App.css";
import emojipedia from "./emojipedia";

function describeEmoji(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      description={emojiTerm.meaning}
    />
  );
}

function App() {
  return (
    <>
      <div>
        <h1>
          <span>emojipedia</span>
        </h1>

        <dl className="dictionary">
          {emojipedia.map(describeEmoji)}
          {/* <Entry
            emoji="🙏"
            name="Person With Folded Hands"
            description="Two hands pressed together. Is currently very introverted, saying a prayer, or hoping for enlightenment. Is also used as a “high five” or to say thank you."
          />
          <Entry />
          <Entry /> */}
        </dl>
      </div>
    </>
  );
}

export default App;
