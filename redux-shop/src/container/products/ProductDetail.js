import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styles from "../../css/ProductDetail.module.scss";
import { addCartProduct, cartAdded } from "../../redux/actions/cartAction";
import { hideSelected } from "../../redux/actions/productAction";

export default function ProductDetail() {
  const dispatch = useDispatch();
  const selectedProduct = useSelector(
    (state) => state.selectedProduct.selectedProduct
  );
  const isCartAdded = useSelector((state) => state.cart.isCartAdded);

  let id = selectedProduct.id;

  /******************* 
    @Purpose : Add to Cart Button Handler
    @Parameter : {obj}
    @Author : DARSH
    ******************/
  const cartHandler = (cartProduct) => {
    if (isCartAdded[`${id}a`]) {
      return;
    }
    dispatch(addCartProduct(cartProduct));
    dispatch(cartAdded(id));
  };

  return (
    <div className={styles["flex-column"]}>
      <div className={styles.img}>
        <img src={selectedProduct.image} alt={selectedProduct.title} />
      </div>
      <div className={styles.other}>
        <h1>{selectedProduct.title}</h1>
        <p className="description">{selectedProduct.description}</p>
        &nbsp;&nbsp;&nbsp;
        <p>
          <strong>Category:</strong> {selectedProduct.category}
        </p>
        <h3 className="text-dark">Rs.{selectedProduct.price}/-</h3>
        <button
          className="btn btn-primary"
          disabled={isCartAdded[`${id}a`] ? true : false}
          onClick={() => {
            cartHandler({
              id: selectedProduct.id,
              img: selectedProduct.image,
              title: selectedProduct.title,
              price: selectedProduct.price,
              quantity: 1,
            });
          }}
        >
          {isCartAdded[`${id}a`] ? "Added" : "Add to Cart"}
        </button>
        &nbsp;
        <button
          className="btn btn-danger"
          onClick={() => dispatch(hideSelected())}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
