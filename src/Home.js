import { useState, useEffect } from "react";

import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      const jsonResponse = await fetch("http://localhost:8000/blogs");
      const response = await jsonResponse.json();
      setBlogs(response);
    };
    fetchBlogs();
  }, []);

  return (
    <div className="home">
      {blogs && <BlogList blogs={blogs} title="All blogs" />}
    </div>
  );
};

export default Home;
