import 작명 from './data.js'
import {label, author} from './datasecond.js'

export default function Cart() {

    console.log(작명)
    console.log(label)
    console.log(author)

    return (
      <div>
        <h4 className="title">Cart</h4>
        <CartItem/>
        <CartItem/>
        <CartItem/>
        <CartItem/>
        <CartItem/>
      </div>
    )
  }

function CartItem(){
  return(
    <div className="cart-item">
      <p>상품명</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  )
}
  