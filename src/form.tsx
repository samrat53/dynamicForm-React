import { ChangeEvent } from "react";

interface formProps{
    heading: string;
    handleTextChange: ((event1: ChangeEvent<HTMLInputElement>)=>void);
    handleDateEntry: (event2: ChangeEvent)=>void;
    showMessage: ()=>void;
}

const Form = ({heading, handleTextChange,handleDateEntry,showMessage} : formProps) => {
  return (
    <div className="container">
      <h1 className="heading">{heading}</h1>
      <input type="text" className="name" placeholder="Enter Name" onChange={handleTextChange} />
      <input type="date" className="birthday" onChange={handleDateEntry}/>
      <button className="submit" onClick={showMessage}>Submit</button>
    </div>
  );
};

export default Form;
