import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useTheme } from "vuetify";

/**
 * interface ThemeInstance {
 *   readonly isDisabled: boolean;
 *   readonly themes: Ref<Record<string, InternalThemeDefinition>>;
 *   readonly name: Readonly<Ref<string>>;
 *   readonly current: DeepReadonly<Ref<InternalThemeDefinition>>;
 *   readonly computedThemes: DeepReadonly<Ref<Record<string, InternalThemeDefinition>>>;
 *   readonly themeClasses: Readonly<Ref<string | undefined>>;
 *   readonly styles: Readonly<Ref<string>>;
 *   readonly global: {
 *       readonly name: Ref<string>;
 *       readonly current: DeepReadonly<Ref<InternalThemeDefinition>>;
 *   };
 * }
 */

/**
 * The theme store.
 * Gives access to the Vuetify theme instance.
 *
 * This store should not be used directly in the app and is therefor not exported.
 * Access to it is provided by the useBuilderThemeStore() instead.
 *
 */
const useThemeStore = defineStore("themeStore", () => {
  //[-]============================
  //[-] STATE (PROPERTIES)
  //[-]============================

  const themeInstance = ref(useTheme());

  const currentThemeName = ref("builder-dark");

  //[-]============================
  //[-] GETTERS (COMPUTED METHODS)
  //[-]============================

  /**
   * Returns the builder dark theme.
   *
   * @return {InternalThemeDefinition} The builder dark theme.
   */
  const builderDark = computed(() => {
    console.log("ThemeStore ::: builderDark");
    return themeInstance.value.themes["builder-dark"];
  });

  /**
   * Returns the builder light theme.
   *
   * @return {InternalThemeDefinition} The builder light theme.
   */
  const builderLight = computed(() => {
    console.log("ThemeStore ::: builderLight");
    return themeInstance.value.themes["builder-light"];
  });

  /**
   * Returns the themes object, which is a map of theme names to their definitions.
   *
   * This is a reactive getter and will return the updated themes object
   * when the theme instance is updated.
   *
   * @return {Record<string, InternalThemeDefinition>} The themes object.
   */
  const themes = computed(() => {
    console.log("ThemeStore ::: themes");
    return themeInstance.value.themes;
  });

  /**
   * Returns the computed themes, which are the resolved theme definitions
   * based on the themes specified in the vuetify.js config file.
   *
   * @example
   *   computedThemes["builder-dark"].colors["on-background"]
   *   computedThemes["builder-dark"].colors["on-error"]
   *   computedThemes["builder-dark"].colors["on-warning"]
   *   computedThemes["builder-dark"].colors["on-info"]
   *
   * @warning These properties should not be modified!
   *
   * This is a reactive getter and will return the updated computed themes
   * whenever the theme changes.
   *
   * @returns {Record<string, InternalThemeDefinition>} The computed themes.
   */
  const computedThemes = computed(() => {
    console.log("ThemeStore ::: computedThemes");
    return themeInstance.value.computedThemes;
  });

  return { themeInstance, currentThemeName, builderDark, builderLight, themes, computedThemes };
});

/**
 * The Builder theme store
 */
