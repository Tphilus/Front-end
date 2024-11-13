import { useEffect } from 'react';
import authFetch1 from '../axios/interceptors'
import axios from 'axios';
const url = 'https://www.course-api.com/react-store-products';

const Interceptors = () => {
  const fetchData = async () => {
    try {
      const resp = await authFetch1('/react-store-products')
      const resp2 = await axios(url)

    } catch (error) {
      console.log(error.response)
    }
    console.log('axios interceptors');
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>interceptors</h2>;
};
export default Interceptors;
