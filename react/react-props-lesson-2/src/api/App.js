import React, {useState, useEffect} from "react";
export default function App() {
  const [data, setData] = useState("");

  useEffect( () => {
    apiCall();
    // const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  
    // const data = await response.json();
  
    // setData(data);
  }, []);

  async function apiCall() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    const data = await response.json();

    setData(data);
  }

  return (
    <div className="App">
        {!data ? 'loading' :  data.title}
    </div>
    );
}

