<template>
  <v-card :color="palette.isCustom ? palette.customHex : palette.hex">
    <v-card-item>
      <v-card-title class="text-subtitle-1">{{ palette.title }}</v-card-title>
      <!-- <v-card-subtitle class="text-uppercase">
        <code class="mono-sm--text"> {{ palette.customHex ? palette.customHex : palette.hex }}</code>
      </v-card-subtitle> -->
      <template #append>
        <!-- <v-chip size="small" label="P-40">P-40</v-chip> -->
        <v-btn variant="text" size="small" icon="mdi-content-copy" @click="copyClickHandler"> </v-btn>
      </template>
    </v-card-item>
    <v-card-actions class="ga-0">
      <!--  font-mono mono-sm--text font-weight-light -->
      <template v-for="tone in tonalPalettes" :key="`tone-${palette.name}-${tone.tone}`">
        <!-- TODO: UtitlitiesView ::: implement hover dialog with tone details -->
        <!-- border="md" elevation="2" -->
        <v-sheet
          class="d-flex align-center justify-center"
          width="100%"
          height="50"
          :color="tone.hex"
          border="md"
          elevation="2"
          @click="toneButtonClickHandler(tone)"
        >
          <code class="mono-sm--text font-weight-light no-select">
            {{ tone.tone }}
          </code>
        </v-sheet>
      </template>
    </v-card-actions>
  </v-card>
</template>
<script setup>
  import PaletteColor from "@/utils/palettes/palette-color";
  import PaletteCustom from "@/utils/palettes/palette-custom";
  import { onMounted } from "vue";

  const props = defineProps({
    palette: PaletteColor | PaletteCustom,
    tonalPalettes: Array
  });

  const emit = defineEmits(["click:copy"]);

  /**
   * LIFECYCLE HOOKS
   */

  onMounted(() => {
    console.log("PaletteDetailsCard ::: onMounted");
  });

  /**
   * COMPONENT METHODS
   */

  /**
   * EVENT HANDLERS
   */

  function copyClickHandler() {
    console.log("PaletteDetailsCard ::: copyClickHandler");
    let hex = props.palette.isCustom ? props.palette.customHex : props.palette.hex;
    emit("click:copy", hex);
  }

  function toneButtonClickHandler(tone) {
    console.log("PaletteDetailsCard ::: toneButtonClickHandler");
  }
</script>
