<template>
  <v-card color="white" density="compact" variant="outlined">
    <template #image>
      <!-- img source is automatically applied from the v-card image prop -->
      <!-- <v-img gradient="to top, rgb(255 255 255 / 10%), rgb(0 0 0 / 33%)" crossorigin="anonymous"></v-img> -->
      <v-img crossorigin="anonymous"></v-img>
    </template>
    <!--  style="text-shadow: black 0px 0px 6px; background: rgb(255 255 255 / 12%)" -->
    <v-card-item class="card-item-img">
      <v-card-title class="text-subtitle-1 d-sm-none d-lg-flex">Color from image</v-card-title>
      <v-card-subtitle class="text-subtitle-2 font-weight-light">Image {{ String(index + 1).padStart(2, "0") }}</v-card-subtitle>
      <template #append>
        <v-btn icon="mdi-image-edit-outline" size="small" variant="text" v-if="allowUpload" @click="uploadButtonClickHandler"></v-btn>
        <v-btn icon="mdi-select-color" size="small" variant="text" @click="imageButtonClickHandler"> </v-btn>
      </template>
    </v-card-item>
    <v-card-actions>
      <v-icon icon="mdi-check" size="small" v-if="isSelected"></v-icon>
      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>

<script setup>
  import { onMounted, useAttrs } from "vue";

  const props = defineProps({
    allowUpload: Boolean,
    isSelected: Boolean,
    index: Number
  });

  const emit = defineEmits(["click:select", "click:upload"]);

  const attrs = useAttrs();

  onMounted(() => {
    console.log("ImageCard ::: onMounted");
    console.log(" - props: ", props);
    console.log(" - attrs image: ", attrs.image);
  });

  function imageButtonClickHandler() {
    console.log("ImageCard ::: imageButtonClickHandler");
    console.log(" - props index: ", props.index);

    emit("click:select", props.index);
  }

  function uploadButtonClickHandler() {
    console.log("ImageCard ::: uploadButtonClickHandler");
    console.log(" - props index: ", props.index);

    emit("click:upload", props.index);
  }
</script>

<style scoped lang="scss">
  // style is important as it is used to find items by class name.
  .card-item-img {
    background: linear-gradient(to top, rgb(255 255 255 / 0%), rgb(0 0 0 / 65%));
    .v-card-title {
      font-size: 1rem !important;
      font-weight: normal !important;
      // font-weight: 300 !important;
    }
  }
</style>
