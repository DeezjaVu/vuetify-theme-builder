<template>
  <v-container class="fill-height align-baseline px-2 px-sm-12 mx-auto">
    <v-row class="align-sm-stretch">
      <!-- LEFT SIDE COLUMN - COLOR MENU -->
      <v-col cols="12" sm="6" md="6" lg="4" xl="3" class="d-flex flex-column">
        <!-- COLOR DIALOG -->
        <!-- :modal-color-open="modalColorOpen" -->
        <ColorDialog
          id="color-dialog"
          v-model="modalColorOpen"
          :color-name="selectedColorName"
          v-model:picker-color="selectedColor"
          v-model:swatch-preset="selectedSwatches"
          @update:picker-color="editColorChangeHandler"
          @update:swatch-preset="swatchPresetChangeHandler"
          @update="editColorUpdateHandler"
          @cancel="editColorCancelHandler"
        />
        <!-- THEME COLORS LIST MENU -->
        <!-- <v-card title="Theme Colors" subtitle="Material Design" variant="outlined"> -->
        <v-card class="bg-surface" density="compact">
          <!-- V-CARD HEADER -->
          <v-card-item>
            <v-card-title> Theme Colors </v-card-title>
            <v-card-subtitle> Material Design </v-card-subtitle>
            <template v-slot:append>
              <!-- <v-btn icon="mdi-palette" variant="tonal" density="comfortable" /> -->
              <v-btn icon="mdi-cog" density="comfortable" size="small" variant="plain" @click="showSettings = !showSettings"> </v-btn>
            </template>
          </v-card-item>
          <!-- SETTINGS -->
          <v-expand-transition>
            <template v-if="showSettings">
              <v-row no-gutters>
                <v-col>
                  <v-card variant="tonal">
                    <v-card-item>
                      <v-card-title class="text-subtitle-1"> Settings </v-card-title>
                      <template #append>
                        <v-btn icon="mdi-help" density="comfortable" size="small" variant="plain" @click="modalHelpOpen = !modalHelpOpen">
                        </v-btn>
                      </template>
                    </v-card-item>

                    <!-- label="Theme" -->
                    <v-card-text>
                      <v-radio-group
                        class="text-label-1"
                        v-model="themeName"
                        color="primary-lighten-2"
                        density="compact"
                        inline
                        :ripple="false"
                        hide-details
                      >
                        <v-radio class="text-label-2 mr-2" label="Builder Light" value="builder-light"></v-radio>
                        <v-radio class="text-label-2 mr-2" label="Builder Dark" value="builder-dark"></v-radio>
                      </v-radio-group>

                      <v-select
                        label="Theme Preset"
                        class="mt-4 mb-2"
                        v-model="selectedThemePreset"
                        :items="presetThemes"
                        auto-select-first="exact"
                        variant="outlined"
                        density="compact"
                        hide-details
                        @update:model-value="themePresetChangeHandler"
                      >
                        <!-- NOTE: v-select menu items (v-list-item) are styled in main.scss -->
                        <template v-slot:append>
                          <v-btn
                            icon="mdi-reload"
                            density="comfortable"
                            size="small"
                            variant="plain"
                            @click="themePresetResetHandler"
                          ></v-btn>
                        </template>
                      </v-select>

                      <v-checkbox
                        class="text-label-2"
                        v-model="showSurfaceColors"
                        color="primary-lighten-2"
                        density="compact"
                        hide-details
                        @update:model-value="showSurfaceColorsUpdateHandler"
                      >
                        <template v-slot:label>
                          <span>Show all <code>`surface`</code> colors</span>
                        </template>
                      </v-checkbox>

                      <v-checkbox
                        class="text-label-2"
                        v-model="showMessageColors"
                        color="primary-lighten-2"
                        density="compact"
                        hide-details
                        @update:model-value="showMessageColorsUpdateHandler"
                      >
                        <template v-slot:label>
                          <span>Show <code>`message`</code> colors</span>
                        </template>
                      </v-checkbox>
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-item>
                      <v-card-title class="text-subtitle-1"> Color Picker </v-card-title>
                    </v-card-item>

                    <v-card-text class="pt-2">
                      <v-select
                        label="Swatch Colors"
                        v-model="selectedSwatches"
                        :items="presetSwatches"
                        auto-select-first="exact"
                        variant="outlined"
                        hide-details
                        density="compact"
                        @update:model-value="swatchPresetChangeHandler"
                      >
                        <!-- NOTE: v-select menu items (v-list-item) are styled in main.scss -->
                        <template v-slot:append>
                          <v-btn
                            icon="mdi-information-slab-circle-outline"
                            density="comfortable"
                            size="small"
                            variant="plain"
                            @click="swatchPresetInfoHandler"
                          ></v-btn>
                        </template>
                      </v-select>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </template>
          </v-expand-transition>
          <v-row no-gutters>
            <v-col>
              <!-- PALETTE COLORS -->
              <v-card-text class="my-2">
                <template v-for="item in paletteColors" :key="item.name">
                  <v-expand-transition>
                    <v-row v-if="item.enabled">
                      <v-col class="py-1">
                        <!-- PALETTE COLOR CARD -->
                        <v-card class="rounded-e-pill rounded-s-pill" variant="flat" color="secondary" density="compact">
                          <v-card-item class="px-3">
                            <template #prepend>
                              <v-btn class="mr-4" :color="themeColors[item.name]" icon @click="editColorClickHandler(item.name)"></v-btn>
                            </template>
                            <v-card-title class="text-body-1 font-weight-light">
                              {{ item.title }}
                            </v-card-title>
                            <v-card-subtitle class="text-subtitle-2 font-mono font-weight-light">
                              {{ themeColors[item.name] }}
                            </v-card-subtitle>
                          </v-card-item>
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-expand-transition>
                </template>
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </v-col>

      <!-- RIGHT SIDE COLUMN - CONTENT -->
      <v-col class="flex-shrink-1 col-content">
        <v-theme-provider :theme="themeName" with-background>
          <!-- V-CARD -->
          <v-card title="Button Components" subtitle="Dark Theme" variant="outlined">
            <!-- V-CARD TEXT -->
            <v-card-text>
              <v-row class="d-flex flex-wrap">
                <!-- COLOR BUTTON CARDS LOOP -->
                <v-col v-for="item in variantCards" :key="item" lg="4" xl="2">
                  <ColorButtonCard :subtitle="item.title" />
                </v-col>
              </v-row>
            </v-card-text>
            <v-divider></v-divider>
            <!-- <v-overlay opacity="0.12" scrim="warning" contained model-value persistent /> -->
          </v-card>
        </v-theme-provider>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import { onMounted, ref, reactive } from "vue";

  import { storeToRefs } from "pinia";

  import { useBuilderThemeStore } from "@/stores/builder-theme";

  import ColorSwatches from "@/utils/color/color-swatches";

  console.log("=========================");
  console.log("ColorsView ::: setup");
  console.log("=========================");

  const builderThemeStore = useBuilderThemeStore();

  const showSettings = ref(false);

  const { themeName, showSurfaceColors, showMessageColors, paletteColors, themeColors } = storeToRefs(builderThemeStore);

  const modalColorOpen = ref(false);
  const modalHelpOpen = ref(false);

  // const selectedTheme = ref("builder-dark");

  // const builderThemeDark = builderThemeStore.builderDark;
  // const builderThemeLight = builderThemeStore.builderLight;

  // const themeColors = builderThemeDark.colors;

  const selectedColor = ref("");
  const tempColor = ref("");
  const selectedColorName = ref("");

  const presetThemes = [
    { title: "Material Design (default)", value: "material" },
    { title: "Bootswatch Darkly", value: "bsDarkly" },
    { title: "Bootstrap 5 Dark", value: "bsDark" },
    { title: "Bootstrap 5 Light", value: "bsLight" }
  ];
  const selectedThemePreset = ref("material");

  const presetSwatches = ref(ColorSwatches.presets);
  // TODO: move selectedSwatches to the store to maintain its setting across pages.
  const selectedSwatches = ref("material");

  const variantCards = [
    { title: "Elevated Variant", variant: "elevated" },
    { title: "Flat Variant", variant: "flat" },
    { title: "Outlined Variant", variant: "outlined" },
    { title: "Plain Variant", variant: "plain" },
    { title: "Tonal Variant", variant: "tonal" },
    { title: "Text Variant", variant: "text" }
  ];

  /**
   * LIFECYCLE HOOKS
   */

  onMounted(() => {
    console.log("ColorsView onMounted");
    console.log(" - themeStore - themeName: ", builderThemeStore.themeName);
    console.log(" - themeStore - themeColors: ", builderThemeStore.themeColors);
  });

  /**
   * METHODS
   */

  function darkThemeChangeHandler(value) {
    console.log("ColorsView ::: darkThemeChangeHandler");
    console.log(" - value: ", value);
  }

  /**
   * Updates the visibility of `surface` colors in the Theme Colors menu.
   *
   * This function is triggered when the "show surface colors" setting is changed.
   *
   * @param {boolean} value - Indicates whether surface colors should be displayed.
   */
  function showSurfaceColorsUpdateHandler(value) {
    console.log("ColorsView ::: showSurfaceColorsUpdateHandler");
    console.log(" - value: ", value);
    // store automatically updates `message` colors, so no need to do anything here.
  }

  /**
   * Updates the visibility of `message` colors in the Theme Colors menu.
   *
   * This function is triggered when the "show message colors" setting is changed.
   *
   * @param {boolean} value - Indicates whether message colors should be displayed.
   */
  function showMessageColorsUpdateHandler(value) {
    console.log("ColorsView ::: showMessageColorsUpdateHandler");
    console.log(" - value: ", value);
    // store automatically updates `message` colors, so no need to do anything here.
  }

  function themePresetChangeHandler(value) {
    console.log("ColorsView ::: themePresetChangeHandler");
    console.log(" - value: ", value);
  }

  function themePresetResetHandler() {
    console.log("ColorsView ::: themePresetResetHandler");
    console.log(" - selectedThemePreset: ", selectedThemePreset.value);
  }

  function swatchPresetChangeHandler(value) {
    console.log("ColorsView ::: swatchPresetChangeHandler");
    console.log(" - value: ", value);
  }

  function swatchPresetInfoHandler() {
    console.log("ColorsView ::: swatchPresetInfoHandler");
    console.log(" - selectedSwatches: ", selectedSwatches.value);
  }

  /**
   * Handles the click event on the colors view component.
   *
   * Opens the modal to edit the selected color.
   *
   * @param {string} propName - The name of the property to update, e.g. "primary", "secondary", ...
   *
   * @example
   *   editColorClickHandler("primary");
   *
   */
  function editColorClickHandler(propName) {
    console.log("ColorsView ::: editColorClickHandler");
    console.log(" - editing color: ", propName, themeColors.value[propName]);
    selectedColorName.value = propName;
    // Set the selected color to the current theme color.
    selectedColor.value = themeColors.value[propName];
    // Will be used to cancel the update
    tempColor.value = selectedColor.value;
    modalColorOpen.value = true;
  }

  function editColorChangeHandler(color) {
    console.log("ColorsView ::: editColorChangeHandler");
    console.log(" - modal color: ", color);
    console.log(" - selected color: ", selectedColor.value);
    let colorName = selectedColorName.value;
    // Assigning the color to the store's `themeColors` object ref
    // will automatically update the actual Vuetify theme.
    themeColors.value[colorName] = color;
  }

  /**
   * Handles the update event of the modal to edit a color.
   *
   * Closes the modal and does not update the theme color,
   * as the color was already changed in the `editColorChangeHandler` event handler.
   *
   * @param {string} color - The color entered in the modal.
   */
  function editColorUpdateHandler(color) {
    console.log("ColorsView ::: editColorUpdateHandler");
    console.log(" - modal color: ", color);
    console.log(" - selected color: ", selectedColor.value);
    // close the modal
    modalColorOpen.value = false;
  }

  /**
   * Handles the cancel event of the modal to edit a color.
   *
   * Sets the theme color back to its original value before the modal was opened.
   *
   */
  function editColorCancelHandler() {
    console.log("ColorsView ::: editColorCancelHandler");
    console.log(" - selectedColor: ", selectedColor.value);
    console.log(" - tempColor: ", tempColor.value);
    let colorName = selectedColorName.value;
    console.log(" - builderThemeDark.colors: ", colorName, themeColors.value[colorName]);
    // set the theme color back to its original value
    themeColors.value[colorName] = tempColor.value;
    modalColorOpen.value = false;
  }
