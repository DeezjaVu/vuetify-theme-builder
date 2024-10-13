<template>
  <v-container class="fill-height px-12 mx-auto" grid-list-xs>
    <v-row class="align-sm-stretch">
      <v-col v-for="(pic, idx) in picsum" :key="idx">
        <v-card :id="`img-card-${idx}`" color="white" :image="pic" density="compact" variant="outlined">
          <v-card-item style="text-shadow: black 0px 0px 6px; background: rgb(255 255 255 / 12%)">
            <v-card-title>Color from image</v-card-title>
            <v-card-subtitle>Image {{ idx + 1 }}</v-card-subtitle>
          </v-card-item>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="imageButtonClickHandler(idx, pic)">Get Color</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card title="Utilities" subtitle="Primary" :color="cardColor">
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum pariatur animi obcaecati dolor labore quos nobis, ea
            voluptatem officiis quibusdam molestias odio aliquam eligendi sapiente porro eveniet blanditiis optio et?
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card title="Utilities" subtitle="Secondary" color="secondary">
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum pariatur animi obcaecati dolor labore quos nobis, ea
            voluptatem officiis quibusdam molestias odio aliquam eligendi sapiente porro eveniet blanditiis optio et?
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card title="Utilities" subtitle="Surface" color="surface">
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum pariatur animi obcaecati dolor labore quos nobis, ea
            voluptatem officiis quibusdam molestias odio aliquam eligendi sapiente porro eveniet blanditiis optio et?
          </v-card-text>
        </v-card>
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

  import { ref, onMounted } from "vue";
  import { argbFromHex, hexFromArgb, themeFromSourceColor, themeFromImage, applyTheme } from "@material/material-color-utilities";
  import * as colorUtils from "../utils/colorUtils.js";
  import { sourceColorFromImage } from "@material/material-color-utilities";

  const cardColor = ref("primary");

  // https://picsum.photos/
  const picsum = [
    "https://picsum.photos/id/2/320/128",
    "https://picsum.photos/id/18/320/128",
    "https://picsum.photos/id/56/320/128",
    "https://picsum.photos/id/78/320/128",
    "https://picsum.photos/id/113/320/128"
  ];

  onMounted(() => {
    console.log("UtilitiesView ::: onMounted");
  });

  function imageButtonClickHandler(idx, pic) {
    console.log("UtilitiesView ::: imageButtonClickHandler");
    console.log(" - index: ", idx);
    console.log(" - pic: ", pic);
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
    cardColor.value = hexColor;

    const primaryRGB = theme.palettes.primary.keyColor.argb;
    console.log(" - primaryRGB: ", primaryRGB);
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
