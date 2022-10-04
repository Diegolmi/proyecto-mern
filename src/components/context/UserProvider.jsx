import React, { createContext } from 'react'

export const userContext = createContext()


const UserProvider = ({children}) => {
    

const loginUsuario = (email, password) => {
    console.log(email, password)
}




  return (

    <userContext.Provider >
        {children}
    </userContext.Provider>

  )
}

export default UserProvider