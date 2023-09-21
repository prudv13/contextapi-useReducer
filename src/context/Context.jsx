import React, { createContext } from 'react'

const Cart = createContext(null);

const Context = ({children}) => {
  return (
    <Cart.Provider>
    {children}
    </Cart.Provider>
  )
}

export default Context;