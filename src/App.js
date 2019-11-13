import React, { useEffect, useState } from "react";
import "./App.css";
import Title from "./composants/Title";
import Hero from "./composants/Hero";
import axios from "axios";
import MenuContainer from "./composants/MenuContainer";

function App() {
  const formatNumber = value => {
    return Number.parseFloat(value).toFixed(2);
  };

  const [dataTitle, setDataTitle] = useState("");
  const [dataDescription, setDataDescription] = useState("");
  const [dataImage, setDataImage] = useState("");
  const [dataMenu, setDataMenu] = useState([]);
  const [cart, setCart] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const charges = formatNumber(2.5);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    readData();
  }, []);

  useEffect(() => {
    calculate();
  }, [cart]);

  const readData = async () => {
    const response = await axios.get("https://deliveroo-api.now.sh/menu");
    setDataTitle(response.data.restaurant.name);
    setDataDescription(response.data.restaurant.description);
    setDataImage(response.data.restaurant.picture);
    setDataMenu(response.data.menu);
  };

  const addToCart = menu => {
    const tempCart = [...cart];
    const newCart = { id: menu.id, name: menu.title, price: menu.price, quantity: 1 };
    // vérifie qu'on ne l'a pas déjà, si oui on augmente sa quantité
    if (tempCart.find(item => item.id === newCart.id)) {
      changeQuantity(newCart, 1);
    } else {
      tempCart.push(newCart);
      setCart(tempCart);
    }
  };

  const removeFromCart = cartItem => {
    const tempCart = [...cart];
    const index = tempCart.findIndex(item => item.id === cartItem.id);
    tempCart.splice(index, 1);
    setCart(tempCart);
  };

  const changeQuantity = (cartItem, delta) => {
    const tempCart = [...cart];
    const index = tempCart.findIndex(item => item.id === cartItem.id);
    tempCart[index].quantity += delta;
    if (tempCart[index].quantity > 0) {
      setCart(tempCart);
    } else {
      removeFromCart(cartItem);
    }
  };

  const calculate = () => {
    const sub = cart.reduce((sum, item) => sum + +item.price * item.quantity, 0);
    setSubTotal(formatNumber(sub));
    setTotal(formatNumber(sub + +charges));
  };

  const onClearAll = () => {
    setSubTotal(0);
    setTotal(0);
    setCart([]);
  };

  return (
    <div>
      <Title />
      <Hero title={dataTitle} description={dataDescription} image={dataImage} />
      <MenuContainer
        menu={dataMenu}
        onAddCart={addToCart}
        onChangeQuantity={changeQuantity}
        cart={cart}
        subTotal={subTotal}
        charges={charges}
        total={total}
        onClearAll={onClearAll}
      />
    </div>
  );
}

export default App;
