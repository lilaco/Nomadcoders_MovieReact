import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("")
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("I run all the time");
  useEffect(() => {
    console.log("I run only once");
  }, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5){
      console.log("I run when 'keyword' changed.");   
    }
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changed.");   
  }, [counter]);
  useEffect(() => {
    console.log("I run when 'counter and keyword' changed.");   
  }, [counter,keyword]);

  return (
    <div>
      <input 
        onChange={onChange}
        value={keyword}
        type="text" 
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
