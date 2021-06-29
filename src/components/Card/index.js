import { useCallback, useContext } from 'react'

import AplicationContext from '../../context'
import './styles.css'

function Card({ item }) {
  const { setProductsCar, setIsSnackVisible, setSnackMessage } = useContext(AplicationContext)

  const handleBuy = useCallback(() => {
    setProductsCar(prev => [...prev, item])
  }, [item, setProductsCar])

  return (
    <div className="card">
      <div className="imgBx">
        <img src={item.image} />
      </div>
      <div className="contentBx">
        <h3>{item.name}</h3>
        <h2 className="price">R${item.price}</h2>
        <button onClick={() => {
          setSnackMessage('Produto adicionado ao carrinho!')
          setIsSnackVisible(true)
          handleBuy()
        }} className="buy">Comprar</button>
      </div>
    </div>
  )
}

export default Card