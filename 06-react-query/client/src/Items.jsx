// import { useQuery } from "@tanstack/react-query";
import { useFetchTask } from "./reactQuearyCustomHooks";
import SingleItem from "./SingleItem";
// import customFetch from "../utils";
const Items = ({ items }) => {
 
  // const {data, isError, isLoading, error} = useQuery({
  //   queryKey: ['tasks'],
  //   queryFn: async () => {
  //     const {data} = await customFetch.get('/');
  //     return data;
  //   }
  // })

  const {isLoading, isError, data} = useFetchTask();

  if (isLoading) {
    return <p style={{ marginTop: "1rem" }}>Loading...</p>;
  }

  if (isError) {
    return <p style={{ marginTop: "1rem" }}>There was an error...</p>;
  }

  // if (error) {
  //   return <p style={{ marginTop: "1rem" }}>{error.response.data}</p>;
  // }

  return (
    <div className="items">
      {data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
