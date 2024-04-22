import { useState } from "react";
import axios from "axios";
import "../src/App.css";

export default function Signup() {
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const register = await axios.post(
        "http://localhost:5000/register",
        value
      );
      console.log(register.data);
      setValue({
        name: "",
        email: "",
        password: "",
      });
      alert("Account created successfully!");
    } catch (error) {
      console.error("Error creating account:", error);
      alert("Error creating account. Please try again.");
    }
  };

  return (
    <section>
      <div className="leaves">
        <div className="set">
          <div>
            <img
              src="https://i.ibb.co/S0VnkZq/leaf-01.png"
              alt="leaf-01"
              border="0"
            />
          </div>
          <div>
            <img
              src="https://i.ibb.co/fFrnHYd/leaf-02.png"
              alt="leaf-02"
              border="0"
            />
          </div>
          <div>
            <img
              src="https://i.ibb.co/vdx8Jh5/leaf-03.png"
              alt="leaf-03"
              border="0"
            />
          </div>
          <div>
            <img
              src="https://i.ibb.co/SdcBCvr/leaf-04.png"
              alt="leaf-04"
              border="0"
            />
          </div>
          <div>
            <img
              src="https://i.ibb.co/S0VnkZq/leaf-01.png"
              alt="leaf-01"
              border="0"
            />
          </div>
          <div>
            <img
              src="https://i.ibb.co/fFrnHYd/leaf-02.png"
              alt="leaf-02"
              border="0"
            />
          </div>
          <div>
            <img
              src="https://i.ibb.co/vdx8Jh5/leaf-03.png"
              alt="leaf-03"
              border="0"
            />
          </div>
          <div>
            <img
              src="https://i.ibb.co/SdcBCvr/leaf-04.png"
              alt="leaf-04"
              border="0"
            />
          </div>
        </div>
      </div>
      <img
        className="bg"
        src="https://i.ibb.co/rfNqbQG/bg.jpg"
        alt="background"
      />
      <img
        className="girl"
        src="https://i.ibb.co/W5ssvRf/girl.png"
        alt="girl"
      />
      <img
        className="trees"
        src="https://i.ibb.co/QrMyLYc/trees.png"
        alt="trees"
      />
      <div className="container">
        <form onSubmit={handleSubmit} className="login">
          <h2>Registration Form</h2>
          <div className="inputBox">
            <input
              className="field"
              type="text"
              placeholder="Name"
              onChange={handleChange}
              value={value.name}
              name="name"
              required
            />
          </div>
          <div className="inputBox">
            <input
              placeholder="Email"
              type="email"
              onChange={handleChange}
              value={value.email}
              name="email"
              required
            />
          </div>
          <div className="inputBox">
            <input
              className="field"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              value={value.password}
              name="password"
              required
            />
          </div>
          <div className="inputBox">
            <input className="submit" type="submit" value="Submit" id="btn" />
          </div>
          <div className="group">
            <a href="#">Forget Password</a>
            <a href="#">Sign up</a>
          </div>
        </form>
      </div>
    </section>
  );
}
