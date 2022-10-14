import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import Register from "../register/Register";
import Galeria from "../galeria/Galeria";
import Usuario from "../usuario/Usuario";
import { userContext } from "../context/UserProvider";

const Rutas = () => {
  const { user } = useContext(userContext);

  console.log(user, "user Rutas")

  return (
    <>
      <Routes>
        {user ? (<Route path="/user"  element={<Usuario />} />) : (<Route path="/registro" element={<Register />} />)}
        <Route path="/" element={<Home />} />
        <Route path="/registro" element={<Register />} />
      </Routes>
    </>
  );
};

export default Rutas;
