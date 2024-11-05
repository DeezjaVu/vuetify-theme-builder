// Utilities
import { defineStore } from "pinia";
// import { Variant } from "/node_modules/@material/material-color-utilities/dynamiccolor/variant.js";
import { Variant, VariantDetails } from "@/utils/dynamiccolor/variant.js";
import { VariantScheme } from "@/utils/scheme/variant-scheme";
import { argbFromHex, hexFromArgb } from "@material/material-color-utilities";
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
    getScheme() {
      return this.currentVariantScheme;
    },
    createThemeForHex(color) {
      this.sourceColor = color;
      const argb = argbFromHex(color);
      const varScheme = VariantScheme.createScheme(argb, this.currentVariant);
      this.currentScheme = varScheme;
    }
  }
});
