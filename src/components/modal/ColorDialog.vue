<template>
  <!-- MODAL COLOR DIALOG -->
  <v-dialog class="position-modal-picker" absolute scrim="false" opacity="0.1" max-width="348" @update:model-value="dialogUpdateHandler">
    <v-card flat>
      <!-- V-CARD HEADER -->
      <drag-modal
        modal-id="color-dialog-item"
        @modal:drag-start="headerDragStartHandler"
        @modal:drag-move="headerDragMoveHandler"
        @modal:drag-end="headerDragEndHandler"
      >
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
      </drag-modal>

      <!-- V-CARD TEXT -->
      <!-- :swatches="flatColorsHex" -->
      <v-card-text class="d-flex pb-2 ga-2">
        <v-color-picker
          class="my-0"
          dot-size="16"
          mode="hex"
          :modes="cpModes"
          :model-value="pickerColor"
          swatches-max-height="300"
          hide-sliders
          show-swatches
          rounded="md"
          @update:model-value="pickerUpdateHandler"
        ></v-color-picker>
      </v-card-text>
      <v-card-actions class="mx-4 mt-0 pt-1">
        <v-spacer></v-spacer>
        <v-btn color="primary-lighten-2" size="small" variant="text" @click.native="cancelClickHandler">Cancel</v-btn>
        <v-btn class="" color="primary-lighten-2" size="small" variant="tonal" @click.native="okClickHandler">Ok</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <!-- </v-layout> -->
</template>

<script setup>
  import { ref, onMounted } from "vue";

  const props = defineProps({
    colorName: {
      type: String,
      required: true,
      default: "color"
    }
  });

  const emit = defineEmits(["change", "update", "cancel"]);
  // defineModel() will automatically update the model when the value changes.
  // It also creates an @update event that is emitted when the value changes: `@update:picker-color`
  const pickerColor = defineModel("pickerColor");

  const cpModes = ["hex"];

  onMounted(() => {
    // console.log("ColorDialog ::: onMounted");
    // console.log(" - pickerColor: ", pickerColor);
  });

  function dialogUpdateHandler(value) {
    console.log("ColorDialog ::: dialogUpdateHandler");
    console.log(" - dialogUpdate: ", value);
    // TODO: ColorDialog ::: implement outside click and esc key --> allow the (color) change or cancel it (reset to old color).
    // When value = false, the dialog is being closed (via ouside click or esc key)
    // For now it is considered an OK and not a Cancel action.
    // Since bindings take care of most things, we do not need to do anything here.
    // emit("change", value);
  }

  function headerDragStartHandler() {
    // console.log("ColorDialog ::: headerDragStartHandler");
  }

  function headerDragMoveHandler(pos) {
    // console.log("ColorDialog ::: headerDragMoveHandler");
    // console.log(" - pos: ", pos);
  }

  function headerDragEndHandler(pos) {
    // console.log("ColorDialog ::: headerDragEndHandler");
    // console.log(" - pos: ", pos);
  }

  function pickerUpdateHandler(color) {
    console.log("ColorDialog ::: pickerUpdateHandler");
    console.log(" - color picker:", color);
    // Setting the pickerColor value will trigger the `@update:picker-color` event on the component.
    pickerColor.value = color;
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

<style lang="scss">
  .position-modal-picker > .v-overlay__content {
    left: 20px;
    top: 80px;
  }

  .v-color-picker {
    .v-color-picker__controls {
      padding-top: 4px;
      padding-bottom: 4px;
    }
    input {
      font-family: "Courier New", Courier, monospace !important;
      border: thin solid rgba(255, 255, 255, 0.15) !important;
    }
  }

  .v-color-picker.v-sheet {
    border: thin solid rgba(0, 0, 0, 0.15);
  }
</style>
