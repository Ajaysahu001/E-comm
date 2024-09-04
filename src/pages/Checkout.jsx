import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { getUserStart } from '../redux/actions/user.action';
import { placeOrderStart } from '../redux/actions/order.action';

let initialState = {
  firstName: '',
  lastName: '',
  country: '',
  add1: '',
  add2: '',
  city: '',
  state: '',
  zip: '',
  number: '',
  email: '',
}

export default function Checkout() {
  const carts = useSelector(state => state.cart.carts);
  let users = useSelector(state => state.user.users);

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [formData, setFormData] = useState(initialState);

  let { firstName, lastName, country, add1, add2, city, state, zip, number, email } = formData;

  useEffect(() => {
    dispatch(getUserStart());
  }, [carts.items.length])

  const inputChange = (event) => {
    setFormData((prevProps) => ({
      ...prevProps,
      [event.target.name]: event.target.value
    }))
  }

  const submit = (event) => {
    event.preventDefault()
    let currentUserId = localStorage.getItem('currentUserId')

    carts.customer = users.find(user => user.uid === currentUserId)

    let checkOutObject = {
      billingAddress: formData,
      cart: carts
    }

    dispatch(placeOrderStart(checkOutObject))

    setTimeout(() => {
      navigate('/thank-you')
    }, 2000)
  }

  return (
    <>

      {/* <!-- Breadcrumb Section Begin --> */}
      <section className="breadcrumb-section set-bg"
        style={{ backgroundImage: "url(./assets/img/breadcrumb.jpg)" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="breadcrumb__text">
                <h2>Checkout</h2>
                <div className="breadcrumb__option">
                  <Link to="/">Home</Link>
                  <span>Checkout</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Breadcrumb Section End --> */}

      {/* <!-- Checkout Section Begin --> */}
      <section className="checkout spad">
        <div className="container">
          <div className="checkout__form">
            <h4>Billing Details</h4>
            <form onSubmit={() => { }}>
              <div className="row">
                <div className="col-lg-8 col-md-6">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="checkout__input">
                        <p>Fist Name<span>*</span></p>
                        <input
                          type="text"
                          name="firstName"
                          value={firstName}
                          onChange={inputChange} />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="checkout__input">
                        <p>Last Name<span>*</span></p>
                        <input
                          type="text"
                          name="lastName"
                          value={lastName}
                          onChange={inputChange} />
                      </div>
                    </div>
                  </div>
                  <div className="checkout__input">
                    <p>Country<span>*</span></p>
                    <input
                      type="text"
                      name="country"
                      value={country}
                      onChange={inputChange} />
                  </div>
                  <div className="checkout__input">
                    <p>Address<span>*</span></p>
                    <input
                      type="text"
                      placeholder="Street Address"
                      className="checkout__input__add"
                      name="add1"
                      value={add1}
                      onChange={inputChange} />
                    <input
                      type="text"
                      placeholder="Apartment, suite, unite ect (optinal)"
                      name="add2"
                      value={add2}
                      onChange={inputChange} />
                  </div>
                  <div className="checkout__input">
                    <p>City<span>*</span></p>
                    <input
                      type="text"
                      name="city"
                      value={city}
                      onChange={inputChange} />
                  </div>
                  <div className="checkout__input">
                    <p>State<span>*</span></p>
                    <input
                      type="text"
                      name="state"
                      value={state}
                      onChange={inputChange} />
                  </div>
                  <div className="checkout__input">
                    <p>Postcode<span>*</span></p>
                    <input
                      type="text"
                      name="zip"
                      value={zip}
                      onChange={inputChange} />
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="checkout__input">
                        <p>Phone<span>*</span></p>
                        <input
                          type="text"
                          name="number"
                          value={number}
                          onChange={inputChange} />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="checkout__input">
                        <p>Email<span>*</span></p>
                        <input
                          type="text"
                          name='email'
                          value={email}
                          onChange={inputChange} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="checkout__order">
                    <h4>Your Order</h4>
                    <div className="checkout__order__products">Products <span>Total</span></div>
                    <ul>
                      {
                        carts.items.length > 0 && carts.items.map((product, i) => (
                          <li key={i}>{product.name}  __x{product.quantity}
                            <span>${(product.price - ((product.discount / 100) * product.price)) * product.quantity}</span>
                          </li>
                        ))
                      }
                    </ul>
                    <div className="checkout__order__subtotal">Subtotal <span>${carts.subTotal}</span></div>
                    <div className="checkout__order__total">Total <span>${carts.grandTotal}</span></div>
                    <button type="submit" className="site-btn" onClick={submit}>PLACE ORDER</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* <!-- Checkout Section End --> */}
    </>
  )
}
