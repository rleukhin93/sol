<template>
  <div id="app" class="sol-calculator">
    <section class="sol-calculator__main">
      <Header />
      <Body />
    </section>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Body from "./components/Body.vue";
import { SET_APY, SET_SOL_USD } from "@/store/global/mutation-types";

export default {
  name: "App",
  components: {
    Header,
    Body,
  },
  created() {
    try {
      // get apy and solUsd from api
      this.$store.commit(`global/${SET_APY}`, 8)
      this.$store.commit(`global/${SET_SOL_USD}`, 250)
    } catch (e) {
      // show error message
    }
  },
};
</script>
