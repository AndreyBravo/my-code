<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Go to Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">Go to About</router-link>
          </li>
          <div>
            <div v-if="isLoggedIn">
              <button
                type="button"
                class="btn btn-outline-primary"
                @click="handleSingOut"
              >
                Sing out
              </button>
            </div>

            <div v-else class="navbar-nav" >
              <li class="nav-item">
                <router-link class="nav-link" to="/login">Sing in</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/register"
                  >Sing up</router-link
                >
              </li>
            </div>
          </div>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

@Component
export default class Navbar extends Vue {
  isLoggedIn = false;

  handleSingOut() {
    signOut(getAuth()).then(() => {
      this.$router.push({ name: "home" }).catch((err) => {});
    });
  }

  mounted() {
    onAuthStateChanged(getAuth(), (user) => {
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

</style>
