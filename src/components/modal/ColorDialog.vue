<template>
  <!-- MODAL COLOR DIALOG -->
  <v-dialog
    class="position-modal-picker"
    :max-width="smAndUp ? 348 : `100%`"
    opacity="0.10"
    :absolute="smAndUp"
    :fullscreen="!smAndUp"
    @update:model-value="dialogUpdateHandler"
  >
    <v-card density="compact">
      <!-- V-CARD HEADER -->
      <template v-if="smAndUp">
        <!-- Enable dragging for desktop -->
        <drag-modal modal-id="color-dialog-item">
          <v-card-item>
            <v-card-title class="text-title-1"> Select Color </v-card-title>
            <v-card-subtitle> {{ props.colorName }} </v-card-subtitle>
          </v-card-item>
        </drag-modal>
      </template>
      <!-- Disable dragging for mobile -->
      <template v-else>
        <v-card-item>
          <v-card-title class="text-title-1"> Select Color </v-card-title>
          <v-card-subtitle> {{ props.colorName }} </v-card-subtitle>
        </v-card-item>
      </template>

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
          :width="smAndUp ? 300 : `100%`"
          :max-width="smAndUp ? 300 : `100%`"
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
  import { useDisplay } from "vuetify";

  import ColorSwatchNames from "@/utils/color/color-swatches";

  const props = defineProps({
    colorName: {
      type: String,
      required: true,
      default: "color"
    }
  });

  const emit = defineEmits(["change", "update", "cancel", "update:swatch-preset"]);
  // defineModel() will automatically update the model when the value changes.
  // It also creates an @update event that is emitted when the value changes: `@update:picker-color`
  const pickerColor = defineModel("pickerColor");

  const swatchPreset = defineModel("swatchPreset", {
    default: "material",
    get: (value) => {
      let swatches = presetSwatches.value.find((swatch) => swatch.value === value);
      if (!swatches) emit("update:swatch-preset", "material");
      return swatches ? value : "material";
    }
  });

  const { mobile, smAndUp } = useDisplay();

  const cpModes = ["hex"];

  const presetSwatches = ref(ColorSwatchNames.presets);

  // const cpSwatches = ref(vuetifyColors.swatches);
  const cpSwatches = computed(() => {
    let swatches = ColorSwatchNames.getSwatchesFor(swatchPreset.value);
    return swatches;
  });

  onMounted(() => {
    console.log("ColorDialog ::: onMounted");
    // const presets = ColorSwatchNames.presets;
    // console.log(" - presets: ", presets);
  });

  function dialogUpdateHandler(value) {
    // console.log("ColorDialog ::: dialogUpdateHandler");
    // console.log(" - dialogUpdate: ", value);
    // TODO: ColorDialog ::: implement outside click and esc key --> allow the (color) change or cancel it (reset to old color).
    // When value = false, the dialog is being closed (via ouside click or esc key)
    // For now it is considered an OK and not a Cancel action.
    // Since bindings take care of most things, we do not need to do anything here.
    // emit("change", value);
  }

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
    left: 0px;
    top: 0px;
  }

  @media only screen and (min-width: 768px) {
    .position-modal-picker > .v-overlay__content {
      left: 20px;
      top: 80px;
    }
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
