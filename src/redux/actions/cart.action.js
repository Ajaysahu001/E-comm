import { ADD_CART_ERROR, ADD_CART_START, ADD_CART_SUCCESS, DELETE_CART_ERROR, DELETE_CART_START, DELETE_CART_SUCCESS, GET_CART_ERROR, GET_CART_START, GET_CART_SUCCESS, UPDATE_CART_ERROR, UPDATE_CART_START, UPDATE_CART_SUCCESS } from './../constants/cart.constant';

// get cart actions
export const getCartStart = () => ({
    type: GET_CART_START,
})

export const getCartSuccess = (data) => ({
    type: GET_CART_SUCCESS,
    payload: data
})

export const getCartError = (data) => ({
    type: GET_CART_ERROR,
    payload: data
})

// add cart actions
export const addCartStart = (data) => ({
    type: ADD_CART_START,
    payload: data
})

export const addCartSuccess = (data) => ({
    type: ADD_CART_SUCCESS,
    payload: data
})

export const addCartError = (data) => ({
    type: ADD_CART_ERROR,
    payload: data
})


// update cart actions
export const updateCartStart = (data, id) => ({
    type: UPDATE_CART_START,
    payload: {
        data,
        id
    }
})

export const updateCartSuccess = (data,id) => ({
    type: UPDATE_CART_SUCCESS,
    payload: {
        data,
        id
    }
})

export const updateCartError = (data) => ({
    type: UPDATE_CART_ERROR,
    payload: data
})

// delete cart start
export const deleteCartStart = (id) => ({
    type: DELETE_CART_START,
    payload: id
})

export const deleteCartSuccess = (data) => ({
    type: DELETE_CART_SUCCESS,
    payload: data
})

export const deleteCartError = (data) => ({
    type: DELETE_CART_ERROR,
    payload: data
})