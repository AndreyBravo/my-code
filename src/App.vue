<template>
  <div id="app">
    <nav-bar />
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Writer from "./components/Writer.vue";
import NavBar from "./components/NavBar.vue";

@Component({
  components: {
    Writer,
    NavBar,
  },
})
export default class App extends Vue {}
</script>
<style scoped>
div {
  height: 100%;
  margin: 0;
  text-align: center;
  background-color: rgb(0, 247, 54);
}
</style>
