import { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, isLoading, error } = useFetch(
    `http://localhost:8000/blogs/${id}`
  );
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);
  const history = useHistory();

  const onClick = async () => {
    try {
      setIsDeleteLoading(true);
      await fetch(`http://localhost:8000/blogs/${blog.id}`, {
        method: "DELETE",
      });
      history.push("/");
    } catch (error) {
      console.log("Error", error);
      setIsDeleteLoading(false);
    }
  };

  return (
    <div className="blog-details">
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          {!isDeleteLoading && <button onClick={onClick}>Delete</button>}
          {isDeleteLoading && <button disabled>Deleting post...</button>}
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
