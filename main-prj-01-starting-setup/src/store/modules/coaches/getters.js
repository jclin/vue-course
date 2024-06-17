export default {
  coaches(state) {
    return state.coaches;
  },
  hasCoaches(_, getters) {
    return getters.coaches && getters.coaches.length > 0;
  },
  isCoach(_, getters, _2, rootGetters) {
    const coaches = getters.coaches;
    return coaches.some(coach => coach.id === rootGetters.userId);
  },
  shouldUpdate(state) {
    const lastFetch = state.lastFetch;
    if (!lastFetch) {
      return true;
    }

    const now = new Date().getTime();
    return (now - lastFetch) / 1000 > 60;
  }
};
