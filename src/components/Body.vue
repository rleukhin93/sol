<template>
  <div class="sol-calculator__body">
    <Form />
    <Results />
  </div>
</template>

<script>
import Form from "@/components/Form.vue";
import Results from "@/components/Results.vue";

export default {
  name: "Body",
  components: {
    Form,
    Results,
  },
};
</script>
