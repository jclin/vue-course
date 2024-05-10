const app = Vue.createApp({
  data() {
    return {
      userinput: '',
      showParagraph: true,
      backgroundColor: '#ccc'
    };
  },

  computed: {
    paragraphClasses() {
      return {
        user1: this.userinput.toLowerCase() === 'user1',
        user2: this.userinput.toLowerCase() === 'user2',
        visible: this.showParagraph,
        hidden: !this.showParagraph,
      };
    },

    colorStyle() {
      return {
        backgroundColor: this.backgroundColor,
      };

    }
  },

  methods: {
    toggleParagraph() {
      this.showParagraph = !this.showParagraph;
    },
  }
});

app.mount('#assignment');