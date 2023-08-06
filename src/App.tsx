import { useState } from "react";
import "./App.css";
import Form from "./form";

function App() {
  let [name, setName] = useState("");
  return (
    <>
      <Form
        heading={"Hemlo " + name}
        handleTextChange={(event1) => setName(event1.target.value)}
      ></Form>
    </>
  );
}

export default App;
