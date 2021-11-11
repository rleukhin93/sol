<template>
  <div class="sol-calculator__form__group">
    <div class="sol-calculator__form__label">SOL Investment Amount</div>
    <input
      type="number"
      class="sol-calculator__form__input"
      :class="{ 'sol-calculator__form__input--invalid': isInvalid }"
      v-model="investmentAmount"
    />
  </div>
</template>

<script>
import { SET_INVESTMENT_AMOUNT } from "@/store/global/mutation-types";
import CheckNumberMixin from "@/mixins/CheckNumberMixin";

export default {
  name: "InvestmentAmount",
  mixins: [CheckNumberMixin],
  computed: {
    investmentAmount: {
      set(value) {
        if (value !== undefined) {
          this.$store.commit(`global/${SET_INVESTMENT_AMOUNT}`, value);
        }
      },
      get() {
        return this.$store.getters["global/investmentAmount"];
      },
    },
    isInvalid() {
      return this.isInvalidFloat(this.investmentAmount);
    },
  },
};
</script>
