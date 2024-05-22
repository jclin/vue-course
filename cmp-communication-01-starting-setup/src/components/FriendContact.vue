<template>
  <li>
    <h2>{{ name }}{{ isFavorite ? " (Favorite)" : "" }}</h2>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phone }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ email }}
      </li>
    </ul>
    <button @click="deleteFriend">Delete</button>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: {
    "toggle-favorite": function (id) {
      if (id === undefined) {
        console.warn("id is missing: ", id);
        return;
      }

      if (typeof id === "string") {
        return true;
      }

      console.warn("id is not a string: ", id);
      return false;
    },
    "delete-contact": function (id) {
      if (id === undefined) {
        console.warn("id is missing: ", id);
        return;
      }

      if (typeof id === "string") {
        return true;
      }

      console.warn("id is not a string: ", id);
      return false;
    },
  },
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.$emit("toggle-favorite", this.id);
    },
    deleteFriend() {
      this.$emit("delete-contact", this.id);
    },
  },
};
</script>
