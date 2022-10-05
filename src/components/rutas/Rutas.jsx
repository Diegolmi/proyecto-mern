import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import Login from "../login/Login";
import Register from "../register/Register";
import { userContext } from "../context/UserProvider";

const Rutas = () => {
  const { user } = useContext(userContext);

  console.log(user, "user Rutas")

  return (
    <>
      <Routes>
        {user !== undefined ? (
          <Route path="/"  element={<Home />} />
        ) : 
          <Route path="/login"  element={<Login />} />
        }
        {/* <Route path="/"  element={<Home />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
      </Routes>
    </>
  );
};

export default Rutas;
