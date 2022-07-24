import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { url } from "../App";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Header() {


  var auth = sessionStorage.getItem("auth");
  let navigate = useNavigate();
  let handleLogoutClick = async () => {
    sessionStorage.removeItem("auth");
    navigate("/");

  };

  let handleLoginClick = async () => {
    navigate("/Login");

  };

  return (
    <div className="head-wrapper">
      <div className="head-title">StackOverFlow</div>
      <div className="loginButton" >
        {auth
          ? <Button variant="primary" onClick={() => handleLogoutClick()}>
            Logout
          </Button>

          : <Button variant="primary" onClick={() => handleLoginClick()}>
            Login
          </Button>

        }
      </div>
      <div className="home-cart"></div>
    </div>
  );
}

export default Header;
