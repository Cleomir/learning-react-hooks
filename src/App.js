import "./App.css";

function App() {
  const title = "Welcome to the new blog";
  const likes = 50;
  // const person = { name: "yoshi", age: 30 };
  // const boolean = true;
  const link = "http://google.com";
  return (
    <div className="App">
      <h1>{title}</h1>
      <p>Liked {likes} times</p>
      {/* Does not work */}
      {/* <p>{person}</p> */}
      {/* <p>{boolean}</p> */}
      <p>{10}</p>
      <p>{[1, 2, 3, 4, 5]}</p>
      <p>{Math.random() * 10}</p>
      <a href={link}>Google site</a>
    </div>
  );
}

export default App;
