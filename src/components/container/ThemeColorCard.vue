<template>
  <v-card class="d-flex flex-column mb-4" :color="themeColor.hex" density="compact">
    <v-card-item>
      <v-card-title class="text-body-1 font-weight-light">{{ themeColor.title }}</v-card-title>
      <v-card-subtitle class="text-uppercase">
        <code class="mono-sm--text font-weight-light">{{ themeColor.hex }}</code>
      </v-card-subtitle>
      <template #append>
        <v-chip size="small" link @click="themeColor.toggle = !themeColor.toggle">
          <code class="mono-sm--text font-weight-light"> {{ themeColor.label }} </code>
        </v-chip>
        <v-btn icon="mdi-content-copy" size="small" variant="text" @click="copyColorClickHandler" />
        <!-- <v-btn icon="mdi-select-color" size="small" variant="text" /> -->
      </template>
    </v-card-item>
    <v-expand-transition duration="150">
      <v-card-text v-show="themeColor.toggle" :key="`theme-light-text-${themeColor.name}-${cardIndex}`" style="height: 46px">
        <v-slider
          v-if="themeColor.toggle"
          class="theme-slider-track"
          color="primary-lighten-2"
          min="10"
          max="90"
          step="10"
          show-ticks="always"
          tick-size="5"
          label="Tone"
          track-fill-color="red"
          track-size="1"
          v-model="themeColor.tone"
          @update:model-value="toneSliderUpdateHandler"
        ></v-slider>
      </v-card-text>
    </v-expand-transition>
  </v-card>
</template>
<script setup>
  import CustomColor from "@/utils/theme/custom-color";
  import ThemeColor from "@/utils/theme/theme-color";
  import { onMounted } from "vue";

  const props = defineProps({
    themeColor: ThemeColor | CustomColor,
    cardIndex: Number
  });

  const emit = defineEmits(["click:copy", "update:tone"]);

  onMounted(() => {
    console.log("ThemeColorCard ::: onMounted");
    // console.log(" - themeColor: ", props.themeColor);
  });

  function copyColorClickHandler() {
    console.log("ThemeColorCard ::: copyColorClickHandler");
    emit("click:copy", props.themeColor.hex);
  }

  function toneSliderUpdateHandler(tone) {
    console.log("ThemeColorCard ::: toneSliderUpdateHandler");
    // console.log(" - tone: ", tone);
    // console.log(" - themeColor tone: ", props.themeColor.tone);
    // Send the full `themeColor` object to the parent,
    // as it is needed to determine the correct theme color hex value from the palette.
    emit("update:tone", props.themeColor);
  }
</script>
