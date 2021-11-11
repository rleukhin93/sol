<template>
  <div class="sol-calculator__form">
    <CurrentRate />
    <InvestmentAmount />
    <InvestmentTime />
    <CalcBtn />
  </div>
</template>

<script>
import CurrentRate from "@/components/Form/CurrentRate.vue";
import InvestmentAmount from "@/components/Form/InvestmentAmount.vue";
import InvestmentTime from "@/components/Form/InvestmentTime.vue";
import CalcBtn from "@/components/Form/CalcBtn.vue";
export default {
  name: "Form",
  components: {
    CurrentRate,
    InvestmentAmount,
    InvestmentTime,
    CalcBtn,
  },
}
</script>
