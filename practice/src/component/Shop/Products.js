import './Products.css'
import ProductItem from './ProductsItem';


const Products = (props)=>{
    return(
        <section className="products">
            <h2>Buy Your Favorite Products</h2>
            <ul>
                <ProductItem
                    title = 'Test'
                    price = {6}
                    description = 'This is a first product - amaizing!'
                />
            </ul>
        </section>
    )
}

export default Products;