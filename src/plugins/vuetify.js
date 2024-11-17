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
      colors: ["primary", "secondary", "tertiary", "primary-variant", "secondary-variant"],
      lighten: 2,
      darken: 2
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
          warning: VuetifyTheme.dark.warning
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
          primary: "#d9e2ff",
          secondary: "#dbe2f9",
          tertiary: "#fdd7fb",
          success: "#94f991",
          info: "#d2e4ff",
          warning: "#ffdcbc",
          error: "#ffdad6",
          background: "#fbf8fd",
          surface: "#efedf1",
          "surface-light": "#e1e2ec",
          "surface-variant": "#44474f"
        }
      },
      "hct-dark": {
        dark: true,
        colors: {
          primary: "#16448f",
          secondary: "#404759",
          tertiary: "#593e5a",
          success: "#005313",
          info: "#00497e",
          warning: "#683d00",
          error: "#93000a",
          background: "#121316",
          surface: "#1f1f23",
          "surface-light": "#44464f",
          "surface-variant": "#a9abb4"
        }
      }
    }
  }
});
