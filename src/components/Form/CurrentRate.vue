<template>
  <div class="sol-calculator__form__group">
    <div class="sol-calculator__form__text">Current APY Interest Rate</div>
    <div class="sol-calculator__form__bigtext">≈{{apy}}%</div>
  </div>
</template>

<script>
export default {
  name: "CurrentRate",
  computed: {
    apy() {
      return this.$store.getters["global/apy"];
    },
  },
}
</script>
