<template>
  <!-- [*] THEME FULLSCREEN PREVIEW MODAL DIALOG -->
  <ThemePreviewDialog
    v-model="previewThemeOpen"
    :previewTheme="previewTheme"
    :themeName="previewThemeName"
    @click:close="previewThemeOpen = false"
    @click:copy="copyColorClickHandler"
  />

  <v-container class="fill-height px-12 mx-auto">
    <!--  -->
    <!-- [*] TOP ROW - IMAGE CARDS -->
    <!--  -->
    <v-window class="v-container pa-0 mt-2 mb-6 mx-auto" show-arrows>
      <v-window-item v-for="(i, idx1) in Math.ceil(picsum.length / rowNumItems)" :key="`row-${idx1}`">
        <v-row class="align-sm-stretch">
          <!--  -->
          <!-- [*] IMAGE CARDS -->
          <!--  -->
          <!-- :id="`util-img-card-${idx1 * rowNumItems + idx2}`" -->
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

    <!-- [*] BOTTOM ROW - PALETTE MENU + PALETTE  CARDS -->
    <v-row>
      <!-- [*] PALETTE MENU - LEFT SIDE COLUMN -->
      <v-col cols="12" sm="6" md="6" lg="4" xl="3" mobile-break-point="700" class="d-flex flex-column">
        <!-- [*] SOURCE COLOR ROW -->
        <v-row class="flex-grow-0">
          <v-col>
            <!-- [*] SOURCE COLOR CARD -->
            <v-card class="d-flex flex-column" :color="sourceColor" density="compact" min-height="200" height="230px">
              <v-card-item>
                <v-card-title class="text-subtitle-1">Tonal Palettes</v-card-title>
                <v-card-subtitle class="text-subtitle-2">Source</v-card-subtitle>
                <template #append>
                  <v-btn variant="text" size="small" icon="mdi-export" @click="exportSchemeClickHandler"> </v-btn>
                </template>
              </v-card-item>
              <v-card-text style="flex-grow: 1; overflow-y: auto">
                <div v-html="selectedVariantDesc()"></div>
              </v-card-text>
              <v-spacer vertical></v-spacer>
              <v-card-actions class="mt-auto px-4">
                <!-- SCHEME VARIANT SELECTION -->
                <span> Scheme Variant: </span>
                <v-select
                  v-model="currentVariant"
                  :items="schemeVariants"
                  auto-select-first="exact"
                  variant="outlined"
                  hide-details
                  density="compact"
                  @update:model-value="schemeVariantChangeHandler"
                >
                  <!-- NOTE: slot is required to be able to style the v-select menu items (awesome feature!!) -->
                  <template v-slot:item="{ props, item }">
                    <v-list-item class="variant-menu-item" v-bind="props" density="compact"></v-list-item>
                  </template>
                </v-select>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <!-- [*] PALETTE COLORS MENU BUTTONS (LEFT SIDE COLUMN) -->
        <v-card class="d-flex flex-column flex-grow-1 my-0" density="compact" min-height="810">
          <v-card-text class="my-4">
            <!-- [*] PALETTE COLOR ROWS -->
            <template v-for="(item, idx) in currentScheme.palettes" :key="`palette-color-card-${item.name}-${idx}`">
              <v-row>
                <v-col class="py-1">
                  <!-- [*] PALETTE COLOR MENU CARD -->
                  <PaletteItemCard
                    :palette="item"
                    :paletteIndex="idx"
                    :show-random="item.name === 'source'"
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
                    :show-random="false"
                    v-model:expanded-index="expandedPaletteIndex"
                    @update:expanded-index="paletteExpandedUpdateHandler($event, idx)"
                    @update:blend="paletteBlendUpdateHandler(item.name, item.blend)"
                    @click:reset="paletteResetClickHandler"
                    @click:apply="paletteApplyClickHandler"
                  ></PaletteItemCard>
                </v-col>
              </v-row>
            </template>
            <v-row>
              <v-col>
                <v-checkbox
                  v-model="includeOnColors"
                  label="Include `on-` colors"
                  color="primary-lighten-2"
                  @update:model-value="includeOnColorsUpdateHandler"
                ></v-checkbox>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- [*] PALETTE COLOR DETAIL CARDS (RIGHT SIDE COLUMN) -->
      <v-col>
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

        <!-- [*] DARK THEME COLORS ROW -->
        <v-row>
          <v-col>
            <v-card>
              <v-card-item>
                <v-card-title class="text-subtitle-1 font-weight-regular">Dark Theme Colors</v-card-title>
                <template #prepend>
                  <v-btn icon="mdi-export" variant="text" size="small"> </v-btn>
                </template>
                <template #append>
                  <v-btn icon="mdi-fullscreen" variant="text" size="small" @click="showThemePreview(`dark`)"> </v-btn>
                </template>
              </v-card-item>
              <v-card-text class="d-flex flex-column pt-4">
                <v-row>
                  <!-- [*] DARK CUSTOM THEME COLORS -->
                  <template v-for="(item, idx) in currentScheme.dark" :key="`card-dark-${item.name}-${idx}`">
                    <v-col cols="12" sm="12" md="12" lg="6" xl="3" class="py-0">
                      <ThemeColorCard
                        :theme-color="item"
                        :cardIndex="idx"
                        :isDark="true"
                        :includeOnColors="includeOnColors"
                        @update:tone="themeToneSliderUpdateHandler($event)"
                        @click:copy="copyColorClickHandler($event)"
                      />
                    </v-col>
                  </template>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <!-- [*] LIGHT THEME COLORS ROW -->
        <v-row>
          <v-col>
            <v-card>
              <v-card-item>
                <v-card-title class="text-subtitle-1 font-weight-regular">Light Theme Colors</v-card-title>
                <template #prepend>
                  <v-btn icon="mdi-export" variant="text" size="small"> </v-btn>
                </template>
                <template #append>
                  <v-btn icon="mdi-fullscreen" variant="text" size="small" @click="showThemePreview(`light`)"> </v-btn>
                </template>
              </v-card-item>
              <v-card-text class="d-flex flex-column pt-4">
                <v-row>
                  <!-- [*] LIGHT THEME COLORS -->
                  <!-- DARK CUSTOM THEME COLORS -->
                  <template v-for="(item, idx) in currentScheme.light" :key="`card-light-${item.name}-${idx}`">
                    <v-col cols="12" sm="12" md="12" lg="6" xl="3" class="py-0">
                      <ThemeColorCard
                        :theme-color="item"
                        :cardIndex="idx"
                        :isDark="false"
                        :includeOnColors="includeOnColors"
                        @update:tone="themeToneSliderUpdateHandler($event)"
                        @click:copy="copyColorClickHandler($event)"
                      />
                    </v-col>
                  </template>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <!-- [*] THIS ROW IS BELOW THE TWO COLUMNS -->
    <v-row>
      <v-col cols="3">
        <!-- [*] EMPTY COLUMN --  -->
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

  import { ref, onMounted, reactive } from "vue";
  import { argbFromHex, hexFromArgb, Hct, TonalPalette, sourceColorFromImage } from "@material/material-color-utilities";
  import tinycolor from "tinycolor2";
  import { imgAssets } from "@/utils/images/image-assets.js";
  import { Variant } from "/node_modules/@material/material-color-utilities/dynamiccolor/variant.js";
  import { useMaterialThemeStore } from "@/stores/material-theme";
  import { storeToRefs } from "pinia";
  import ThemeColor from "@/utils/theme/theme-color";
  import ToneDetails from "@/utils/palettes/tone-details";

  const materialThemeStore = useMaterialThemeStore();

  const { sourceColor, currentVariant, currentScheme, includeOnColors } = storeToRefs(materialThemeStore);

  const clipboardOpen = ref(false);
  const clipboardColor = ref("");

  const expandedPaletteIndex = ref(-1);

  const selectedImageIdx = ref(-1);
  const rowNumItems = ref(8);

  const picsum = ref(imgAssets);

  const schemeVariants = materialThemeStore.schemeVariants;

  const previewTheme = ref(null);
  const previewThemeName = ref("");
  const previewThemeOpen = ref(false);

  function selectedVariantDesc() {
    return schemeVariants.find((item) => item.value === currentVariant.value).desc;
  }

  onMounted(() => {
    console.log("UtilitiesView ::: onMounted");

    // INFO: If you want to get a color (argb) from the Tonal Palette, use the following:
    // const primary98 = TonalPalette.fromInt(primary).tone(98);

    // INFO: snipped to get color gradient css
    const colors = [
      Hct.from(0, 100, 50),
      Hct.from(60, 100, 50),
      Hct.from(120, 100, 50),
      Hct.from(180, 100, 50),
      Hct.from(240, 100, 50),
      Hct.from(300, 100, 50),
      Hct.from(360, 100, 50)
    ];
    const hexColors = colors.map((color) => hexFromArgb(color.argb));
    const gradientCss = `linear-gradient(to right, ${hexColors.join(", ")})`;
    // linear-gradient(to right, #E7007D, #B26300, #6D7F00, #008673, #007FB4, #8851FF, #E7007D)
    // console.log(gradientCss);
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
    let r = Math.floor(Math.random() * 1000).toString();
    // Math.random().toString();
    // let r = new Date().getMilliseconds().toString();
    let imgUrl = "https://picsum.photos/440/128?random=" + r;
    console.log(" - imgUrl: ", imgUrl);
    picsum.value[idx] = imgUrl;
  }

  function exportSchemeClickHandler() {
    console.log("UtilitiesView ::: exportSchemeClickHandler");
    // TODO:Implement scheme export.
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

  function includeOnColorsUpdateHandler(value) {
    console.log("UtilitiesView ::: includeOnColorsUpdateHandler");
    // TODO: Update the store theme when includeOnColors is updated.
    console.log(" - value: ", value);
    console.log(" - materialThemeStore.includeOnColors: ", materialThemeStore.includeOnColors);
  }

  /**
   * Copies the given hex color to the clipboard.
   *
   * @param {string} hex - the color to copy, in hex format (e.g. #FF0000)
   *
   * @returns {void}
   */
  function copyColorClickHandler(hex) {
    console.log("UtilitiesView ::: copySelectedColorClickHandler");
    // let hex = argbToHex(selectedHct.value.argb);
    console.log(" - hex: ", hex);
    // Clipboard.writeText(hex);
    navigator.clipboard.writeText(hex);
    // TODO: inform user that color was copied to clipboard.
    clipboardColor.value = hex;
    clipboardOpen.value = true;
  }

  function getTonalPalettesForHex(hex) {
    console.log("UtilitiesView ::: getTonalPalettesForHex");
    // console.log(" - hex: ", hex);

    let hctColor = Hct.fromInt(argbFromHex(hex));
    let tonal = TonalPalette.fromInt(hctColor.argb);

    let tones = [];
    [10, 20, 30, 40, 50, 60, 70, 80, 90].forEach((t) => {
      let argb = tonal.tone(t);
      tones.push({ tone: t, argb: argb, hct: Hct.fromInt(argb), hex: hexFromArgb(argb) });
    });
    return tones;
  }

  // TODO: display tone details for the selected (clicked) tone color.
  function toneButtonClickHandler(tone) {
    console.log("UtilitiesView ::: toneButtonClickHandler");
    console.log(" - tone: ", tone);
    let palette = TonalPalette.fromInt(tone.argb);
    console.log(" - palette: ", palette);
    // selectedColor.value = tone.hex;
    // tempColor.value = tone.hex;
    // selectedColorName.value = tone.tone;
    // modalColorOpen.value = true;
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
  function themeToneSliderUpdateHandler(item) {
    console.log("UtilitiesView ::: themeToneSliderUpdateHandler");
    // INFO: modifying the theme item also updates the `currentScheme` and the `materialThemeStore`.
    console.log(" - item: ", item);
    console.log(" - item.isCustom: ", item.isCustom);

    // If we were to change the tone of the item's hex directly, over time, its hex color would drift.
    // To prevent this and to keep a consistent theme color with each tone change,
    // we need to generate the item's hex color from its matching palette,
    // which is also where the item itself originated from.

    const palettes = currentScheme.value.palettes;
    const custom = currentScheme.value.custom;

    // Find the palette object in the current scheme that matches the theme item
    let paletteColor;
    if (item.isCustom) {
      // If the theme item is a custom palette, use the `custom` palette list.
      paletteColor = custom.find((pc) => pc.name === item.name);
    } else if (item.name === "background" || item.name === "surface") {
      paletteColor = palettes.find((pc) => pc.name === "neutral");
    } else if (item.name === "surfaceVariant") {
      paletteColor = palettes.find((pc) => pc.name === "neutralVariant");
    } else {
      paletteColor = palettes.find((pc) => pc.name === item.name);
    }
    console.log(" - paletteColor: ", paletteColor);

    // With the matching palette found, create a list of tones - ranging from 10 to 90 - for that palette's hex value.
    // Then find the tone item in that list that matches the theme item's (modified) tone,
    // which is also between 10 and 90, as set by the slider.
    // Note that the theme item's tone (`item.tone`) has already been updated by the slider (v-model).
    // All we need to do now is to find the matching tone in the palette list
    // and update the item's hex value with the values from the tonal palette list.

    if (paletteColor) {
      console.log(" - paletteColor isCustom: ", paletteColor.isCustom);
      let hex = paletteColor.isCustom ? paletteColor.customHex : paletteColor.hex;
      let tones = getTonalPalettesForHex(hex);
      console.log(" - tones: ", tones);
      let toneItem = tones.find((t) => t.tone === item.tone);
      console.log(" - tone item: ", toneItem);
      console.log(" - tone item hex: ", toneItem.hex);
      if (toneItem) {
        // update the item hex with new hex color
        item.hex = toneItem.hex;
        materialThemeStore.updateThemeStyles();
      }
    }
  }

  function showThemePreview(value) {
    console.log("UtilitiesView ::: showThemePreview");
    console.log(" - value: ", value);
    previewTheme.value = value === "light" ? currentScheme.value.light : currentScheme.value.dark;
    previewThemeName.value = value === "light" ? "hct-light" : "hct-dark";
    previewThemeOpen.value = true;
  }
</script>

<style lang="scss">
  /**
   * Styles for the ThemeColor tone sliders
   */
  .theme-slider-track {
    .v-slider-track__background {
      background: linear-gradient(to right, #000000 0%, #ffffff 100%) !important;
      opacity: 0.5 !important;
    }
    .v-slider-track__fill {
      display: none !important;
      visibility: hidden !important;
    }
    .v-input__details {
      display: none !important;
      visibility: hidden !important;
    }
    .v-slider__label {
      font-size: 0.9em !important;
      font-weight: 300 !important;
    }
    input {
      height: 32px !important;
      min-height: 32px !important;
    }
  }

  /**
   * Styles for the `Scheme Variant` dropdown menu items (v-select).
   */
  .variant-menu-item {
    font-size: 0.9rem !important;
    font-weight: normal !important;
    .v-list-item-title {
      font-size: 0.9rem !important;
      font-weight: normal !important;
    }
  }
</style>
