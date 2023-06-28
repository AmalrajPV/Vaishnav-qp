import React, { useState } from "react";
import img from "../../Assets/logo.png";
import "../Logins/Login.css";
import { useAuth } from "../../utils/loginContaxt";
import Alert from 'react-bootstrap/Alert';
import { useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [err, setErr] = useState();

  const auth = useAuth();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://127.0.0.1:5000/api/login', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      auth.login(data['access_token'], data['user_type']);
      switch (data['user_type']) {
        case "hod":
            navigate('/exam');
            break;
        case "level-officer":
            navigate('/addexam');
            break;
        case "faculty":
            navigate('/Addquestion');
            break;
        case "exam-controller":
            navigate('/addlevelofficer');
            break;
      
        default:
            break;
      }
    })
    .catch(error => {
      setErr(error["message"]);
    });
  };

  // Function to handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="main">
      <div className="nav">
        <div className="optn">
          <ul>
            <a href="/">
              <li>About</li>
            </a>
            <a href="/">
              <li>Contact</li>
            </a>
          </ul>
        </div>
      </div>
      <div className="content">
        <div className="logo">
          <img src={img} alt="" className="logoimg" />
        </div>
        <div className="user">
          <div className="head">
            <h2 id="head">LOGIN</h2>
          </div>
        </div>
        <div className="box">
        <Alert variant={"danger"}>
          {err}
        </Alert>
          <form onSubmit={handleSubmit}>
            <div className="input-row">
              <label htmlFor="hodid">Username:</label>
              <input
                type="email"
                id="hodid"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="input-row">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="btn">
              <input className="btn1" type="submit" value="Login" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
