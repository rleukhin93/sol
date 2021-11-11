<template>
  <div class="sol-calculator__results__notice-title">
    <div class="sol-calculator__results__notice-text sol-calculator__results__notice-text--bold">
      How to calculate APY
    </div>
    <div class="sol-calculator__results__notice-text sol-calculator__results__notice-text--light">
      Current Price (USD) 1 SOL = {{ solUsd }} $
    </div>
  </div>
</template>

<script>
export default {
  name: "NoticeTitle",
  computed: {
    solUsd() {
      return this.$store.getters["global/solUsd"];
    },
  },
};
</script>
