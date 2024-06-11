<template>
  <button @click="increment">Add 2 in two seconds</button>
  <button @click="increase({ value: 11 })">Add 11</button>
</template>

<script>
import { mapActions } from 'vuex/dist/vuex.cjs.js';

export default {
  methods: {
    // increment() {
    //   this.$store.dispatch('increment');
    // },
    ...mapActions('numbers', ['increment', 'increase']),
  },
};
</script>
