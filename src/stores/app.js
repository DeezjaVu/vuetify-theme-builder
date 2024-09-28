// Utilities
import { defineStore } from "pinia";

// Vuetify material colors.
import colors from "vuetify/lib/util/colors";

const materialColorNames = [
  "red",
  "pink",
  "purple",
  "deep-purple",
  "indigo",
  "blue",
  "light-blue",
  "cyan",
  "teal",
  "green",
  "light-green",
  "lime",
  "yellow",
  "amber",
  "orange",
  "deep-orange",
  "brown",
  "grey",
  "blue-grey"
];

const materialColors = colors;

// Pinia: https://pinia.esm.dev/
export const useAppStore = defineStore("app", {
  /**
   * The state of the application.
   * This is the store's primary data source.
   *
   */
  state: () => ({
    /**
     * Vuetify Material colors.
     */
    colors: materialColors,
    /**
     * Bootswatch Darkly colors.
     */
    bsDarkly: {
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
    },
    bsDarklyHex: [
      [
        "#375a7f",
        "#6610f2",
        "#6f42c1",
        "#e83e8c",
        "#e74c3c",
        "#fd7e14",
        "#f39c12",
        "#00bc8c",
        "#20c997",
        "#3498db",
        "#000",
        "#fff",
        "#888"
      ],
      ["#303030", "#f8f9fa", "#ebebeb", "#dee2e6", "#ced4da", "#adb5bd", "#888", "#444", "#303030", "#222"],
      ["#375a7f", "#444", "#00bc8c", "#3498db", "#f39c12", "#e74c3c", "#adb5bd", "#303030"]
    ],
    materialRedHex: [
      [colors.red.base, colors.red.lighten5, colors.red.lighten4, colors.red.lighten3, colors.red.lighten2, colors.red.lighten1],
      [colors.red.darken1, colors.red.darken2, colors.red.darken3, colors.red.darken4],
      [colors.red.accent1, colors.red.accent2, colors.red.accent3, colors.red.accent4]
    ],
    // ColorPicker default color order (columns)
    // materialBaseHex: [
    //   [colors.red.base, colors.pink.base],
    //   [colors.purple.base, colors.deepPurple.base],
    //   [colors.indigo.base, colors.blue.base],
    //   [colors.lightBlue.base, colors.cyan.base],
    //   [colors.teal.base, colors.green.base],
    //   [colors.lightGreen.base, colors.lime.base],
    //   [colors.yellow.base, colors.amber.base],
    //   [colors.orange.base, colors.deepOrange.base],
    //   [colors.brown.base, colors.blueGrey.base, colors.grey.base]
    // ],

    // ColorPicker default color order (rows  )
    materialBaseHex: [
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
    ]
  }),

  /**
   * The getters of the application.
   * These are functions that can be used to compute derived state.
   */
  getters: {
    /**
     * Example of a getter.
     * This is a placeholder for a real getter.
     */
    exampleGetter(state) {
      console.log("AppStore ::: exampleGetter");
    },

    /**
     * Vuetify Material Colors
     *
     * @param {*} state
     * @returns
     */
    materialColors: (state) => {
      console.log("AppStore ::: materialColors");
      return state.colors;
    },

    /**
     * Get the Darkly theme colors as an array of hex strings.
     * @returns {string[]} An array of hex strings, each representing a color in the Darkly theme.
     */
    darklyColors(state) {
      console.log("AppStore ::: darklyColors");
      // let hex = Object.values(this.bsDarkly);
      // Object.values(this.bsDarklyHex).flat()
      let hex = this.bsDarklyHex;
      console.log(" - hex: ", hex);
      return hex;
    },

    /**
     * Get the Vuetify theme colors as an array of hex strings.
     * @returns {string[]} An array of hex strings, each representing a color in the Vuetify theme.
     */
    vuetifyColors(state) {
      console.log("AppStore ::: vuetifyColors");
      let hex = Object.values(state.materialColors);
      console.log(" - hex: ", hex);
      return hex;
    }
  },

  /**
   * The actions of the application.
   * These are functions that can be used to modify the state.
   */
  actions: {
    /**
     * Example of an action.
     * This is a placeholder for a real action.
     */
    exampleAction() {
      console.log("AppStore ::: exampleAction");
      console.log(" - store state: ", `${JSON.stringify(this.$state)}`);
    }
  }
});
