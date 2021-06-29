
import { createContext, useState } from 'react'

const AplicationContext = createContext()

export function AplicationProvider({ children }) {
  const [products, setProducts] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [productsCar, setProductsCar] = useState([])
  const [isSnackVisible, setIsSnackVisible] = useState(false)
  const [snackMessage, setSnackMessage] = useState(false)


  return (
    <AplicationContext.Provider
      value={{
        products,
        setProducts,
        isModalVisible,
        setIsModalVisible,
        productsCar,
        setProductsCar,
        isSnackVisible,
        setIsSnackVisible,
        snackMessage,
        setSnackMessage
      }}
    >
      { children }
    </AplicationContext.Provider>
  )
}

export default AplicationContext;