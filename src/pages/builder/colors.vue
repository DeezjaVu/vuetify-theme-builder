<template>
  <ColorsView />
</template>

<script setup>
  import ColorsView from "@/components/ColorsView.vue";

  import { onMounted } from "vue";

  onMounted(() => {
    console.log("PAGES ::: /builder/colors ::: onMounted");
  });
</script>
