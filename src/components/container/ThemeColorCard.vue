<template>
  <v-card class="d-flex flex-column mb-4" :color="themeColor.hex" density="compact">
    <v-card-item>
      <v-card-title class="text-body-1 font-weight-light theme-title" :style="titleStyle">
        {{ themeColor.title }}
      </v-card-title>
      <v-card-subtitle class="text-uppercase">
        <code class="mono-sm--text font-weight-light">{{ themeColor.hex }}</code>
      </v-card-subtitle>
      <template #append>
        <v-chip size="small" link @click="toggleExpandClickHandler()">
          <code class="mono-sm--text font-weight-light"> {{ themeColor.label }} </code>
        </v-chip>
        <v-btn icon="mdi-content-copy" size="small" variant="text" @click="copyColorClickHandler" />
        <!-- <v-btn icon="mdi-select-color" size="small" variant="text" /> -->
      </template>
    </v-card-item>
    <v-expand-transition duration="150">
      <v-card-text v-show="themeColor.toggle" :key="`theme-light-text-${themeColor.name}-${cardIndex}`" style="height: 46px">
        <!-- show-ticks="always" -->
        <!-- tick-size="5" -->
        <!-- v-if="themeColor.toggle" -->
        <v-slider
          v-if="isExpanded"
          class="theme-slider-track"
          color="primary-lighten-2"
          min="10"
          max="90"
          step="5"
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
  import ThemeColor from "@/utils/theme/theme-color";
  import { computed, ref, onMounted, toRef, watch } from "vue";

  const props = defineProps({
    themeColor: ThemeColor,
    cardIndex: Number,
    isDark: Boolean,
    includeOnColors: Boolean
    // alwaysExpanded: Boolean
  });

  const emit = defineEmits(["click:copy", "update:tone"]);

  /**
   * LIFECYCLE HOOKS
   */

  onMounted(() => {
    console.log("ThemeColorCard ::: onMounted");
    // console.log(" - themeColor: ", props.themeColor);
  });

  /**
   * COMPUTED PROPERTIES
   */

  const isExpanded = computed(() => props.themeColor.toggle);

  // @see https://www.telerik.com/blogs/passing-variables-to-css-on-a-vue-component
  // @see https://www.lambdatest.com/blog/css-color-contrast/
  const titleStyle = computed(() => {
    console.log("ThemeColorCard ::: titleStyle");
    if (!props.includeOnColors) return {};
    return {
      "--on-title-color": props.themeColor.onHex,
      "--bg-title-color": props.themeColor.hex
    };
  });

  /**
   * COMPONENT METHODS
   */

  /**
   * EVENT HANDLERS
   */

  /**
   * Emits a click event with the theme color's hex value.
   *
   * @emits {string} click:copy - The theme color's hex value.
   */
  function copyColorClickHandler() {
    console.log("ThemeColorCard ::: copyColorClickHandler");
    emit("click:copy", props.themeColor.hex);
  }

  /**
   * Toggles the theme color card's expanded state.
   *
   * Sets the `toggle` property of the `themeColor` object to its opposite value.
   * This causes the theme color card to expand or collapse, depending on its current state.
   */
  function toggleExpandClickHandler() {
    console.log("ThemeColorCard ::: toggleExpandClickHandler");
    props.themeColor.toggle = !props.themeColor.toggle;
  }

  /**
   * Emits an update event with the theme color object when the tone slider value changes.
   *
   * The emitted event is `update:tone` and its payload is the full `themeColor` object.
   * This is needed because the theme color hex value is determined by the palette the theme color belongs to and the tone value.
   *
   * @emits {ThemeColor} update:tone - The theme color object with its updated tone value.
   */
  function toneSliderUpdateHandler(tone) {
    console.log("ThemeColorCard ::: toneSliderUpdateHandler");
    // console.log(" - tone: ", tone);
    // console.log(" - themeColor tone: ", props.themeColor.tone);
    emit("update:tone", props.themeColor);
  }
</script>

<style scoped lang="scss">
  .theme-title {
    // color: color-contrast(var(--on-title-color) vs var(--bg-title-color)) !important;
    color: var(--on-title-color) !important;
    // background-color: var(--bg-title-color) !important;
  }
</style>
