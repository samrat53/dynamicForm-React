import { ChangeEvent, useState } from "react";

const Form = () => {
  let [mouseOver, setMouseOver] = useState(false);
  let [name, setName] = useState("");
  let [dob, setDob] = useState(new Date().toDateString());

  let globalName = name;
  let [globalDaysLeft, setGlobalDays] = useState(-1);

  const handleTextChange = (event1: ChangeEvent<HTMLInputElement>) =>
    setName(event1.target.value);

  const handleDateEntry = (event2: ChangeEvent<HTMLInputElement>) => {
    const birthdayString = event2.target.value.toString();
    console.log(
      `birthdayString: ${birthdayString} and type: ${typeof birthdayString}`
    );

    const today = new Date();
    const [year, month, day] = birthdayString.split("-").map(Number);
    const birthday = new Date(year, month - 1, day);
    const timeDiff = birthday.getTime() - today.getTime();
    const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    globalDaysLeft = daysLeft;
    setGlobalDays(daysLeft);

    return setDob(birthdayString);
  };

  return (
    <div className="container">
      <h1 className="heading">{"Voila! "+name}</h1>
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
      <h1 className="heading subHeading">Enter your next birthday date and submit</h1>

      <button
        className="submit"
        name="alertButton"
        onMouseOver={() => setMouseOver(true)}
        onMouseOut={() => setMouseOver(false)}
        onClick={() =>
          globalDaysLeft === 0
            ? alert(`Hey ${globalName}, Happy Birthday. Enjoy its your day`)
            : alert(
                `The developer wishes ${globalName} Happy Birthday in ${globalDaysLeft} days advance`
              )
        }
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
