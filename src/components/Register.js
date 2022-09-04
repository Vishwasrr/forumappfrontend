import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { url } from "../App";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

function Register() {


  let [name, setName] = useState("");
  let [password, setPassword] = useState("");
  let [email, setEmail] = useState("");
  let navigate = useNavigate();
  useEffect(() => {

  }, []);

  let handleSubmit = async () => {
    let reqBody = {
      name,
      password,
      email
    };
    let res = await axios.post(`${url}/signup`, reqBody);
    console.log(res.data.statusCode);
    if (res.data.statusCode === 200 || res.data.statusCode === 201) {
      alert("Successfully Registered");
      console.log('hello');
      navigate("/Login");
    } else {
      console.log(res.data.message);
    }
  };


  return (
    <>
      <Form className="form-fields">
        <Form.Group className="mb-3">
          <h2 id="register-header">Register</h2>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
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
        <div><Button variant="primary" onClick={() => handleSubmit()}>
          Submit
        </Button>
        </div>
        <br></br>
        <div >

          <Link to='/Login'><button >Login?</button></Link>
        </div>
      </Form>

    </>
  );
}

export default Register;
