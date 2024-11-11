// Utilities
import { defineStore } from "pinia";
import { Variant, VariantDetails } from "@/utils/dynamiccolor/variant.js";
import { VariantScheme } from "@/utils/scheme/variant-scheme";
import { argbFromHex, hexFromArgb, TonalPalette } from "@material/material-color-utilities";
import PaletteColor from "@/utils/palettes/palette-color";
import PaletteCustom from "@/utils/palettes/palette-custom";

class MaterialTheme {
  /**
   * Updates the theme color of a theme item by getting the tone value of the theme item
   * from the given argb color and sets the hex and argb values of the theme item accordingly.
   *
   * Note: The `themeItem` object is mutated in-place and because of reactivity, it affects the store's `currentScheme`.
   *
   * @param {Object} themeItem - The theme item to be updated.
   * @param {number} argb - The argb color to get the new hex color from, based on the tone value of the theme item.
   *
   * @returns {Object} The updated theme item.
   */
  static updateThemeColor(themeItem, argb) {
    console.log("MaterialTheme ::: updateThemeColor");
    // Create TonalPalette from the scheme palette's argb color
    const tp = TonalPalette.fromInt(argb);

    // Get the ARGB color from the TonalPalette for the tone of the `themeItem`.
    // NOTE: The `themeItem.tone` value may have been changed by the user in the UI.
    // [*] Use the initial tone value instead of the current tone value.
    themeItem.tone = themeItem.initialTone;
    let itemArgb = tp.tone(themeItem.tone);
    console.log(" - itemArgb: ", itemArgb);

    // Create new hex color from the ARGB color.
    let itemHex = hexFromArgb(itemArgb);
    console.log(" - itemHex: ", itemHex);

    // Set the new hex values of the theme item.
    themeItem.hex = itemHex;

    return themeItem;
  }
}

/**
 * // [*]: Random/Favorite Hex Colors.
 */
const favoriteColors = [
  "#F9C3D3",
  "#F4AB82",
  "#BEC4b2",
  "#B4BCB3",
  "#AE73A0",
  "#828275",
  "#6A6B63",
  "#6584A6",
  "#6A6255",
  "#3C444D",
  "#494F60",
  "#434943",
  "#4d491d",
  "#3B503C",
  "#2A4457",
  "#545B42",
  "#45708E",
  "#39548d",
  "#0D4F48",
  "#96598D",
  "#890D3C",
  "#01638d"
];

const defaultColor = "#39548d";
const defaultScheme = VariantScheme.createScheme(0xff39548d, Variant.RAINBOW);

// Pinia: https://pinia.esm.dev/
export const useMaterialThemeStore = defineStore("materialTheme", {
  state: () => ({
    darkMode: true,
    currentVariant: Variant.RAINBOW,
    // sourceColor: "#769cdf",
    sourceColor: defaultColor,
    currentScheme: defaultScheme
  }),
  getters: {
    isDarkMode: (state) => state.darkMode,

    schemeVariants() {
      return VariantDetails.info;
    },

    currentVariantScheme(state) {
      const argb = argbFromHex(state.sourceColor);
      const varScheme = VariantScheme.createScheme(argb, state.currentVariant);
      return varScheme;
    }
  },
  actions: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
    },

    /**
     * Sets the source color for the theme.
     *
     * @param {string} color - The hex value of the new source color.
     */
    setSource(color) {
      console.log("MaterialTheme ::: setSource");
      this.sourceColor = color;
    },

    setCurrentVariant(variant) {
      console.log("MaterialTheme ::: setCurrentVariant");
      this.currentVariant = variant;
      this.createSchemeForHex(this.sourceColor);
    },

    /**
     * Updates the `light` and `dark` theme colors for the given palette item in the current scheme (`materialThemeStore.currentScheme`).
     *
     * - If the palette item name is `neutral`, it will update the light and dark `background` and `surface` theme colors.
     * - If the palette item name is `neutralVariant`, it will update the light and dark `surfaceVariant` theme color.
     *
     * @param {PaletteColor|PaletteCustom} palette - The modified palette item, containing the new hex color and the name of the color.
     *
     * @example
     * const paletteItem = new PaletteColor("Primary","primary","#ff0000");
     * materialThemeStore.updateThemeForPalette(paletteItem);
     */
    updateThemeForPalette(palette) {
      console.log("MaterialTheme ::: updateThemeForPalette");
      console.log(" - palette item: ", palette);
      console.log(" - paletter is custom: ", palette.isCustom);

      let scheme = this.currentScheme;
      console.log(" - scheme: ", scheme);

      // [*] If the palette item is a custom palette (success, info, warning, error),
      // [*] use the palette.customHex value instead of the .hex value,
      // [*] as the ThemeColor needs to repreent the blended (harmonized) color.
      // [*] If the palette item is not a custom palette, use the palette.hex value.
      let hex = palette.isCustom ? palette.customHex : palette.hex;
      let argb = palette.isCustom ? palette.customArgb : palette.argb;
      console.log(" - palette hex: ", hex);
      console.log(" - palette argb: ", argb);

      let tp = TonalPalette.fromInt(argb);
      console.log(" - tp: ", tp);

      // Update the light and dark theme colors for the modified palette item.
      if (palette.name === "neutral") {
        let l1 = scheme.light.find((item) => item.name === "background");
        let d1 = scheme.dark.find((item) => item.name === "background");
        let l2 = scheme.light.find((item) => item.name === "surface");
        let d2 = scheme.dark.find((item) => item.name === "surface");

        // Update the light and dark theme colors for the `background` theme color.
        MaterialTheme.updateThemeColor(l1, argb);
        MaterialTheme.updateThemeColor(d1, argb);

        // Update the light and dark theme colors for the `surface` theme color.
        MaterialTheme.updateThemeColor(l2, argb);
        MaterialTheme.updateThemeColor(d2, argb);
      } else if (palette.name === "neutralVariant") {
        let lightColor = scheme.light.find((item) => item.name === "surfaceVariant");
        let darkColor = scheme.dark.find((item) => item.name === "surfaceVariant");

        MaterialTheme.updateThemeColor(lightColor, argb);
        MaterialTheme.updateThemeColor(darkColor, argb);
      } else {
        let lightColor = scheme.light.find((item) => item.name === palette.name);
        console.log(" - lightColor: ", lightColor);

        let darkColor = scheme.dark.find((item) => item.name === palette.name);
        console.log(" - darkColor: ", darkColor);

        MaterialTheme.updateThemeColor(lightColor, argb);
        MaterialTheme.updateThemeColor(darkColor, argb);
      }
    },

    updateBlendForPalette(paletteName, blend) {
      console.log("MaterialTheme ::: updateBlendForPalette");
      console.log(" - palette name: ", paletteName);
      console.log(" - blend: ", blend);
      VariantScheme.setBlendForPalette(paletteName, blend);
    },

    /**
     * Creates a scheme for the given hex color and stores it in the `currentScheme` property.
     *
     * @param {string} color - The hex color to create a scheme for.
     */
    createSchemeForHex(color) {
      this.sourceColor = color;
      const argb = argbFromHex(color);
      const varScheme = VariantScheme.createScheme(argb, this.currentVariant);
      this.currentScheme = varScheme;
    }
  }
});
