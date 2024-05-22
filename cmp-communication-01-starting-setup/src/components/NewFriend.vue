<template>
  <form @submit.prevent="submitData">
    <div>
      <label>Name</label>
      <input type="text" v-model="name" />
    </div>
    <div>
      <label>Phone</label>
      <input type="tel" v-model="phone" />
    </div>
    <div>
      <label>E-mail</label>
      <input type="email" v-model="email" />
    </div>
    <div>
      <button type="submit">Add Friend</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ["add-contact"],
  data() {
    return {
      name: "",
      phone: "",
      email: "",
    };
  },
  methods: {
    submitData() {
      this.$emit("add-contact", {
        name: this.name,
        phone: this.phone,
        email: this.email,
      });
    },
  },
};
</script>
