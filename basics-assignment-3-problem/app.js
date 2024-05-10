const app = Vue.createApp({
  data() {
    return {
      number: 0,
    };
  },

  computed: {
    result() {
      if (this.number < 37) {
        return 'Not there yet';
      }

      if (this.number > 37) {
        return 'Too much!';
      }

      return this.number;
    }
  },

  watch: {
    result() {
      const that = this;
      setTimeout(() => {
        that.number = 0;
      }, 5000);
    }
  },

  methods: {
    addFive() {
      this.number += 5;
    },
    addOne() {
      this.number += 1;
    },
  }
});

app.mount('#assignment');