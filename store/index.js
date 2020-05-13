import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
Vue.use(Vuex)
let state = {
  cartList: []
}
let store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
// let store = new Vuex.Store({
//   state: {
//     cartList: []
//   },
//   mutations: {
//     addCounter(state, payload) {
//       payload.count++

//     },
//     addToCart(state, payload) {
//       state.cartList.push(payload)
//     }

//   },
//   actions: {
//     addCart(context, payload) {
//       let oldCartInfo = context.state.cartList.find(function (item) {
//         return item.iid == payload.iid
//       })
//       if (oldCartInfo) {
//         // oldCartInfo.count += 1
//         context.commit('addCounter', oldCartInfo)
//       } else {
//         payload.count = 1
//         // context.state.cartList.push(payload)
//         context.commit('addToCart', payload)
//       }

//     }
//   },
//   getters: {},
// })
export default store