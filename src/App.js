import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const APP_ID = "acb7608f";
  const APP_KEY = "67b2d3ab5595be17cc33f31c5cd5df7c";
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [counter, setCounter] = useState(0);
  useEffect(() => {});

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button
          onClick={() => setCounter(counter + 1)}
          className="search-button"
          type="submit"
        >
          {counter}
        </button>
      </form>
    </div>
  );
};

export default App;
