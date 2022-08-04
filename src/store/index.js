import { createStore } from 'vuex';

import productModules from './modules/products';
import cartModules from './modules/cart';

const store = createStore({
  modules: {
    prods: productModules,
    carts: cartModules,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
  actions: {
    login(context) {
      context.commit('login');
    },
    logout(context) {
      context.commit('logout');
    },
  },
  getters: {
    userIsAuthenticated(state) {
      return state.isLoggedIn;
    },
  },
});

export default store;
