<template>
  <h3>User Auth</h3>
  <button @click="login" v-if="!userAuthenticated">Login</button>
  <button @click="logout" v-else>Logout</button>
</template>

<script>
import { mapGetters } from 'vuex/dist/vuex.cjs.js';
import { mapActions } from 'vuex/dist/vuex.cjs.js';

export default {
  computed: {
    ...mapGetters(['userAuthenticated']),
  },
  methods: {
    ...mapActions(['login', 'logout']),
  },
};
</script>
