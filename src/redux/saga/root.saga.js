import {all, fork} from "redux-saga/effects"
import { product } from "./product.saga"
import { category } from "./category.saga"
import { user } from "./user.saga"
import { cart } from "./cart.saga"
import { order } from "./order.saga"

export function* root() {
    yield all([
        fork(product),
        fork(category),
        fork(user),
        fork(cart),
        fork(order)
    ])
}