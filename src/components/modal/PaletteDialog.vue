<template>
  <!-- <v-layout row justify-center> -->
  <v-dialog persistent max-width="200">
    <!-- <v-card prepend-icon="mdi-palette" title="Select Theme"> -->
    <v-card>
      <DragModal tag="v-toolbar" modal-id="palette-dialog-header">
        <template v-slot:default>
          <v-toolbar color="primary">
            <v-toolbar-title prepend-icon="mdi-palette" class="text-uppercase">Select Theme</v-toolbar-title>
          </v-toolbar>
        </template>
      </DragModal>
      <!-- <v-divider></v-divider> -->
      <v-card-text class="px-4">
        <!-- Available Theme options -->
        <v-radio-group v-model="selectedTheme" color="deep-orange" density="comfortable" column>
          <v-radio label="Vuetify Light" value="light"></v-radio>
          <v-radio label="Vuetify Dark" value="dark"></v-radio>
          <v-radio label="Builder Light" value="builder-light"></v-radio>
          <v-radio label="Builder Dark" value="builder-dark"></v-radio>
        </v-radio-group>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary-lighten-2" @click="cancelClickHandler">Cancel</v-btn>
        <v-btn color="primary-lighten-2" @click="applyClickHandler">Apply</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <!-- </v-layout> -->
</template>

<script setup>
  import { ref, onMounted } from "vue";
  import DragModal from "./DragModal.vue";

  // `defineEmits` and `defineProps` are a compiler macro and no longer need to be imported.
  // prop names are declared using camelCase but can be used in kebab-case on the parent component.
  const props = defineProps(["selectedTheme"]);
  const emit = defineEmits(["cancel", "submit"]);

  const selectedTheme = ref(props.selectedTheme);

  onMounted(() => {
    console.log("PaletteDialog ::: onMounted");
    console.log(" - props selectedTheme: ", props.selectedTheme);
    console.log(" - selectedTheme: ", selectedTheme.value);
  });

  /**
   * Emits "cancel" event to parent component to close the dialog.
   */
  function cancelClickHandler() {
    console.log("PaletteDialog ::: cancelClickHandler");
    emit("cancel");
  }

  /**
   * Emits "submit" event to parent component with the selected theme.
   * @param {string} selectedTheme - The selected theme name.
   */
  function applyClickHandler() {
    console.log("PaletteDialog ::: applyClickHandler");
    console.log(" - selectedTheme: ", selectedTheme.value);
    emit("update", selectedTheme.value);
  }
</script>
