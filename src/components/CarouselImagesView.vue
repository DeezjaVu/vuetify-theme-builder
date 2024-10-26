<template>
  <v-container class="fill-height px-12 mx-auto">
    <v-window class="v-container pa-0 mt-2 mb-6 mx-auto" show-arrows>
      <v-window-item v-for="(i, idx1) in Math.ceil(picsum.length / rowNumItems)" :key="`row-${idx1}`">
        <v-row class="align-sm-stretch">
          <!-- IMAGE CARDS -->
          <v-col cols="3" v-for="(k, idx2) in rowNumItems" :key="`card-${idx1}-${idx2}`">
            <v-card
              v-if="idx1 * rowNumItems + idx2 < picsum.length"
              :id="`img-card-${idx1 * rowNumItems + idx2}`"
              color="white"
              :image="picsum[idx1 * rowNumItems + idx2]"
              density="compact"
              variant="outlined"
            >
              <template #image>
                <!-- img source is automatically applied from the v-card image prop -->
                <v-img
                  class="card-img-gradient"
                  gradient="to top, rgb(255 255 255 / 10%), rgb(0 0 0 / 33%)"
                  crossorigin="anonymous"
                ></v-img>
              </template>
              <!--  style="text-shadow: black 0px 0px 6px; background: rgb(255 255 255 / 12%)" -->
              <v-card-item class="card-item-img">
                <v-card-title class="d-sm-none d-lg-flex">Color from image</v-card-title>
                <v-card-subtitle>Image {{ idx1 * rowNumItems + k }}</v-card-subtitle>
              </v-card-item>
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
    <v-row>
      <v-col cols="3">
        <v-expansion-panels>
          <template v-for="(item, index) in paletteColors" :key="item.name">
            <v-expansion-panel>
              <v-expansion-panel-title class="pa-0 pr-6">
                <template v-slot:default="{ expanded }">
                  <v-row no-gutters>
                    <v-col>
                      <v-card-item class="px-3">
                        <template #prepend>
                          <v-btn class="mr-4" :color="item.hex" icon @click="paletteButtonClickHandler(item)"></v-btn>
                        </template>
                        <v-card-title class="text-body-1 font-weight-light d-sm-none d-md-none d-lg-flex">
                          {{ item.title }}
                        </v-card-title>
                        <v-card-subtitle class="text-subtitle-2 font-mono font-weight-light d-sm-none d-md-none d-lg-flex">
                          {{ item.hex }}
                        </v-card-subtitle>
                      </v-card-item>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text class="no-bottom">
                <v-row no-gutters>
                  <v-col>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque
                    cupiditate minima
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-divider></v-divider>
                  </v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn v-if="item.name !== 'source'">Use as source</v-btn>
                      <v-btn>Edit</v-btn>
                    </v-card-actions>
                  </v-col>
                </v-row>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </template>
        </v-expansion-panels>
      </v-col>
      <!-- RIGHT SIDE COLOMN -->
      <v-col>
        <!-- RIGHT SIDE CARD -->
        <v-card>
          <v-card-item>
            <v-card-title>HCT Colors</v-card-title>
            <v-card-subtitle></v-card-subtitle>
          </v-card-item>
          <!-- RIGHT SIDE CARD CONTENT -->
          <v-card-text>
            <v-row>
              <v-col cols="4">
                <!-- LOG INFO -->
                <v-list class="font-mono">
                  <v-list-item>
                    <pre>HCT: {{ JSON.stringify(selectedHct, null, 2) }}</pre>
                  </v-list-item>
                  <!-- <v-list-item>HCT ARGB: {{ selectedHct.argb }} - HCT HEX: {{ argbToHex(selectedHct.argb) }}</v-list-item> -->
                  <v-list-item>Hue: {{ selectedHue }} - HCT Hue: {{ selectedHct.hue }}</v-list-item>
                  <v-list-item>Chroma: {{ selectedChroma }} - HCT Chroma: {{ selectedHct.chroma }}</v-list-item>
                  <v-list-item>Tone: {{ selectedTone }} - HCT Tone: {{ selectedHct.tone }}</v-list-item>
                </v-list>
              </v-col>

              <v-col cols="4">
                <!-- HEX COLOR CARD -->
                <v-row>
                  <v-col>
                    <v-card :color="argbToHex(selectedHct.argb)" density="compact">
                      <v-card-item>
                        <v-card-subtitle class="font-mono text-subtitle-2">{{ argbToHex(selectedHct.argb) }}</v-card-subtitle>
                        <template #append>
                          <!-- <v-btn icon="mdi-content-copy" size="small" variant="text" @click="copySelectedColorClickHandler" /> -->
                          <!-- <v-btn icon="mdi-select-color" size="small" variant="text" @click="useSelectedColorClickHandler" /> -->
                        </template>
                      </v-card-item>
                    </v-card>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-card-subtitle> Hue: </v-card-subtitle>
                    <v-slider
                      class="hue-slider-track"
                      v-model="selectedHue"
                      min="0"
                      max="360"
                      step="1"
                      @update:model-value="hueSliderUpdateHandler"
                    >
                      <template v-slot:append>
                        <v-text-field
                          class="font-mono--input mono-sm--input"
                          v-model="selectedHue"
                          width="80"
                          type="number"
                          min="0"
                          max="360"
                          step="1"
                          density="compact"
                          single-line
                          hide-details
                          @update:model-value="hueSliderUpdateHandler"
                        >
                        </v-text-field>
                      </template>
                    </v-slider>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-card-subtitle> Chroma: </v-card-subtitle>
                    <!-- gradient track background - gray to color -->
                    <!-- background: linear-gradient(90deg, rgba(119,119,119,1) 0%, rgba(228,0,123,1) 100%); -->
                    <v-slider
                      class="chroma-slider-track"
                      v-model="selectedChroma"
                      min="0"
                      max="100"
                      step="1"
                      @update:model-value="chromaSliderUpdateHandler"
                    >
                      <template v-slot:append>
                        <v-text-field
                          class="font-mono--input mono-sm--input"
                          v-model="selectedChroma"
                          width="80"
                          type="number"
                          min="0"
                          max="100"
                          step="1"
                          density="compact"
                          single-line
                          hide-details
                          @update:model-value="chromaSliderUpdateHandler"
                        >
                        </v-text-field>
                      </template>
                    </v-slider>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-card-subtitle>Tone:</v-card-subtitle>
                    <!-- gradient track background - black to color to white -->
                    <!-- background: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(228,0,123,1) 50%, rgba(255,255,255,1) 100%)' -->
                    <v-slider
                      class="tone-slider-track"
                      v-model="selectedTone"
                      min="0"
                      max="100"
                      step="1"
                      @update:model-value="toneSliderUpdateHandler"
                    >
                      <template v-slot:append>
                        <v-text-field
                          class="font-mono--input mono-sm--input"
                          v-model="selectedTone"
                          width="80"
                          type="number"
                          density="compact"
                          single-line
                          hide-details
                          max="100"
                          min="0"
                          step="1"
                          @update:model-value="toneSliderUpdateHandler"
                        >
                        </v-text-field>
                      </template>
                    </v-slider>
                  </v-col>
                </v-row>
              </v-col>

              <v-col cols="2">
                <template v-for="(item, idx) in customThemeColors" :key="`card-${item.name}-${idx}`">
                  <v-btn :color="item.hex" variant="flat" density="comfortable"> {{ item.title }}: {{ item.hex }} </v-btn>
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
  import { onMounted, ref, reactive } from "vue";
  import { imgAssets } from "@/utils/images/image-assets-base64.js";
  import { argbFromHex, hexFromArgb, Hct, themeFromSourceColor, TonalPalette } from "@material/material-color-utilities";
  import tinycolor from "tinycolor2";
  import { info } from "sass";

  // https://picsum.photos/
  const picsum = [
    "https://picsum.photos//440/128?random=1",
    "https://picsum.photos//440/128?random=2",
    "https://picsum.photos//440/128?random=3",
    "https://picsum.photos//440/128?random=4",
    // "https://picsum.photos//440/128?random=5"
    "https://picsum.photos/id/2/440/128",
    "https://picsum.photos/id/18/440/128",
    "https://picsum.photos/id/56/440/128",
    "https://picsum.photos/id/78/440/128",
    "https://picsum.photos/id/113/440/128",
    ...imgAssets
  ];

  const cardColor = ref("#769CDF");
  const rowNumItems = ref(8);

  const selectedImageIdx = ref(-1);

  const paletteColors = reactive([
    { title: "Source", name: "source", hex: "#3f4b2c" },
    { title: "Primary", name: "primary", hex: "#5f8128" },
    { title: "Secondary", name: "secondary", hex: "#717b60" },
    { title: "Tertiary", name: "tertiary", hex: "#527f7a" },
    { title: "Error", name: "error", hex: "#de3730" },
    { title: "Neutral", name: "neutral", hex: "#777771" },
    { title: "Neutral Variant", name: "neutralVariant", hex: "#75786c" }
  ]);

  const customThemeColors = reactive([
    { title: "Success", name: "success", hex: "#00FF00" },
    { title: "Info", name: "info", hex: "#0000FF" },
    { title: "Warning", name: "warning", hex: "#FF5500" },
    { title: "Error", name: "error", hex: "#FF0000" }
  ]);

  const hctTheme = ref(null);

  const selectedHct = ref(Hct.from(argbFromHex(paletteColors[0].hex)));

  const selectedHue = ref(180);
  const selectedChroma = ref(100);
  const selectedTone = ref(50);

  onMounted(() => {
    console.log("CarouselImagesView ::: onMounted");
    createHctTheme(paletteColors[0].hex);
  });

  function getItemIndex(idx1, idx2) {
    console.log("CarouselImagesView ::: getItemIndex");
    console.log(" - idx1: ", idx1);
    console.log(" - idx2: ", idx2);
    return idx1 * 4 + idx2;
  }

  function imageButtonClickHandler(idx1, idx2) {
    console.log("CarouselImagesView ::: imageButtonClickHandler");
    console.log(" - index 1: ", idx1);
    console.log(" - index 2: ", idx2);
    let idx = idx1 * rowNumItems.value + idx2;
    let pic = picsum[idx];
    console.log(" - pic: ", pic);
    // set crossOrigin to allow CORS (generating color from image won't work without it) "https://stackoverflow.com/a/33135803";
    // If there's still a problem on live server, get around it) "https://stackoverflow.com/a/67120628";
    // If there's still a problem on live server, get around it) "https://stackoverflow.com/a/33135803";
    // console.log(" - img: ", img);
    selectedImageIdx.value = idx;
    console.log(" - selectedImageIdx: ", selectedImageIdx.value);
  }

  function paletteButtonClickHandler(item) {
    console.log("CarouselImagesView ::: paletteButtonClickHandler");
    console.log(" - itemName:", item);
    let name = item.name;
    if (item && item.name !== "source") {
      let paletteHct = hctTheme.value.palettes[item.name];
      console.log(" - paletteHct:", item.name, paletteHct);

      // returns ARGB representation of the given tone:
      // paletteHct.tone(tone);

      // returns HCT representation of the given tone
      // paletteHct.getHct(tone)

      // returns a TonalPalette (Tones) matching the ARGB color's hue and chroma
      // TonalPalette.fromInt();
      // returns a TonalPalette (Tone) matching the HCT color's hue and chroma
      // TonalPalette.fromHct();
    }
  }

  function createHctTheme(seedColor) {
    console.log("CarouselImagesView ::: createHctTheme");

    // seedColor is a hex color
    console.log(" - seedColor: ", seedColor);
    console.log(" - is valid color: ", tinycolor(seedColor).isValid());
    console.log(" - seedColor format: ", tinycolor(seedColor).getFormat());
    let tinySeedColor = tinycolor(seedColor);
    console.log(" - tinySeedColor: ", tinySeedColor);

    if (seedColor && tinySeedColor.isValid() && tinySeedColor.getFormat() === "hex") {
      seedColor = seedColor.toUpperCase();
    } else {
      warn("[CarouselImagesView] - Seed color is not a valid hex color: ", seedColor);
      return;
    }

    // const seedColor = "#F44336";
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
      value: argbFromHex("#FB8C00"),
      blend: true
    };
    const errorCustom = {
      name: "error",
      value: argbFromHex("#CF6679"),
      blend: true
    };

    // Get the theme from a hex color (#F44336 --> material red.base)
    // const theme = themeFromSourceColor(argbFromHex(seedColor), [custom1]);

    const theme = themeFromSourceColor(argbFromHex(seedColor), [infoCustom, successCustom, warningCustom, errorCustom]);
    console.log(" - theme:", theme);
    // Print out the theme as JSON
    // console.log(JSON.stringify(theme, null, 2));

    hctTheme.value = reactive(theme);

    const palette = theme.palettes;
    console.log(" - palette: ", palette);
    const colorScheme = theme.schemes;
    console.log(" - colorScheme: ", colorScheme);
    const customColors = theme.customColors;

    customColors.forEach((entry) => {
      console.log(" - custom color: ", entry.color.name);
      console.log(" - custom color ARGB: ", entry.value);
      console.log(" - custom color HEX: ", argbToHex(entry.value));
      customThemeColors.find((item) => item.name === entry.color.name).hex = argbToHex(entry.value);
    });

    const sourceColorRGB = theme.source;
    const sourceColorHex = argbToHex(sourceColorRGB);
    console.log(" - sourceColorRGB: ", sourceColorRGB);
    console.log(" - sourceColorHex: ", sourceColorHex);

    // set new source color
    let sourceObject = paletteColors.find((entry) => entry.name === "source");
    sourceObject.hex = seedColor.toUpperCase();
    sourceObject.title = "Source (random color)";

    cardColor.value = seedColor;
    setSelectedHctColors();

    const primaryRGB = palette.primary.keyColor.argb;
    console.log(" - primaryRGB: ", primaryRGB);
    const primaryHEX = argbToHex(primaryRGB);
    console.log(" - primaryHEX: ", primaryHEX);
    // set new primary color
    paletteColors.find((entry) => entry.name === "primary").hex = primaryHEX;

    const secondaryRGB = palette.secondary.keyColor.argb;
    console.log(" - secondaryRGB: ", secondaryRGB);
    const secondaryHEX = argbToHex(secondaryRGB);
    console.log(" - secondaryHEX: ", secondaryHEX);
    // set new secondary color
    paletteColors.find((entry) => entry.name === "secondary").hex = secondaryHEX;

    const tertiaryRGB = palette.tertiary.keyColor.argb;
    console.log(" - tertiaryRGB: ", tertiaryRGB);
    const tertiaryHEX = argbToHex(tertiaryRGB);
    console.log(" - tertiaryHEX: ", tertiaryHEX);
    // set new tertiary color
    paletteColors.find((entry) => entry.name === "tertiary").hex = tertiaryHEX;

    const errorRGB = palette.error.keyColor.argb;
    console.log(" - errorRGB: ", errorRGB);
    const errorHEX = argbToHex(errorRGB);
    console.log(" - errorHEX: ", errorHEX);
    // set new error color
    paletteColors.find((entry) => entry.name === "error").hex = errorHEX;

    const neutralRGB = palette.neutral.keyColor.argb;
    console.log(" - neutralRGB: ", neutralRGB);
    const neutralHEX = argbToHex(neutralRGB);
    console.log(" - neutralHEX: ", neutralHEX);
    // set new neutral color
    paletteColors.find((entry) => entry.name === "neutral").hex = neutralHEX;

    const neutralVariantRGB = palette.neutralVariant.keyColor.argb;
    console.log(" - neutralVariantRGB: ", neutralVariantRGB);
    const neutralVariantHEX = argbToHex(neutralVariantRGB);
    console.log(" - neutralVariantHEX: ", neutralVariantHEX);
    // set new neutralVariant color
    paletteColors.find((entry) => entry.name === "neutralVariant").hex = neutralVariantHEX;
  }

  function setSelectedHctColors() {
    console.log("CarouselImagesView ::: setSelectedHctColors");
  }

  function chromaSliderUpdateHandler(chroma) {}
  function hueSliderUpdateHandler(hue) {}
  function toneSliderUpdateHandler() {}

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
  .card-item-img {
    // text-shadow: black 0px 0px 6px;
    // background: rgb(255 255 255 / 12%);
    .v-card-title {
      font-size: 1.15rem !important;
      font-weight: 300 !important;
    }
  }

  .no-bottom {
    > .v-expansion-panel-text__wrapper {
      padding-bottom: 0 !important;
    }
  }
</style>
