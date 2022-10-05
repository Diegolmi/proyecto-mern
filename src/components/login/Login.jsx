import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { userContext } from "../context/UserProvider";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const {loginUsuario} = useContext(userContext)


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginUsuario(email, password);
      window.location.href = "/";
    } catch (error) {
      console.log(error)
    }
  };


  return (
    <>
      <h1>Login</h1>
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
        <Button className="btn btn-success" type="submit" />
      </Form>
    </>
  );
};

export default Login;
