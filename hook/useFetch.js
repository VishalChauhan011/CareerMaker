import { useState, useEffect } from "react";
import axios from "axios";
import { REACT_APP_RAPID_API_KEY } from "@env";

const useFetch = (endpoint, query, delay) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "X-RapidAPI-Key": REACT_APP_RAPID_API_KEY,
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: { ...query },
  };

  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await axios.request(options);
      setData(response.data.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      alert("There is an error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setTimeout(() => fetchData(), delay || 10);
  }, []);

  const refetch = () => {
    setLoading(true);
    fetchData();
  };
  return { data, isLoading, error, refetch };
};

export default useFetch;
