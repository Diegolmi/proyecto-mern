import React, {useState, useContext} from "react";
import { Form, Button } from "react-bootstrap";
import { userContext } from "../context/UserProvider";
import "./styleRegister.css";
import { useNavigate } from "react-router-dom";

const Register = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const {registroUsuario} = useContext(userContext)

  const navigate = useNavigate()


const handleSubmit =  (e) => {
  e.preventDefault();
  registroUsuario(email, password);
  navigate("/home")  
};



  return (
    <>
    <h1>Registro</h1>
    <Form className="formulario" onSubmit={handleSubmit}>
     
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
      <Button className="btn btn-success mt-5" type="submit"> Registrate </Button>
    </Form>
    </>
  );
};

export default Register;
