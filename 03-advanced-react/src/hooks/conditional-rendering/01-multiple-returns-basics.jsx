import { useEffect, useState } from 'react';

const MultipleReturnsBasics = () => {
  const [loading, setLoading] = useState(true)

  if(loading) {
    return <p>Loading....</p>
  }
  return <h2>Multiple Returns Basics</h2>;
};
export default MultipleReturnsBasics;
