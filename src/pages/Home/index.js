import Data from '../../mocks/products.json'
import Card from '../../components/Card/index'
import './style.css'
import Filter from '../../components/Filter/index'
import Cart from '../../components/Cart/index'

function Home() {
  return (
    <div className="homeBx">
      <header className="headerBx">
          <Cart />      
      </header>

      <main className="mainBx">
        <Filter />
        <div className="cardBx">
          {Data.map(item => <Card item={item} />)}
        </div>       
      </main>
    </div>
  );
}

export default Home;