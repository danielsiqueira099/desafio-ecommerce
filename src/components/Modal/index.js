import React, { useContext, useCallback } from 'react';
import List from '@material-ui/core/List';

import AplicationContext from '../../context';
import './styles.css';
import ListIcon from '../ListItem/index'

const ModalCart = ({ title }) => {
  const { setIsModalVisible, productsCar, setSnackMessage, setIsSnackVisible } = useContext(AplicationContext)

  const handleCancel = useCallback(() => {
    setIsModalVisible(false);
  }, [setIsModalVisible])
  
  const handleConfirm = useCallback(() => {
    setSnackMessage('Compra realizada com sucesso!')
    setIsSnackVisible(true)
    setIsModalVisible(false);
  }, [setIsModalVisible, setSnackMessage, setIsSnackVisible])

  const calculatePrice = useCallback(() => {
    let price = 0
    let productPrice = 0

    productsCar.forEach(item => {
      price = price + item.price + 10
      productPrice += item.price
    })

    if (productPrice > 250) return `Preço total sem frete: R$ ${productPrice}` 

    return `Preço total com frete: R$ ${price}`
  }, [])

  return (
      <div className="modalBx">
        <div className="contentModal">
          <h2 className="title">{title}</h2>
          <List className="listBx">
            {productsCar.map(item => <ListIcon item={item} />)}
          </List>
          {
            productsCar.length > 0 && 
            <p>{calculatePrice()}</p>
          }
          <div className="buttonBx">
            <button 
              onClick={handleCancel} 
              className="btnCancelar"
            >
              Cancelar
            </button>
            <button onClick={handleConfirm} className="btnConfirmar">Confirmar Compra</button>
          </div>
        </div>
      </div>
  );
};

export default ModalCart;