<template>
  <div>
    <typewriter :type-interval="100" :replace-interval="1000">
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
export default class Writer extends Vue {
  text = "Typewriter Vue";
}
</script>
<style scoped>
h1 {
  text-align: center;
}
</style>
