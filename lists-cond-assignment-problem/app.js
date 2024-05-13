const app = Vue.createApp({
  data() {
    return {
      pending: '',
      tasks: [],
      showTasks: true,
    };
  },

  methods: {
    addTask() {
      if (this.pending !== '') {
        this.tasks.push(this.pending);
        this.pending = '';
      }
    },
    toggleVisibility() {
      this.showTasks = !this.showTasks;
    }
  }
});

app.mount('#assignment');