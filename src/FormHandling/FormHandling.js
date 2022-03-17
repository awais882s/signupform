import { useState } from "react";

function FormHandling() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [stdclass, setClass] = useState("");
  const [batch, setBatch] = useState("");
  const [email, setEmail] = useState("");
  const onChangeHandler = (e) => {
    setName(e.target.value);
  };
  const onPasswordHandler = (e) => {
    setPassword(e.target.value);
  };
  const onBatchHandler = (e) => {
    setBatch(e.target.value);
  };
  const onClassHandler = (e) => {
    setClass(e.target.value);
  };
  const onEmailHandler = (e) => {
    setEmail(e.target.value);
  };
  const submitHandler = () => {
    let student = {
      name,
      password,
      batch,
      stdclass,
      email,
    };
    console.log("Student is", student);
  };

  return (
    <div>
      <h3>Name is: {name}</h3>
      <input
        type="text"
        onChange={onChangeHandler}
        placeholder=" Please Enter Your Name"
        required
      />
      <h3>Password is: {password}</h3>
      <input
        type="password"
        placeholder="Enter Your Password"
        onChange={onPasswordHandler}
      />
      <h3>Batch is :{batch}</h3>
      <input
        type="text"
        placeholder="Enter Your Batch"
        onChange={onBatchHandler}
      />
      <h3>Class is:{stdclass}</h3>
      <input
        type="text"
        placeholder="Enter Your Class"
        onChange={onClassHandler}
      />
      <h3>Email is:{email}</h3>
      <input
        type="email"
        placeholder="Enter Your Email"
        onChange={onEmailHandler}
      />
      &nbsp;
      <button onClick={submitHandler}>Submit Data</button>
    </div>
  );
}
export default FormHandling;
