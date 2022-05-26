<template>
  <div class="main">
    <form @submit.prevent="submit">
      <h1>Регистрация</h1>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          v-model="email"
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          v-model="password"
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

@Component
export default class Register extends Vue {
  email = "";
  password = "";

  submit() {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, this.email, this.password)
      .then((data) => {
        console.log("Successfully register");

        console.log(auth.currentUser);
        this.$router.push("/");
      })
      .catch((error) => {
        console.log(error.code);
      });
  }
}
</script>
<style scoped>
.main {
  display: flex;
  justify-content: center;
}

form {
  max-width: 30%;
  font-size: 24px;
}
</style>
