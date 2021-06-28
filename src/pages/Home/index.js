import { useContext, useEffect } from 'react'

import AplicationContext from '../../context/index'
import Data from '../../mocks/products.json'
import Card from '../../components/Card/index'
import './style.css'
import Filter from '../../components/Filter/index'
import Cart from '../../components/Cart/index'

function Home() {
  const { products, setProducts } = useContext(AplicationContext)

  useEffect(() => {
    setProducts(Data)
  }, [])

  return (
    <div className="homeBx">
      <header className="headerBx">
        <Cart />      
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