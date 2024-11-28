<template>
  <v-card class="d-flex flex-column mb-4" :color="themeColor.hex" density="compact">
    <v-card-item>
      <v-card-title class="text-body-1 font-weight-light text-theme-color" :style="titleStyle">
        {{ themeColor.title }}
      </v-card-title>
      <v-card-subtitle class="text-theme-color text-uppercase" :style="titleStyle">
        <code class="mono-sm--text font-weight-light">{{ themeColor.hex }}</code>
      </v-card-subtitle>
      <template #append>
        <v-chip size="small" link @click="toggleExpandClickHandler()">
          <code class="mono-sm--text font-weight-light"> {{ themeColor.label }} </code>
        </v-chip>
        <v-btn icon="mdi-content-copy" size="small" variant="plain" @click="copyColorClickHandler" />
        <!-- <v-btn icon="mdi-select-color" size="small" variant="text" /> -->
      </template>
    </v-card-item>
    <v-expand-transition duration="500">
      <!-- The `card-text` has bottom padding and margin removed. -->
      <!-- A fixed height is set based on a bottom padding of 0.625 rem (same as card-item top padding) -->
      <!-- This fixes the expand-transition stuttering issue -->
      <v-card-text
        v-show="themeColor.toggle"
        :key="`theme-light-text-${themeColor.name}-${cardIndex}`"
        class="pb-0 mb-0"
        style="height: 50px"
      >
        <!-- v-if="isExpanded" -->
        <v-slider
          class="theme-slider-track mx-0"
          color="primary-lighten-2"
          label="Tone"
          min="5"
          max="95"
          step="5"
          track-size="10"
          v-model="themeColor.tone"
          @update:model-value="toneSliderUpdateHandler"
        >
          <template #append>
            <!-- <v-btn class="ma-0" icon="mdi-refresh" size="small" variant="text" @click="refreshClickHandler"></v-btn> -->
            <v-btn class="ma-0" icon="mdi-arrow-u-left-top" size="small" variant="plain" @click="refreshClickHandler"></v-btn>
          </template>
        </v-slider>
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
    // isDark: Boolean,
    includeOnColors: Boolean
    // alwaysExpanded: Boolean
  });

  const emit = defineEmits(["click:copy", "update:tone"]);

  /**
   * LIFECYCLE HOOKS
   */

  onMounted(() => {
    console.log("ThemeColorCard ::: onMounted");
  });

  /**
   * COMPUTED PROPERTIES
   */

  const isExpanded = computed(() => props.themeColor.toggle);

  // @see https://www.telerik.com/blogs/passing-variables-to-css-on-a-vue-component
  // @see https://www.lambdatest.com/blog/css-color-contrast/
  const titleStyle = computed(() => {
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
   * This is needed because the theme color hex value needs to be updated as well,
   * which is determined by the palette the theme color belongs to.
   *
   * @emits {ThemeColor} update:tone - The theme color object with its updated tone value.
   */
  function toneSliderUpdateHandler(tone) {
    console.log("ThemeColorCard ::: toneSliderUpdateHandler");
    // console.log(" - tone: ", tone);
    // console.log(" - themeColor tone: ", props.themeColor.tone);
    emit("update:tone", props.themeColor);
  }

  /**
   * Resets the theme color's tone value to its original value.
   *
   * Emits an update event with the theme color object when the tone slider value changes.
   * This is needed because the theme color hex value needs to be reset as well,
   * which is determined by the palette the theme color belongs to.
   *
   * @emits {ThemeColor} update:tone - The theme color object with its updated tone value.
   */
  function refreshClickHandler() {
    console.log("ThemeColorCard ::: refreshClickHandler");
    props.themeColor.resetTone();
    emit("update:tone", props.themeColor);
  }
</script>

<style scoped lang="scss">
  .text-theme-color {
    // color: color-contrast(var(--on-title-color) vs var(--bg-title-color)) !important;
    color: var(--on-title-color) !important;
    // background-color: var(--bg-title-color) !important;
  }
</style>
