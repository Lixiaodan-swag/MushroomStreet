import {
  ADD_TO_CART,
  ADD_COUNTER
} from './mutation-types'
export default {
  [ADD_TO_CART](state, payload) {
    payload.checked = true
    state.cartList.push(payload)
  },
  [ADD_COUNTER](state, payload) {
    payload.count++
  },
  changeCheck(state, payload) {
    payload.checked = !payload.checked


  },
  clearCheck(state) {
    state.cartList.forEach(itemInfo => itemInfo.checked = false);
  },
  allCheck(state) {
    state.cartList.forEach(itemInfo => itemInfo.checked = true);
  }
}