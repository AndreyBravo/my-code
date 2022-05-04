<template>
  <typewriter :type-interval="100" :replace-interval="1000">
    <h1>{{ text }}</h1>
  </typewriter>
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
  file = new File(["Blob"], "qwe");
  reader = new FileReader()

  mounted() {
    console.log(this.reader.result);
  }
}
</script>
<style scoped>
h1 {
  text-align: center;
}
</style>
