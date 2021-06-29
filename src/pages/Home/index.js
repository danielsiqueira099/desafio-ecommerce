import { useContext, useEffect, useCallback } from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import AplicationContext from '../../context/index'
import Data from '../../mocks/products.json'
import Card from '../../components/Card/index'
import './style.css'
import Filter from '../../components/Filter/index'
import Cart from '../../components/Cart/index'
import ModalCart from '../../components/Modal'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Home() {
  const { products, setProducts, setIsModalVisible, isModalVisible, isSnackVisible, setIsSnackVisible } = useContext(AplicationContext)

  const showModal = useCallback(() => {
    setIsModalVisible(true);
  }, [])

  useEffect(() => {
    setProducts(Data)
  }, [setProducts])

  const handleClose = useCallback((event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setIsSnackVisible(false);
  }, [setIsSnackVisible])

  return (
    <div className="homeBx">
      <Snackbar open={isSnackVisible} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Adicionado ao carrinho!
        </Alert>
      </Snackbar>

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