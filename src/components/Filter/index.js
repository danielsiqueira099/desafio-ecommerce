import Star from '../../assets/favourite.png'
import Money from '../../assets/profits.png'
import AToZ from '../../assets/ascending.png'
import './styles.css'

function Filter() {
  return (
    <div className="filterBx">
      <button className="Button">
        <img 
          src={Star} 
          width="25" 
          height="25" 
        /> 
        
      </button>
      <button className="Button">
        <img 
          src={Money} 
          width="25" 
          height="25"
        />

      </button>
      <button className="Button">
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