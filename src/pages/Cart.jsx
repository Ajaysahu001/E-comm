import React from 'react'
import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCartStart } from '../redux/actions/cart.action';

export default function Cart() {
  const carts = useSelector(state => state.cart.carts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartStart())
  }, [carts.subTotal])
  return (
    <>

      {/* <!-- Breadcrumb Section Begin --> */}
      <section className="breadcrumb-section set-bg"
        style={{ backgroundImage: "url(./assets/img/breadcrumb.jpg)" }}
      // data-setbg="./assets/img/breadcrumb.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="breadcrumb__text">
                <h2>Shopping Cart</h2>
                <div className="breadcrumb__option">
                  <Link to="/">Home</Link>
                  <span>Shopping Cart</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Breadcrumb Section End --> */}

      {/* <!-- Shoping Cart Section Begin --> */}
      <section className="shoping-cart spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="shoping__cart__table">
                <table>
                  <thead>
                    <tr>
                      <th className="shoping__product">Products</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>

                    {
                      carts.items.length > 0 && carts.items.map((item, index) => (
                        <CartItem item={item} key={index}/>
                      ))
                    }

                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="shoping__cart__btns">
                <Link to="/shop" className="primary-btn cart-btn">CONTINUE SHOPPING</Link>
                {/* <Link to="#" className="primary-btn cart-btn cart-btn-right"><span className="icon_loading"></span>
                  Upadate Cart</Link> */}
              </div>
            </div>
            <div className="col-lg-6">
            </div>
            <div className="col-lg-6">
              <div className="shoping__checkout">
                <h5>Cart Total</h5>
                <ul>
                  <li>Subtotal <span>${carts.subTotal}</span></li>
                  <li>Total <span>${carts.grandTotal}</span></li>
                </ul>
                <Link to="/checkout" className="primary-btn">PROCEED TO CHECKOUT</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Shoping Cart Section End --> */}
    </>
  )
}
