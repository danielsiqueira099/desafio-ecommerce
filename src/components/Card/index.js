import './styles.css'

function Card({ item }) {
  return (
    <div className="card">
      <div className="imgBx">
        <img src={item.image} />
      </div>
      <div className="contentBx">
        <h3>{item.name}</h3>
        <h2 className="price">R${item.price}</h2>
        <button className="buy">Comprar</button>
      </div>
    </div>
  )
}

export default Card