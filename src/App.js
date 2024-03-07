import CartContainer from "./components/CartContainer";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";

import { useEffect } from "react";

import { calculateTotal } from "./features/cart/cartSlice";

import { useDispatch, useSelector } from "react-redux";

function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);

  const dispatch = useDispatch();

  // We're calling the dispatch inside a useEffect, because we want to invoke the calculateTotal function every time when a new item is added or removed from cartItems.

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
