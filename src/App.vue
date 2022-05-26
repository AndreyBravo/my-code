<template>
  <div id="app">
    <nav-bar />
    <auth />
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Writer from "./components/Writer.vue";
import NavBar from "./components/NavBar.vue";
import Auth from "./components/Auth/Auth.vue";

@Component({
  components: {
    Writer,
    NavBar,
    Auth
  },
})
export default class App extends Vue {}
</script>
<style scoped>
div {
  height: 100%;
  margin: 0;
  text-align: center;
  /* background-color: rgb(0, 247, 54); */
}
</style>
