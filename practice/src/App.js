import {  useDispatch, useSelector } from 'react-redux';
import { Fragment, useEffect } from 'react';
import './App.css';
import CartHandler from './component/Cart/Cart';
import Layout from './component/Layout/Layout';
import Products from './component/Shop/Products';

import Notification from './component/UI/Notification'
import { fetchCartData, sendCartData } from './store/cart-actions';


let isInitial = true;

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const notification = useSelector(state => state.ui.notification);


  useEffect(()=>{
    dispatch(fetchCartData());
  },[dispatch])

  useEffect(()=>{
    if(isInitial){
      isInitial = false; 
      return;
    }    

    if(cart.changed){

      dispatch(sendCartData(cart));
    }

  },[cart, dispatch])

  return (
    <Fragment>
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message}/>}
      <Layout>
        {showCart && <CartHandler/>}
        <Products/>
      </Layout>
    </Fragment>
  );
}

export default App;
