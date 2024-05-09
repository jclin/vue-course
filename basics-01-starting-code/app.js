const app = Vue.createApp({
  data() {
    return {
      courseGoalA: 'Finish the course and learn Vue!',
      courseGoalB: '<i>Master</i> Vue and build amazing apps!',
      vueLink: 'https://vuejs.org/'
    };
  },
  methods: {
    outputGoal() {
      const rand = Math.random();
      if (rand < 0.5) {
        return this.courseGoalA;
      }

      return this.courseGoalB;
    }
  }
});
app.mount('#user-goal');