<template>
  <!-- <v-layout row justify-center> -->
  <!--  max-width="348" -->
  <v-dialog class="position-modal-picker" absolute scrim="false" opacity="0.06" max-width="348" @update:model-value="dialogUpdateHandler">
    <!-- <v-card title="Pick a color" :subtitle="props.colorName" flat> -->
    <v-card flat>
      <!-- V-CARD HEADER -->
      <v-hover v-slot="{ isHovering, props }" @update:model-value="headerHoverHandler">
        <v-card-item v-bind="props">
          <v-card-title> Select Color </v-card-title>
          <v-card-subtitle> {{ props.colorName }} </v-card-subtitle>
          <template v-slot:append>
            <!-- 
          Offset button bottom-margin by 24px (mb-6) when density="comfortable" 
          and 20px (mb-5) when density="compact" to place it in line with the card title. 
          -->
            <v-btn icon="mdi-palette" variant="text" density="compact" class="mb-5" />
          </template>
        </v-card-item>
      </v-hover>

      <!-- V-CARD TEXT -->
      <!-- :swatches="flatColorsHex" -->
      <v-card-text class="d-flex ga-2">
        <v-color-picker
          dot-size="16"
          mode="hex"
          :modes="cpModes"
          :model-value="pickerColor"
          swatches-max-height="300"
          hide-sliders
          show-swatches
          rounded="md"
          class="my-0"
          @update:model-value="pickerUpdateHandler"
        ></v-color-picker>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" flat @click.native="cancelClickHandler">Cancel</v-btn>
        <v-btn color="primary" flat @click.native="okClickHandler">Ok</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <!-- </v-layout> -->
</template>

<script setup>
  import { ref, onMounted } from "vue";

  // const props = defineProps(["modalColorOpen", "colorName"]);
  const props = defineProps(["colorName"]);
  const emit = defineEmits(["change", "update", "cancel"]);
  // defineModel() will automatically update the model when the value changes.
  // It also creates an @update event that is emitted when the value changes: `@update:picker-color`
  const pickerColor = defineModel("pickerColor");

  const cpModes = ["hex"];

  let dragItem = document.querySelector("div.v-overlay-container div.v-card-item");
  let moveItem = document.querySelector("div.v-overlay__content");
  let startPosX = 0;
  let startPosY = 0;
  let isDragging = false;

  onMounted(() => {
    console.log("ColorDialog ::: onMounted");
    console.log(" - pickerColor: ", pickerColor);
  });

  function dialogUpdateHandler(value) {
    console.log("ColorDialog ::: dialogUpdateHandler");
    console.log(" - dialogUpdate: ", value);
    // TODO: ColorDialog ::: implement outside click and esc key --> allow the (color) change or cancel it (reset to old color).
    // When value = false, the dialog is being closed (via ouside click or esc key)
    // For now it is considered an OK and not a Cancel action.
    // Since bindings take care of most things, we do not need to do anything here.
  }

  function headerHoverHandler(value) {
    console.log("ColorDialog ::: headerHoverHandler");
    console.log(" - headerHover: ", value);
    const colorModal = document.getElementById("color-dialog");
    console.log(" - id: color-dialog: ", colorModal);
    const vOverlay = document.querySelector("div.v-overlay-container");
    console.log(" - overlay container: ", vOverlay);

    dragItem = document.querySelector("div.v-overlay-container div.v-card-item");
    console.log(" - v-card item: ", dragItem);
    dragItem.style.cursor = "grab";

    moveItem = document.querySelector("div.v-overlay__content");
    console.log(" - v-card move item: ", moveItem);
    console.log(" - v-card move item left: ", moveItem.style.left);
    console.log(" - v-card move item top: ", moveItem.style.top);
    console.log(" - v-card move item offsetLeft: ", moveItem.offsetLeft);
    console.log(" - v-card move item offsetTop: ", moveItem.offsetTop);

    // make it draggable
    if (value) {
      // listen for drag events
      dragItem.setAttribute("draggable", true);
      dragItem.addEventListener("dragstart", cardItemDragStartHandler);
      // dragItem.addEventListener("dragenter", cardItemDragEnterHandler);
      dragItem.addEventListener("drag", cardItemDragHandler);
      dragItem.addEventListener("dragend", cardItemDragEndHandler);
      // moveItem.addEventListener("dragleave", cardItemDragLeaveHandler);
    } else if (!value && !isDragging) {
      // stop listening for drag events
      dragItem.removeEventListener("dragstart", cardItemDragStartHandler);
      // dragItem.removeEventListener("dragenter", cardItemDragEnterHandler);
      dragItem.removeEventListener("drag", cardItemDragHandler);
      dragItem.removeEventListener("dragleave", cardItemDragLeaveHandler);
      // dragItem.removeEventListener("dragend", cardItemDragEndHandler);
    }
  }

  function cardItemDragStartHandler(evt) {
    console.log("ColorDialog ::: cardItemDragStartHandler");
    console.log(" - drag event: ", evt);
    console.log(" - target: ", evt.target);
    console.log(" - start position: ", startPosX, startPosY);
    console.log(" - current position: ", evt.clientX, evt.clientY);
    evt.stopPropagation();
    evt.dataTransfer.dropEffect = "grabbing";
    dragItem.style.cursor = "grabbing";
    isDragging = true;
    startPosX = evt.clientX;
    startPosY = evt.clientY;
  }

  function cardItemDragEnterHandler(evt) {
    console.log("ColorDialog ::: cardItemDragEnterHandler");
    console.log(" - drag event: ", evt);
    evt.dataTransfer.dropEffect = "grabbing";
    evt.preventDefault();
  }

  function cardItemDragLeaveHandler(evt) {
    console.log("ColorDialog ::: cardItemDragLeaveHandler");
    console.log(" - drag event: ", evt);
    evt.dataTransfer.dropEffect = "grabbing";
    evt.preventDefault();
  }

  function cardItemDragHandler(evt) {
    console.log("ColorDialog ::: cardItemDragHandler");
    // evt.preventDefault();
    evt.dataTransfer.dropEffect = "grabbing";
    moveItem.style.cursor = "grabbing";
    dragItem.style.cursor = "grabbing";
    // console.log(" - drag event: ", evt);
    let newPosX = startPosX - evt.clientX + 24;
    let newPosY = startPosY - evt.clientY + 24;

    // let l = Math.max(-24, moveItem.offsetLeft - newPosX);
    // let t = Math.max(-24, moveItem.offsetTop - newPosY);
    let l = moveItem.offsetLeft - newPosX;
    let t = moveItem.offsetTop - newPosY;

    // with each move we also want to update the start X and Y
    startPosX = evt.clientX;
    startPosY = evt.clientY;

    // set the element's new position:
    moveItem.style.left = l + "px";
    moveItem.style.top = t + "px";
  }

  function cardItemDragEndHandler(evt) {
    console.log("ColorDialog ::: cardItemDragEndHandler");
    console.log(" - drag event: ", evt);
    // evt.dataTransfer.dropEffect = "none";
    // evt.preventDefault();
    isDragging = false;

    let newPosX = startPosX - evt.clientX + 24;
    let newPosY = startPosY - evt.clientY + 24;

    // with each move we also want to update the start X and Y
    startPosX = evt.clientX;
    startPosY = evt.clientY;

    // set the element's new position:
    moveItem.style.left = moveItem.offsetLeft - newPosX + "px";
    moveItem.style.top = moveItem.offsetTop - newPosY + "px";
  }

  function pickerUpdateHandler(color) {
    console.log("ColorDialog ::: pickerUpdateHandler");
    console.log(" - color picker:", color);
    console.log(" - old pickerColor value: ", pickerColor.value);
    // Setting the pickerColor value will trigger the `@update:picker-color` event on the component.
    pickerColor.value = color;
    console.log(" - new pickerColor value: ", pickerColor.value);
  }

  function cancelClickHandler() {
    console.log("ColorDialog ::: cancelClickHandler");
    console.log(" - pickerColor: ", pickerColor.value);
    emit("cancel");
  }

  function okClickHandler() {
    console.log("ColorDialog ::: okClickHandler");
    emit("update", pickerColor.value);
  }
</script>

<style>
  .position-modal-picker > .v-overlay__content {
    left: 20px;
    top: 80px;
  }

  .v-overlay__scrim:hover {
    cursor: default !important;
  }

  .v-overlay--active:hover {
    cursor: default !important;
  }
</style>
