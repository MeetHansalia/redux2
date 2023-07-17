import './Products.css'
import ProductItem from './ProductsItem';

const DUMMY_PRODUCT = [
    { id: 'p1',
      price: 6 , 
      title: 'my first book',
      description:'the first book i ever wrote',
    },
    { id: 'p2',
      price: 5 , 
      title: 'my second book',
      description:'the second book i wrote',
    },
    { id: 'p3',
      price: 4, 
      title: 'my third book',
      description:'the third book i wrote',
    },
]


const Products = (props)=>{
    return(
        <section className="products">
            <h2>Buy Your Favorite Products</h2>
            <ul>
                {DUMMY_PRODUCT.map((product) =>(
                    <ProductItem
                        key= {product.id}
                        id = {product.id}
                        title = {product.title}
                        price = {product.price}
                        description = {product.description}
                    />
                ))}
            </ul>
        </section>
    )
}

export default Products;