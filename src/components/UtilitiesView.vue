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
      @update:picker-color="editColorChangeHandler"
      @update="editColorUpdateHandler"
      @cancel="editColorCancelHandler"
    />
    <v-window class="v-container pa-0 mt-2 mb-6 mx-auto" show-arrows>
      <v-window-item v-for="(i, idx1) in Math.ceil(picsum.length / rowNumItems)" :key="`row-${idx1}`">
        <v-row class="align-sm-stretch">
          <!--  -->
          <!-- IMAGE CARDS -->
          <!--  -->
          <v-col cols="3" v-for="(k, idx2) in rowNumItems" :key="`card-${idx1}-${idx2}`">
            <v-card
              v-if="idx1 * rowNumItems + idx2 < picsum.length"
              :id="`img-card-${idx1 * rowNumItems + idx2}`"
              :image="picsum[idx1 * rowNumItems + idx2]"
              density="compact"
              color="white"
              variant="outlined"
            >
              <v-card-item class="card-item-img">
                <v-card-title class="d-sm-none d-lg-flex">Color from image</v-card-title>
                <v-card-subtitle>Image {{ idx1 * rowNumItems + k }}</v-card-subtitle>
              </v-card-item>
              <!-- <v-card-text class="fill-height"> extract color </v-card-text> -->
              <template #image>
                <!-- img `src` is automatically applied from the v-card's `image` prop -->
                <v-img gradient="to top, rgb(255 255 255 / 5%), rgb(0 0 0 / 40%)" crossorigin="anonymous"></v-img>
                <!-- <v-img crossorigin="anonymous"></v-img> -->
              </template>
              <!--  style="text-shadow: black 0px 0px 6px; background: rgb(255 255 255 / 12%)" -->
              <v-card-actions>
                <v-icon icon="mdi-check" v-if="idx1 * rowNumItems + idx2 === selectedImageIdx"></v-icon>
                <v-spacer></v-spacer>
                <v-btn @click="imageButtonClickHandler(idx1, idx2)">Get Color</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-window-item>
    </v-window>

    <!-- BOTTOM ROW CARDS -->
    <v-row>
      <!-- LEFT SIDE COLUMN -->
      <v-col cols="12" sm="6" md="6" lg="4" xl="3" mobile-break-point="700">
        <!-- SOURCE COLOR ROW -->
        <v-row>
          <v-col>
            <!-- SOURCE COLOR CARD -->
            <v-card title="Color Palette" subtitle="Source" :color="cardColor">
              <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum pariatur animi obcaecati dolor labore quos nobis, ea
                voluptatem officiis quibusdam molestias odio aliquam eligendi sapiente porro eveniet blanditiis optio et?
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <!-- PALETTE COLORS NAV BUTTONS -->
        <v-responsive class="px-3 py-4 bg-surface rounded">
          <!-- PALETTE COLORS ROWS -->
          <template v-for="item in paletteColors" :key="item.name">
            <v-row>
              <v-col class="py-1">
                <!-- PALETTE COLOR CARD -->
                <v-card class="rounded-e-pill rounded-s-pill" variant="flat" color="secondary" density="compact">
                  <v-card-item class="px-3">
                    <template #prepend>
                      <v-btn class="mr-4" :color="item.hex" icon @click="paletteButtonClickHandler(item)"></v-btn>
                    </template>
                    <v-card-title class="text-body-1 font-weight-light">
                      {{ item.title }}
                    </v-card-title>
                    <v-card-subtitle class="text-subtitle-2 font-mono font-weight-light">
                      {{ item.hex }}
                    </v-card-subtitle>
                    <template #append v-if="item.name === `source`">
                      <v-tooltip
                        text="Random color."
                        close-on-content-click
                        v-model="randomTooltipOpen"
                        @update:model-value="randomTooltipUpdateHandler"
                      >
                        <template v-slot:activator="{ props }">
                          <v-btn
                            icon="mdi-tools"
                            v-bind="props"
                            size="small"
                            variant="text"
                            aria-label="Random color"
                            @click="randomButtonClickHandler(item)"
                          ></v-btn>
                        </template>
                      </v-tooltip>
                    </template>
                  </v-card-item>
                </v-card>
              </v-col>
            </v-row>
          </template>
        </v-responsive>
      </v-col>

      <!-- RIGHT SIDE COLUMN CARDS -->
      <v-col>
        <v-row>
          <template v-for="item in paletteColors" :key="item.name">
            <v-col v-if="item.name !== `source`" cols="12" sm="12" md="12" lg="4">
              <v-card title="Color" :subtitle="item.title" :color="item.hex">
                <v-card-text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum pariatur animi obcaecati dolor labore quos nobis, ea
                  voluptatem officiis quibusdam molestias odio aliquam eligendi sapiente porro eveniet blanditiis optio et?
                </v-card-text>
              </v-card>
            </v-col>
          </template>
        </v-row>

        <!-- HCT COLOR ROW -->
        <v-row>
          <v-col>
            <v-card>
              <v-card-item>
                <v-card-title>Card Title</v-card-title>
              </v-card-item>
              <v-card-text>
                <v-row>
                  <v-col>
                    <v-list>
                      <v-list-item>
                        <pre>HCT: {{ JSON.stringify(primaryHct, null, 2) }}</pre>
                      </v-list-item>
                      <v-list-item>HCT ARGB: {{ primaryHct.argb }} - HCT HEX: {{ hexFromArgb(primaryHct.argb) }}</v-list-item>
                      <v-list-item>Hue: {{ primaryHue }} - HCT Hue: {{ primaryHct.hue }}</v-list-item>
                      <v-list-item>Chroma: {{ primaryChroma }} - HCT Chroma: {{ primaryHct.chroma }}</v-list-item>
                      <v-list-item>Tone: {{ primaryTone }} - HCT Tone: {{ primaryHct.tone }}</v-list-item>
                    </v-list>
                  </v-col>
                  <v-col cols="4">
                    <!-- <v-sheet width="150" height="150" :color="hexFromArgb(primaryHct.argb)" elevation="10" rounded></v-sheet> -->
                    <v-card title="Color" :subtitle="`Source: ${hexFromArgb(primaryHct.argb)}`" :color="hexFromArgb(primaryHct.argb)">
                      <v-card-text>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum pariatur animi obcaecati dolor labore quos nobis,
                        ea voluptatem officiis quibusdam molestias odio aliquam eligendi sapiente porro eveniet blanditiis optio et?
                      </v-card-text>
                    </v-card>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="2"> Hue: </v-col>
                  <v-col>
                    <v-slider
                      class="hue-slider-track"
                      v-model="primaryHue"
                      min="0"
                      max="360"
                      step="1"
                      thumb-label
                      @update:model-value="primaryHueUpdateHandler"
                    >
                      <template v-slot:append>
                        <v-text-field
                          v-model="primaryHue"
                          width="100"
                          type="number"
                          density="compact"
                          single-line
                          hide-details
                          @update:model-value="primaryHueUpdateHandler"
                        >
                        </v-text-field>
                      </template>
                    </v-slider>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="2"> Chroma: </v-col>
                  <v-col>
                    <!-- gradient track background - gray to color -->
                    <!-- background: linear-gradient(90deg, rgba(119,119,119,1) 0%, rgba(228,0,123,1) 100%); -->
                    <v-slider
                      class="chroma-slider-track"
                      v-model="primaryChroma"
                      min="0"
                      max="100"
                      step="1"
                      @update:model-value="primaryChromaUpdateHandler"
                    >
                      <template v-slot:append>
                        <v-text-field
                          v-model="primaryChroma"
                          width="100"
                          type="number"
                          density="compact"
                          single-line
                          hide-details
                          @update:model-value="primaryChromaUpdateHandler"
                        >
                        </v-text-field>
                      </template>
                    </v-slider>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="2"> Tone: </v-col>
                  <v-col>
                    <!-- gradient track background - black to color to white -->
                    <!-- background: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(228,0,123,1) 50%, rgba(255,255,255,1) 100%)' -->
                    <v-slider
                      class="tone-slider-track"
                      v-model="primaryTone"
                      min="0"
                      max="100"
                      step="1"
                      @update:model-value="primaryToneUpdateHandler"
                    >
                      <template v-slot:append>
                        <v-text-field
                          v-model="primaryTone"
                          width="80"
                          type="number"
                          density="compact"
                          single-line
                          hide-details
                          @update:model-value="primaryToneUpdateHandler"
                        >
                        </v-text-field>
                      </template>
                    </v-slider>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card title="Theme"> </v-card>
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

  import { ref, onMounted, reactive } from "vue";
  import { argbFromHex, hexFromArgb, themeFromSourceColor, themeFromImage, applyTheme, Hct } from "@material/material-color-utilities";
  import * as colorUtils from "@/utils/colorUtils.js";
  import { sourceColorFromImage } from "@material/material-color-utilities";
  import tinycolor from "tinycolor2";
  import { imgAssets } from "@/utils/images/image-assets.js";

  const randomTooltipOpen = ref(false);

  const modalColorOpen = ref(false);
  const tempColor = ref("");
  const selectedColorName = ref("");
  const selectedColor = ref("");

  const selectedImageIdx = ref(-1);
  const rowNumItems = ref(8);

  const cardColor = ref("#769CDF");
  const randomColor = ref(null);

  // https://picsum.photos/
  const picsum = [
    "https://picsum.photos//440/128?random=1",
    "https://picsum.photos//440/128?random=2",
    "https://picsum.photos//440/128?random=3",
    "https://picsum.photos//440/128?random=4",
    "https://picsum.photos/id/2/440/128",
    "https://picsum.photos/id/18/440/128",
    "https://picsum.photos/id/56/440/128",
    "https://picsum.photos/id/78/440/128",
    "https://picsum.photos/id/113/440/128",
    ...imgAssets
  ];

  const paletteColors = reactive([
    { title: "Source", name: "source", hex: "#769CDF" },
    { title: "Primary", name: "primary", hex: "#769CDF" },
    { title: "Secondary", name: "secondary", hex: "#8991A2" },
    { title: "Tertiary", name: "tertiary", hex: "#A288A6" },
    { title: "Error", name: "error", hex: "#FF5449" },
    { title: "Neutral", name: "neutral", hex: "#919093" },
    { title: "Neutral Variant", name: "neutralVariant", hex: "#8E9098" }
  ]);

  const primaryHct = ref(Hct.fromInt(argbFromHex(cardColor.value)));
  console.log("UtilitiesView ::: primaryHct: ", primaryHct.value);
  console.log("UtilitiesView ::: primaryHct HEX: ", hexFromArgb(primaryHct.value.argb));
  console.log("UtilitiesView ::: cardColor HEX: ", cardColor.value);
  let testHct = Hct.fromInt(primaryHct.value.argb);
  console.log("UtilitiesView ::: HCT from ARGB: ", testHct);
  testHct.chroma = 100;
  console.log("UtilitiesView ::: HCT chroma 100: ", testHct.chroma);
  testHct.tone = 50;
  console.log("UtilitiesView ::: HCT tone 50: ", testHct.tone);
  console.log("UtilitiesView ::: HCT from ARGB: ", testHct);

  const primaryHue = ref(Math.round(primaryHct.value.hue)); // primaryHct.value.hue);
  const primaryChroma = ref(Math.round(primaryHct.value.chroma)); //primaryHct.value.chroma);
  const primaryTone = ref(Math.round(primaryHct.value.tone)); // primaryHct.value.tone);

  // If you want to get a color from the Tonal Palette, use the following:
  // const primary98 = TonalPalette.fromInt(primary).tone(98);

  onMounted(() => {
    console.log("UtilitiesView ::: onMounted");
  });

  function imageButtonClickHandler(idx1, idx2) {
    console.log("UtilitiesView ::: imageButtonClickHandler");
    console.log(" - index 1: ", idx1);
    console.log(" - index 2: ", idx2);
    let idx = idx1 * rowNumItems.value + idx2;

    selectedImageIdx.value = idx;

    // get the source color object from palette
    const sourceObject = paletteColors.find((item) => item.name === "source");
    console.log(" - sourceObject: ", sourceObject);

    // update the title to reflect an image source
    sourceObject.title = "Source (from image)";

    const cardId = "img-card-" + idx.toString();
    console.log(" - cardId: ", cardId);

    // get the card matching the cardId
    const card = document.getElementById(cardId);
    console.log(" - card: ", card);

    // get the image from the card
    const imgObj = card.querySelector("img");

    // set crossOrigin to allow CORS (generating color from image won't work without it)
    imgObj.setAttribute("crossOrigin", "anonymous");
    // TODO: may have to add a date to the image url to make crossorigin stick.
    // https://stackoverflow.com/a/33135803
    // If there's still a problem on live server, get around it by converting to base64
    // https://stackoverflow.com/a/67120628
    console.log(" - img: ", idx, imgObj);

    getThemeFromImage(imgObj);
  }

  async function getThemeFromImage(imgObj) {
    console.log("UtilitiesView ::: getThemeFromImage");

    // get the theme from the image
    const theme = await themeFromImage(imgObj);
    console.log(" - theme from image: ", theme);

    const hexColor = hexFromArgb(theme.source).toUpperCase();
    console.log(" - theme source: ", hexColor);

    cardColor.value = hexColor;
    paletteColors.find((entry) => entry.name === "source").hex = hexColor;

    console.log("=============== PALETTES ==============");

    const primaryRGB = theme.palettes.primary.keyColor.argb;
    console.log(" - primaryRGB: ", primaryRGB);
    const primaryHex = hexFromArgb(primaryRGB).toUpperCase();
    console.log(" - primary HEX: ", primaryHex);
    paletteColors.find((entry) => entry.name === "primary").hex = primaryHex;

    const secondaryRGB = theme.palettes.secondary.keyColor.argb;
    console.log(" - secondaryRGB: ", secondaryRGB);
    const secondaryHex = hexFromArgb(secondaryRGB).toUpperCase();
    console.log(" - secondary HEX: ", secondaryHex);
    paletteColors.find((entry) => entry.name === "secondary").hex = secondaryHex;

    const tertiaryRGB = theme.palettes.tertiary.keyColor.argb;
    console.log(" - tertiaryRGB: ", tertiaryRGB);
    const tertiaryHex = hexFromArgb(tertiaryRGB).toUpperCase();
    console.log(" - tertiary HEX: ", tertiaryHex);
    paletteColors.find((entry) => entry.name === "tertiary").hex = tertiaryHex;

    const errorRGB = theme.palettes.error.keyColor.argb;
    console.log(" - errorRGB: ", errorRGB);
    const errorHex = hexFromArgb(errorRGB).toUpperCase();
    console.log(" - error HEX: ", errorHex);
    paletteColors.find((entry) => entry.name === "error").hex = errorHex;

    const neutralRGB = theme.palettes.neutral.keyColor.argb;
    console.log(" - neutralRGB: ", neutralRGB);
    const neutralHex = hexFromArgb(neutralRGB).toUpperCase();
    console.log(" - neutral HEX: ", neutralHex);
    paletteColors.find((entry) => entry.name === "neutral").hex = neutralHex;

    const neutralVariantRGB = theme.palettes.neutralVariant.keyColor.argb;
    console.log(" - neutralVariantRGB: ", neutralVariantRGB);
    const neutralVariantHex = hexFromArgb(neutralVariantRGB).toUpperCase();
    console.log(" - neutralVariant HEX: ", neutralVariantHex);
    paletteColors.find((entry) => entry.name === "neutralVariant").hex = neutralVariantHex;

    console.log(paletteColors);

    console.log("=========== SCHEMES LIGHT ===========");
    const lightPrimary = theme.schemes.light.primary;
    console.log(" - lightPrimary: ", lightPrimary); //
    console.log(" - lightPrimary HEX: ", hexFromArgb(lightPrimary)); //#6e3d00 - #8c5000

    const lightSecondary = theme.schemes.light.secondary;
    console.log(" - lightSecondary: ", lightSecondary);
    console.log(" - lightSecondary HEX: ", hexFromArgb(lightSecondary));

    const lightTertiary = theme.schemes.light.tertiary;
    console.log(" - lightTertiary: ", lightTertiary);
    console.log(" - lightTertiary HEX: ", hexFromArgb(lightTertiary));

    const lightBackground = theme.schemes.light.background;
    console.log(" - lightBackground: ", lightBackground);
    console.log(" - lightBackground HEX: ", hexFromArgb(lightBackground));

    const lightSurface = theme.schemes.light.surface;
    console.log(" - lightSurface: ", lightSurface);
    console.log(" - lightSurface HEX: ", hexFromArgb(lightSurface));

    console.log("=========== SCHEMES DARK ============");
    const darkPrimary = theme.schemes.dark.primary;
    console.log(" - darkPrimary: ", darkPrimary);
    console.log(" - darkPrimary HEX: ", hexFromArgb(darkPrimary));

    const darkSecondary = theme.schemes.dark.secondary;
    console.log(" - darkSecondary: ", darkSecondary);
    console.log(" - darkSecondary HEX: ", hexFromArgb(darkSecondary));

    const darkTertiary = theme.schemes.dark.tertiary;
    console.log(" - darkTertiary: ", darkTertiary);
    console.log(" - darkTertiary HEX: ", hexFromArgb(darkTertiary));

    const darkBackground = theme.schemes.dark.background;
    console.log(" - darkBackground: ", darkBackground);
    console.log(" - darkBackground HEX: ", hexFromArgb(darkBackground));

    const darkSurface = theme.schemes.dark.surface;
    console.log(" - darkSurface: ", darkSurface);
    console.log(" - darkSurface HEX: ", hexFromArgb(darkSurface));
  }

  async function getImageColor(img) {
    console.log("UtilitiesView ::: getImageColor");
    try {
      const imgColor = await sourceColorFromImage(img);
      console.log(" - color from source:", imgColor);
      const hexColor = colorUtils.intToHex(imgColor);
      console.log(" - hexColor intToHex: ", hexColor);
      const hexColor2 = hexFromArgb(imgColor);
      console.log(" - hexColor 2 hexFromArgb: ", hexColor2);
      cardColor.value = hexColor;
    } catch (error) {
      console.error("Error getting color from image:", error);
    }
  }

  function generateTheme(seedColor) {
    console.log("UtilitiesView ::: generateTheme");
    console.log(" - seedColor: ", seedColor);

    // const seedColor = "#F44336";
    // const custom1 = {
    //   name: "custom-1",
    //   value: argbFromHex("#ff0000"),
    //   blend: true
    // };

    // Get the theme from a hex color (#F44336 --> material red.base)
    // const theme = themeFromSourceColor(argbFromHex(seedColor), [custom1]);

    const theme = themeFromSourceColor(argbFromHex(seedColor));
    // Print out the theme as JSON
    // console.log(JSON.stringify(theme, null, 2));

    const palette = theme.palettes;
    console.log(" - palette: ", palette);
    const colorScheme = theme.schemes;
    console.log(" - colorScheme: ", colorScheme);

    const sourceColorRGB = theme.source;
    const sourceColorHex = hexFromArgb(sourceColorRGB).toUpperCase();
    console.log(" - sourceColorRGB: ", sourceColorRGB);
    console.log(" - sourceColorHex: ", sourceColorHex);

    // set new source color
    let sourceObject = paletteColors.find((entry) => entry.name === "source");
    sourceObject.hex = seedColor;
    sourceObject.title = "Source (random color)";
    cardColor.value = seedColor;

    const primaryRGB = palette.primary.keyColor.argb;
    console.log(" - primaryRGB: ", primaryRGB);
    const primaryHEX = hexFromArgb(primaryRGB).toUpperCase();
    console.log(" - primaryHEX: ", primaryHEX);
    // set new primary color
    paletteColors.find((entry) => entry.name === "primary").hex = primaryHEX;

    const secondaryRGB = palette.secondary.keyColor.argb;
    console.log(" - secondaryRGB: ", secondaryRGB);
    const secondaryHEX = hexFromArgb(secondaryRGB).toUpperCase();
    console.log(" - secondaryHEX: ", secondaryHEX);
    // set new secondary color
    paletteColors.find((entry) => entry.name === "secondary").hex = secondaryHEX;

    const tertiaryRGB = palette.tertiary.keyColor.argb;
    console.log(" - tertiaryRGB: ", tertiaryRGB);
    const tertiaryHEX = hexFromArgb(tertiaryRGB).toUpperCase();
    console.log(" - tertiaryHEX: ", tertiaryHEX);
    // set new tertiary color
    paletteColors.find((entry) => entry.name === "tertiary").hex = tertiaryHEX;

    const errorRGB = palette.error.keyColor.argb;
    console.log(" - errorRGB: ", errorRGB);
    const errorHEX = hexFromArgb(errorRGB).toUpperCase();
    console.log(" - errorHEX: ", errorHEX);
    // set new error color
    paletteColors.find((entry) => entry.name === "error").hex = errorHEX;

    const neutralRGB = palette.neutral.keyColor.argb;
    console.log(" - neutralRGB: ", neutralRGB);
    const neutralHEX = hexFromArgb(neutralRGB).toUpperCase();
    console.log(" - neutralHEX: ", neutralHEX);
    // set new neutral color
    paletteColors.find((entry) => entry.name === "neutral").hex = neutralHEX;

    const neutralVariantRGB = palette.neutralVariant.keyColor.argb;
    console.log(" - neutralVariantRGB: ", neutralVariantRGB);
    const neutralVariantHEX = hexFromArgb(neutralVariantRGB).toUpperCase();
    console.log(" - neutralVariantHEX: ", neutralVariantHEX);
    // set new neutralVariant color
    paletteColors.find((entry) => entry.name === "neutralVariant").hex = neutralVariantHEX;

    getTinyInfo(palette);
  }

  function randomButtonClickHandler(clrItem) {
    console.log("UtilitiesView ::: randomButtonClickHandler");
    console.log(" - clrItem: ", clrItem);
    const clr = (randomColor.value = tinycolor.random());
    console.log(" - clr: ", clr);
    const hex = clr.toHexString().toUpperCase();
    console.log(" - hex: ", hex);
    cardColor.value = hex;
    selectedImageIdx.value = -1;
    generateTheme(hex);
  }

  function getTinyInfo(palette) {
    console.log("UtilitiesView ::: getTinyInfo");
    let primary = tinycolor(hexFromArgb(palette.primary.keyColor.argb));
    // let secondary = tinycolor(palette.secondary.keyColor.argb);
    // let tertiary = tinycolor(palette.tertiary.keyColor.argb);
    // let error = tinycolor(palette.error.keyColor.argb);
    // let neutral = tinycolor(palette.neutral.keyColor.argb);
    // let neutralVariant = tinycolor(palette.neutralVariant.keyColor.argb);
    console.log(" - palette primary: ", palette.primary);

    console.log(" - primary: ", primary);
    // console.log(" - secondary: ", secondary);
    // console.log(" - tertiary: ", tertiary);
    // console.log(" - error: ", error);
    // console.log(" - neutral: ", neutral);
    // console.log(" - neutralVariant: ", neutralVariant);
    console.log(" - dark: ", primary.isDark());
    console.log(" - brightness: ", primary.getBrightness());
    console.log(" - luminance: ", primary.getLuminance());
  }

  function paletteButtonClickHandler(clrItem) {
    console.log("UtilitiesView ::: paletteButtonClickHandler");
    console.log(" - clrItem: ", clrItem);
    let item = paletteColors.find((item) => item.name === clrItem.name);
    if (item) {
      selectedColor.value = item.hex;
      tempColor.value = item.hex;
      selectedColorName.value = item.name;
    }
    modalColorOpen.value = true;
  }

  function randomTooltipUpdateHandler(value) {
    console.log("UtilitiesView ::: randomTooltipUpdateHandler");
    console.log(" - value: ", value);
    console.log(" - randomTooltipOpen:", randomTooltipOpen.value);
    if (value) {
      setTimeout(() => {
        randomTooltipOpen.value = false;
      }, 3000);
    }
  }

  function editColorChangeHandler(color) {
    console.log("UtilitiesView ::: editColorChangeHandler");
    console.log(" - picker color: ", color);
    console.log(" - selectedColor: ", selectedColor.value);
    // Update the palette color with the new value.
    // Assigning the color to the paletteColors object
    // will automatically update the theme store (not applicable here for now).
    paletteColors.find((item) => item.name === selectedColorName.value).hex = color;
    // If editing source color, update the card color as well.
    let colorName = selectedColorName.value;
    if (colorName === "source") {
      cardColor.value = color;
    }
  }

  function editColorUpdateHandler(color) {
    console.log("UtilitiesView ::: editColorUpdateHandler");
    console.log(" - color: ", color);
  }

  function editColorCancelHandler() {
    console.log("UtilitiesView ::: editColorCancelHandler");
  }

  function primaryHueUpdateHandler(hue) {
    console.log("UtilitiesView ::: primaryHueUpdateHandler");
    console.log(" - hue: ", hue);
    console.log(" - primaryHue: ", primaryHue.value);
    console.log(" - primaryHct: ", primaryHct.value);
    let hct = primaryHct.value;
    hct.hue = hue;
    hct.chroma = primaryChroma.value;
    hct.tone = primaryTone.value;
    // update the slider backgrouds with new hct color
    updateSliderBackgrounds();
  }

  function primaryChromaUpdateHandler(chroma) {
    console.log("UtilitiesView ::: primaryChromaUpdateHandler");
    console.log(" - chroma: ", chroma);
    console.log(" - typeof chroma: ", typeof chroma);

    console.log(" - primaryChroma: ", primaryChroma.value);
    console.log(" - primaryHct: ", primaryHct.value);
    let hct = primaryHct.value;
    hct.chroma = Number(chroma) || primaryChroma.value;
    hct.tone = Number(primaryTone.value);
    hct.hue = Number(primaryHue.value);
  }

  function primaryToneUpdateHandler(tone) {
    console.log("UtilitiesView ::: primaryToneUpdateHandler");
    console.log(" - tone: ", tone, " - isNaN: ", isNaN(tone));
    console.log(" - typeof tone: ", typeof tone);

    console.log(" - primaryTone: ", primaryTone.value);
    console.log(" - primaryHct: ", primaryHct.value);
    // if tone is NaN (e.g. when the user clears the text field), set the hct tone to its current value
    primaryHct.value.tone = Number(tone) || primaryHct.value.tone;

    // set the hct chroma so that the HCT color is properly updated when accessing its argb value
    console.log(" - primaryChroma: ", primaryChroma.value);
    primaryHct.value.chroma = primaryChroma.value;
    primaryHct.value.hue = primaryHue.value;

    // TODO: update all properties in the hct object
    // TODO: or even just create a new one from the hue, chroma, and tone values.
  }

  // chroma-slider-track - hue-slider-track - tone-slider-track
  // .chroma-slider-track -> .v-slider-track -> .v-slider-track__background

  function updateSliderBackgrounds() {
    console.log("UtilitiesView ::: updateSliderBackgrounds");
    console.log(" - hue: ", primaryHue.value);
    console.log(" - chroma: ", primaryChroma.value);
    console.log(" - tone: ", primaryTone.value);

    // let hueSliderTrack = document.querySelector(".hue-slider-track");
    // console.log(" - hueSliderTrack: ", hueSliderTrack);

    let chromaSliderTrack = document.querySelector(".chroma-slider-track .v-slider-track .v-slider-track__background");
    console.log(" - chromaSliderTrack: ", chromaSliderTrack);
    let chromaStyle = chromaSliderTrack.style;
    console.log(" - chromaStyle: ", chromaStyle);

    let toneSliderTrack = document.querySelector(".tone-slider-track .v-slider-track .v-slider-track__background");
    console.log(" - toneSliderTrack: ", toneSliderTrack);
    let toneStyle = toneSliderTrack.style;
    console.log(" - toneStyle: ", toneStyle);

    // new HCT color with the same hue, full chroma (100), and full tone (53)
    let bgHct = Hct.fromInt(primaryHct.value.argb);
    console.log(" - HCT from ARGB: ", bgHct);

    bgHct.tone = 53;
    console.log(" - HCT tone 53: ", bgHct.tone);
    // chroma needs to be set last, as changing tone affects chroma
    bgHct.chroma = 100;
    console.log(" - HCT chroma 100: ", bgHct.chroma);

    console.log(" - HCT from ARGB: ", bgHct);

    let bgHex = hexFromArgb(bgHct.argb);
    let chromaBgStyle = "linear-gradient(to right, #777777 0%, #555555 100%)".replace("#555555", bgHex);
    console.log(" - chromaBgStyle: ", chromaBgStyle);
    chromaStyle.setProperty("background", chromaBgStyle, "important");

    let toneBgStyle = "linear-gradient(to right, #000000 0%, #555555 50%, #FFFFFF 100%)".replace("#555555", bgHex);
    console.log(" - toneBgStyle: ", toneBgStyle);
    toneStyle.setProperty("background", toneBgStyle, "important");
  }
</script>

<style lang="scss">
  .card-item-img {
    // text-shadow: black 0px 0px 6px;
    // background: rgb(255 255 255 / 12%);
    .v-card-title {
      font-size: 1.15rem !important;
      font-weight: 300 !important;
    }
  }

  .hue-slider-track {
    .v-slider-track__background {
      background: linear-gradient(to right, #f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00) !important;
      height: 12px !important;
      opacity: 1 !important;
    }
    .v-slider-track__fill {
      visibility: hidden !important;
    }
  }

  .chroma-slider-track {
    .v-slider-track__background {
      background: linear-gradient(to right, #777777 0%, #e4007b 100%) !important;
      height: 12px !important;
      opacity: 1 !important;
    }
    .v-slider-track__fill {
      visibility: hidden !important;
    }
  }

  .tone-slider-track {
    .v-slider-track__background {
      background: linear-gradient(to right, #000000 0%, #e4007b 50%, #ffffff 100%) !important;
      height: 12px !important;
      opacity: 1 !important;
    }
    .v-slider-track__fill {
      visibility: hidden !important;
    }
  }
</style>
