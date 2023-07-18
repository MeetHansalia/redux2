import { useDispatch } from 'react-redux';
import Card from '../UI/Card';
import './ProductItem.css'
import { cartActions } from '../../store/cart-slice';

const ProductItem = (props) =>{
    const {title, price, description, id}= props;
    const dispatch = useDispatch()
    const addToCartHandler = () =>{
        dispatch(cartActions.addItemToCart({
            id,
            title,
            price
        })) 
    };

    return(
        <li className="items ">
            <Card>
                <header>
                    <h3>{title}</h3>
                    <div className="price">${price.toFixed(2)}</div>
                </header>
                <p>{description}</p>
                <div className="action">
                    <button onClick={addToCartHandler}>Add To Cart</button>
                </div>
            </Card>
        </li>
    )

}


export default ProductItem;