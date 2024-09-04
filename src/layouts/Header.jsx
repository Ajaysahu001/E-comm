import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

export default function Header() {
  let [curUserId, setCurUserId] = useState('');
  const carts = useSelector(state => state.cart.carts);


  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('currentUserId');
    toast.success('User signed Out successfully');
    setTimeout(() => {
      navigate("/");
      //relode a page
      window.location.reload(false)
    }, 1000)
  }

  useEffect(() => {
    setTimeout(() => {
      let currentUserId = localStorage.getItem('currentUserId')

      if (currentUserId) {
        setCurUserId(currentUserId);
      }
    })
  }, [curUserId])
  return (
    <>

      {/* <!-- Page Preloder --> */}
      {/* <div id="preloder">
        <div className="loader"></div>
      </div> */}






      {/* <!-- Humberger Begin --> */}
      <div className="humberger__menu__overlay"></div>
      <div className="humberger__menu__wrapper">
        <div className="humberger__menu__logo">
          <a href="#"><img src="./assets/img/logo.png" alt="" /></a>
        </div>
        <div className="humberger__menu__cart">
          <ul>
            <li><a href="#"><i className="fa fa-heart"></i> <span>1</span></a></li>
            <li><a href="#"><i className="fa fa-shopping-bag"></i> <span>3</span></a></li>
          </ul>
          <div className="header__cart__price">item: <span>$150.00</span></div>
        </div>
        <div className="humberger__menu__widget">
          <div className="header__top__right__language">
            <img src="./assets/img/language.png" alt="" />
            <div>English</div>
            <span className="arrow_carrot-down"></span>
            <ul>
              <li><a href="#">Spanis</a></li>
              <li><a href="#">English</a></li>
            </ul>
          </div>
          <div className="header__top__right__auth">
            <a href="#"><i className="fa fa-user"></i> Login</a>
          </div>
        </div>
        <nav className="humberger__menu__nav mobile-menu">
          <ul>
            <li className="active"><a href="./index.html">Home</a></li>
            <li><a href="./shop-grid.html">Shop</a></li>
            <li><a href="#">Pages</a>
              <ul className="header__menu__dropdown">
                <li><a href="./shop-details.html">Shop Details</a></li>
                <li><a href="./shoping-cart.html">Shoping Cart</a></li>
                <li><a href="./checkout.html">Check Out</a></li>
                <li><a href="./blog-details.html">Blog Details</a></li>
              </ul>
            </li>
            <li><a href="./blog.html">Blog</a></li>
            <li><a href="./contact.html">Contact</a></li>
          </ul>
        </nav>
        <div id="mobile-menu-wrap"></div>
        <div className="header__top__right__social">
          <a href="#"><i className="fa fa-facebook"></i></a>
          <a href="#"><i className="fa fa-twitter"></i></a>
          <a href="#"><i className="fa fa-linkedin"></i></a>
          <a href="#"><i className="fa fa-pinterest-p"></i></a>
        </div>
        <div className="humberger__menu__contact">
          <ul>
            <li><i className="fa fa-envelope"></i> hello@colorlib.com</li>
            <li>Free Shipping for all Order of $99</li>
          </ul>
        </div>
      </div>
      {/* <!-- Humberger End --> */}






      {/* <!-- Header Section Begin --> */}
      <header className="header">
        <div className="header__top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="header__top__left">
                  <ul>
                    <li><i className="fa fa-envelope"></i> hello@colorlib.com</li>
                    <li>Free Shipping for all Order of $99</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="header__top__right">
                  <div className="header__top__right__social">
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-linkedin"></i></a>
                    <a href="#"><i className="fa fa-pinterest-p"></i></a>
                  </div>

                  {
                    curUserId == '' ?
                      <>
                        <div className="header__top__right__auth">
                          <Link to="/login"><i className="fa fa-user"></i> Login</Link>
                        </div>
                        <div className="header__top__right__auth mx-2">
                          <Link to="/register"><i className="fa fa-user"></i> Register</Link>
                        </div>
                      </>
                      :
                      <>
                        <div className="header__top__right__auth">
                          <Link className="fa fa-user" onClick={logout}>Logout</Link>
                        </div>
                      </>
                  }

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="header__logo">
                <Link to="/"><img src="assets/img/logo.png" alt="" /></Link>
              </div>
            </div>
            <div className="col-lg-6">
              <nav className="header__menu">
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/shop">Shop</Link></li>
                  <li><a href="#">Pages</a>
                    <ul className="header__menu__dropdown">
                      <li><a href="./shop-details.html">Shop Details</a></li>
                      <li><Link to="/cart">Shoping Cart</Link></li>
                      <li><a href="./checkout.html">Check Out</a></li>
                      <li><a href="./blog-details.html">Blog Details</a></li>
                    </ul>
                  </li>
                  <li><Link to="/blog">Blog</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                  <li><Link to="/admin/profile">Profile</Link></li>

                </ul>
              </nav>
            </div>
            <div className="col-lg-3">
              <div className="header__cart">
                <ul>
                  <li><Link to="#"><i className="fa fa-heart"></i> <span>1</span></Link></li>
                  <li>
                    <Link to="/cart"><i className="fa fa-shopping-bag"></i>
                    {
                      carts.items.length > 0 && <span>{carts.items.length}</span>
                    }
                     
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="humberger__open">
            <i className="fa fa-bars"></i>
          </div>
        </div>
      </header>
      {/* <!-- Header Section End --> */}


      {/* <!-- Hero Section Begin --> */}
      {/* <section className="hero hero-normal">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="hero__categories">
                <div className="hero__categories__all">
                  <i className="fa fa-bars"></i>
                  <span>All departments</span>
                </div>
                <ul>
                  <li><a href="#">Fresh Meat</a></li>
                  <li><a href="#">Vegetables</a></li>
                  <li><a href="#">Fruit & Nut Gifts</a></li>
                  <li><a href="#">Fresh Berries</a></li>
                  <li><a href="#">Ocean Foods</a></li>
                  <li><a href="#">Butter & Eggs</a></li>
                  <li><a href="#">Fastfood</a></li>
                  <li><a href="#">Fresh Onion</a></li>
                  <li><a href="#">Papayaya & Crisps</a></li>
                  <li><a href="#">Oatmeal</a></li>
                  <li><a href="#">Fresh Bananas</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="hero__search">
                <div className="hero__search__form">
                  <form action="#">
                    <div className="hero__search__categories">
                      All Categories
                      <span className="arrow_carrot-down"></span>
                    </div>
                    <input type="text" placeholder="What do yo u need?" />
                    <button type="submit" className="site-btn">SEARCH</button>
                  </form>
                </div>
                <div className="hero__search__phone">
                  <div className="hero__search__phone__icon">
                    <i className="fa fa-phone"></i>
                  </div>
                  <div className="hero__search__phone__text">
                    <h5>+65 11.188.888</h5>
                    <span>support 24/7 time</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <!-- Hero Section End --> */}
    </>
  )
}
