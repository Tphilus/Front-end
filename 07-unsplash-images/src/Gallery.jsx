import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const url =
  // "https://api.unsplash.com/search/photos?client_id= &query=office";
  "https://api.unsplash.com/search/photos?client_id=Zyr_RJLrP7sr-cpZQKxO6vVq6MBg4ISpaKX9obO9qOI&query=office";
const Gallery = () => {
  const response = useQuery({
    queryKey: ["images"],
    queryFn: async () => {
      const result = await axios.get(url);
      return result.data;
    },
  });
  console.log(response);
  
  return <div>Gallery</div>;
};

export default Gallery;
