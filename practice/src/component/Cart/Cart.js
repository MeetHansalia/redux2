import { useSelector } from "react-redux";
import Card from "../UI/Card";
import './Cart.css'
import CartItem from "./CartItem";


const CartHandler = (props)=>{
    const cartItems = useSelector(state => state.cart.items);

    return(
        <Card className="cart" >
            <h2>Your Shoping Cart</h2>
            <ul>
                {cartItems.map((item) =>(
                    <CartItem
                        key={item.id}
                        item={{
                            id: item.id,
                            title:item.name, 
                            quantity: item.quantity, 
                            total: item.totalPrice, 
                            price: item.price}}
                    />
                ))}
            </ul>
        </Card>
    )
}


export default CartHandler;