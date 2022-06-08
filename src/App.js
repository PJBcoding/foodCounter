import React, { useState } from 'react';
import Meals from './Components/Meals/Meals'
import Header from './Components/Layout/Header';
import Cart from './Components/Cart/Cart'
import './App.css';
import CartProvider from './store/CartProvider';

function App() {


  /* const [cartIsShown, setcartIsShown] = useState(false);
  const [btnclsanim, setbtnclsanim] = useState(false)

  const showCartHandler = () => {
    setcartIsShown(true);
    setbtnclsanim(false);
  }
  const hideCartHandler = () => {
    setcartIsShown(false);
    setbtnclsanim(true)

  } */
  return (

    <CartProvider>

      {/*  {cartIsShown && < Cart onClose={hideCartHandler} anim={btnclsanim} />}
      {!cartIsShown && < Cart onClose={hideCartHandler} anim={btnclsanim} />}
      <Header onShowCart={showCartHandler} /> */}
      <Header />
      <main>
        <Meals />
      </main>

    </ CartProvider>

  );
}

export default App;
