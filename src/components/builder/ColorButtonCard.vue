<template>
  <v-card title="Buttons" class="elevation-2" min-width="170">
    <v-card-text class="d-flex flex-column ga-2">
      <template v-for="item in btnsList">
        <v-btn :text="item.text" :color="item.color" :variant="btnVariant" />
      </template>
    </v-card-text>
    <v-card-actions>
      <v-select
        label="Variant"
        v-model="btnVariant"
        :items="btnVariants"
        auto-select-first="exact"
        variant="outlined"
        hide-details
        density="compact"
      ></v-select>
    </v-card-actions>
  </v-card>
</template>

<script setup>
  import { ref, onMounted } from "vue";

  const props = defineProps({
    /**
     * @type {string}
     * @values elevated, flat, outlined, plain, tonal, text
     */
    "btn-variant": {
      type: String,
      default: "elevated",
      validator(value, props) {
        // The value must match one of these strings
        return ["elevated", "flat", "outlined", "plain", "tonal", "text"].includes(value);
      }
    }
  });

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
      text: "Tertiary",
      color: "tertiary"
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

  const btnVariants = ref([
    { title: "Elevated", value: "elevated" },
    { title: "Flat", value: "flat" },
    { title: "Outlined", value: "outlined" },
    { title: "Plain", value: "plain" },
    { title: "Tonal", value: "tonal" },
    { title: "Text", value: "text" }
  ]);
  const btnVariant = ref("elevated");

  onMounted(() => {
    console.log("ColorButtonCard ::: onMounted");
  });
</script>
