import { ADD_CATEGORY_ERROR, ADD_CATEGORY_START, ADD_CATEGORY_SUCCESS, DELETE_CATEGORY_ERROR, DELETE_CATEGORY_START, DELETE_CATEGORY_SUCCESS, GET_CATEGORY_ERROR, GET_CATEGORY_START, GET_CATEGORY_SUCCESS, UPDATE_CATEGORY_ERROR, UPDATE_CATEGORY_START, UPDATE_CATEGORY_SUCCESS } from "../constants/category.constant"

// get category actions
export const getCategoryStart = (data) => ({
    type: GET_CATEGORY_START,
})

export const getCategorySuccess = (data) => ({
    type: GET_CATEGORY_SUCCESS,
    payload: data
})

export const getCategoryError = (data) => ({
    type: GET_CATEGORY_ERROR,
    payload: data
})

// add category actions
export const addCategoryStart = (data) => ({
    type: ADD_CATEGORY_START,
    payload: data
})

export const addCategorySuccess = (data) => ({
    type: ADD_CATEGORY_SUCCESS,
    payload: data
})

export const addCategoryError = (data) => ({
    type: ADD_CATEGORY_ERROR,
    payload: data
})


// update category actions
export const updateCategoryStart = (data, id) => ({
    type: UPDATE_CATEGORY_START,
    payload: {
        data,
        id
    }
})

export const updateCategorySuccess = (data,id) => ({
    type: UPDATE_CATEGORY_SUCCESS,
    payload: {
        data,
        id
    }
})

export const updateCategoryError = (data) => ({
    type: UPDATE_CATEGORY_ERROR,
    payload: data
})

// delete category start
export const deleteCategoryStart = (id) => ({
    type: DELETE_CATEGORY_START,
    payload: id
})

export const deleteCategorySuccess = (data) => ({
    type: DELETE_CATEGORY_SUCCESS,
    payload: data
})

export const deleteCategoryError = (data) => ({
    type: DELETE_CATEGORY_ERROR,
    payload: data
})