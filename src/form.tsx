import { ChangeEvent, useState } from "react";

const Form = () => {
  let [mouseOver, setMouseOver] = useState(false);
  let [name, setName] = useState("");

  let currdate = new Date().getDate();
  let [dob, setDob] = useState(currdate.toString());

  const handleTextChange = (event1: ChangeEvent<HTMLInputElement>) =>
    setName(event1.target.value);

  const handleDateEntry = (event2: ChangeEvent<HTMLInputElement>) => {
    const birthdayString = event2.target.value.toString();
    console.log(`birthdayString: ${birthdayString} and type: ${typeof birthdayString}`);

    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    const todayDateString = `${year}-${month}-${day}`; //string format of today's date
    console.log(`todayDateString: ${todayDateString} and type: ${typeof todayDateString}`);

    console.log(Math.abs(birthdayString - todayDateString)); //issue: logging NaN in console

    return setDob(birthdayString);
  };

  return (
    <div className="container">
      <h1 className="heading">{"Voila! " + name}</h1>
      <input
        type="text"
        className="name"
        name="goodName"
        placeholder="Enter Name"
        value={name}
        onChange={handleTextChange}
      />

      <input
        type="date"
        className="name dateEnter"
        name="dob"
        value={dob}
        onChange={handleDateEntry}
      />

      <button
        className="submit"
        onMouseOver={() => setMouseOver(true)}
        onMouseOut={() => setMouseOver(false)}
        style={{
          backgroundColor: mouseOver
            ? "rgb(84, 249, 255)"
            : "rgb(104, 255, 84)",
        }}
      >
        <span>Submit</span>
      </button>
    </div>
  );
};

export default Form;
