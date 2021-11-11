<template>
  <button class="sol-calculator__form__btn" @click="calc" :disabled="isDisabled">
    calculate
  </button>
</template>

<script>
import { mapGetters } from "vuex";
import CheckNumberMixin from "@/mixins/CheckNumberMixin";
export default {
  name: "CalcBtn",
  mixins: [CheckNumberMixin],
  computed: {
    ...mapGetters({
      investmentAmount: "global/investmentAmount",
      investmentTime: "global/investmentTime",
      investmentPeriod: "global/investmentPeriod",
    }),
    isDisabled() {
      return (
        this.isInvalidTime(this.investmentTime, this.investmentPeriod) ||
        this.isInvalidFloat(this.investmentAmount)
      );
    },
  },
  methods: {
    calc() {
      console.log("calc!!!!!!!!!!!!!!!!!!!!");
      this.$store.dispatch(`global/calc`);
    },
  },
};
</script>
