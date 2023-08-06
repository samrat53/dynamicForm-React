import { ChangeEvent, useState } from "react";

interface formProps {
  heading: string;
  handleTextChange: (event1: ChangeEvent<HTMLInputElement>) => void;
}

const Form = ({ heading, handleTextChange }: formProps) => {
  let [mouseOver, setMouseOver] = useState(false);
  return (
    <div className="container">
      <h1 className="heading">{heading}</h1>
      <input
        type="text"
        className="name"
        placeholder="Enter Name"
        onChange={handleTextChange}
      />

      <button
        className="submit"
        onMouseOver={() => setMouseOver(true)}
        onMouseOut={() => setMouseOver(false)}
        style={{
          backgroundColor: mouseOver ? "rgb(84, 249, 255)" : "rgb(104, 255, 84)",
        }}
      >
        <span>Submit</span>
      </button>
    </div>
  );
};

export default Form;
