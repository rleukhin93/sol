<template>
  <div class="sol-calculator__form__group">
    <div class="sol-calculator__form__label">Investment Tenure</div>
    <div class="sol-calculator__form__input-block">
      <input
        type="number"
        class="sol-calculator__form__input"
        :class="{ 'sol-calculator__form__input--invalid': isInvalid }"
        v-model="investmentTime"
      />
      <select
        class="sol-calculator__form__input"
        name="period"
        v-model="investmentPeriod"
      >
        <option v-for="period in periods" :key="period" :value="period">
          {{ period }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import {
  SET_INVESTMENT_PERIOD,
  SET_INVESTMENT_TIME,
} from "@/store/global/mutation-types";
import CheckNumberMixin from "@/mixins/CheckNumberMixin";

export default {
  name: "InvestmentTime",
  mixins: [CheckNumberMixin],
  data() {
    return {
      periods: ["Year", "Month", "Day"],
    };
  },
  computed: {
    investmentTime: {
      set(value) {
        if (value !== undefined) {
          this.$store.commit(`global/${SET_INVESTMENT_TIME}`, value);
        }
      },
      get() {
        return this.$store.getters["global/investmentTime"];
      },
    },
    investmentPeriod: {
      set(value) {
        if (value !== undefined) {
          this.$store.commit(`global/${SET_INVESTMENT_PERIOD}`, value);
        }
      },
      get() {
        return this.$store.getters["global/investmentPeriod"];
      },
    },
    isInvalid() {
      return this.isInvalidTime(this.investmentTime, this.investmentPeriod);
    },
  },
};
</script>
