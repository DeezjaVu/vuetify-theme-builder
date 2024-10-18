<template>
  <v-container class="fill-height px-12 mx-auto">
    <!-- TOP ROW - IMAGE CARDS -->
    <v-row class="align-sm-stretch">
      <v-col cols="3" v-for="(pic, idx) in picsum" :key="idx">
        <!-- IMAGE CARDS -->
        <!-- TODO: If/when moving image card to separate component, also move the scoped css styles with it -->
        <v-card :id="`img-card-${idx}`" color="white" :image="pic" density="compact" variant="outlined">
          <template #image>
            <!-- img source is automatically applied from the v-card image prop -->
            <v-img gradient="to top, rgb(255 255 255 / 10%), rgb(0 0 0 / 33%)"></v-img>
          </template>
          <!--  style="text-shadow: black 0px 0px 6px; background: rgb(255 255 255 / 12%)" -->
          <v-card-item class="card-item-img">
            <v-card-title class="d-sm-none d-lg-flex">Color from image</v-card-title>
            <v-card-subtitle>Image {{ idx + 1 }}</v-card-subtitle>
          </v-card-item>
          <v-card-actions>
            <v-icon icon="mdi-check" v-if="idx === selectedImageIdx"></v-icon>
            <v-spacer></v-spacer>
            <v-btn @click="imageButtonClickHandler(idx, pic)">Get Color</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <!-- BOTTOM ROW CARDS -->
    <v-row>
      <!-- LEFT SIDE COLUMN -->
      <v-col cols="3">
        <!-- LEFT SIDE COLUMN CARD -->
        <!-- <v-card>
          <v-card-text class="py-6"> -->
        <!-- SOURCE COLOR ROW -->
        <v-row>
          <v-col>
            <!-- SOURCE COLOR CARD -->
            <v-card title="Utilities" subtitle="Source" :color="cardColor">
              <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum pariatur animi obcaecati dolor labore quos nobis, ea
                voluptatem officiis quibusdam molestias odio aliquam eligendi sapiente porro eveniet blanditiis optio et?
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-responsive class="px-3 py-4 bg-surface rounded">
          <v-row>
            <v-col class="py-1">
              <v-card class="rounded-e-pill rounded-s-pill" variant="flat" color="secondary" density="compact">
                <v-card-item class="px-3">
                  <template #prepend>
                    <v-btn class="mr-4" :color="cardColor" icon></v-btn>
                  </template>
                  <v-card-title class="text-body-1 font-weight-light d-sm-none d-md-none d-lg-flex"> Source (from image) </v-card-title>
                  <v-card-subtitle class="text-subtitle-2 font-mono font-weight-light d-sm-none d-md-none d-lg-flex">
                    {{ cardColor }}
                  </v-card-subtitle>
                </v-card-item>
              </v-card>
            </v-col>
          </v-row>
          <!-- PALETTE COLORS ROWS -->
          <template v-for="item in paletteColors" :key="item.name">
            <v-row>
              <v-col class="py-1">
                <!-- PALETTE COLOR CARD -->
                <v-card class="rounded-e-pill rounded-s-pill" variant="flat" color="secondary" density="compact">
                  <v-card-item class="px-3">
                    <template #prepend>
                      <v-btn class="mr-4" :color="item.hex" icon></v-btn>
                    </template>
                    <v-card-title class="text-body-1 font-weight-light d-sm-none d-md-none d-lg-flex">
                      {{ item.title }}
                    </v-card-title>
                    <v-card-subtitle class="text-subtitle-2 font-mono font-weight-light d-sm-none d-md-none d-lg-flex">
                      {{ item.hex }}
                    </v-card-subtitle>
                  </v-card-item>
                </v-card>
              </v-col>
            </v-row>
          </template>
        </v-responsive>
        <!-- </v-card-text>
        </v-card> -->
      </v-col>

      <!-- RIGHT SIDE COLUMN CARDS -->
      <v-col>
        <v-row>
          <!-- <v-col> -->
          <!-- SOURCE COLOR CARD -->
          <!-- <v-card title="Utilities" subtitle="Source" :color="cardColor">
              <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum pariatur animi obcaecati dolor labore quos nobis, ea
                voluptatem officiis quibusdam molestias odio aliquam eligendi sapiente porro eveniet blanditiis optio et?
              </v-card-text>
            </v-card>
          </v-col> -->
          <template v-for="item in paletteColors" :key="item.name">
            <v-col cols="12" sm="12" md="6" lg="4">
              <v-card title="Utilities" :subtitle="item.title" :color="item.hex">
                <v-card-text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum pariatur animi obcaecati dolor labore quos nobis, ea
                  voluptatem officiis quibusdam molestias odio aliquam eligendi sapiente porro eveniet blanditiis optio et?
                </v-card-text>
              </v-card>
            </v-col>
          </template>
        </v-row>
      </v-col>
    </v-row>
    <v-row> </v-row>
  </v-container>