export const useBuilderThemeStore = defineStore(
  "builderThemeStore",
  () => {
    const persist = true;

    //[-]============================
    //[-] STATE (PROPERTIES)
    //[-]============================

    const themeStore = ref(useThemeStore());

    const currentTheme = ref("builder-dark");

    /**
     * The default colors for the builder theme.
     *
     * TODO: fetch default colors from the app's baked in themes (builder-dark, builder-light).
     */
    const defaultColors = ref({
      light: {
        dark: false,
        colors: {
          primary: "#1867C0",
          "primary-darken-1": "#1F5592",
          secondary: "#48A9A6",
          "secondary-darken-1": "#018786",
          error: "#B00020",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00",
          background: "#FFFFFF",
          surface: "#FFFFFF",
          "surface-bright": "#FFFFFF",
          "surface-light": "#EEEEEE",
          "surface-variant": "#424242",
          "on-surface-variant": "#EEEEEE"
        }
      },
      dark: {
        dark: true,
        colors: {
          primary: "#2196F3",
          "primary-darken-1": "#277CC1",
          secondary: "#54B6B2",
          "secondary-darken-1": "#48A9A6",
          error: "#CF6679",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00",
          background: "#121212",
          surface: "#212121",
          "surface-bright": "#CCBFD6",
          "surface-light": "#424242",
          "surface-variant": "#A3A3A3",
          "on-surface-variant": "#424242"
        }
      }
    });
    /**
     * The default themes
     */
    const defaultThemes = ref({
      light: {
        dark: false,
        colors: {
          background: "#FFFFFF",
          surface: "#FFFFFF",
          "surface-bright": "#FFFFFF",
          "surface-light": "#EEEEEE",
          "surface-variant": "#424242",
          "on-surface-variant": "#EEEEEE",
          primary: "#1867C0",
          "primary-darken-1": "#1F5592",
          secondary: "#48A9A6",
          "secondary-darken-1": "#018786",
          error: "#B00020",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00"
        },
        variables: {
          "border-color": "#000000",
          "border-opacity": 0.12,
          "high-emphasis-opacity": 0.87,
          "medium-emphasis-opacity": 0.6,
          "disabled-opacity": 0.38,
          "idle-opacity": 0.04,
          "hover-opacity": 0.04,
          "focus-opacity": 0.12,
          "selected-opacity": 0.08,
          "activated-opacity": 0.12,
          "pressed-opacity": 0.12,
          "dragged-opacity": 0.08,
          "theme-kbd": "#212529",
          "theme-on-kbd": "#FFFFFF",
          "theme-code": "#F5F5F5",
          "theme-on-code": "#000000"
        }
      },
      dark: {
        dark: true,
        colors: {
          background: "#121212",
          surface: "#212121",
          "surface-bright": "#ccbfd6",
          "surface-light": "#424242",
          "surface-variant": "#A3A3A3",
          "on-surface-variant": "#424242",
          primary: "#2196F3",
          "primary-darken-1": "#277CC1",
          secondary: "#54B6B2",
          "secondary-darken-1": "#48A9A6",
          error: "#CF6679",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00"
        },
        variables: {
          "border-color": "#FFFFFF",
          "border-opacity": 0.12,
          "high-emphasis-opacity": 1,
          "medium-emphasis-opacity": 0.7,
          "disabled-opacity": 0.5,
          "idle-opacity": 0.1,
          "hover-opacity": 0.04,
          "focus-opacity": 0.12,
          "selected-opacity": 0.08,
          "activated-opacity": 0.12,
          "pressed-opacity": 0.16,
          "dragged-opacity": 0.08,
          "theme-kbd": "#212529",
          "theme-on-kbd": "#FFFFFF",
          "theme-code": "#343434",
          "theme-on-code": "#CCCCCC"
        }
      }
    });

    //[-]============================
    //[-] GETTERS (COMPUTED METHODS)
    //[-]============================

    /**
     * Returns the name of the current theme,
     * meaning the theme currently being modified by the user.
     *
     * Valid values are:
     *  - "builder-light"
     *  - "builder-dark"
     *
     * @default "builder-dark"
     *
     * @return {string} The current theme name.
     */
    const currentThemeName = computed(() => {
      console.log("BuilderThemeStore ::: currentThemeName");
      let store = themeStore.value;
      let name = store.currentThemeName;
      return name;
    });

    const builderDark = computed(() => {
      console.log("BuilderThemeStore ::: builderDark");
      // TODO: remove builderDark redundancy in private store.
      return themeStore.value.builderDark;
    });

    const builderLight = computed(() => {
      console.log("BuilderThemeStore ::: builderLight");
      // TODO: remove builderLight redundancy in private store.
      return themeStore.value.builderLight;
    });

    const getDefaultColors = computed(() => {
      return defaultColors;
    });

    //[-]============================
    //[-] ACTIONS (METHODS)
    //[-]============================

    function setTheme(theme) {
      currentTheme = theme;
    }
    /**
     * Sets the colors for the builder theme
     *
     * @param {Object.<string,string>} colors - The colors to set, in the format of `{colorName: hexValue}`
     *
     * @example
     * store.setColors({
     *   primary: "#1867C0",
     *   secondary: "#48A9A6",
     *   "primary-variant": "#2196F3",
     *   "secondary-variant": "#54B6B2",
     *   error: "#E74C3C",
     *   info: "#3498DB",
     *   success: "#00BC8C",
     *   warning: "#F39C12"
     * })
     */
    function setColors(colors) {
      // this.colors = colors;
      /**
       * const target = { a: 1, b: 2 };
       * const source = { b: 4, c: 5 };
       * const returnedTarget = Object.assign(target, source);
       * console.log(target);
       * // expected output: Object { a: 1, b: 4, c: 5 }
       * console.log(returnedTarget);
       * // expected output: Object { a: 1, b: 4, c: 5 }
       */
    }

    function updateThemeColor(themeName, colorName, colorValue) {
      console.log("BuilderThemeStore ::: updateThemeColor");
      console.log(" - themeName: ", themeName);
      console.log(" - colorName: ", colorName);
      console.log(" - colorValue: ", colorValue);

      let store = themeStore.value;
      // console.log(" - themeStore: ", themeStore);
      let builderDark = store.builderDark;
      console.log(" - builder dark: ", builderDark);
      // modify the theme primary color
      builderDark.colors[colorName] = colorValue;
      // console.log(" - builder dark after: ", builderDark);
    }

    return { currentThemeName, builderDark, builderLight, defaultThemes, getDefaultColors, setTheme, setColors, updateThemeColor };
  },
  { persist: true }
);
