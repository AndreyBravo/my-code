<template>
  <div>
    <typewriter :type-interval="100" :replace-interval="100">
      <h1>{{ text }}</h1>
    </typewriter>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Typewriter from "typewriter-vue";

@Component({
  components: {
    Typewriter,
  },
})
export default class About extends Vue {
  text = "It is About page";
}
</script>
<style scoped>
h1 {
  margin-top: 20px;
  font-size: 24px;
}
</style>
