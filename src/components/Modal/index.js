import React, { useContext, useCallback } from 'react';

import AplicationContext from '../../context';
import './styles.css';

const ModalCart = ({ title }) => {
  const { setIsModalVisible } = useContext(AplicationContext)

  const handleCancel = useCallback(() => {
    setIsModalVisible(false);
  }, [setIsModalVisible])

  return (
      <div className="modalBx">
        <div className="contentModal">
          <h2 className="title">{title}</h2>
          <div className="buttonBx">
            <button 
              onClick={handleCancel} 
              className="btnCancelar"
            >
              Cancelar
            </button>
            <button className="btnConfirmar">Confirmar Compra</button>
          </div>
        </div>
      </div>
  );
};

export default ModalCart;