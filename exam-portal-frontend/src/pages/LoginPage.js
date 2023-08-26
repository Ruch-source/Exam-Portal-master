import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Row, Col, InputGroup } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { login } from "../actions/authActions";
import Loader from "../components/Loader";
import * as authConstants from "../constants/authConstants";

import "./LoginPage.css"; 

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  const token = JSON.parse(localStorage.getItem("jwtToken"));
  const user = JSON.parse(localStorage.getItem("user"));

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginReducer = useSelector((state) => state.loginReducer);

  const showPasswordHandler = () => {
    const temp = !showPassword;
    setShowPassword(temp);
    if (temp) {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    login(dispatch, username, password).then((data) => {
      if (data.type === authConstants.USER_LOGIN_SUCCESS) {
        data.payload.roles.map((r) => {
          if (r["roleName"] === "ADMIN") {
            return navigate("/adminProfile");
          } else {
            return navigate("/profile");
          }
        });
      }
    });
  };

  useEffect(() => {
    if (token && user) {
      user.roles.map((r) => {
        if (r["roleName"] === "ADMIN") return navigate("/adminProfile");
        else return navigate("/profile");
      });
    }
  }, []);

  return (
    <FormContainer >
       {/* Added class for header styling */}
      <Form onSubmit={submitHandler} className="login-form mt-5"> 
      <h1 className="login-header  fw-bolder text-decoration-underline">Login </h1>
        <Form.Group className="my-3" controlId="username">
          <Form.Label className="fw-semibold">User Name</Form.Label>
          <Form.Control
            type="text"
            
            placeholder="Enter User Name"
            className="border-dark"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="my-3" controlId="password">
          <Form.Label className="fw-semibold" >Password</Form.Label>
          <InputGroup>
            <Form.Control
              type={`${passwordType}`}
              placeholder="Enter Password"
              className="border-dark"
              
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
           <Button
              onClick={showPasswordHandler}
              variant=""
              style={{
                border: "1px solid black",
                backgroundColor: "transparent",
                color: "black",
                transition: "color 0.3s ease, background-color 0.3s ease",
              }}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </Button>
          </InputGroup>
        </Form.Group>

        <Button
          variant=""
          className="form-control lh-1 rounded-2  my-3 "style={{ backgroundColor: "rgb(68, 177, 49)" }}// Added class for button styling
          type="submit"
        >
          Login
        </Button>
      

      {loginReducer.loading ? (
        <Loader />
      ) : (
        <Row className="py-3">
          <Col>
            New Customer?{" "}
            <Link to="/register" className="register-link">
              Register
            </Link>
          </Col>
        </Row>
      )}
      </Form>
    </FormContainer>
  );
};

export default LoginPage;
