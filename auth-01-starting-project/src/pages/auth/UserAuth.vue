<template>
  <div>
    <base-dialog :show="!!error" title="An error occurred" @close="clearError">
      <p>{{ error }}</p>
    </base-dialog>
    <base-dialog fixed title="Authenticating..." :show="isLoading">
      <base-spinner></base-spinner>
    </base-dialog>
    <base-card>
      <form @submit.prevent="submitForm">
        <div class="form-control">
          <label for="email">E-Mail</label>
          <input type="email" id="email" v-model.trim="email" />
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input type="password" id="password" v-model.trim="password" />
        </div>
        <p v-if="!formIsValid">
          Please enter a valid e-mail and password (must be 6+ characters)
        </p>
        <base-button type="submit">{{ submitButtonCaption }}</base-button>
        <base-button type="button" mode="flat" @click="switchAuthMode">{{
          switchModeButtonCaption
        }}</base-button>
      </form>
    </base-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      formIsValid: true,
      mode: 'login',
      isLoading: false,
      error: null,
    };
  },
  computed: {
    submitButtonCaption() {
      if (this.mode === 'login') {
        return 'Login';
      }

      return 'Signup';
    },
    switchModeButtonCaption() {
      if (this.mode === 'login') {
        return 'Signup instead';
      }

      return 'Login instead';
    },
  },
  methods: {
    async submitForm() {
      this.formIsValid = true;

      if (
        this.email === '' ||
        !this.email.includes('@') ||
        this.password.length < 6
      ) {
        this.formIsValid = false;
        return;
      }

      this.isLoading = true;

      const payload = {
        email: this.email,
        password: this.password,
      };

      try {
        if (this.mode === 'login') {
          await this.$store.dispatch('login', payload);
        } else {
          await this.$store.dispatch('signup', payload);
        }
        const redirect = '/' + (this.$route.query.redirect || 'coaches');
        this.$router.replace(redirect);
      } catch (err) {
        this.error = err.message || 'Failed to authenticate user.';
      }

      this.isLoading = false;
    },

    switchAuthMode() {
      if (this.mode === 'login') {
        this.mode = 'signup';
        return;
      }

      this.mode = 'login';
    },

    clearError() {
      this.error = null;
    },
  },
};
</script>

<style scoped>
form {
  margin: 1rem;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}
</style>
