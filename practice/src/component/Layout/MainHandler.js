
import CartButton from '../Cart/CartButton';
import './MainHandler.css'


const MainHandler = (props)=>{
    return(
        <header className="header">
            <h1>Super Mart</h1>
            <nav>
                <ul>
                    <li>
                        <CartButton/>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHandler;