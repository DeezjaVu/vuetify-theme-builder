<template>
  <v-card color="white" density="compact" variant="outlined">
    <template #image>
      <!-- img source is automatically applied from the v-card image prop -->
      <!-- <v-img crossorigin="anonymous" :ref="(vnode) => (imageRef = vnode ? vnode.$el : null)"></v-img> -->
      <v-img crossorigin="anonymous" :ref="setImageElement"></v-img>
    </template>
    <v-card-item class="card-item-img">
      <!-- <v-card-title class="text-subtitle-1 d-sm-none d-lg-flex">Color from image</v-card-title> -->
      <v-card-subtitle class="text-subtitle-2 font-weight-light">Image {{ String(index + 1).padStart(2, "0") }}</v-card-subtitle>
      <template #append>
        <v-btn icon="mdi-refresh" size="small" variant="text" v-if="allowRefresh" @click="refreshClickHandler"></v-btn>
        <v-btn icon="mdi-select-color" size="small" variant="text" @click="imageSelectClickHandler"> </v-btn>
      </template>
    </v-card-item>
    <v-card-actions>
      <v-icon v-if="isSelected" icon="mdi-check" size="small"></v-icon>
      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>

<script setup>
  import { onMounted, useAttrs, ref } from "vue";

  const props = defineProps({
    allowRefresh: Boolean,
    isSelected: Boolean,
    index: Number
  });

  const emit = defineEmits(["click:select", "click:refresh"]);

  const attrs = useAttrs();

  let initImageUrl = attrs.image;

  const imageRef = ref(null);

  onMounted(() => {
    console.log("SourceImageCard ::: onMounted");
    console.log(" - props index: ", props.index);
  });

  function setImageElement(el) {
    console.log("SourceImageCard ::: setImageElement");
    // console.log(" - props index: ", props.index);
    // console.log(" - el: ", el);
    if (el) {
      imageRef.value = el.$el;
      // [-] For some reason can't access img inside imageRef :(
      // [-] Maybe it's too early and it doesn't exist yet?
      // console.log(" - imageRef: ", imageRef.value);
    } else {
      console.warn("[SourceImageCard]: No image element found in `setImageElement`");
    }
  }

  /**
   * Handles the select button click event.
   *
   * Emits a `click:select` event with the card `index` and the `HTMLImageElement`.
   */
  function imageSelectClickHandler() {
    console.log("SourceImageCard ::: imageSelectClickHandler");
    console.log(" - props index: ", props.index);
    let imgElement = imageRef.value.querySelector("img");
    // console.log(" - imgElement: ", imgElement);
    emit("click:select", props.index, imgElement);
  }

  /**
   * Handles the refresh button click event.
   * Logs the event and emits a "click:refresh" event with the current image index.
   */
  function refreshClickHandler() {
    console.log("SourceImageCard ::: refreshClickHandler");
    console.log(" - props index: ", props.index);
    emit("click:refresh", props.index);
  }
</script>

<style scoped lang="scss">
  // gradient overlay for the image
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
    // `outlined` card has border color same as text color (full white), which is not good...
    border: thin solid rgba(255, 255, 255, 0.25) !important;
  }
</style>
