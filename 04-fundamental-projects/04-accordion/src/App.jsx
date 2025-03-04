import { useState } from "react";
import question from "./data";
import Questions from "./components/Questions";
const App = () => {
  const [questions, setQuestions] = useState(question);

  // Alternative
  const [activeId, setActiveId] = useState(null);

  const toggleQuestion = (id) => {
    const newActiveId = id === activeId ? null : id;
    setActiveId(newActiveId);
  };

  return (
    <main>
      <Questions
        questions={questions}
        activeId={activeId}
        toggleQuestion={toggleQuestion}
      />
    </main>
  );
};
export default App;
