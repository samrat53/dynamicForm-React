import { ChangeEvent, useState } from "react";

const Form = () => {
  let [mouseOver, setMouseOver] = useState(false);
  let [name, setName] = useState("");
  const handleTextChange = (event1: ChangeEvent<HTMLInputElement>) =>
    setName(event1.target.value);

  return (
    <div className="container">
      <h1 className="heading">{"Voila! " + name}</h1>
      <input
        type="text"
        className="name"
        placeholder="Enter Name"
        value={name}
        onChange={handleTextChange}
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
