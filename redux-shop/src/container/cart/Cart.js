import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styles from "../../css/Cart.module.scss";
import {
  addCartProduct,
  cartShow,
  removeCartProduct,
} from "../../redux/actions/cartAction";

export default function Cart() {
  const cartProducts = useSelector((state) => state.cart.cartProducts);
  const dispatch = useDispatch();

  let mapProducts = null;
  if (cartProducts.length) {
    mapProducts = cartProducts.map((cart, index) => {
      return (
        <div className={styles.Cart} key={index}>
          <div className={styles.img}>
            <img src={cart.img} alt={cart.title} />
          </div>
          <div className={styles.CartDetails}>
            <h1>
              Item Name:
              {cart.title.length > 27
                ? `${cart.title.slice(0, 27)}...`
                : cart.title}
            </h1>
            <span>Price per Item: Rs.{cart.price}/-</span>
            <h3>Total Price: Rs.{cart.price * cart.quantity}/-</h3>
            <p>Quantity:{cart.quantity}</p>
          </div>
          <div className={styles.btn}>
            <button
              className="btn btn-success"
              onClick={() => {
                dispatch(addCartProduct({ ...cart, quantity: 1 }));
              }}
            >
              +
            </button>{" "}
            &nbsp; &nbsp;
            <button
              className="btn btn-primary"
              onClick={() => {
                dispatch(removeCartProduct(cart.id));
              }}
            >
              -
            </button>
          </div>
        </div>
      );
    });
  } else {
    mapProducts = (
      <>
        <h1>There's no Added any item into a Cart</h1>
        <h2>Kindly add items into Cart</h2>
      </>
    );
  }

  return (
    <div className={styles.main}>
      {mapProducts}
      <button
        className="btn btn-warning btn-lg my-4"
        onClick={() => {
          dispatch(cartShow());
        }}
      >
        Cancel
      </button>
    </div>
  );
}
