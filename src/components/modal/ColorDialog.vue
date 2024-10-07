<template>
  <!-- <v-layout row justify-center> -->
  <!--  max-width="348" -->
  <v-dialog v-model="props.modalColorOpen" persistent max-width="348">
    <!-- <v-card title="Pick a color" :subtitle="props.colorName" flat> -->
    <v-card flat>
      <!-- V-CARD HEADER -->
      <v-card-item>
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
        <!-- <v-color-picker
          dot-size="16"
          mode="hex"
          :modes="cpModes"
          :model-value="pickerColor"
          hide-canvas
          hide-sliders
          hide-inputs
          show-swatches
          swatches-max-height="300"
          rounded="md"
          class="my-0 v-swatches-pt-0"
          @update:model-value="pickerUpdateHandler"
        ></v-color-picker> -->
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
  // It also creates an @update event that is emitted when the value changes: `@update:picker-color`
  const pickerColor = defineModel("pickerColor");

  const cpModes = ["hex"];

  onMounted(() => {
    console.log("ColorDialog ::: onMounted");
    console.log(" - pickerColor: ", pickerColor);
  });

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
