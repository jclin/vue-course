import { createStore } from 'vuex';

const store = createStore({
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