</script>

<style scoped lang="scss">
  // Disables the active state of list items.
  // @see https://github.com/vuetifyjs/vuetify/issues/11149#issuecomment-1030649721
  // .active-disabled :deep(.v-list-item__overlay) {
  // opacity: 0 !important;
  // }

  .text-label-1 {
    font-size: 0.9rem !important;
    font-weight: 400 !important;
    :deep(.v-label) {
      font-size: 0.9rem !important;
      font-weight: 400 !important;
      // color: #ffffff;
      opacity: 1 !important;
    }
  }

  .text-label-2 {
    font-size: 0.875rem !important;
    font-weight: 400 !important;
    :deep(.v-label) {
      font-size: 0.875rem !important;
      font-weight: 400 !important;
      // color: #ffffff !important;
      opacity: 1 !important;
    }
  }

  // Remove margin between radio group label and radio controls
  .v-radio-group > :deep(.v-input__control) > .v-label + .v-selection-control-group {
    margin-top: 0 !important;
  }

  // sets border color of outlined v-card
  .v-card--variant-outlined {
    border: thin solid #37474f !important;
  }

  .col-grow-2 {
    flex-grow: 2;
  }

  .col-grow-3 {
    flex-grow: 3;
  }

  .col-menu {
    // grow 1 - shrink 1 - basis 300px
    flex: 1 1 300px !important;
  }

  .col-content {
    // flex: 0 0 300px !important;
    flex-grow: 1000;
  }

  .btn-subtitle {
    width: 180px;
  }
</style>
