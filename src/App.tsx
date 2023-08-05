import { useState } from "react";
import "./App.css";
import Form from "./form";

function App() {
  let [name, setName] = useState("");
  const currDate = new Date();
  // let birthday = new Date();
  let [date, setDate] = useState(currDate);
  let [birthday, setBirthday] = useState(new Date());
  let temp: Date;
  // const showAlert=(birthday, currDate)=>{
  //   console.log(birthday);
  //   console.log("hmm")
  //   console.log(currDate);
  //   return
  // }
  return (
    <>
      <Form
        heading={"Hemlo " + name}
        handleTextChange={(event1) => setName(event1.target.value)}
        handleDateEntry={(event2) => {
          setDate(event2.target.value);
          temp = date;
        }}
        // showMessage={() => setBirthday(temp)}
        showMessage={showAlert}
      ></Form>
    </>
  );
}

export default App;
