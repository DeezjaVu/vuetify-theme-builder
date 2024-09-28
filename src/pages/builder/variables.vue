<template>
  <VariablesView />
</template>

<script setup>
  import VariablesView from "@/components/VariablesView.vue";

  import { onMounted } from "vue";

  onMounted(() => {
    console.log("BUILDER ::: VARIABLES ::: onMounted");
  });
</script>
