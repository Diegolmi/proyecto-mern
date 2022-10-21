import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import Register from "../register/Register";
import Galeria from "../galeria/Galeria";
import Usuario from "../usuario/Usuario";
import DetallesProductos from "../detallesProductos/DetallesProductos";
import { userContext } from "../context/UserProvider";
import NotFound from "../404/NotFound";

const Rutas = () => {
  const { user } = useContext(userContext);

  console.log(user, "user Rutas")

  return (
    <>
      <Routes>
        {user ? (<Route path="/user"  element={<Usuario />} />) : (<Route path="/registro" element={<Register />} />)}
        <Route path="/" element={<Home />}>
          <Route path="bienvenido" element={<Galeria />} />
        
        </Route>
        <Route path="/registro" element={<Register />} />
        <Route path="/detalle-producto/:pokemonId" element={<DetallesProductos />} />
        <Route path="*"  element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Rutas;
