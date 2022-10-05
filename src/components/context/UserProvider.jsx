import React, { createContext, useState } from 'react'

export const userContext = createContext()


const UserProvider = ({children}) => {

  const [user, setUser] = useState(null)
    

const loginUsuario = (email, password) => {
 
    setUser(email,password)

}

console.log(user, "user context")


return (

    <userContext.Provider value={{user, loginUsuario}}  >
        {children}
    </userContext.Provider>

  )
}

export default UserProvider