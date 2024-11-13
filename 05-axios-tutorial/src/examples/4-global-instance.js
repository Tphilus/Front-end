import axios from 'axios';
import { useEffect } from 'react';

const productsUrl = 'https://www.course-api.com/react-store-products';
const randomUserUrl = 'https://randomuser.me/api';

const GlobalInstance = () => {
  const fetchData = async () => {
    try {
      const resp = await axios(productsUrl)
      const resp2 = await axios(randomUserUrl)

      console.log(resp);
      console.log(resp2);
      
      
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>global instance</h2>;
};
export default GlobalInstance;
