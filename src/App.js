import axios from "axios";
import React, { useEffect } from "react";
import Hover from "./components/Hover";
import List from "./components/List";
import { useDebounce } from "./hooks/useDebounce";
import { useFetching } from "./hooks/useFetching";
import { useInput } from "./hooks/useInput";

function App() {
  const input = useInput("");
  const { value } = input;
  // const debounce = useDebounce(searchQuery, 500);
  // function searchQuery(query) {
  //   fetch(`https://jsonplaceholder.typicode.com/todos?query=${query}`)
  //     .then((response) => response.json())
  //     .then((json) => {});
  // }

  // useEffect(() => {
  //   debounce(input.value);
  // }, [value]);
  const [todos, isPostLoading, isError] = useFetching(() => {
    return axios.get("https://jsonplaceholder.typicode.com/todos");
  });

  if (isPostLoading) {
    return <h1>IsLoading</h1>;
  }
  if (isError) {
    return <h1>{isError}</h1>;
  }

  return (
    <div>
      {/* <h1>{value}</h1>
      <input {...input} type="text" placeholder="Enter Email" />
      <Hover /> 
      <List /> */}
      {todos.map((post) => (
        <div style={{ padding: 20 }}>
          {post.id}. {post.title}
        </div>
      ))}
    </div>
  );
}

export default App;
