import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
const changeTheme = createContext()

function Context({children}) {
    const[ligDar,setLigDar]=useState(true)
  return (
    <changeTheme.Provider value={{ligDar,setLigDar}}>
        {children}
    </changeTheme.Provider>
  )
}

export default Context
 export {changeTheme}