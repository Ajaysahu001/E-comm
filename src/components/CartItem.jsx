import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../helpers/cartHelper';
import { addCartStart } from '../redux/actions/cart.action';
import { Link } from 'react-router-dom';

export default function CartItem({ item }) {
    const carts = useSelector(state => state.cart.carts);

    const dispatch = useDispatch()

    let [quantity, setQuantity] = useState(+(item.quantity));

    const inputChange = (event) => {
        setQuantity(+(event.target.value))

        let result = addCart(carts, item, true, +(event.target.value))

        dispatch(addCartStart(result))
    }

    const increment = () => {
        setQuantity(quantity + 1)

        let result = addCart(carts, item, true, quantity + 1)

        dispatch(addCartStart(result))
    }

    const decrement = () => {
        setQuantity(quantity - 1)

        let result = addCart(carts, item, true, quantity - 1)

        dispatch(addCartStart(result))
    }

    const remove = () => {
        setQuantity(quantity = 0)

        let result = addCart(carts, item, true, quantity = 0)

        dispatch(addCartStart(result))
    }
    return (
        <tr>
            <td className="shoping__cart__item">
                <img src={item.image} alt="" />
                <h5>{item.name}</h5>
            </td>
            <td className="shoping__cart__price">
                ${item.price - ((item.discount / 100) * item.price)}
            </td>
            <td className="shoping__cart__quantity">
                <div className="pro-qty">
                    <button style={{ border: "none" }} onClick={decrement}>-</button>
                    <input type="text"
                        value={quantity}
                        onChange={inputChange}
                    />
                    <button style={{ border: "none" }} onClick={increment}>+</button>
                </div>
            </td>
            <td className="shoping__cart__total">
                ${(item.price - ((item.discount / 100) * item.price)) * item.quantity}
            </td>
            <td className="shoping__cart__item__close">
               <Link onClick={remove}><span className="icon_close"></span></Link>
            </td>
        </tr>
    )
}
