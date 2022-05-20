<template>
  <div class="kurs">
    <h1>Курс валют</h1>
    <ul class="list-group">
      <li class="list-group-item">
        100 RUB :
        {{ getKursBYN }} BYN
      </li>
      <li class="list-group-item">
        {{ USD.toFixed(3) }} USD : {{ BYNUSD.toFixed(3) }} BYN
      </li>
      <li class="list-group-item">
        {{ EUR.toFixed(3) }} EUR : {{ BYNEUR.toFixed(3) }} BYN
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { Component, Watch, Vue } from "vue-property-decorator";

@Component
export default class KursExchange extends Vue {
  usdBYN = 1;
  eurBYN = 1;

  get BYNUSD() {
    return (this.usdBYN * this.getKursBYN) / 100;
  }

  get BYNEUR() {
    return (this.eurBYN * this.getKursBYN) / 100;
  }

  get USD() {
    return this.usdBYN * this.getKursUSD;
  }

  get EUR() {
    return this.eurBYN * this.getKursUSD;
  }

  get getKursBYN(): number {
    return this.$store.getters.getKursBYN * 100;
  }

  get getKursUSD(): number {
    return this.$store.getters.getKursUSD;
  }

  get getKursEUR(): number {
    return this.$store.getters.getKursEUR;
  }

  upperIndex__USDBYN(): void {
    do {
      this.usdBYN++;
    } while (this.usdBYN * this.getKursUSD < 1);
  }

  upperIndex__EURBYN(): void {
    do {
      this.eurBYN++;
    } while (this.eurBYN * this.getKursEUR < 1);
  }

  async mounted(): Promise<void> {
    try {
      await this.$store.dispatch("GET_KURS");
      this.upperIndex__USDBYN();
      this.upperIndex__EURBYN();
    } catch (error) {
      console.log(error);
    }
  }
}
</script>
<style scoped>
.kurs {
  display: inline-block;
  width: 35%;
  margin: 0 30px;
  padding: 20px;
  border: 3px solid red;
  border-radius: 30px;
  font-size: 36px;
  background-color: aquamarine;
}

p {
  font-size: 24px;
}
</style>
