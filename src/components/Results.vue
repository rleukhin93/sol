<template>
  <div class="sol-calculator__results">
    <Table />
    <NoticeTitle />
    <NoticeText />
  </div>
</template>

<script>
import Table from "@/components/Results/Table.vue";
import NoticeTitle from "@/components/Results/NoticeTitle.vue";
import NoticeText from "@/components/Results/NoticeText.vue";
export default {
  name: "Results",
  components: {
    Table,
    NoticeTitle,
    NoticeText,
  },
}
</script>
