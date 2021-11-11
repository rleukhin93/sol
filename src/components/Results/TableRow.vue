<template>
  <div
    class="sol-calculator__results__table__row"
    :class="{ 'sol-calculator__results__table__row--bold': isTitle }"
  >
    <div class="sol-calculator__results__table__text">{{ name }}</div>
    <div class="sol-calculator__results__table__text">{{ formatMoney(sol) }}</div>
    <div class="sol-calculator__results__table__text">
      {{ money ? "$" : "" }}{{ formatMoney(money) }}
    </div>
  </div>
</template>

<script>
export default {
  name: "TableRow",
  props: {
    name: {
      type: String,
    },
    sol: {
      type: Number,
    },
    money: {
      type: Number,
    },
    isTitle: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  methods: {
    formatMoney(val) {
      if (typeof val === "undefined" || val === null || val === "") {
        return val;
      }

      val = val.toString();

      let decimalSeparator = val.lastIndexOf(".");

      let integerPart =
        decimalSeparator >= 0 ? val.slice(0, decimalSeparator) : val;
      let fractionalPart =
        decimalSeparator >= 0 ? val.slice(decimalSeparator + 1) : null;

      if (fractionalPart) {
        fractionalPart = fractionalPart.slice(0, 2).replace(/[^0-9]+/g, "");
        if (fractionalPart.length === 1) fractionalPart += "0";
      } else if (!fractionalPart) fractionalPart = "00";

      integerPart = integerPart.replace(/[^0-9]+/g, "");
      if (!integerPart) {
        integerPart = "0";
      }

      let formatted = "";
      for (let i = 0; i < integerPart.length; i++) {
        if (i !== 0 && i % 3 === 0) {
          formatted = integerPart[integerPart.length - i - 1] + "," + formatted;
        } else {
          formatted = integerPart[integerPart.length - i - 1] + formatted;
        }
      }

      formatted += "." + fractionalPart;

      return formatted;
    },
  },
};
</script>
