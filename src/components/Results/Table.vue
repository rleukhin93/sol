<template>
  <div class="sol-calculator__results__table">
    <TableRow name="Total Return SOL" :sol="totalAmount" :money="totalMoney" :isTitle="true" />
    <TableRow name="Interest Per Day" :sol="0" :money="0" />
    <TableRow name="Interest Per Month" :sol="0" :money="0" />
    <TableRow name="Interest Per Year" :sol="0" :money="0" />
    <TableRow/>
  </div>
</template>

<script>
import TableRow from "@/components/Results/TableRow.vue";
export default {
  name: "Table",
  components: {
    TableRow,
  },
  computed: {
    totalAmount() {
      return this.$store.getters["global/totalAmount"];
    },
    totalMoney() {
      return this.$store.getters["global/totalMoney"];
    },
  },
};
</script>
