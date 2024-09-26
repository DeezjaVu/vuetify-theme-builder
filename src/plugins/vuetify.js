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
      colors: ["primary-variant", "secondary-variant"],
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
          "primary-variant": "#2196F3",
          "secondary-variant": "#54B6B2"
        }
      }
    }
  }
});
