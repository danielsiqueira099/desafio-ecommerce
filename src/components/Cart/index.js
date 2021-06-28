import CartImg from '../../assets/carts.png'
import './style.css'

function Cart() {
  return (
    <view className="cartBx">
      <img 
        src={CartImg} 
        width="25" 
        height="25"
      />
    </view>
  )
}

export default Cart