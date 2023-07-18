import {  useDispatch, useSelector } from 'react-redux';
import { Fragment, useEffect } from 'react';
import './App.css';
import CartHandler from './component/Cart/Cart';
import Layout from './component/Layout/Layout';
import Products from './component/Shop/Products';
import { uiActions } from './store/ui-slice';
import Notification from './component/UI/Notification'


let isInitial = true;

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const notification = useSelector(state => state.ui.notification)

  useEffect(()=>{
    const sendCartData = async () =>{
      dispatch(uiActions.showNotification({
        status:'pending',
        title: 'Sending...',
        message: 'Sending Cart data!'
      }))
      const  response = await fetch('https://redux-1f4ae-default-rtdb.firebaseio.com/cart', 
      {
        method: 'PUT',
        body: JSON.stringify(cart),  
      });

      if(!response.ok){
        throw new Error('Sending cart data failed.')
      }
      
      dispatch(uiActions.showNotification({
        status:'success',
        title: 'Success...',
        message: 'Send Cart data successfully!'
      }))
    };

    if(isInitial){
      isInitial = false;
      return;
    }

    sendCartData().catch(error=>{
      dispatch(uiActions.showNotification({
        status:'error',
        title: 'Error...',
        message: 'Sending cart data failed!'
      }))
    })
    
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
