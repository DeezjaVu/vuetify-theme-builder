<template>
  <v-card color="white" density="compact" variant="outlined">
    <template #image>
      <!-- img source is automatically applied from the v-card image prop -->
      <v-img crossorigin="anonymous"></v-img>
    </template>
    <v-card-item class="card-item-img">
      <!-- <v-card-title class="text-subtitle-1 d-sm-none d-lg-flex">Color from image</v-card-title> -->
      <v-card-subtitle class="text-subtitle-2 font-weight-light">Image {{ String(index + 1).padStart(2, "0") }}</v-card-subtitle>
      <template #append>
        <!-- <v-btn icon="mdi-image-edit-outline" size="small" variant="text" v-if="allowUpload" @click="uploadButtonClickHandler"></v-btn> -->
        <v-btn icon="mdi-refresh" size="small" variant="text" v-if="allowRefresh" @click="refreshButtonClickHandler"></v-btn>
        <v-btn icon="mdi-select-color" size="small" variant="text" @click="imageButtonClickHandler"> </v-btn>
      </template>
    </v-card-item>
    <v-card-actions>
      <v-icon v-if="isSelected" icon="mdi-check" size="small"></v-icon>
      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>

<script setup>
  import { onMounted, useAttrs } from "vue";

  const props = defineProps({
    allowRefresh: Boolean,
    isSelected: Boolean,
    index: Number
  });

  const emit = defineEmits(["click:select", "click:refresh"]);

  const attrs = useAttrs();

  let initImageUrl = attrs.image;

  onMounted(() => {
    console.log("SourceImageCard ::: onMounted");
  });

  function imageButtonClickHandler() {
    console.log("SourceImageCard ::: imageButtonClickHandler");
    console.log(" - props index: ", props.index);
    emit("click:select", props.index);
  }

  /**
   * Handles the refresh button click event.
   * Logs the event and emits a "click:refresh" event with the current image index.
   */

  function refreshButtonClickHandler() {
    console.log("SourceImageCard ::: refreshButtonClickHandler");
    console.log(" - props index: ", props.index);
    emit("click:refresh", props.index);
  }
</script>

<style scoped lang="scss">
  // style is important as it is used to find items by class name.
  .card-item-img {
    background: linear-gradient(to top, rgb(255 255 255 / 0%), rgb(0 0 0 / 65%));
    .v-card-title {
      font-size: 1rem !important;
      font-weight: normal !important;
    }
  }

  // border around image card
  .v-card.v-card--variant-outlined.text-white {
    color: white !important;
    // `outlined` card has border color same as text color, which is not good...
    border-color: rgb(255 255 255 / 35%) !important;
  }
</style>
