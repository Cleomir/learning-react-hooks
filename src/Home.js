import { useState, useEffect } from "react";

import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const fetchResponse = await fetch("http://localhost:8000/blogs");
        if (!fetchResponse.ok) {
          throw Error("Could not fetch the data for that resource");
        }

        const response = await fetchResponse.json();
        setBlogs(response);
        setIsLoading(false);
        setError(null);
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All blogs" />}
    </div>
  );
};

export default Home;
