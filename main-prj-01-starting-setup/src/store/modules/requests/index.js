import routesActions from './actions';
import routesMutations from './mutations';
import routesGetters from './getters';

export default {
  namespaced: true,
  getters: routesGetters,
  actions: routesActions,
  mutations: routesMutations,
  state() {
    return {
      requests: []
    };
  }
};