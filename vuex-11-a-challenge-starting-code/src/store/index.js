import { createStore } from 'vuex';

import productsModule from './products/index';
import cartModule from './cart/index';

const store = createStore({
  modules: {
    catalog: productsModule,
    shoppingCart: cartModule
  },
  state() {
    return {
      isLoggedIn: false,
    }
  },
  getters: {
    userAuthenticated(state) {
      return state.isLoggedIn;
    }
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
    }
  }
});

export default store;