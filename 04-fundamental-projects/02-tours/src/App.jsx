import { useEffect } from "react";
import { useState } from "react";
import Loading from "./components/Loading";
import Tours from "./components/Tours";

const url = "https://www.course-api.com/react-tours-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTour = tours.filter((tour)=> tour.id !== id);
    setTours(newTour);
  };

  const removeTours = () => {
    setTours([]);
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false)
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  TODO:
  if (tours.length === 0) {
    return (
      <main>
        <div className=" title">
          <h2>no tours left</h2>
          <button
            type="button"
            className=" btn"
            style={{ marginTop: "2rem" }}
            onClick={() => fetchData()}
          >
            refresh
          </button>
        </div>
      </main>
    );
  }
  
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};
export default App;
