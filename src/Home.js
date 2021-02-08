import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("Mario");
  const [age, setAge] = useState(25);

  const changeNameAndAge = () => {
    setName("Luigi");
    setAge("30");
  };

  const handleClickAgain = (name) => {
    console.log(`Hello ${name}`);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>
        {name} is {age} years old
      </p>
      <button onClick={changeNameAndAge}>Change name and age</button>
      <button onClick={() => handleClickAgain("Mario")}>Click me again</button>
    </div>
  );
};

export default Home;
