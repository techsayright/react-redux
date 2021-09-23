import React, { useCallback, useEffect } from "react";
import style from "../../css/Hero.module.scss";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  getSelected,
  isShowSelected,
} from "../../redux/actions/productAction";

export default function Hero() {
  const dispatch = useDispatch();
  const productsData = useSelector((state) => state.allProducts.products);

  /******************* 
    @Purpose : initial fetch products from fakestoreapi
    @Parameter : {}
    @Author : DARSH
    ******************/
  const fetchProducts = useCallback(async () => {
    const res = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log(err);
      });
    console.log(res.data);
    dispatch(getProducts(res.data));
  }, [dispatch]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  /******************* 
    @Purpose : send selected product data to redux store
    @Parameter : {}
    @Author : DARSH
    ******************/
  const selectHandler = (products) => {
    dispatch(getSelected(products));
    dispatch(isShowSelected());
  };

  const mapData = productsData.map((products) => {
    return (
      <div
        className="card"
        style={{ width: "18rem", margin: "2rem" }}
        key={products.id}
        onClick={() => {
          selectHandler(products);
        }}
      >
        <img
          src={products.image}
          className="card-img-top"
          alt={products.title}
        />
        <div className="card-body">
          <h5 className="card-title">{products.title}</h5>
          <h4>Rs.{products.price}/-</h4>
        </div>
      </div>
    );
  });

  return <div className={style.container}>{mapData}</div>;
}
