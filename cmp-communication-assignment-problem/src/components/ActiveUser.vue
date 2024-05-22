<template>
  <section>
    <h2>Name: {{ username }}</h2>
    <h3>Age: {{ age }} years young</h3>
  </section>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
};
</script>
