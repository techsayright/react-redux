import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "./App.css";
import Cart from "./container/cart/Cart";
import Header from "./container/layout/Header";
import Hero from "./container/layout/Hero";
import ProductDetail from "./container/products/ProductDetail";
import {
  replaceCartFromFirebase,
  replaceCartToFirebase,
} from "./redux/actions/cartAction";

let initial = true,
cartUpdate = true;

function App() {
  const isShowSelected = useSelector(
    (state) => state.selectedProduct.isShowSelected
  );
  const {cartProducts, isCartAdded , totalQuantity} = useSelector((state) => state.cart);
  const isShowCart = useSelector((state) => state.cart.isShowCart);
  const dispatch = useDispatch();

  /******************* 
    @Purpose : send(updating) cart data to firebase (thunk)
    @Parameter : {}
    @Author : DARSH
    ******************/
  useEffect(() => {
    if (initial) {
      initial = false;
      return;
    }

    if(!cartUpdate){
      cartUpdate= true;
      return
    }
    
    let cartDataa = {
      cartProducts: cartProducts,
      isCartAdded: isCartAdded,
      totalQuantity: totalQuantity,
    };
    dispatch(replaceCartToFirebase(cartDataa));
  }, [dispatch, cartProducts,isCartAdded, totalQuantity ]);

  /******************* 
    @Purpose : fetch cart data from firebase (thunk)
    @Parameter : {}
    @Author : DARSH
    ******************/
  useEffect(() => {
    cartUpdate= false;
    dispatch(replaceCartFromFirebase());
  }, [dispatch]);

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
