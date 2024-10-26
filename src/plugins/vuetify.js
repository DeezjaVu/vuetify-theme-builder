/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";
import { VNumberInput } from "vuetify/labs/components";
import VuetifyTheme from "./vuetify-theme";

// Custom styles
import "@/styles/main.scss";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  components: {
    VNumberInput
  },
  theme: {
    defaultTheme: "dark",
    variations: {
      colors: ["primary", "secondary", "primary-variant", "secondary-variant"],
      lighten: 4,
      darken: 4
    },
    themes: {
      light: {
        colors: {
          "primary-variant": VuetifyTheme.light.primaryVariant,
          "secondary-variant": VuetifyTheme.light.secondaryVariant
        }
      },
      dark: {
        colors: {
          // background: "#031319",
          // primary: "#375A7F",
          primary: VuetifyTheme.dark.primary,
          secondary: VuetifyTheme.dark.secondary,
          "primary-variant": VuetifyTheme.dark.primaryVariant,
          "secondary-variant": VuetifyTheme.dark.secondaryVariant,
          error: VuetifyTheme.dark.error,
          info: VuetifyTheme.dark.info,
          success: VuetifyTheme.dark.success,
          // warning: "#F39C12"
          warning: VuetifyTheme.dark.warning
          // surface: "#E91E63",
          // "on-surface": "#FFEB3B"
          // "surface-bright": "#ccbfd6",
          // "surface-light": "#424242",
          // "surface-variant": "#a3a3a3"
        }
      },
      // By default, Vuetify will generate the theme colors and variables by calling
      // the genDefaults() function in the `theme.mjs` module (`node_modules/vuetify/lib/composables/theme.mjs`).
      // They'll be set to default values, based on the given light or dark value.
      "builder-light": {
        dark: false
      },
      "builder-dark": {
        dark: true
      },
      "hct-light": {
        dark: false,
        colors: {
          primary: "#00677E",
          secondary: "#4C626A",
          tertiary: "#595C7E",
          error: "#BA1A1A",
          background: "#FBFCFE",
          "surface-variant": "#DBE4E8"
        }
      },
      "hct-dark": {
        dark: true,
        colors: {
          primary: "#5AD5F9",
          secondary: "#B3CAD4",
          tertiary: "#C2C4EB",
          error: "#FFB4AB",
          background: "#191C1D",
          "surface-variant": "#40484B"
        }
      }
    }
  }
});
