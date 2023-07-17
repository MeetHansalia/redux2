import Card from "../UI/Card";
import './Cart.css'
import CartItem from "./CartItem";


const CartHandler = (props)=>{
    return(
        <Card className="cart" >
            <h2>Your Shoping Cart</h2>
            <ul>
                <CartItem
                    item={{title:'Test Item', quantity:3, total:18, price:6}}
                />
            </ul>
        </Card>
    )
}


export default CartHandler;