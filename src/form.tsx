const Form = () => {
  return (
    <div className="container">
      <h1 className="heading">Hello{}</h1>
      <input type="text" className="name" placeholder="Enter Name" />
      <input type="date" className="birthday" />
      <button className="submit">Submit</button>
    </div>
  );
};

export default Form;
