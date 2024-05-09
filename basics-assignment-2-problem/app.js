const app = Vue.createApp({
  data() {
    return {
      input: '',
      computedInput: ''
    };
  },

  methods: {
    showAlert() {
      alert('Honk honk!');
    },

    updateInput(event) {
      this.input = event.target.value;
    },
    updateComputedInput(event) {
      this.computedInput = this.input;
    }
  }
});

app.mount('#assignment');