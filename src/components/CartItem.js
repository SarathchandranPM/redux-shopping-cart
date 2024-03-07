import { useDispatch } from "react-redux";
import { removeItem, increase, decrease } from "../features/cart/cartSlice";

import { ChevronDown, ChevronUp } from "../icons";

const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button
          className="remove-btn"
          onClick={() => {
            dispatch(removeItem({ id }));
          }}
        >
          Remove
        </button>
      </div>

      <div>
        <button
          className="amount-btn"
          onClick={() => dispatch(increase({ id }))}
        >
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button
          className="amount-btn"
          onClick={() => {
            if (amount === 1) {
              // If the amount is already one, clicking the button make the amount 0, which is equal to removing the item entirely from cart.
              dispatch(removeItem({ id }));
              return;
            }
            dispatch(decrease({ id }));
          }}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};
export default CartItem;

/*
Into removeItem, increase and decrease, we are only passing id as the payload. You can obviously pass in more data here. In that case you can pass in the properties as object. Assume you have to pass id as well as name to, say decrease:

onClick={() => {
  dispatch(decrease({id, name}));
 }}

 And in the decrease reducer you can destrutre the action object to get the payload, which is again an object. You can access payload.id to access id and payload.name to access name:

decrease: (state, { payload }) => {
    const cartItem = state.cartItems.find((item) => item.id === payload.id);
    cartItem.amount = cartItem.amount - 1;
},
*/
