<template>
  <form @submit.prevent="updateUser">
    <div>
      <label>Name: </label>
      <input type="text" v-model="nameInput" />
    </div>
    <div>
      <label>Age: </label>
      <input type="number" v-model="ageInput" />
    </div>
    <div>
      <button>Update</button>
    </div>
  </form>
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

  emits: ["update-user"],

  data() {
    return {
      nameInput: this.username,
      ageInput: this.age,
    };
  },

  methods: {
    updateUser() {
      this.$emit("update-user", {
        username: this.nameInput,
        age: this.ageInput,
      });
    },
  },
};
</script>
