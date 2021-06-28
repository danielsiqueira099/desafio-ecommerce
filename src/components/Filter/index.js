import { useContext, useCallback } from 'react'

import AplicationContext from '../../context/index'
import Star from '../../assets/favourite.png'
import Money from '../../assets/profits.png'
import AToZ from '../../assets/ascending.png'
import './styles.css'

function Filter() {
  const { products, setProducts } = useContext(AplicationContext)

  //tratamento para ordenar a lista de produtos em ordem alfábetica
  const treatmentAToZ = useCallback(() => {
    const newProducts = products.sort((item1, item2) => (item1.name > item2.name) ? 1 : ((item2.name > item1.name) ? -1 : 0))
   
    setProducts([...newProducts])
  }, [products])

  //tratamento para ordenar a lista de produtos dos mais populares aos menos populares
  const treatmentStar = useCallback(() => {
    const newProducts = products.sort((item1, item2) => (item2.score > item1.score) ? 1 : ((item1.score > item2.score) ? -1 : 0))
   
    setProducts([...newProducts])
  }, [products])

  //tratamento para ordenar a lista de produtos em ordem de valor do menor para o maior
  const treatmentPrice = useCallback(() => {
    const newProducts = products.sort((item1, item2) => (item1.price > item2.price) ? 1 : ((item2.price > item1.price) ? -1 : 0))
   
    setProducts([...newProducts])
  }, [products])

  return (
    <div className="filterBx">
      <button className="Button" onClick={treatmentStar}>
        <img 
          src={Star} 
          width="25" 
          height="25" 
        /> 
        
      </button>
      <button className="Button" onClick={treatmentPrice}>
        <img 
          src={Money} 
          width="25" 
          height="25"
        />

      </button>
      <button className="Button" onClick={treatmentAToZ}>
        <img 
          src={AToZ} 
          width="25"
          height="25" 
        />

      </button>
    </div>
  )
}

export default Filter;