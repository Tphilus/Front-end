import { useEffect } from "react";
import { useState } from "react";
import JobInfo from "./components/JobInfo";
import BtnContainer from "./components/BtnContainer";

const url = "https://www.course-api.com/react-tabs-project";

const App = () => {
  const [isLoadind, setIsLoading] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);

  const fetchJobs = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const newJobs = await response.json();
      setJobs(newJobs);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (isLoadind) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  }

  return (
    <div className="jobs-center">
      <BtnContainer jobs={jobs} currentItem={currentItem} setCurrentItem={setCurrentItem} />
      <JobInfo jobs={jobs} currentItem={currentItem} />
    </div>
  );
};
export default App;
