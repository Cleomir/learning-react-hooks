import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const onSubmit = async (event) => {
    event.preventDefault();
    const blog = { title, body, author };

    try {
      setIsLoading(true);
      await fetch("http://localhost:8000/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog),
      });
      setIsLoading(false);
      history.push("/");
    } catch (error) {
      console.log("Error: ", error);
      setIsLoading(false);
    }
  };

  return (
    <div className="create">
      <form onSubmit={onSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />
        <label>Blog body:</label>
        <textarea
          value={body}
          onChange={(event) => setBody(event.target.value)}
          required
        ></textarea>
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        >
          <option value="mario">Mario</option>
          <option value="yoshi">Yoshi</option>
        </select>
        {!isLoading && <button>Add blog</button>}
        {isLoading && <button disabled>Adding blog...</button>}
      </form>
    </div>
  );
};

export default Create;
