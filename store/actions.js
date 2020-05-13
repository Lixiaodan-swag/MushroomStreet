import { ADD_COUNTER, ADD_TO_CART } from "./mutation-types"

export default {
  addCart(context, payload) {
    let cartInfo1 = context.state.cartList.find((item) => item.iid == payload.iid)
    if (cartInfo1) {
      // cartInfo1.count++
      context.commit(ADD_COUNTER, cartInfo1)

    } else {
      payload.count = 1
      context.commit(ADD_TO_CART, payload)

    }
  }
}