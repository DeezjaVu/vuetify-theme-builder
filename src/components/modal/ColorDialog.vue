<template>
  <!-- <v-layout row justify-center> -->
  <v-dialog v-model="props.modalColorOpen" persistent max-width="348">
    <v-card title="Pick a color" :subtitle="props.colorName" flat>
      <!-- <v-card-title>Pick a color</v-card-title> -->

      <!-- :swatches="flatColorsHex" -->
      <!-- :model-value="props.selectedColor" -->
      <v-card-text>
        <v-color-picker
          width="100%"
          min-width="300"
          dot-size="16"
          mode="hex"
          :modes="cpModes"
          :model-value="pickerColor"
          hide-sliders
          show-swatches
          swatches-max-height="300"
          rounded="md"
          class="my-0 bg-transparent"
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

  const props = defineProps(["modalColorOpen", "colorName"]);
  const emit = defineEmits(["change", "update", "cancel"]);
  // defineModel() will automatically update the model when the value changes.
  // it also creates an @update event that is emitted when the value changes: `@update:picker-color`
  const pickerColor = defineModel("pickerColor");

  const cpModes = ["hex"];

  onMounted(() => {
    console.log("ColorDialog ::: onMounted");
    console.log(" - pickerColor: ", pickerColor);
  });

  function pickerUpdateHandler(color) {
    console.log("ColorDialog ::: pickerUpdateHandler");
    console.log(" - color picker:", color);
    console.log(" - old pickerColor: ", pickerColor.value);
    // Setting the pickerColor value will trigger the `@update:picker-color` event on the component.
    pickerColor.value = color;
    console.log(" - new pickerColor: ", pickerColor.value);
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