</template>

<script setup>
  // https://github.com/material-foundation/material-color-utilities/tree/main/typescript
  // https://github.com/material-foundation/material-color-utilities#readme
  // https://material-foundation.github.io/material-theme-builder/
  // https://m3.material.io/styles/color/roles

  import { ref, onMounted, reactive } from "vue";
  import { argbFromHex, hexFromArgb, themeFromSourceColor, themeFromImage, applyTheme } from "@material/material-color-utilities";
  import * as colorUtils from "@/utils/colorUtils.js";
  import { sourceColorFromImage } from "@material/material-color-utilities";

  import { imgTurquoise, imgLakeside, imgLavender, imgAssets } from "@/utils/images/image-assets.js";

  const selectedImageIdx = ref(-1);

  const cardColor = ref("#769CDF");

  // https://picsum.photos/
  const picsum = [
    "https://picsum.photos/id/2/320/128",
    "https://picsum.photos/id/18/320/128",
    "https://picsum.photos/id/56/320/128",
    "https://picsum.photos/id/78/320/128",
    "https://picsum.photos/id/113/320/128",
    ...imgAssets
  ];

  const paletteColors = reactive([
    { title: "Primary", name: "primary", hex: "#769CDF" },
    { title: "Secondary", name: "secondary", hex: "#8991A2" },
    { title: "Tertiary", name: "tertiary", hex: "#A288A6" },
    { title: "Error", name: "error", hex: "#FF5449" },
    { title: "Neutral", name: "neutral", hex: "#919093" },
    { title: "Neutral Variant", name: "neutralVariant", hex: "#8E9098" }
  ]);

  onMounted(() => {
    console.log("UtilitiesView ::: onMounted");
  });

  function imageButtonClickHandler(idx, pic) {
    console.log("UtilitiesView ::: imageButtonClickHandler");
    console.log(" - index: ", idx);
    console.log(" - pic: ", pic);

    selectedImageIdx.value = idx;

    const cardId = "img-card-" + idx;
    console.log(" - cardId: ", cardId);
    const card = document.getElementById(cardId);
    console.log(" - card: ", card);
    const imgObj = card.querySelector("img");
    // set crossOrigin to allow CORS (generating color from image won't work without it)
    imgObj.setAttribute("crossOrigin", "anonymous");
    // TODO: may have to add a date to the image url to make crossoring stick.
    // https://stackoverflow.com/a/33135803
    // If there's still a problem on live server, get around it by converting to base64
    // https://stackoverflow.com/a/67120628
    console.log(" - img: ", idx, imgObj);
    getThemeFromImage(imgObj);
    // getImageColor(imgObj);
  }

  async function getThemeFromImage(imgObj) {
    console.log("UtilitiesView ::: getThemeFromImage");
    const theme = await themeFromImage(imgObj);
    console.log(" - theme from image: ", theme);
    const hexColor = hexFromArgb(theme.source);
    console.log(" - theme source: ", hexColor); // #AD6D26 - #ad691c
    cardColor.value = hexColor;
    console.log("=============== PALETTES ==============");

    const primaryRGB = theme.palettes.primary.keyColor.argb;
    console.log(" - primaryRGB: ", primaryRGB);
    console.log(" - primary HEX: ", hexFromArgb(primaryRGB));
    paletteColors.find((entry) => entry.name === "primary").hex = hexFromArgb(primaryRGB);

    const secondaryRGB = theme.palettes.secondary.keyColor.argb;
    console.log(" - secondaryRGB: ", secondaryRGB);
    console.log(" - secondary HEX: ", hexFromArgb(secondaryRGB));
    paletteColors.find((entry) => entry.name === "secondary").hex = hexFromArgb(secondaryRGB);

    const tertiaryRGB = theme.palettes.tertiary.keyColor.argb;
    console.log(" - tertiaryRGB: ", tertiaryRGB);
    console.log(" - tertiary HEX: ", hexFromArgb(tertiaryRGB));
    paletteColors.find((entry) => entry.name === "tertiary").hex = hexFromArgb(tertiaryRGB);

    const errorRGB = theme.palettes.error.keyColor.argb;
    console.log(" - errorRGB: ", errorRGB);
    console.log(" - error HEX: ", hexFromArgb(errorRGB));
    paletteColors.find((entry) => entry.name === "error").hex = hexFromArgb(errorRGB);

    const neutralRGB = theme.palettes.neutral.keyColor.argb;
    console.log(" - neutralRGB: ", neutralRGB);
    console.log(" - neutral HEX: ", hexFromArgb(neutralRGB));
    paletteColors.find((entry) => entry.name === "neutral").hex = hexFromArgb(neutralRGB);

    const neutralVariantRGB = theme.palettes.neutralVariant.keyColor.argb;
    console.log(" - neutralVariantRGB: ", neutralVariantRGB);
    console.log(" - neutralVariant HEX: ", hexFromArgb(neutralVariantRGB));
    paletteColors.find((entry) => entry.name === "neutralVariant").hex = hexFromArgb(neutralVariantRGB);

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

  function generateTheme() {
    console.log("UtilitiesView ::: generateTheme");

    const seedColor = "#F44336";
    const custom1 = {
      name: "custom-1",
      value: argbFromHex("#ff0000"),
      blend: true
    };
    // Get the theme from a hex color (#F44336 --> material red.base)
    const theme = themeFromSourceColor(argbFromHex(seedColor), [custom1]);
    // Print out the theme as JSON
    console.log(JSON.stringify(theme, null, 2));

    const primaryColor = theme.primary;
    console.log("UtilitiesView ::: primaryColor: ", primaryColor);

    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    console.log("UtilitiesView ::: systemDark: ", systemDark);

    // Apply the theme to the body by updating custom properties for material tokens
    applyTheme(theme, { target: document.body, dark: systemDark });
    const styles = document.body.style;

    console.log("UtilitiesView ::: styles: ", styles);
    let out = "";
    let mdStyles = [];

    // We loop through all the element's styles using `for...in`
    for (const prop in styles) {
      // We check if the property belongs to the CSSStyleDeclaration instance
      // We also ensure that the property is a numeric index (indicating an inline style)
      if (Object.hasOwn(styles, prop) && !Number.isNaN(Number.parseInt(prop))) {
        // out += `${styles[prop]} = '${styles.getPropertyValue(styles[prop])}'\n`;
        mdStyles.push({ prop: styles[prop], value: styles.getPropertyValue(styles[prop]) });
      }
    }

    console.log("UtilitiesView ::: mdStyles: ", mdStyles);

    console.log("UtilitiesView ::: seedColor: ", seedColor); // HEX

    const sourceColor = theme.source; // int
    console.log("UtilitiesView ::: theme sourceColor: ", sourceColor); //int
    console.log("UtilitiesView ::: argbFromHex(seedColor): ", argbFromHex(seedColor)); // int, same as sourceColor

    // ARGB
    const parsedColor = colorUtils.parseColor(4294198070);
    console.log("UtilitiesView ::: colorUtils.parsedColor: ", parsedColor);

    // HEX - should be same as seedColor
    const intColor = colorUtils.RGBtoHex(parsedColor);
    console.log("UtilitiesView ::: colorUtils.RGBtoHex: ", intColor);

    const intColor2 = colorUtils.intToHex(sourceColor);
    console.log("UtilitiesView ::: colorUtils.intToHex: ", intColor2);
  }
</script>

<style lang="scss" scoped>
  .card-item-img {
    // text-shadow: black 0px 0px 6px;
    // background: rgb(255 255 255 / 12%);
    .v-card-title {
      font-size: 1.15rem !important;
      font-weight: 300 !important;
    }
  }
</style>
