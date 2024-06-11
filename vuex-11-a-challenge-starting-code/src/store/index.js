import { createStore } from 'vuex';

import cartModule from './cart/index';

const store = createStore({
  modules: {
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