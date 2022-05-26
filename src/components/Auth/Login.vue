<template>
  <div class="main">
    <form @submit.prevent="submit">
      <h1>Войти</h1>
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

      {{ err }}
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <li v-if="isLoggedIn" class="nav-item">
      <button @click="handleSingOut">Выйти</button>
    </li>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import {
  getAuth,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";

@Component
export default class Register extends Vue {
  email = "";
  password = "";
  err = "";
  auth = getAuth();
  isLoggedIn = false;

  submit() {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, this.email, this.password)
      .then((data) => {
        console.log("Successfully sing in");
        this.$router.push("/");
      })
      .catch((error) => {
        console.log(error.code);
        switch (error.code) {
          case "auth/invalid-email":
            this.err = "Invalid email";
            break;
          case "auth/user-not-found":
            this.err = "User email not found";
            break;
          case "auth/wrong-password":
            this.err = "Incorrect password";
            break;
          default:
            this.err = "Incorrect password or email";
            break;
        }
      });
  }

  handleSingOut() {
    signOut(this.auth).then(() => {
      this.$router.push("/");
    });
  }

  mounted() {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
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
