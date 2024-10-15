<template>
  <v-container class="fill-height px-12 mx-auto" grid-list-xs>
    <!-- TOP ROW - IMAGE CARDS -->
    <v-row class="align-sm-stretch">
      <v-col cols="3" v-for="(pic, idx) in picsum" :key="idx">
        <v-card :id="`img-card-${idx}`" color="white" :image="pic" density="compact" variant="outlined">
          <v-card-item style="text-shadow: black 0px 0px 6px; background: rgb(255 255 255 / 12%)">
            <v-card-title>Color from image</v-card-title>
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
      <!-- LEFT SIDE COLUMN CARD -->
      <v-col cols="3">
        <v-card>
          <v-card-text>
            <!-- V-CARD TEXT -->
            <template v-for="item in paletteColors" :key="item.name">
              <v-row class="bg-secondary ma-1 rounded-e-pill rounded-s-pill">
                <v-col class="" cols="auto">
                  <v-btn width="46" height="46" :color="item.hex" icon>
                    <v-avatar></v-avatar>
                  </v-btn>
                </v-col>
                <v-col class="d-sm-none d-md-none d-lg-flex flex-column">
                  <span class="text-body-1">
                    {{ item.title }}
                  </span>
                  <span class="text-subtitle-2 font-mono">
                    {{ item.hex }}
                  </span>
                </v-col>
              </v-row>
            </template>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- RIGHT SIDE COLUMN CARDS -->
      <v-col>
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
  import * as colorUtils from "../utils/colorUtils.js";
  import { sourceColorFromImage } from "@material/material-color-utilities";

  // https://stackoverflow.com/a/71514878
  import imgTurquoise from "@/assets/images/stockcake/abstract-turquoise-art-small.jpg";
  import imgLakeside from "@/assets/images/stockcake/autumn-lakeside-serenity-small.jpg";
  import imgLavender from "@/assets/images/stockcake/lavender-sunset-hues-small.jpg";

  const selectedImageIdx = ref(0);

  const cardColor = ref("#769CDF");

  // https://picsum.photos/
  const picsum = [
    "https://picsum.photos/id/2/320/128",
    "https://picsum.photos/id/18/320/128",
    "https://picsum.photos/id/56/320/128",
    "https://picsum.photos/id/78/320/128",
    "https://picsum.photos/id/113/320/128",
    imgTurquoise,
    imgLakeside,
    imgLavender
    // "/src/assets/images/stockcake/mixing-orange-paint-small.jpg"
    // "/src/assets/images/stockcake/serene-coastal-inlet-small.jpg"
    // "/src/assets/images/stockcake/vibrant-abstract-art-small.jpg",
    // "/src/assets/images/stockcake/vibrant-social-gathering-small.jpg"
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
    imgObj.setAttribute("crossOrigin", "");
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

    const neutralRGB = theme.palettes.neutral.keyColor.argb;
    console.log(" - neutralRGB: ", neutralRGB);
    console.log(" - neutral HEX: ", hexFromArgb(neutralRGB));
    paletteColors.find((entry) => entry.name === "neutral").hex = hexFromArgb(neutralRGB);

    const neutralVariantRGB = theme.palettes.neutralVariant.keyColor.argb;
    console.log(" - neutralVariantRGB: ", neutralVariantRGB);
    console.log(" - neutralVariant HEX: ", hexFromArgb(neutralVariantRGB));
    paletteColors.find((entry) => entry.name === "neutralVariant").hex = hexFromArgb(neutralVariantRGB);

    const errorRGB = theme.palettes.error.keyColor.argb;
    console.log(" - errorRGB: ", errorRGB);
    console.log(" - error HEX: ", hexFromArgb(errorRGB));
    paletteColors.find((entry) => entry.name === "error").hex = hexFromArgb(errorRGB);

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
