<template>
  <!-- [*] THEME FULLSCREEN PREVIEW MODAL DIALOG -->
  <ThemePreviewDialog
    v-model="previewThemeOpen"
    v-model:themeName="previewThemeName"
    @click:close="previewThemeOpen = false"
    @click:copy="copyColorClickHandler"
    @update:themeName="themeNameUpdateHandler"
  />

  <v-container class="fill-height px-2 px-sm-12 mx-auto">
    <!-- [*] TOP ROW - IMAGE CARDS -->
    <v-expand-transition>
      <template v-if="showImageCards">
        <v-window class="v-container pa-0 mt-0 mb-6 mx-auto" show-arrows>
          <v-window-item v-for="(i, idx1) in Math.ceil(picsum.length / rowNumItems)" :key="`row-${idx1}`">
            <v-row class="flex-1-1-100 align-sm-stretch">
              <!-- [*] IMAGE CARDS -->
              <v-col cols="3" v-for="(k, idx2) in rowNumItems" :key="`util-card-${idx1}-${idx2}`">
                <SourceImageCard
                  v-if="idx1 * rowNumItems + idx2 < picsum.length"
                  :image="picsum[idx1 * rowNumItems + idx2]"
                  :index="idx1 * rowNumItems + idx2"
                  :isSelected="idx1 * rowNumItems + idx2 === selectedImageIdx"
                  :allowRefresh="idx1 * rowNumItems + idx2 < 4"
                  @click:select="imageCardSelectHandler"
                  @click:refresh="imageCardRefreshHandler"
                >
                </SourceImageCard>
              </v-col>
            </v-row>
          </v-window-item>
        </v-window>
      </template>
    </v-expand-transition>

    <!-- [*] BOTTOM ROW - PALETTE MENU + PALETTE  CARDS -->
    <!-- flex-1-1-100 is required to maintain a 100% width when the dark and light cards are collapsed -->
    <v-row class="flex-1-1-100">
      <!-- [*] PALETTE MENU - LEFT SIDE COLUMN -->
      <v-col cols="12" sm="6" md="6" lg="4" xl="3" mobile-break-point="760">
        <!-- [*] SOURCE COLOR ROW -->
        <v-row class="flex-grow-0">
          <v-col>
            <!-- [*] SOURCE COLOR CARD -->
            <v-card class="d-flex flex-column" :color="sourceColor" density="compact" max-height="230">
              <v-card-item>
                <v-card-title class="text-subtitle-1">Tonal Palettes</v-card-title>
                <v-card-subtitle class="text-subtitle-2">Source</v-card-subtitle>
                <template #append>
                  <v-btn variant="text" size="small" icon="mdi-export" @click="exportSchemeClickHandler"> </v-btn>
                </template>
              </v-card-item>

              <v-expand-transition>
                <v-card-text class="flex-grow-1 overflow-y-auto" v-if="showVariantInfo">
                  <div v-html="selectedVariantDesc()"></div>
                </v-card-text>
              </v-expand-transition>

              <v-card-actions class="mt-auto px-4">
                <!-- SCHEME VARIANT SELECTION -->
                <span> Scheme Variant: </span>
                <v-select
                  v-model="currentVariant"
                  :items="schemeVariants"
                  auto-select-first="exact"
                  variant="outlined"
                  density="compact"
                  hide-details
                  @update:model-value="schemeVariantChangeHandler"
                >
                  <!-- NOTE: v-select menu items (v-list-item) are styled in main.scss -->
                </v-select>
                <v-btn icon="mdi-cog" size="small" @click="showSettingsClickHandler"></v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>

        <!-- [*] SETTINGS -->

        <v-expand-transition>
          <template v-if="showSettings">
            <!-- NOTE: Adding padding or margin makes the transition jumpy when closing the settings dialog. -->
            <v-row no-gutters>
              <v-col>
                <!-- [*] UI SETTINGS CARD -->
                <v-card variant="tonal">
                  <v-card-item>
                    <v-card-title class="text-subtitle-1">Page UI</v-card-title>
                  </v-card-item>
                  <v-card-text>
                    <v-checkbox
                      class="settings-label"
                      v-model="showImageCards"
                      label="Show images"
                      color="primary-lighten-2"
                      density="compact"
                      hide-details
                      @update:model-value="showImageCardsUpdateHandler"
                    ></v-checkbox>

                    <v-checkbox
                      class="settings-label"
                      v-model="showVariantInfo"
                      label="Show scheme variant info"
                      color="primary-lighten-2"
                      density="compact"
                      hide-details
                      @update:model-value="showVariantInfoUpdateHandler"
                    ></v-checkbox>

                    <v-checkbox
                      class="settings-label"
                      v-model="showPaletteCards"
                      label="Show detail palettes"
                      color="primary-lighten-2"
                      density="compact"
                      hide-details
                      @update:model-value="showPaletteCardsUpdateHandler"
                    ></v-checkbox>

                    <v-checkbox
                      class="settings-label"
                      v-model="expandThemeCards"
                      label="Expand theme cards"
                      color="primary-lighten-2"
                      density="compact"
                      hide-details
                      @update:model-value="expandThemeCardsUpdateHandler"
                    ></v-checkbox>
                  </v-card-text>
                </v-card>

                <v-divider></v-divider>

                <!-- [*] SCHEME SETTINGS CARD -->

                <v-card variant="tonal">
                  <v-card-item>
                    <v-card-title class="text-subtitle-1">Scheme Settings</v-card-title>
                  </v-card-item>
                  <v-card-text>
                    <!-- FIXME: Changing contrast resets all colors, including modified ones. -->
                    <v-slider
                      class="settings-label"
                      v-model="currentContrast"
                      label="Contrast:"
                      min="0"
                      max="1"
                      step="0.5"
                      hide-details
                      density="compact"
                      show-ticks="always"
                      thumb-label
                      @update:model-value="schemeContrastUpdateHandler"
                    >
                    </v-slider>
                    <v-checkbox
                      class="settings-label"
                      v-model="includeOnColors"
                      label="Include `on-` colors"
                      color="primary-lighten-2"
                      density="compact"
                      hint="Include on-primary, on-secondary, etc... theme styles."
                      persistent-hint
                      @update:model-value="includeOnColorsUpdateHandler"
                    ></v-checkbox>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </template>
        </v-expand-transition>

        <!-- [*] PALETTE COLORS MENU BUTTONS (LEFT SIDE COLUMN) -->
        <v-card class="d-flex flex-column flex-grow-1 my-0" density="compact" min-height="810">
          <v-card-text class="my-2">
            <!-- TEST PALETTE COLOR ROW -->
            <!-- 
            <v-row>
              <v-col class="py-1">
                <PaletteItemTestCard
                  :palette="currentScheme.palettes[0]"
                  :paletteIndex="0"
                  v-model:expanded-index="expandedPaletteIndex"
                ></PaletteItemTestCard>
              </v-col>
            </v-row> 
            -->

            <!-- [*] PALETTE COLOR ROWS -->
            <template v-for="(item, idx) in currentScheme.palettes" :key="`palette-core-card-${item.name}-${idx}`">
              <v-row>
                <v-col class="py-1">
                  <!-- [*] PALETTE COLOR MENU CARD -->
                  <PaletteItemCard
                    :palette="item"
                    :paletteIndex="idx"
                    v-model:swatch-preset="swatchPreset"
                    v-model:expanded-index="expandedPaletteIndex"
                    @update:expanded-index="paletteExpandedUpdateHandler($event, idx)"
                    @click:random="randomButtonClickHandler"
                    @click:reset="paletteResetClickHandler"
                    @click:apply="paletteApplyClickHandler"
                  ></PaletteItemCard>
                </v-col>
              </v-row>
            </template>
            <!-- [*] PALETTE CUSTOM COLOR ROWS -->
            <template v-for="(item, idx) in currentScheme.custom" :key="`palette-custom-card-${item.name}-${idx}`">
              <v-row>
                <v-col class="py-1">
                  <!-- [*] PALETTE CUSTOM COLOR MENU CARD -->
                  <PaletteItemCard
                    :palette="item"
                    :paletteIndex="currentScheme.palettes.length + idx"
                    v-model:swatch-preset="swatchPreset"
                    v-model:expanded-index="expandedPaletteIndex"
                    @update:expanded-index="paletteExpandedUpdateHandler($event, idx)"
                    @update:blend="paletteBlendUpdateHandler(item.name, item.blend)"
                    @click:reset="paletteResetClickHandler"
                    @click:apply="paletteApplyClickHandler"
                  ></PaletteItemCard>
                </v-col>
              </v-row>
            </template>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- [*] PALETTE COLOR DETAIL CARDS (RIGHT SIDE COLUMN) -->
      <v-col cols="12" sm="6" md="6" lg="8" xl="9" mobile-break-point="760">
        <v-expand-transition>
          <template v-if="showPaletteCards">
            <v-row>
              <!-- [*] PALETTE DETAILS ROW -->
              <template v-for="item in currentScheme.palettes" :key="`color-details-card-${item.name}`">
                <v-col v-if="item.name !== `source`" cols="12" sm="12" md="12" lg="6" xl="4">
                  <PaletteDetailsCard
                    :palette="item"
                    :tonalPalettes="getTonalPalettesForHex(item.hex)"
                    :toneDetails="ToneDetails.getInfoByName(item.name)"
                    @click:copy="copyColorClickHandler($event)"
                  >
                  </PaletteDetailsCard>
                </v-col>
              </template>
              <!-- [*] CUSTOM PALETTE DETAILS ROW -->
              <template v-for="item in currentScheme.custom" :key="`custom-details-card-${item.name}`">
                <v-col cols="12" sm="12" md="12" lg="6" xl="4">
                  <PaletteDetailsCard
                    :palette="item"
                    :tonalPalettes="getTonalPalettesForHex(item.customHex)"
                    :toneDetails="ToneDetails.getInfoByName(item.name)"
                    @click:copy="copyColorClickHandler($event)"
                  >
                  </PaletteDetailsCard>
                </v-col>
              </template>
            </v-row>
          </template>
        </v-expand-transition>

        <!-- [*] DARK THEME COLORS ROW -->
        <v-row>
          <v-col cols="12">
            <v-card :color="surfaceDark">
              <v-card-item>
                <v-card-title class="text-subtitle-1 font-weight-regular">Dark Theme Colors</v-card-title>
                <template #prepend>
                  <v-btn icon="mdi-export" variant="text" size="small"> </v-btn>
                </template>
                <template #append>
                  <v-btn
                    :icon="showDarkThemeCard ? `mdi-menu-up` : `mdi-menu-down`"
                    variant="text"
                    size="small"
                    @click="showDarkThemeCard = !showDarkThemeCard"
                  >
                  </v-btn>
                  <v-btn icon="mdi-fullscreen" variant="text" size="small" @click="showThemePreview(`dark`)"> </v-btn>
                </template>
              </v-card-item>

              <v-expand-transition>
                <!-- [-] row with `no-gutters` fixes transition stutter -->
                <v-row no-gutters v-if="showDarkThemeCard">
                  <v-col>
                    <v-card-text class="d-flex flex-column pt-4">
                      <v-row>
                        <!-- [*] DARK THEME COLOR CARDS -->
                        <template v-for="(item, idx) in currentScheme.dark" :key="`card-dark-${item.name}-${idx}`">
                          <v-col cols="12" sm="12" md="12" lg="6" xl="3" class="py-0">
                            <!-- :isDark="true" -->
                            <ThemeColorCard
                              :theme-color="item"
                              :cardIndex="idx"
                              :includeOnColors="includeOnColors"
                              @update:tone="themeToneSliderUpdateHandler($event, true)"
                              @click:copy="copyColorClickHandler($event)"
                            />
                          </v-col>
                        </template>
                      </v-row>
                    </v-card-text>
                  </v-col>
                </v-row>
              </v-expand-transition>
            </v-card>
          </v-col>
        </v-row>

        <!-- [*] LIGHT THEME COLORS ROW -->
        <v-row>
          <v-col cols="12">
            <v-card :color="surfaceLight">
              <v-card-item>
                <v-card-title class="text-subtitle-1 font-weight-regular">Light Theme Colors</v-card-title>
                <template #prepend>
                  <v-btn icon="mdi-export" variant="text" size="small"> </v-btn>
                </template>
                <template #append>
                  <v-btn
                    :icon="showLightThemeCard ? `mdi-menu-up` : `mdi-menu-down`"
                    variant="text"
                    size="small"
                    @click="showLightThemeCard = !showLightThemeCard"
                  >
                  </v-btn>
                  <v-btn icon="mdi-fullscreen" variant="text" size="small" @click="showThemePreview(`light`)"> </v-btn>
                </template>
              </v-card-item>

              <v-expand-transition>
                <!-- [-] row with `no-gutters` fixes transition stutter -->
                <v-row no-gutters v-if="showLightThemeCard">
                  <v-col>
                    <v-card-text class="d-flex flex-column pt-4">
                      <v-row>
                        <!-- [*] LIGHT THEME COLOR CARDS -->
                        <template v-for="(item, idx) in currentScheme.light" :key="`card-light-${item.name}-${idx}`">
                          <v-col cols="12" sm="12" md="12" lg="6" xl="3" class="py-0">
                            <!-- :isDark="false" -->
                            <ThemeColorCard
                              :theme-color="item"
                              :cardIndex="idx"
                              :includeOnColors="includeOnColors"
                              @update:tone="themeToneSliderUpdateHandler($event, false)"
                              @click:copy="copyColorClickHandler($event)"
                            />
                          </v-col>
                        </template>
                      </v-row>
                    </v-card-text>
                  </v-col>
                </v-row>
              </v-expand-transition>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <!-- [*] THIS ROW IS BELOW THE TWO COLUMNS -->
    <v-row class="flex-1-1-100">
      <v-col cols="12">
        <!-- [*] EMPTY COLUMN  -->
        <!-- <TemperatureCacheCard :sourceColor="sourceColor" /> -->
      </v-col>
      <v-col cols="3">
        <!-- [*] EMPTY COLUMN  -->
      </v-col>
      <v-col cols="3">
        <!-- [*] EMPTY COLUMN  -->
      </v-col>
      <v-col cols="3">
        <!-- [*] EMPTY COLUMN  -->
      </v-col>
    </v-row>
  </v-container>
  <v-snackbar v-model="clipboardOpen" timeout="3000" color="primary" variant="elevated">
    Color <code class="text-uppercase mono-sm--text font-weight-light">`{{ clipboardColor }}`</code> copied to clipboard.
  </v-snackbar>
