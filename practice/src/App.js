
import './App.css';
import CartHandler from './component/Cart/Cart';
import Layout from './component/Layout/Layout';
import Products from './component/Shop/Products';

function App() {
  return (
    <Layout>
      <CartHandler></CartHandler>
      <Products/>
    </Layout>
  );
}

export default App;
