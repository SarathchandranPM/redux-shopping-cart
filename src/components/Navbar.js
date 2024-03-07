import { useSelector } from "react-redux";
import { CartIcon } from "../icons";

// To access the state variables we can use the useSelector hook and pass the store. If you log the store, you can see all the state variables in our application. This way we can access any state value we need.
const Navbar = () => {
  //   console.log(
  //     useSelector((store) => {
  //       console.log(store);
  //     })
  //   );

  // In the store we currently have only one reducer.
  const { amount } = useSelector((store) => store.cart);

  return (
    <nav>
      <div className="nav-center">
        <h3>ShopIt - E-commerce</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
