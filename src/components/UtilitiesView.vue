<template>
  <v-container class="fill-height px-12 mx-auto">
    <!--  -->
    <!-- TOP ROW - IMAGE CARDS -->
    <!--  -->
    <ColorDialog
      id="utilities-color-dialog"
      v-model="modalColorOpen"
      :color-name="selectedColorName"
      v-model:picker-color="selectedColor"
      persistent
      @update:picker-color="editColorChangeHandler"
      @update="editColorUpdateHandler"
      @cancel="editColorCancelHandler"
      @update:model-value="editColorUpdateModelHandler"
    />
    <v-window class="v-container pa-0 mt-2 mb-6 mx-auto" show-arrows>
      <v-window-item v-for="(i, idx1) in Math.ceil(picsum.length / rowNumItems)" :key="`row-${idx1}`">
        <v-row class="align-sm-stretch">
          <!--  -->
          <!-- IMAGE CARDS -->
          <!--  -->
          <v-col cols="3" v-for="(k, idx2) in rowNumItems" :key="`util-card-${idx1}-${idx2}`">
            <SourceImageCard
              v-if="idx1 * rowNumItems + idx2 < picsum.length"
              :id="`util-img-card-${idx1 * rowNumItems + idx2}`"
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

    <!-- BOTTOM ROW CARDS -->
    <v-row>
      <!-- LEFT SIDE COLUMN -->
      <v-col cols="12" sm="6" md="6" lg="4" xl="3" mobile-break-point="700" class="d-flex flex-column">
        <!-- SOURCE COLOR ROW -->
        <v-row class="flex-grow-0">
          <v-col>
            <!-- SOURCE COLOR CARD -->
            <v-card class="d-flex flex-column" :color="sourceColor" density="compact" min-height="200" height="230px">
              <v-card-item>
                <v-card-title class="text-subtitle-1">Tonal Palettes</v-card-title>
                <v-card-subtitle class="text-subtitle-2">Source</v-card-subtitle>
                <template #append>
                  <v-btn variant="text" size="small" icon="mdi-export"> </v-btn>
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
                  v-model="selectedSchemeVariant"
                  :items="schemeVariants"
                  auto-select-first="exact"
                  variant="outlined"
                  hide-details
                  density="compact"
                  @update:model-value="schemeVariantUpdateModelHandler"
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
        <!-- [*] PALETTE COLORS NAV BUTTONS (LEFT SIDE COLUMN) -->
        <v-card class="d-flex flex-column flex-grow-1" density="compact">
          <v-card-text>
            <!-- PALETTE COLORS ROWS -->
            <template v-for="(item, idx) in currentScheme.palettes" :key="item.name">
              <v-row>
                <v-col class="py-1">
                  <!-- PALETTE ITEM COLOR CARD -->
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
          </v-card-text>
        </v-card>
      </v-col>

      <!-- [*] PALETTE COLOR CARDS (RIGHT SIDE COLUMN) -->
      <v-col>
        <v-row>
          <template v-for="item in currentScheme.palettes" :key="item.name">
            <v-col v-if="item.name !== `source`" cols="12" sm="12" md="12" lg="6" xl="4">
              <!-- <v-card title="Color" :subtitle="item.title" :color="item.hex"> -->
              <v-card :color="item.hex">
                <v-card-item>
                  <v-card-title class="text-subtitle-1">{{ item.title }}</v-card-title>
                  <template #append>
                    <!-- <v-chip size="small" label="P-40">P-40</v-chip> -->
                    <v-btn variant="text" size="small" icon="mdi-content-copy" @click="copyColorClickHandler(item.hex)"> </v-btn>
                  </template>
                </v-card-item>
                <v-card-actions class="ga-0">
                  <!--  font-mono mono-sm--text font-weight-light -->
                  <template v-for="tone in getTonalPalettesForHex(item.hex)" :key="`tone-${item.name}-${tone.tone}`">
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
            </v-col>
          </template>
        </v-row>

        <!-- HCT COLOR ROW -->
        <v-row>
          <v-col>
            <v-card>
              <v-card-item>
                <v-card-title class="text-subtitle-1">HCT Color Picker</v-card-title>
              </v-card-item>
              <v-card-text>
                <v-row>
                  <!-- [*] (LEFT COLUMN) -->
                  <v-col cols="4">
                    <!-- DARK CUSTOM THEME COLORS -->
                    <template v-for="(item, idx) in currentScheme.dark" :key="`card-dark-${item.name}-${idx}`">
                      <v-card class="d-flex flex-column mb-4" :color="item.hex" density="compact">
                        <v-card-item>
                          <v-card-title class="text-body-1 font-weight-light">{{ item.title }}</v-card-title>
                          <v-card-subtitle class="text-uppercase">
                            <code class="mono-sm--text font-weight-light">{{ item.hex }}</code>
                          </v-card-subtitle>
                          <template #append>
                            <v-chip size="small" link @click="item.toggle = !item.toggle">
                              <code class="mono-sm--text font-weight-light"> {{ item.label }} </code>
                            </v-chip>
                            <v-btn icon="mdi-content-copy" size="small" variant="text" @click="copyColorClickHandler(item.hex)" />
                            <!-- <v-btn icon="mdi-select-color" size="small" variant="text" /> -->
                          </template>
                        </v-card-item>
                        <v-expand-transition duration="100">
                          <v-card-text v-show="item.toggle" :key="`theme-light-text-${item.name}-${idx}`">
                            <v-slider
                              class="theme-slider-track"
                              color="primary-lighten-2"
                              min="10"
                              max="90"
                              step="10"
                              show-ticks="always"
                              tick-size="5"
                              label="Tone"
                              track-fill-color="red"
                              v-model="item.tone"
                              @update:model-value="themeToneSliderUpdateHandler(item)"
                            ></v-slider>
                          </v-card-text>
                          <!-- <v-card-actions v-show="item.toggle"> </v-card-actions> -->
                        </v-expand-transition>
                      </v-card>
                    </template>
                  </v-col>

                  <!-- [*] (MIDDLE COLUMN) -->

                  <v-col cols="4">
                    <!-- [*] CUSTOM PALETTE COLORS -->
                    <template v-for="(item, idx) in customThemeColors" :key="`card-${item.name}-${idx}`">
                      <v-card class="mb-4" :color="item.hex" density="compact">
                        <v-card-item>
                          <v-card-title class="text-body-1 font-weight-light">{{ item.title }}</v-card-title>
                          <v-card-subtitle class="text-uppercase">
                            <code class="mono-sm--text"> {{ item.hex }}</code>
                          </v-card-subtitle>
                          <template #append>
                            <v-btn icon="mdi-content-copy" size="small" variant="text" @click="copyColorClickHandler(item.hex)" />
                            <!-- <v-btn icon="mdi-select-color" size="small" variant="text" /> -->
                          </template>
                        </v-card-item>
                        <v-card-actions class="ga-0">
                          <template v-for="tone in getTonalPalettesForHex(item.hex)" :key="`custom-tone-${tone.tone}`">
                            <!-- TODO: UtitlitiesView ::: implement hover dialog with tone details -->
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
                  </v-col>

                  <!-- [*] (RIGHT COLUMN) -->
                  <v-col cols="4">
                    <!-- [*] LIGHT THEME COLORS -->
                    <template v-for="(item, idx) in currentScheme.light" :key="`card-light-02-${item.name}-${idx}`">
                      <v-card class="mb-4" :color="item.hex" density="compact">
                        <v-card-item>
                          <v-card-title class="text-body-1 font-weight-light">{{ item.title }}</v-card-title>
                          <v-card-subtitle class="text-uppercase">
                            <code class="mono-sm--text font-weight-light">{{ item.hex }}</code>
                          </v-card-subtitle>
                          <template #append>
                            <v-chip size="small" link @click="item.toggle = !item.toggle">
                              <code class="mono-sm--text font-weight-light"> {{ item.label }} </code>
                            </v-chip>
                            <v-btn icon="mdi-content-copy" size="small" variant="text" @click="copyColorClickHandler(item.hex)" />
                            <!-- <v-btn icon="mdi-select-color" size="small" variant="text" /> -->
                          </template>
                        </v-card-item>
                        <v-expand-transition duration="100">
                          <v-card-text v-if="item.toggle" :key="`theme-light-text-${item.name}-${idx}`">
                            <!-- color="surface-brighter" -->
                            <v-slider
                              class="theme-slider-track"
                              color="primary-lighten-2"
                              min="10"
                              max="90"
                              step="10"
                              show-ticks="always"
                              tick-size="5"
                              label="Tone"
                              v-model="item.tone"
                              @update:model-value="themeToneSliderUpdateHandler(item)"
                            ></v-slider>
                          </v-card-text>
                        </v-expand-transition>
                      </v-card>
                    </template>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- [*] THEME COLORS ROW -->
    <v-row>
      <v-col>
        <!-- TODO: add a v-themeprovider to automatically style card content -->
        <!-- [*] LIGHT THEME CARD -->
        <v-card density="compact" theme="dark">
          <v-card-item>
            <v-card-title class="text-subtitle-1">Light Theme</v-card-title>
            <template #append>
              <v-btn variant="text" size="small" icon="mdi-export"> </v-btn>
            </template>
          </v-card-item>
          <v-card-text>
            <v-row>
              <!-- [*] LIGHT HCT THEME CONTAINER COLORS -->
              <v-col cols="12" md="12" lg="6">
                <!-- [*] CUSTOM LIGHT THEME COLORS -->
              </v-col>
              <!-- [*] HCT TONAL LIGHT THEME COLORS -->
              <v-col cols="12" md="12" lg="6">
                <!-- LIGHT CUSTOM THEME CONTAINER COLORS -->
                <template v-for="(item, idx) in customThemeColors" :key="`card-light-custom-02-${item.name}-${idx}`">
                  <v-card v-if="item.light" class="mb-4" :color="item.light.hex" density="compact">
                    <v-card-item>
                      <v-card-title class="text-body-1 font-weight-light">{{ item.title }}</v-card-title>
                      <v-card-subtitle class="text-uppercase">
                        <code class="mono-sm--text font-weight-light">{{ item.light.hex }}</code>
                      </v-card-subtitle>
                      <template #append>
                        <v-chip size="small">
                          <code class="mono-sm--text font-weight-light">C-90</code>
                        </v-chip>
                        <v-btn icon="mdi-content-copy" size="small" variant="text" />
                        <!-- <v-btn icon="mdi-select-color" size="small" variant="text" /> -->
                      </template>
                    </v-card-item>
                  </v-card>
                </template>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <!-- TODO: add a v-themeprovider to automatically style card content -->
        <!-- [*] DARK THEME CARD -->
        <v-card density="compact" theme="dark">
          <v-card-item>
            <v-card-title class="text-subtitle-1">Dark Theme</v-card-title>
            <template #append>
              <v-btn variant="text" size="small" icon="mdi-export"> </v-btn>
            </template>
          </v-card-item>
          <v-card-text>
            <v-row>
              <!-- HCT GENERATED DARK THEME COLORS -->
              <v-col cols="12" md="12" lg="6">
                <!-- [*] HCT TONAL DARK THEME COLORS -->
              </v-col>
              <!-- [*] CUSTOM HCT TONAL DARK THEME COLORS -->
              <v-col cols="12" md="12" lg="6">
                <!-- [*] CUSTOM DARK THEME CONTAINER COLORS -->
                <template v-for="(item, idx) in customThemeColors" :key="`card-dark-custom-02-${item.name}-${idx}`">
                  <v-card v-if="item.dark" class="mb-4" :color="item.dark.hex" density="compact">
                    <v-card-item>
                      <v-card-title class="text-body-1 font-weight-light">{{ item.title }}</v-card-title>
                      <v-card-subtitle class="text-uppercase">
                        <code class="mono-sm--text font-weight-light">{{ item.dark.hex }}</code>
                      </v-card-subtitle>
                      <template #append>
                        <v-chip size="small" link @click="item.toggle = !item.toggle">
                          <code class="mono-sm--text font-weight-light"> {{ item.dark.label }} </code>
                        </v-chip>
                        <v-btn icon="mdi-content-copy" size="small" variant="text" />
                        <!-- <v-btn icon="mdi-select-color" size="small" variant="text" /> -->
                      </template>
                    </v-card-item>
                    <v-card-actions v-if="item.toggle">
                      <v-slider
                        class="theme-slider-track"
                        min="10"
                        max="90"
                        step="10"
                        show-ticks="always"
                        tick-size="5"
                        label="Tone"
                        track-fill-color="red"
                        v-model="item.dark.tone"
                        @update:model-value="customToneSliderUpdateHandler(item, true)"
                      ></v-slider>
                    </v-card-actions>
                  </v-card>
                </template>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  // https://github.com/material-foundation/material-color-utilities/tree/main/typescript
  // https://github.com/material-foundation/material-color-utilities#readme
  // https://material-foundation.github.io/material-theme-builder/
  // https://m3.material.io/styles/color/roles
  // https://m3.material.io/styles/color/system/how-the-system-works
  // https://github.com/material-foundation/material-color-utilities/issues/90

  import { ref, onMounted, reactive, warn } from "vue";
  import {
    argbFromHex,
    hexFromArgb,
    themeFromSourceColor,
    themeFromImage,
    Hct,
    CorePalette,
    TonalPalette,
    sourceColorFromImage,
    Blend,
    Scheme,
    SchemeMonochrome,
    SchemeNeutral,
    SchemeTonalSpot,
    SchemeVibrant,
    SchemeExpressive,
    SchemeFidelity,
    SchemeContent,
    SchemeRainbow,
    SchemeFruitSalad
  } from "@material/material-color-utilities";
  import * as colorUtils from "@/utils/colorUtils.js";
  import tinycolor from "tinycolor2";
  import { imgAssets } from "@/utils/images/image-assets.js";
  import { Variant } from "/node_modules/@material/material-color-utilities/dynamiccolor/variant.js";
  import { useMaterialThemeStore } from "@/stores/material-theme";
  import { storeToRefs } from "pinia";

  const materialThemeStore = useMaterialThemeStore();
  console.log("materialThemeStore scheme variants: ", materialThemeStore.schemeVariants);

  const { sourceColor, currentVariant, currentScheme } = storeToRefs(materialThemeStore);
  console.log("UtilitiesView sourceColor: ", sourceColor);

  const modalColorOpen = ref(false);

  const expandedPaletteIndex = ref(-1);

  const tempColor = ref("");
  const selectedColorName = ref("");
  const selectedColor = ref("");

  const selectedImageIdx = ref(-1);
  const rowNumItems = ref(8);

  // https://picsum.photos/
  const picsum = ref([
    "https://picsum.photos/440/128?random=1",
    "https://picsum.photos/440/128?random=2",
    "https://picsum.photos/440/128?random=3",
    "https://picsum.photos/440/128?random=4",
    "https://picsum.photos/id/2/440/128",
    "https://picsum.photos/id/18/440/128",
    "https://picsum.photos/id/56/440/128",
    "https://picsum.photos/id/78/440/128",
    "https://picsum.photos/id/113/440/128",
    ...imgAssets
  ]);

  const hctTheme = ref(null);

  const schemeVariants = materialThemeStore.schemeVariants;
  console.log("schemeVariants: ", schemeVariants);

  const selectedSchemeVariant = ref(currentVariant);

  function selectedVariantDesc() {
    return schemeVariants.find((item) => item.value === currentVariant.value).desc;
  }

  const paletteColors = reactive([
    { title: "Source", name: "source", hex: "#769CDF" },
    { title: "Primary", name: "primary", hex: "#769CDF" },
    { title: "Secondary", name: "secondary", hex: "#8991A2" },
    { title: "Tertiary", name: "tertiary", hex: "#A288A6" },
    { title: "Error", name: "error", hex: "#FF5449" },
    { title: "Neutral", name: "neutral", hex: "#919093" },
    { title: "Neutral Variant", name: "neutralVariant", hex: "#8E9098" }
  ]);

  const customThemeColors = reactive([
    { title: "Success", name: "success", hex: "#22892F" },
    { title: "Info", name: "info", hex: "#028DE9" },
    { title: "Warning", name: "warning", hex: "#E58C00" },
    // { title: "Error", name: "error", hex: "#CF6679" }
    { title: "Error", name: "error", hex: "#DE3730" }
    // { title: "Success", name: "success", hex: "#4CAF50" },
    // { title: "Info", name: "info", hex: "#2196F3" },
    // { title: "Warning", name: "warning", hex: "#FB8C00" },
    // { title: "Error", name: "error", hex: "#CF6679" }
  ]);

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
    const hexColors = colors.map((color) => argbToHex(color.argb));
    const gradientCss = `linear-gradient(to right, ${hexColors.join(", ")})`;
    // linear-gradient(to right, #E7007D, #B26300, #6D7F00, #008673, #007FB4, #8851FF, #E7007D)
    console.log(gradientCss);
  });

  async function imageCardSelectHandler(idx) {
    console.log("CarouselImagesView ::: imageCardSelectHandler");
    console.log(" - idx: ", idx);
    selectedImageIdx.value = idx;

    const palettes = currentScheme.value.palettes;
    console.log(" - palettes: ", palettes);

    // get the source color object from palettes list
    const sourceObject = palettes.find((item) => item.name === "source");
    console.log(" - sourceObject: ", sourceObject);

    // update the title to reflect an image source
    sourceObject.title = "Source (from image)";

    // [*] find the HTMLImageElement for the card
    const cardId = "util-img-card-" + idx.toString();
    console.log(" - cardId: ", cardId);

    // get the card matching the cardId
    const cardElement = document.getElementById(cardId);
    console.log(" - cardElement: ", cardElement);

    // get the image from the card
    const imgElement = cardElement.querySelector("img");

    // set crossOrigin to allow CORS (generating color from image won't work without it)
    imgElement.setAttribute("crossOrigin", "anonymous");
    console.log(" - imgElement: ", idx, imgElement);

    const sourceArgb = await sourceColorFromImage(imgElement);
    console.log(" - sourceArgb: ", sourceArgb);
    let seedColor = hexFromArgb(sourceArgb);
    // update store with new source color
    materialThemeStore.createSchemeForHex(seedColor);
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
    let imgUrl = "https://picsum.photos/440/128?random=" + Math.random().toString();
    console.log(" - imgUrl: ", imgUrl);
    picsum.value[idx] = imgUrl;
  }

  // TODO: remove function when no longer needed (still has custom color code that might be useful)
  function generateTheme(seedColor) {
    console.log("UtilitiesView ::: generateTheme");

    const successCustom = {
      name: "success",
      value: argbFromHex("#4CAF50"),
      blend: true
    };
    const infoCustom = {
      name: "info",
      value: argbFromHex("#2196F3"),
      blend: true
    };
    const warningCustom = {
      name: "warning",
      // value: argbFromHex("#FB8C00"),
      value: argbFromHex("#E58C00"),
      blend: true
    };
    const errorCustom = {
      name: "error",
      // value: argbFromHex("#CF6679"),
      value: argbFromHex("#DE1A7A"),
      blend: true
    };
  }

  function schemeVariantUpdateModelHandler(value) {
    console.log("UtilitiesView ::: schemeVariantUpdateModelHandler");
    console.log(" - value: ", value);
    console.log(" - selectedSchemeVariant: ", selectedSchemeVariant.value);

    materialThemeStore.currentVariant = value;
    console.log(" - store currentVariant: ", materialThemeStore.currentVariant);
    // generate a new theme based on the scheme with the selected variant
    materialThemeStore.createSchemeForHex(sourceColor.value);
  }

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

  function paletteResetClickHandler(idx, palette) {
    console.log("UtilitiesView ::: paletteResetSourceClickHandler");
    console.log(" - idx: ", idx);
    console.log(" - palette: ", palette);
    console.log(" - source color: ", sourceColor.value);
    if (palette.name === "source") {
      // use source color from store to reset the scheme
      materialThemeStore.createSchemeForHex(sourceColor.value);
      // materialThemeStore.createThemeForHex(palette.hex);
    } else {
      // TODO: figure out what to do when reset is triggered for non-source colors
    }
  }

  function paletteApplyClickHandler(idx, palette) {
    console.log("UtilitiesView ::: paletteApplyClickHandler");
    selectedImageIdx.value = -1;
    // TODO: figure out what to do when apply is triggered for custom colors
    if (palette.name === "source") {
      materialThemeStore.createSchemeForHex(palette.hex);
    } else {
      materialThemeStore.updateThemeForPalette(palette);
    }
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
  }

  // TODO: Remove event handler when no longer needed (for Modal Color dialog).
  function paletteButtonClickHandler(clrItem) {
    console.log("UtilitiesView ::: paletteButtonClickHandler");
    modalColorOpen.value = true;
  }

  function getTonalPalettesForHex(hex) {
    console.log("UtilitiesView ::: getTonalPalettesForHex");
    let hctColor = Hct.fromInt(argbFromHex(hex));
    let tonal = TonalPalette.fromInt(hctColor.argb);

    let tones = [];
    [10, 20, 30, 40, 50, 60, 70, 80, 90].forEach((t) => {
      let argb = tonal.tone(t);
      tones.push({ tone: t, argb: argb, hct: Hct.fromInt(argb), hex: argbToHex(argb) });
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

  // TODO: remove modal ColorPicker Dialog event handlers.
  function editColorChangeHandler(color) {
    console.log("UtilitiesView ::: editColorChangeHandler");
  }

  /**
   * Handles the update event for the color dialog.
   * This function is triggered when the `OK` button in the dialog is clicked.
   * When the color being edited is the source color, a new theme needs to be generated.
   *
   * @param {string} color - The new color value in a string format.
   */
  function editColorUpdateHandler(color) {
    console.log("UtilitiesView ::: editColorUpdateHandler");
    modalColorOpen.value = false;
  }

  /**
   * Handles the cancel event for the modal color dialog
   * and is triggered when the `Cancel` button in the dialog is clicked.
   *
   * It resets the color being edited to its previous value (`tempColor`).
   *
   * If the color being edited is the source color, it also updates the card color
   * and resets the selected HCT colors. Finally, it closes the color dialog.
   */
  function editColorCancelHandler() {
    console.log("UtilitiesView ::: editColorCancelHandler");
    const colorName = selectedColorName.value;
    console.log(" - colorName: ", colorName);

    // Reset the color being edited to its previous value
    paletteColors.find((item) => item.name === colorName).hex = tempColor.value;

    // If editing source color, reset the card color as well.
    if (colorName === "source") {
      // cardColor.value = tempColor.value;
      // also update the selectedHct
      // setSelectedHctColors();
    }
    modalColorOpen.value = false;
  }

  /**
   * Handles the update event for the color dialog model value.
   * When the modal dialog is closed, the model-value is `false`.
   *
   * @param {boolean} value - Indicates whether the model is open or closed.
   */
  function editColorUpdateModelHandler(value) {
    console.log("UtilitiesView ::: editColorUpdateModelHandler");
    console.log(" - value: ", value);
    if (value) {
      // TODO: figure out what to do here.
    } else {
      // TODO: determine if calling `editColorCancelHandler` is needed when the modal dialog is closed.
      editColorCancelHandler();
    }
  }

  /**
   * Updates the theme item's hex color when the tone slider value changes.
   * Since the theme item is part of the `currentScheme` and thus the `materialThemeStore`,
   * those will automatically be updated (reactively).
   *
   * @param {Object} item - The theme item to be updated.
   */
  function themeToneSliderUpdateHandler(item) {
    console.log("UtilitiesView ::: themeToneSliderUpdateHandler");
    // INFO: modifying the theme item also updates the `currentScheme` and the `materialThemeStore`.
    console.log(" - item: ", item);
    // If we were to change the tone of the item's hex directly, over time, its hex color would drift.
    // To prevent this and to keep a consistent theme color with each tone change,
    // we need to generate the item's hex color from its matching palette,
    // which is also where the item itself originated from.
    const palettes = currentScheme.value.palettes;
    // Find the palette object in the current scheme that matches the theme item
    let paletteColor;
    if (item.name === "background" || item.name === "surface") {
      paletteColor = palettes.find((pc) => pc.name === "neutral");
    } else if (item.name === "surfaceVariant") {
      paletteColor = palettes.find((pc) => pc.name === "neutralVariant");
    } else {
      paletteColor = palettes.find((pc) => pc.name === item.name);
    }
    console.log(" - paletteColor: ", paletteColor);
    // With the matching palette found, create a list of tones - ranging from 10 to 90 - for that palette's hex value.
    // Then find the tone item in that list that matches the theme item's tone, which is also between 10 and 90, as set by the slider.
    // Note that the theme item's tone (`item.tone`) has already been updated by the slider (v-model).
    // So all we need to do now is to find the matching tone in the palette list
    // and update the item's hex and argb  with the values from the tonal palette list and update the label.
    if (paletteColor) {
      let tones = getTonalPalettesForHex(paletteColor.hex);
      console.log(" - tones: ", tones);
      let toneItem = tones.find((t) => t.tone === item.tone);
      console.log(" - tone item: ", toneItem);
      console.log(" - tone item hex: ", toneItem.hex);
      if (toneItem) {
        // update the item hex with new hex color
        item.hex = toneItem.hex;
        // item argb and label are read-only

        // update the item argb with new argb
        // item.argb = toneItem.argb;
        // update item label with new tone
        // item.label = item.label.split("-")[0] + "-" + toneItem.tone.toString();
      }
    }
  }

  function customToneSliderUpdateHandler(item, isDark) {
    console.log("UtilitiesView ::: customToneSliderUpdateHandler");
    console.log(" - item: ", item);
    let themeItem = isDark ? item.dark : item.light;
    console.log(" - themeItem: ", themeItem);
  }

  // TODO: UtilitisView - move argbToHex function to a util file.
  /**
   * Converts an ARGB color value to a hex color string and makes it uppercase (e.g. "#RRGGBB")
   *
   * @param {number} argb - the ARGB color value
   * @returns {string} the hex color string
   */
  function argbToHex(argb) {
    return hexFromArgb(argb).toUpperCase();
  }
</script>

<style lang="scss">
  /**
   * Styles for the image card items
   * NOTE: this style is important and shouldn't be removed as it is used to find items by class name.
   */
  // TODO: look into using refs for card images instead of using css class names.
  .card-item-img {
    // text-shadow: black 0px 0px 6px;
    // background: linear-gradient(to top, rgb(255 255 255 / 0%), rgb(0 0 0 / 65%));
    .v-card-title {
      // font-size: 1.15rem !important;
      font-weight: normal !important;
    }
  }

  /**
   * Styles for the Theme Color tone sliders
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
