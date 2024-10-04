<template>
  <!-- <v-card :title="title" :subtitle="subtitle" :variant="variant"> -->
  <v-card>
    <v-card-text class="d-flex ga-2">
      <v-btn color="primary" :variant="btnVariant">Primary</v-btn>
      <v-btn color="secondary" :variant="btnVariant">Secondary</v-btn>
      <v-btn color="success" :variant="btnVariant">Success</v-btn>
      <v-btn color="info" :variant="btnVariant">Info</v-btn>
      <v-btn color="warning" :variant="btnVariant">Warning</v-btn>
      <v-btn color="error" :variant="btnVariant">Error</v-btn>
    </v-card-text>
  </v-card>
</template>

<script setup>
  import { onMounted } from "vue";

  const props = defineProps(["btn-variant"]);

  onMounted(() => {
    console.log("ColorButtonCard ::: onMounted");
  });
</script>
