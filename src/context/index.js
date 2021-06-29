
import { createContext, useState } from 'react'

const AplicationContext = createContext()

export function AplicationProvider({ children }) {
  const [products, setProducts] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false)


  return (
    <AplicationContext.Provider
      value={{
        products,
        setProducts,
        isModalVisible,
        setIsModalVisible
      }}
    >
      { children }
    </AplicationContext.Provider>
  )
}

export default AplicationContext;