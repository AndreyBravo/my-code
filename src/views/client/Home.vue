<template>
  <div class="app">
    <!-- <typewriter :type-interval="100" :replace-interval="1000">
      <h1>{{ text }}</h1>
    </typewriter> -->
    <weather />
    <kurs-exchange/>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Typewriter from "typewriter-vue";

import Weather from "@/components/Weather.vue";
import KursExchange from '@/components/KursExchange.vue';


@Component({
  components: {
    Typewriter,
    Weather,
    KursExchange
  },
})
export default class Home extends Vue {
  text = "It is Home page";
}
</script>
<style scoped>
.app{
  display: flex;
  justify-content: space-between;
  margin: 30px 30px 50px 30px;
}

h1 {
  margin-top: 20px;
  font-size: 24px;
}
</style>
