<template>
  <v-card class="elevation-2">
    <v-card-text class="d-flex flex-column ga-2">
      <v-btn v-for="item in btnsList" :text="item.text" :color="item.color" :variant="btnVariant" />
    </v-card-text>
  </v-card>
</template>

<script setup>
  import { onMounted } from "vue";

  const props = defineProps(["btn-variant"]);

  const btnsList = [
    {
      text: "Primary",
      color: "primary"
    },
    {
      text: "Secondary",
      color: "secondary"
    },
    {
      text: "Success",
      color: "success"
    },
    {
      text: "Info",
      color: "info"
    },
    {
      text: "Warning",
      color: "warning"
    },
    {
      text: "Error",
      color: "error"
    }
  ];

  onMounted(() => {
    console.log("ColorButtonCard ::: onMounted");
  });
</script>
