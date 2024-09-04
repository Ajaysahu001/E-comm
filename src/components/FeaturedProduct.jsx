import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { addCart } from '../helpers/cartHelper';
import { addCartStart, getCartStart } from '../redux/actions/cart.action';
import { toast } from 'react-toastify';

export default function FeaturedProduct({ data }) {
    let currentUserId = localStorage.getItem('currentUserId')
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const carts = useSelector(state => state.cart.carts);

    const discountedPrice = () => {
        let dPrice = (data.discount / 100) * data.price;
        return data.price - dPrice;
    }

    const addToCart = () => {

        if (!currentUserId) {
            setTimeout(() => {
                navigate('/login');
            }, 1000)
        } else {
            let result = addCart(carts, data);
            dispatch(addCartStart(result))
            navigate('/cart')
            toast.success("Product added to cart")
        }
    }

    useEffect(() => {
        dispatch(getCartStart())
    }, [carts.subTotal])

    return (
        <>
            <div className="col-lg-3 col-md-4 col-sm-6 mix fastfood vegetables">
                <div className="featured__item">
                    <div className="featured__item__pic set-bg"
                        style={{ backgroundImage: `url(${data.image})` }}>
                        <ul className="featured__item__pic__hover">
                            <li><Link ><i className="fa fa-heart"></i></Link></li>
                            <li><a onClick={addToCart}><i className="fa fa-shopping-cart"></i></a></li>
                        </ul>
                    </div>
                    <div className="featured__item__text">
                        <h6><Link to={`/product-detail/${data.id}`}>{data.name}</Link></h6>
                        <h6 className="l-through">${data.price}</h6>
                        <h5>${discountedPrice()}</h5>
                    </div>
                </div>
            </div>
        </>
    )
}
