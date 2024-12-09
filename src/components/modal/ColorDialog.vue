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
        </v-card-item>
      </drag-modal>

      <!-- V-CARD TEXT -->
      <v-card-text class="pb-2">
        <v-select
          label="Swatch Colors"
          class="mb-3"
          v-model="swatchPreset"
          :items="presetSwatches"
          auto-select-first="exact"
          variant="outlined"
          hide-details
          density="compact"
        >
        </v-select>

        <v-color-picker
          class="modal-color-picker my-0"
          dot-size="16"
          mode="hex"
          v-model="pickerColor"
          :modes="cpModes"
          :swatches="cpSwatches"
          swatches-max-height="300"
          hide-sliders
          show-swatches
          rounded="md"
        ></v-color-picker>
      </v-card-text>
      <v-card-actions class="mx-4 mt-0 pt-1">
        <!-- <v-spacer></v-spacer> -->
        <v-btn color="primary-lighten-2" size="small" variant="text" @click.native="cancelClickHandler">Cancel</v-btn>
        <v-btn color="primary-lighten-2" size="small" variant="tonal" @click.native="okClickHandler">Ok</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <!-- </v-layout> -->
</template>

<script setup>
  import { ref, onMounted, computed } from "vue";
  import vuetifyColors from "@/utils/color/vuetify-colors";
  import bootstrapColors from "@/utils/color/bootstrap-colors";
  import tailwindColors from "@/utils/color/tailwind-colors";
  import flatColors from "@/utils/color/flat-colors";
  // import primeviewColors from "@/utils/color/pv-lara-colors";
  import metroColors from "@/utils/color/metro-colors";

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
  const swatchPreset = defineModel("swatchPreset", { default: "material" });

  const cpModes = ["hex"];

  const presetSwatches = ref([
    { title: "Material Design (default)", value: "material", swatches: vuetifyColors.swatches },
    { title: "Bootstrap", value: "bootstrap", swatches: bootstrapColors.swatches },
    { title: "Tailwind", value: "tailwind", swatches: tailwindColors.swatches },
    // { title: "PrimeView", value: "primeview", swatches: primeviewColors.swatches },
    { title: "Flat", value: "flat", swatches: flatColors.swatches },
    { title: "Metro UI", value: "metro", swatches: metroColors.swatches }
  ]);
  // const selectedSwatches = ref("material");

  // const cpSwatches = ref(vuetifyColors.swatches);
  const cpSwatches = computed(() => {
    let swatches = presetSwatches.value.find((item) => item.value === swatchPreset.value).swatches;
    return swatches;
  });

  onMounted(() => {
    // console.log("ColorDialog ::: onMounted");
    // console.log(" - pickerColor: ", pickerColor.value);
    // console.log(" - swatchPreset.value: ", swatchPreset.value);
  });

  // function swatchPresetChangeHandler(value) {
  //   console.log("ColorDialog ::: swatchPresetChangeHandler");
  //   console.log(" - value: ", value);
  // }

  function dialogUpdateHandler(value) {
    // console.log("ColorDialog ::: dialogUpdateHandler");
    // console.log(" - dialogUpdate: ", value);
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

  // function pickerUpdateHandler(color) {
  // console.log("ColorDialog ::: pickerUpdateHandler");
  // console.log(" - color picker:", color);
  // Setting the pickerColor value will trigger the `@update:picker-color` event on the component.
  // This is currently not used, as the color picker v-model is used instead, which automatically updates the model.
  // pickerColor.value = color;
  // }

  function cancelClickHandler() {
    // console.log("ColorDialog ::: cancelClickHandler");
    // console.log(" - pickerColor: ", pickerColor.value);
    emit("cancel");
  }

  function okClickHandler() {
    // console.log("ColorDialog ::: okClickHandler");
    emit("update", pickerColor.value);
  }
</script>

<style lang="scss">
  .position-modal-picker > .v-overlay__content {
    left: 20px;
    top: 80px;
  }

  .modal-color-picker {
    .v-color-picker__controls {
      padding-top: 4px;
      padding-bottom: 4px;
    }
    .v-color-picker-edit {
      margin-top: 8px !important;
      input {
        font-family: "Courier New", Courier, monospace !important;
        border: thin solid rgba(255, 255, 255, 0.15) !important;
      }
      span {
        display: none;
      }
    }
  }
</style>
