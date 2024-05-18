const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
  },
});

app.mount('#app');

// Vue implements reactivity by leveraging JS' built-in Proxy feature.
const data = {
  message: 'Hello!',
  longMessage: 'Hello, lovely nurse!'
};

const handler = {
  set(target, key, value) {
    if (key === 'message') {
      target.longMessage = value + ' - long message';
      target.message = value;
    }

    console.log(data);
  }
};

const proxy = new Proxy(data, handler);

proxy.message = 'Why hello, nurse!'