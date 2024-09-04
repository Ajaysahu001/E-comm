import { put, takeLatest } from "redux-saga/effects";
import { addCategoryToFirebase, deleteCategoryToFirebase, getCategoryFromFirebase, updateCategoryToFirebase } from "../services/category.service";
import { addCategoryError, deleteCategoryError, getCategoryError, getCategoryStart, getCategorySuccess, updateCategoryError } from "../actions/category.action";
import { ADD_CATEGORY_START, DELETE_CATEGORY_START, GET_CATEGORY_START, UPDATE_CATEGORY_START } from "../constants/category.constant";

function* getCategory() {
    try {
        let data = yield getCategoryFromFirebase();
        yield put(getCategorySuccess(data))
    } catch (error) {
        yield put(getCategoryError(error.message))
    }
}


function* addCategory({payload}) {
    try {
        yield addCategoryToFirebase(payload);
        yield put(getCategoryStart())
    } catch (error) {
        yield put(addCategoryError(error.message))
    }
}

function* updateCategory({payload}) {
    try {
        yield updateCategoryToFirebase(payload.data, payload.id);
        yield put(getCategoryStart())
    } catch (error) {
        yield put(updateCategoryError(error.message))
    }
}

function* deleteCategory({payload}) {
    try {
        yield deleteCategoryToFirebase(payload);
        yield put(getCategoryStart())
    } catch (error) {
        yield put(deleteCategoryError(error.message))
    }
}

export function* category() {
    yield takeLatest(GET_CATEGORY_START, getCategory);
    yield takeLatest(ADD_CATEGORY_START, addCategory)
    yield takeLatest(UPDATE_CATEGORY_START, updateCategory)
    yield takeLatest(DELETE_CATEGORY_START,deleteCategory)
}