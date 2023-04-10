import React from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../features/CartSlice";
import { useEffect } from "react";

export default function App() {
  const { totalQuantity } = useSelector((state) => state.allCart);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  });

  return (
    <MDBNavbar light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand>Shopping Cart</MDBNavbarBrand>
        <Link to="/">
          <span>All Products</span>
        </Link>
        <Link to="/cart">
          <MDBBtn color="dark">Cart({totalQuantity})</MDBBtn>
        </Link>
      </MDBContainer>
    </MDBNavbar>
  );
}
