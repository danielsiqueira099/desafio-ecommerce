import { useContext, useEffect, useState, useCallback } from 'react'

import AplicationContext from '../../context/index'
import Data from '../../mocks/products.json'
import Card from '../../components/Card/index'
import './style.css'
import Filter from '../../components/Filter/index'
import Cart from '../../components/Cart/index'
import ModalCart from '../../components/Modal'

function Home() {
  const { products, setProducts, setIsModalVisible, isModalVisible } = useContext(AplicationContext)

  const showModal = useCallback(() => {
    setIsModalVisible(true);
  }, [])

  const handleOk = useCallback(() => {
    setIsModalVisible(false);
  }, [])

  useEffect(() => {
    setProducts(Data)
  }, [setProducts])

  return (
    <div className="homeBx">
      {isModalVisible && 
        <ModalCart
          title="Carrinho"
        />
      }

      <header className="headerBx">
        <button onClick={showModal}>
          <Cart />
        </button>      
      </header>

      <main className="mainBx">
        <Filter />
        <div className="cardBx">
          {products.map(item => <Card item={item} />)}
        </div>       
      </main>
    </div>
  );
}

export default Home;