</template>

<script setup>
  // https://github.com/material-foundation/material-color-utilities/tree/main/typescript
  // https://github.com/material-foundation/material-color-utilities#readme
  // https://material-foundation.github.io/material-theme-builder/
  // https://m3.material.io/styles/color/roles
  // https://m3.material.io/styles/color/system/how-the-system-works
  // https://github.com/material-foundation/material-color-utilities/issues/90

  import ThemePreviewDialog from "@/components/modal/ThemePreviewDialog.vue";

  import { ref, onMounted, computed } from "vue";
  import { storeToRefs } from "pinia";
  import { argbFromHex, hexFromArgb, Hct, TonalPalette, Contrast, sourceColorFromImage } from "@material/material-color-utilities";
  // import { Variant } from "/node_modules/@material/material-color-utilities/dynamiccolor/variant.js";
  import tinycolor from "tinycolor2";
  import { imgAssets } from "@/utils/images/image-assets.js";
  import { useMaterialThemeStore } from "@/stores/material-theme";
  import ThemeColor from "@/utils/theme/theme-color";
  import ToneDetails from "@/utils/palettes/tone-details";

  const materialThemeStore = useMaterialThemeStore();

  const {
    sourceColor,
    currentContrast,
    includeOnColors,
    showImageCards,
    showVariantInfo,
    showPaletteCards,
    expandThemeCards,
    swatchPreset,
    showDarkThemeCard,
    showLightThemeCard,
    currentVariant,
    currentScheme
  } = storeToRefs(materialThemeStore);

  const clipboardOpen = ref(false);
  const clipboardColor = ref("");

  const showSettings = ref(false);

  const expandedPaletteIndex = ref(-1);

  const selectedImageIdx = ref(-1);
  const rowNumItems = ref(8);

  const picsum = ref(imgAssets);

  const schemeVariants = materialThemeStore.schemeVariants;

  const previewThemeName = ref("");
  const previewThemeOpen = ref(false);

  function themeNameUpdateHandler(value) {
    console.log("UtilitiesView ::: themeNameUpdateHandler");
    console.log("- value: ", value);
  }

  function selectedVariantDesc() {
    return schemeVariants.find((item) => item.value === currentVariant.value).desc;
  }

  const surfaceDark = computed(() => {
    return currentScheme.value.dark.find((item) => item.name === `surface`).hex;
  });

  const surfaceLight = computed(() => {
    return currentScheme.value.light.find((item) => item.name === `surface`).hex;
  });

  /**
   * LIFECYCLE HOOKS
   */

  onMounted(() => {
    console.log("UtilitiesView ::: onMounted");

    // INFO: snippet to get color gradient css
    // const colors = [
    //   Hct.from(1, 100, 53),
    //   Hct.from(61, 100, 53),
    //   Hct.from(121, 100, 53),
    //   Hct.from(181, 100, 53),
    //   Hct.from(241, 100, 53),
    //   Hct.from(301, 100, 53),
    //   Hct.from(1, 100, 53)
    // ];
    // const hexColors = colors.map((color) => hexFromArgb(color.argb));
    // const gradientCss = `linear-gradient(to right, ${hexColors.join(", ")})`;
    // linear-gradient(to right, #E7007D, #B26300, #6D7F00, #008673, #007FB4, #8851FF, #E7007D)
    // console.log(gradientCss);

    // console.log(" - default hex string: ", "0xFF39548D");
    // console.log(" - default decimal argb: ", 0xff39548d);
    // console.log(" - default hex string argb: ", Number("0xFF" + "#39548D".replace("#", "")));
  });

  async function imageCardSelectHandler(idx, el) {
    console.log("UtilitiesView ::: imageCardSelectHandler");
    console.log(" - idx: ", idx);
    console.log(" - image element: ", el);

    // TODO: move selected image index to store, so it can be restored when user navigates back.
    selectedImageIdx.value = idx;

    if (el) {
      // set crossOrigin to allow CORS (generating color from image won't work without it)
      el.setAttribute("crossOrigin", "anonymous");
      console.log(" - img id: ", idx, "img element: ", el);

      const sourceArgb = await sourceColorFromImage(el);
      console.log(" - sourceArgb: ", sourceArgb);
      let sourceHex = hexFromArgb(sourceArgb);
      // Create new scheme for the source color
      materialThemeStore.createSchemeForHex(sourceHex);

      // TODO: move updating source title (from image vs from random color) to store or separate function
      // Update the Source palette title to reflect an image source
      const palettes = currentScheme.value.palettes;
      console.log(" - palettes: ", palettes);
      // get the source color object from palettes list
      const sourceObject = palettes.find((item) => item.name === "source");
      console.log(" - sourceObject: ", sourceObject);
      // update the title to reflect an image source
      sourceObject.title = "Source (Image " + (idx + 1).toString().padStart(2, "0") + ")";
    } else {
      console.warn("[UtilitiesView]: No image element found in `imageCardSelectHandler`");
    }
  }

  /**
   * Handles the refresh action for an image card by updating its image URL with a new random one.
   *
   * Updates the `picsum` array at the specified index with the new image URL.
   *
   * @param {number} idx - The index of the image card to refresh.
   */
  function imageCardRefreshHandler(idx) {
    console.log("CarouselImagesView ::: imageCardRefreshHandler");
    console.log(" - idx: ", idx);
    let r = Date.now().toString();
    let imgUrl = "https://picsum.photos/440/128?random=" + r;
    console.log(" - imgUrl: ", imgUrl);
    picsum.value[idx] = imgUrl;
  }

  function exportSchemeClickHandler() {
    console.log("UtilitiesView ::: exportSchemeClickHandler");
    // TODO:Implement scheme export.
  }

  function showSettingsClickHandler() {
    console.log("UtilitiesView ::: showSettingsClickHandler");
    showSettings.value = !showSettings.value;
  }

  /**
   * Updates the `currentVariant` in the material theme store to the provided value.
   *
   * Triggers the generation of a new theme based on the current source color and the newly selected variant.
   *
   * @param {Variant} value - The new variant value to be set in the material theme store.
   */
  function schemeVariantChangeHandler(value) {
    console.log("UtilitiesView ::: schemeVariantChangeHandler");
    console.log(" - value: ", value);
    materialThemeStore.setCurrentVariant(value);
  }

  /**
   * Handles the random button click event.
   *
   * Generates a random color, creates a new theme
   * with that color, and updates the source palette's title
   * to reflect the source origin as a random color.
   */
  function randomButtonClickHandler() {
    console.log("UtilitiesView ::: randomButtonClickHandler");
    const clr = tinycolor.random();
    console.log(" - clr: ", clr);
    const hex = clr.toHexString().toUpperCase();
    console.log(" - hex: ", hex);
    selectedImageIdx.value = -1;

    // create a new scheme with the random color
    materialThemeStore.createSchemeForHex(hex);

    // update the title to reflect the source origin (image vs random color).
    const palettes = currentScheme.value.palettes;
    let sourceObject = palettes.find((entry) => entry.name === "source");
    sourceObject.title = "Source (random color)";
  }

  function paletteExpandedUpdateHandler(value, idx) {
    console.log("UtilitiesView ::: paletteExpandedUpdateHandler");
    console.log(" - value: ", value);
    console.log(" - idx: ", idx);
    console.log(" - expandedPaletteIndex: ", expandedPaletteIndex.value);
  }

  // function paletteSwatchPresetChangeHandler(value) {
  //   console.log("UtilitiesView ::: paletteSwatchPresetChangeHandler");
  //   console.log(" - value: ", value);
  //   console.log(" - store swatchPreset value: ", swatchPreset.value);
  // }

  function paletteBlendUpdateHandler(name, blend) {
    console.log("UtilitiesView ::: paletteBlendUpdateHandler");
    console.log(" - name: ", name);
    console.log(" - blend: ", blend);
    // Update the blend status for the custom palette in the store
    materialThemeStore.updateBlendForPalette(name, blend);
  }

  function paletteResetClickHandler(idx, palette) {
    console.log("UtilitiesView ::: paletteResetSourceClickHandler");
    console.log(" - idx: ", idx);
    console.log(" - palette: ", palette);
    console.log(" - source color: ", sourceColor.value);
    if (palette.name === "source") {
      // Use source color from store (instead of palette) to reset the scheme.
      materialThemeStore.createSchemeForHex(sourceColor.value);
      // materialThemeStore.createThemeForHex(palette.hex);
    } else {
      // TODO: figure out what to do when reset is triggered for non-source colors
      // If a palette is being reset after it was first applied,
      // may need to update/reset the store as well.
      materialThemeStore.updateThemeForPalette(palette);
    }
  }

  function paletteApplyClickHandler(idx, palette) {
    console.log("UtilitiesView ::: paletteApplyClickHandler");
    selectedImageIdx.value = -1;
    // TODO: figure out what to do when apply is triggered for custom colors.
    if (palette.name === "source") {
      materialThemeStore.createSchemeForHex(palette.hex);
    } else {
      materialThemeStore.updateThemeForPalette(palette);
    }
  }

  // [*]=============================
  // [*] SETTINGS EVENT HANDLERS
  // [*]=============================

  function showVariantInfoUpdateHandler(value) {
    console.log("UtilitiesView ::: showVariantInfoUpdateHandler");
    console.log(" - value: ", value);
  }

  function showImageCardsUpdateHandler(value) {
    console.log("UtilitiesView ::: showImageCardsUpdateHandler");
    console.log(" - value: ", value);
  }

  function showPaletteCardsUpdateHandler(value) {
    console.log("UtilitiesView ::: showPaletteCardsUpdateHandler");
    console.log(" - value: ", value);
  }

  function expandThemeCardsUpdateHandler(value) {
    console.log("UtilitiesView ::: expandThemeCardsUpdateHandler");
    console.log(" - value: ", value);
    // toggle all theme cards expanded state
    materialThemeStore.toggleAllThemeCards();
  }

  function schemeContrastUpdateHandler(value) {
    console.log("UtilitiesView ::: schemeContrastUpdateHandler");
    console.log(" - value: ", value);
    // FIXME: The scheme should not be recreated, as changes made by the user will be lost, instead,
    // [+] create a temp new scheme and use the tone values of the temp scheme to update the current scheme.
    materialThemeStore.updateScheme();
  }

  /**
   * Handles updates to the inclusion of "on-" colors in the theme styles.
   *
   * This function is triggered when the "include on-colors" setting is changed.
   * The entire scheme does not need to be updated, only the theme styles.
   *
   * @param {boolean} value - Indicates whether "on-" colors should be included.
   */
  function includeOnColorsUpdateHandler(value) {
    console.log("UtilitiesView ::: includeOnColorsUpdateHandler");
    console.log(" - value: ", value);
    // Only theme styles need to be updated, not the whole scheme.
    materialThemeStore.updateThemeStyles();
  }

  /**
   * Copies the given hex color to the clipboard.
   *
   * @param {string} hex - the color to copy, in hex format (e.g. #FF0000)
   *
   */
  function copyColorClickHandler(hex) {
    console.log("UtilitiesView ::: copySelectedColorClickHandler");
    console.log(" - hex: ", hex);
    // Clipboard.writeText(hex);
    navigator.clipboard.writeText(hex);
    // TODO: inform user that color was copied to clipboard.
    clipboardColor.value = hex;
    clipboardOpen.value = true;
  }

  /**
   * Returns an array of tonal palettes for the given hex color.
   *
   * The array contains objects with the following properties:
   * - tone: The tone value (0-100)
   * - argb: The ARGB color value at the given tone
   * - hct: The HCT representation of the color at the given tone
   * - hex: The hex color value at the given tone
   *
   * @param {string} hex - The hex color value for which to generate the tonal palettes.
   *
   * @returns {Array} An array of tonal palettes.
   */
  function getTonalPalettesForHex(hex) {
    // console.log("UtilitiesView ::: getTonalPalettesForHex");
    // console.log(" - hex: ", hex);

    // let hctColor = Hct.fromInt(argbFromHex(hex));
    // let tonal = TonalPalette.fromInt(hctColor.argb);
    const hexArgb = argbFromHex(hex);
    const tonal = TonalPalette.fromInt(hexArgb);

    const tones = [];
    [10, 20, 30, 40, 50, 60, 70, 80, 90].forEach((t) => {
      const argb = tonal.tone(t);
      tones.push({ tone: t, argb: argb, hct: Hct.fromInt(argb), hex: hexFromArgb(argb) });
    });
    return tones;
  }

  /**
   * Updates the theme item's hex color when the tone slider value changes.
   *
   * The new hex color is generated from the palette's hex color from which the theme item originated,
   * rather than the theme item itself.
   * This is to prevent the item's hex color to drift when changing its tone successively.
   *
   * Since the theme item is part of the `currentScheme` and thus the `materialThemeStore`,
   * those will automatically be updated (reactively).
   *
   * @param {ThemeColor} item - The theme item to be updated. Must be of type `ThemeColor`.
   */
  function themeToneSliderUpdateHandler(item, isDark) {
    console.log("UtilitiesView ::: themeToneSliderUpdateHandler");
    materialThemeStore.updateThemeItem(item, isDark);
  }

  /**
   * Shows the theme preview modal dialog for the given theme (light or dark).
   *
   * @param {string} value - The theme to show in the preview dialog. Must be either "light" or "dark".
   */
  function showThemePreview(value) {
    console.log("UtilitiesView ::: showThemePreview");
    console.log(" - value: ", value);
    previewThemeName.value = value === "light" ? "hct-light" : "hct-dark";
    previewThemeOpen.value = true;
  }
</script>

<style lang="scss"></style>
