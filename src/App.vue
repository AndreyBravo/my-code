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
#app {
  width: 100%;
  margin: 0 auto !important;
  text-align: center;
}


</style>
