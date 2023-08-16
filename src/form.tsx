import { ChangeEvent, useState } from "react";

const Form = () => {
  let [dob, setDob] = useState(new Date().toDateString());
  let [mouseOver, setMouseOver] = useState(false);
  let [globalDaysLeft, setGlobalDays] = useState(-1);

  let [fullName, setFullName] = useState({ fName: "", lName: "" });

  const handleTextChange = (event1: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event1.target;
    setFullName((prevValue) => {
      if (name === "fName")
        return {
          fName: value,
          lName: prevValue.lName,
        };
      else if (name === "lName")
        return {
          fName: prevValue.fName,
          lName: value,
        };
      else return prevValue;
    });
  };

  const handleDateEntry = (event2: ChangeEvent<HTMLInputElement>) => {
    const birthdayString = event2.target.value.toString();
    console.log(
      `birthdayString: ${birthdayString} and type: ${typeof birthdayString}`
    );

    const today = new Date();
    const [year, month, day] = birthdayString.split("-").map(Number);
    const birthday = new Date(year, month - 1, day);
    const timeDiff = birthday.getTime() - today.getTime();
    let daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    daysLeft <= 1 ? (daysLeft = 365 + daysLeft) : daysLeft;

    globalDaysLeft = daysLeft;
    setGlobalDays(daysLeft);

    return setDob(birthdayString);
  };

  return (
    <div className="container">
      <h1 className="heading">{`Voila! ${fullName.fName} ${fullName.lName}`}</h1>
      <input
        type="text"
        className="name fName"
        name="fName"
        placeholder="Enter your first name"
        value={fullName.fName}
        onChange={handleTextChange}
      />

      <input
        type="text"
        className="name lName"
        name="lName"
        placeholder="Enter your last name"
        value={fullName.lName}
        onChange={handleTextChange}
      />

      <input
        type="date"
        className="name dateEnter"
        name="dob"
        value={dob}
        onChange={handleDateEntry}
      />
      <p className="heading subHeading">
        Enter your next birthday date and submit
      </p>

      <button
        className="submit"
        name="alertButton"
        onMouseOver={() => setMouseOver(true)}
        onMouseOut={() => setMouseOver(false)}
        onClick={() =>
          globalDaysLeft === 0
            ? alert(
                `🚀🎉 Hey ${fullName.fName +" "+ fullName.lName}, Happy Birthday. Mark this day as the most memorable one 🎂🎈🎁 `
              )
            : alert(
                `🚀🎉 The Developer wishes Happy Birthday to the incredible ${fullName.fName +" "+ fullName.lName}, ${globalDaysLeft} days early! 🎂🎈🎁`
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
