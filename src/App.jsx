import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './components/navbar-components/Navbar';
import LoginContainer from './containers/LoginContainer';
import RegisterContainer from './containers/RegisterContainer';
import WishlistListContainer from './containers/WishlistListContainer';
import WishlistProductListContainer from './containers/WishlistProductListContainer';
import Product from './components/product-components/Product';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar />
        <LoginContainer />
        {/* <RegisterContainer /> */}
        {/* <WishlistProductListContainer /> */}
        {/* <Product /> */}
        <h1>This is a h1 tag</h1>
      </div>
    </>
  )
};

export default App;
