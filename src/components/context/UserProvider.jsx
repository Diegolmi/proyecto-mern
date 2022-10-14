import React, { createContext, useState } from "react";

export const userContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const loginUsuario = (email, password) => {
    const userStorage = JSON.parse(localStorage.getItem("registroUser"));

    if (!userStorage) {
      return alert("Base de datos vacia");
    } else {
      const userLogin = userStorage.find(
        (user) => user.email === email && user.password === password
      );

      if (userLogin) {
        setUser(userLogin);
        return ;
      } else {
        return alert("Usuario no registrado");
      }
    }
  };

  const registroUsuario = (email, password) => {
    const userStorage = JSON.parse(localStorage.getItem("registroUser"));
    //traer datos del localstorage. y los asignamos a una variable

    let newUser;
    // asignamos una variable para guardar los datos del nuevo usuario
    if (userStorage) {
      newUser = [...userStorage, { email, password }];
      // si existe un usuario en el localstorage, agregamos el nuevo usuario
    } else {
      newUser = [{ email, password }];
    }

    localStorage.setItem("registroUser", JSON.stringify(newUser));

    return;
  };

  const logoutUsuario = () => {
    setUser(null);
    return alert("Usuario deslogeado");
  };


  return (
    <userContext.Provider value={{ user, loginUsuario, registroUsuario, logoutUsuario }}>
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;
