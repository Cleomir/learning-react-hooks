import { useState, useEffect } from "react";

import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      const jsonResponse = await fetch("http://localhost:8000/blogs");
      const response = await jsonResponse.json();
      setBlogs(response);
      setIsLoading(false);
    };
    fetchBlogs();
  }, []);

  return (
    <div className="home">
      {isLoading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All blogs" />}
    </div>
  );
};

export default Home;
