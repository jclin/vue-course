const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: 'manuel',
          name: 'Manuel Lorenz',
          phone: '01234 5678 991',
          email: 'manuel@localhost.com'
        },
        {
          id: 'stormy',
          name: 'Stormy Daniels',
          phone: '4321 9876 515',
          email: 'stormy@localhost.com'
        },
        {
          id: 'briana',
          name: 'Briana Banks',
          phone: '8675 3095 223',
          email: 'briana.banks@localhost.com'
        },
      ]
    };
  }
});

app.component('friend-contact', {
  template: `
    <li :key="friend.id">
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? 'Hide': 'Show' }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
  `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {}
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    }
  }
});

app.mount('#app');