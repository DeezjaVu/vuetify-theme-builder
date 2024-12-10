// Utilities
import { defineStore } from "pinia";
import { computed, ref } from "vue";

// Vuetify material colors.
import colors from "vuetify/lib/util/colors";
import flatColors from "@/utils/color/flat-colors";
// import metro from "@/utils/color/metro-colors";
import greyscale from "@/utils/color/greyscale";

// const materialColorNames = [
//   "red",
//   "pink",
//   "purple",
//   "deep-purple",
//   "indigo",
//   "blue",
//   "light-blue",
//   "cyan",
//   "teal",
//   "green",
//   "light-green",
//   "lime",
//   "yellow",
//   "amber",
//   "orange",
//   "deep-orange",
//   "brown",
//   "grey",
//   "blue-grey"
// ];

const materialColors = colors;

// Pinia: https://pinia.esm.dev/
export const useBuilderColorsStore = defineStore(
  "builderColorsStore",
  () => {
    //[-]============================
    //[-] STATE (PROPERTIES)
    //[-]============================

    /**
     * Vuetify Material colors.
     */
    // const colors = ref(materialColors);

    /**
     * Bootswatch Darkly colors.
     */
    const bsDarkly = ref({
      "bs-blue": "#375a7f",
      "bs-indigo": "#6610f2",
      "bs-purple": "#6f42c1",
      "bs-pink": "#e83e8c",
      "bs-red": "#e74c3c",
      "bs-orange": "#fd7e14",
      "bs-yellow": "#f39c12",
      "bs-green": "#00bc8c",
      "bs-teal": "#20c997",
      "bs-cyan": "#3498db",
      "bs-black": "#000",
      "bs-white": "#fff",
      "bs-gray": "#888",
      "bs-gray-dark": "#303030",
      "bs-gray-100": "#f8f9fa",
      "bs-gray-200": "#ebebeb",
      "bs-gray-300": "#dee2e6",
      "bs-gray-400": "#ced4da",
      "bs-gray-500": "#adb5bd",
      "bs-gray-600": "#888",
      "bs-gray-700": "#444",
      "bs-gray-800": "#303030",
      "bs-gray-900": "#222",
      "bs-primary": "#375a7f",
      "bs-secondary": "#444",
      "bs-success": "#00bc8c",
      "bs-info": "#3498db",
      "bs-warning": "#f39c12",
      "bs-danger": "#e74c3c",
      "bs-light": "#adb5bd",
      "bs-dark": "#303030"
    });

    const bsDarklyHex = ref([
      [
        "#375A7F",
        "#6610F2",
        "#6F42C1",
        "#E83E8C",
        "#E74C3C",
        "#FD7E14",
        "#F39C12",
        "#00BC8C",
        "#20C997",
        "#3498DB",
        "#000000",
        "#FFFFFF",
        "#888888"
      ],
      ["#303030", "#F8F9FA", "#EBEBEB", "#DEE2E6", "#CED4DA", "#ADB5BD", "#888888", "#444444", "#303030", "#222222"],
      ["#375A7F", "#444444", "#00BC8C", "#3498DB", "#F39C12", "#E74C3C", "#ADB5BD", "#303030"]
    ]);

    const materialRedHex = ref([
      [colors.red.base, colors.red.lighten5, colors.red.lighten4, colors.red.lighten3, colors.red.lighten2, colors.red.lighten1],
      [colors.red.darken1, colors.red.darken2, colors.red.darken3, colors.red.darken4],
      [colors.red.accent1, colors.red.accent2, colors.red.accent3, colors.red.accent4]
    ]);

    // ColorPicker color order (rows)
    const materialBaseHex = ref([
      [
        colors.red.base,
        colors.pink.base,
        colors.purple.base,
        colors.deepPurple.base,
        colors.indigo.base,
        colors.blue.base,
        colors.lightBlue.base,
        colors.cyan.base,
        colors.teal.base,
        colors.green.base,
        colors.lightGreen.base,
        colors.lime.base,
        colors.yellow.base,
        colors.amber.base,
        colors.orange.base,
        colors.deepOrange.base,
        colors.brown.base,
        colors.blueGrey.base,
        colors.grey.base
      ],
      [
        colors.red.base,
        colors.pink.base,
        colors.purple.base,
        colors.deepPurple.base,
        colors.indigo.base,
        colors.blue.base,
        colors.lightBlue.base,
        colors.cyan.base
        // colors.teal.base,
        // colors.green.base,
        // colors.lightGreen.base,
        // colors.lime.base,
        // colors.yellow.base,
        // colors.amber.base,
        // colors.orange.base,
        // colors.deepOrange.base,
        // colors.brown.base,
        // colors.blueGrey.base,
        // colors.grey.base
      ]
    ]);

    //[-]================================
    //[-] GETTERS (COMPUTED PROPERTIES)
    //[-]================================

    /**
     * Vuetify Material Colors
     *
     * @param {*} state
     * @returns
     */
    const materialColors = computed(() => {
      console.log("AppStore ::: materialColors");
      return colors;
    });

    /**
     * Get the Darkly theme colors as an array of hex strings.
     * @returns {string[]} An array of hex strings, each representing a color in the Darkly theme.
     */
    const darklyColors = computed(() => {
      console.log("AppStore ::: darklyColors");
      // let hex = Object.values(this.bsDarkly);
      // Object.values(this.bsDarklyHex).flat()
      let hex = bsDarklyHex;
      console.log(" - hex: ", hex);
      return hex;
    });

    /**
     * The Vuetify theme colors (material colors) as an array of hex strings.
     *
     * @returns {string[]} An array of hex strings, each representing a color in the Vuetify theme.
     */
    const vuetifyColors = computed(() => {
      console.log("AppStore ::: vuetifyColors");
      let hex = Object.values(materialColors);
      console.log(" - hex: ", hex);
      return hex;
    });

    /**
     * All the colors in the state as an array of hex strings.
     *
     * @returns {string[]} An array of hex strings.
     */
    const colorsHex = computed(() => {
      console.log("AppStore ::: colorsHex");
      let hex = [materialBaseHex.value[0], Object.values(bsDarkly.value), flatColors.swatches[0]];
      console.log(" - colorsHex - hex: ", hex);
      return hex;
    });

    /**
     * All the flat colors as a nested array of hex strings.
     *
     * @returns {string[][]} A nested array of hex strings.
     */

    const flatColorsHex = computed(() => {
      console.log("AppStore ::: flatColorsHex");
      return flatColors.swatches;
    });

    const flatBaseColors = computed(() => {
      console.log("AppStore ::: flatBaseColors");
      let base = flatColors.baseColors;
      console.log(" - flat baseColors: ", base);
      return base;
    });

    /**
     * Get the greyscale colors as an object with string keys and hex values.
     * @returns {Object<string, string>} An object with string keys and hex values.
     */
    const greyscaleColors = computed(() => {
      console.log("AppStore ::: greyscaleColors");
      let hex = greyscale.greyscaleColors;
      console.log(" - greyscale colors: ", hex);
      return hex;
    });

    /**
     * The greyscale colors as an array of hex strings.
     *
     * @returns {string[]} An array of hex strings, each representing a color gradient from white to black.
     */
    const greyscaleColorsHex = computed(() => {
      console.log("AppStore ::: greyscaleColorsHex");
      let hex = greyscale.greyscaleColorsHex;
      console.log(" - greyscale hex: ", hex);
      return hex;
    });

    // metroHex() {
    //   console.log("AppStore ::: metroHex");
    //   let hex = metro.materialBaseHex;
    //   console.log(" - hex: ", hex);
    //   return hex;
    // },

    //   metroGreen() {
    //     console.log("AppStore ::: metroGreen");
    //     let clr = metro.green;
    //     console.log(" - green: ", clr);
    //     return clr;
    //   }

    //[-]================================
    //[-] ACTIONS (METHODS)
    //[-]================================

    /**
     * Example of an action.
     * This is a placeholder for a real action.
     */
    function exampleAction() {
      console.log("AppStore ::: exampleAction");
      console.log(" - store state: ", `${JSON.stringify(this.$state)}`);
    }
    return {
      bsDarkly,
      bsDarklyHex,
      materialRedHex,
      materialColors,
      darklyColors,
      vuetifyColors,
      colorsHex,
      flatBaseColors,
      flatColorsHex,
      greyscaleColors,
      greyscaleColorsHex,
      exampleAction
    };
  },
  { persist: true }
);
