import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./SingleQuestion";
function App() {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <div className="container">
        <div className="desktop">
          <div className="illustration"></div>
          <div className="box"></div>
        </div>
        <section className="info">
          <h2 className="faq">FAQ</h2>
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
