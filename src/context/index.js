
import { createContext, useState } from 'react'

const AplicationContext = createContext()

export function AplicationProvider({ children }) {
  const [products, setProducts] = useState([])


  return (
    <AplicationContext.Provider
      value={{
        products,
        setProducts
      }}
    >
      { children }
    </AplicationContext.Provider>
  )
}

export default AplicationContext;