import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { url } from "../App";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";


function Login() {


  let [password, setPassword] = useState("");
  let [email, setEmail] = useState("");
  let navigate = useNavigate();
  useEffect(() => { }, []);

  let handleSubmit = async () => {
    let reqBody = {

      password,
      email,
    };
    let res = await axios.post(`${url}/login`, reqBody);
    if (res.data.statusCode === 200 || res.data.statusCode === 201) {
      sessionStorage.setItem("auth", "loggedIn");
      navigate("/questions");
    } else {
      console.log(res.data.message);
    }
  };

  return (
    <>
      <Form className="form-fields">

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" onClick={() => handleSubmit()}>
          Submit
        </Button>
        <br></br>
        <br></br>
        <div>
          <Link to='/'><button >Register?</button></Link>
        </div>
      </Form>

    </>
  );
}

export default Login;
