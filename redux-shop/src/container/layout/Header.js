import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { cartShow } from "../../redux/actions/cartAction";

export default function Header() {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid">
          <h1 className="navbar-brand">Apni Shop</h1>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <h1 className="nav-link active" aria-current="page">
                  Home
                </h1>
              </li>
            </ul>
            <h1 className="d-flex">
              <button
                className="btn btn-outline-success btn-light mx-5"
                type="submit"
                onClick={() => {
                  dispatch(cartShow());
                }}
              >
                <h4>Checkout Your Order &nbsp; ({totalQuantity})</h4>
              </button>
            </h1>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}
