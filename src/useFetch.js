import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchBlogs = async () => {
      try {
        const fetchResponse = await fetch(url, {
          signal: abortController.signal,
        });
        if (!fetchResponse.ok) {
          throw Error("Could not fetch the data for that resource");
        }

        const response = await fetchResponse.json();
        setData(response);
        setIsLoading(false);
        setError(null);
      } catch (error) {
        if (error.name === "AbortError") {
          return;
        } else {
          setIsLoading(false);
          setError(error.message);
        }
      }
    };
    fetchBlogs();
    return () => abortController.abort();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
