const app = Vue.createApp({
  data() {
    return {
      name: 'Jerry Lin',
      age: 43,
      url: 'https://pbs.twimg.com/media/COQjw4FUwAAOlQF?format=png&name=small',
    }
  },
  computed: {
    agePlusFive() {
      return this.age + 5;
    }
  },
  methods: {
    randomNumber() {
      return Math.random();
    }
  }
});
app.mount('#assignment');