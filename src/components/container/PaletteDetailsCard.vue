<template>
  <v-card :color="palette.isCustom ? palette.customHex : palette.hex">
    <v-card-item>
      <v-card-title class="text-subtitle-1">{{ palette.title }}</v-card-title>
      <!-- <v-card-subtitle class="text-uppercase">
        <code class="mono-sm--text"> {{ palette.customHex ? palette.customHex : palette.hex }}</code>
      </v-card-subtitle> -->
      <template #append>
        <!-- <v-chip size="small" label="P-40">P-40</v-chip> -->
        <v-btn icon="mdi-content-copy" size="small" variant="plain" @click="copyClickHandler"> </v-btn>
      </template>
    </v-card-item>
    <v-card-actions class="ga-0">
      <!--  font-mono mono-sm--text font-weight-light -->
      <template v-for="tone in tonalPalettes" :key="`tone-${palette.name}-${tone.tone}`">
        <!-- [*] v-hover is required to gather/set the data for the hover alert -->
        <v-hover @update:model-value="toneButtonHoverHandler(tone, $event)">
          <template v-slot:default="{ isHovering, props }">
            <v-sheet
              class="d-flex align-center justify-center"
              width="100%"
              height="50"
              v-bind="props"
              :color="tone.hex"
              border="md"
              elevation="2"
            >
              <code class="mono-sm--text font-weight-light no-select">
                {{ tone.tone }}
              </code>
              <v-menu
                activator="parent"
                location="top"
                open-on-hover
                open-delay="200"
                close-delay="50"
                transition="slide-x-transition"
                persistent
                :close-on-content-click="false"
                :scrim="false"
              >
                <!-- TODO: UtitlitiesView ::: Refactor hover alert into separate component -->
                <v-alert :color="tone.hex" width="380" density="compact" variant="elevated" class="elevation-10">
                  <v-card-item>
                    <v-card-subtitle>
                      <span>tone: </span>
                      <code class="mono-sm--text font-weight-light"> {{ tone.tone }} </code>
                    </v-card-subtitle>
                    <v-card-subtitle>
                      <span>hex: </span>
                      <code class="mono-sm--text font-weight-light"> {{ tone.hex }} </code>
                    </v-card-subtitle>
                    <v-card-subtitle>
                      <span>argb: </span>
                      <code class="mono-sm--text font-weight-light"> {{ tone.argb }} </code>
                    </v-card-subtitle>
                  </v-card-item>
                  <!-- TONE INFO TEXT -->
                  <v-card-text>
                    <article class="text-body-2" v-html="hoverToneInfo"></article>
                  </v-card-text>
                </v-alert>
              </v-menu>
            </v-sheet>
          </template>
        </v-hover>
      </template>
    </v-card-actions>
  </v-card>
</template>
<script setup>
  import PaletteCore from "@/utils/palettes/palette-core";
  import PaletteCustom from "@/utils/palettes/palette-custom";
  import { ref, onMounted, watch, toRef } from "vue";

  const props = defineProps({
    palette: PaletteCore | PaletteCustom,
    tonalPalettes: Array,
    toneDetails: Object
  });

  const emit = defineEmits(["click:copy"]);

  const hoverTone = ref(null);
  const hoverToneInfo = ref(null);

  /**
   * LIFECYCLE HOOKS
   */

  onMounted(() => {
    console.log("PaletteDetailsCard ::: onMounted");
    // console.log(" - props toneDetails: ", props.toneDetails);
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

  function toneButtonHoverHandler(value, hover) {
    // console.log("PaletteDetailsCard ::: toneButtonHoverHandler");
    // console.log(" - value: ", value);
    // console.log(" - hover: ", hover);
    let info = props.toneDetails.tones.find((t) => t.tone === value.tone).info;
    // console.log(" - tone info: ", info);
    hoverTone.value = value;
    hoverToneInfo.value = info;
  }
</script>
