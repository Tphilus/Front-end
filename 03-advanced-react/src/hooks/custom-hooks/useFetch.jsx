import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const resp = await fetch(url);
     if(!resp.ok) {
        setIsError(true);
        setIsLoading(false);
     }
      const response = await resp.json();
      setData(response);
    } catch (error) {
      setIsError(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { isLoading, isError, data };
};

export default useFetch;
