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

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
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
          "primary-variant": "#1867C0",
          "secondary-variant": "#48A9A6"
        }
      },
      dark: {
        colors: {
          // background: "#031319",
          primary: "#375A7F",
          secondary: "#444444",
          "primary-variant": "#2196F3",
          "secondary-variant": "#54B6B2",
          error: "#E74C3C",
          info: "#3498DB",
          success: "#00BC8C",
          // warning: "#F39C12"
          warning: "#CF7F00"
          // surface: "#E91E63",
          // "on-surface": "#FFEB3B"
          // "surface-bright": "#ccbfd6",
          // "surface-light": "#424242",
          // "surface-variant": "#a3a3a3"
        }
      },
      // By default, Vuetify will generate the theme colors and variables by calling
      // the genDefaults() function in the theme.mjs module (node_modules/vuetify/lib/composables/theme.mjs).
      // They'll be set to default values, based on the given light or dark value.
      "builder-light": {
        light: true
      },
      "builder-dark": {
        dark: true
      }
    }
  }
});
