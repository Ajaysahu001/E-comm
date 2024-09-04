import { put, takeLatest } from "redux-saga/effects";
import { ADD_USER_START, DELETE_USER_START, GET_USER_START, UPDATE_USER_START } from "../constants/users.constant";
import { addUserToFirebase, deleteUserToFirebase, getUserFromFirebase, updateUserToFirebase } from "../services/user.service";
import { addUserError, deleteUserError, getUserError, getUserStart, getUserSuccess, updateUserError } from "../actions/user.action";

function* getUser() {
    try {
        let data = yield getUserFromFirebase();
        yield put(getUserSuccess(data))
    } catch (error) {
        yield put(getUserError(error.message))
    }
}


function* addUser({payload}) {
    try {
        yield addUserToFirebase(payload);
        yield put(getUserStart())
    } catch (error) {
        yield put(addUserError(error.message))
    }
}

function* updateUser({payload}) {
    try {
        yield updateUserToFirebase(payload.data, payload.id);
        yield put(getUserStart())
    } catch (error) {
        yield put(updateUserError(error.message))
    }
}

function* deleteUser({payload}) {
    try {
        yield deleteUserToFirebase(payload);
        yield put(getUserStart())
    } catch (error) {
        yield put(deleteUserError(error.message))
    }
}

export function* user() {
    yield takeLatest(GET_USER_START, getUser);
    yield takeLatest(ADD_USER_START, addUser)
    yield takeLatest(UPDATE_USER_START, updateUser)
    yield takeLatest(DELETE_USER_START,deleteUser)
}