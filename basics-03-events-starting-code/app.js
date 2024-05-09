const app = Vue.createApp({
  data() {
    return {
      name: '',
      confirmedName: '',
      counter: 0,
    };
  },
  methods: {
    increment(num) {
      this.counter += num;
    },
    decrement(num) {
      if (this.counter > 0) {
        this.counter -= num;
      }
    },
    updateName(event) {
      this.name = event.target.value;
    },
    confirmName() {
      this.confirmedName = this.name;
    },
    submitForm() {
      // event.preventDefault();
      alert('Submitted!');
    }
  }
});

app.mount('#events');
