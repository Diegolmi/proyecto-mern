import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { userContext } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const {loginUsuario} = useContext(userContext)

const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      loginUsuario(email, password);
      navigate("/user");

    } catch (error) {
      alert(error)
    }
  };


  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            maxLength="50"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button className="btn btn-success mt-2" type="submit"> Login </Button>
      </Form>
      <a href="/registro"> Registrate aqui</a>
    </>
  );
};

export default Login;
