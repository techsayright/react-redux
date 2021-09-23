import axios from "axios";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "./App.css";
import Cart from "./container/cart/Cart";
import Header from "./container/layout/Header";
import Hero from "./container/layout/Hero";
import ProductDetail from "./container/products/ProductDetail";
import { addCartFromFirebase } from "./redux/actions/cartAction";

let initial = true;

function App() {
  const isShowSelected = useSelector(
    (state) => state.selectedProduct.isShowSelected
  );
  const cartData = useSelector((state) => state.cart);
  const isShowCart = useSelector((state) => state.cart.isShowCart);
  const dispatch = useDispatch();

  /******************* 
    @Purpose : send cart data to firebase
    @Parameter : {}
    @Author : DARSH
    ******************/
  const sendCartData = useCallback(async () => {
    if (initial) {
      initial = false;
      return;
    }
    let cartDataa = {
      cartProducts: cartData.cartProducts,
      isCartAdded: cartData.isCartAdded,
      totalQuantity: cartData.totalQuantity,
    };
    await axios
      .put(
        "https://cart-products-d39f6-default-rtdb.firebaseio.com/cartData.json",
        cartDataa
      )
      .catch((err) => console.log(err));
  }, [cartData]);

  useEffect(() => {
    sendCartData();
  }, [sendCartData]);

  /******************* 
    @Purpose : fetch cart data from firebase
    @Parameter : {}
    @Author : DARSH
    ******************/
  const fetchCartData = useCallback(async () => {
    let res = await axios.get(
      "https://cart-products-d39f6-default-rtdb.firebaseio.com/cartData.json"
    );
    console.log(res.data);
    dispatch(addCartFromFirebase(res.data));
  }, [dispatch]);

  useEffect(() => {
    fetchCartData();
  }, [fetchCartData]);

  return (
    <div className="App">
      <header>
        <Header />
      </header>

      <section>
        {!isShowCart && !isShowSelected && <Hero />}
        {!isShowCart && isShowSelected && <ProductDetail />}
        {isShowCart && <Cart />}
      </section>

      <footer className="text-center my-7">
        <h1>Copyright &copy; Apni Dukan</h1>
      </footer>
    </div>
  );
}

export default App;
