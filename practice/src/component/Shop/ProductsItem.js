import Card from '../UI/Card';
import './ProductItem.css'


const ProductItem = (props) =>{
    const {title, price, description}= props;

    return(
        <li className="items ">
            <Card>
                <header>
                    <h3>{title}</h3>
                    <div className="price">${price.toFixed(2)}</div>
                </header>
                <p>{description}</p>
                <div className="action">
                    <button>Add To Cart</button>
                </div>
            </Card>
        </li>
    )

}


export default ProductItem;