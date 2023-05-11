import { useState } from "react";

const useFetch = () => {
  const [data, setData] = useState({});

  const fetchData = (location) => {
    fetch(`http://localhost:8000/${location}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  };

  return [data, fetchData];
};

export default useFetch;
