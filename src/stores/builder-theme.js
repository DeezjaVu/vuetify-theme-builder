import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useTheme } from "vuetify";

//TODO: Use these to reset the theme back to defaults.
/**
 * The default colors for the builder theme.
 */
const defaultColors = Object.freeze({
  light: {
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
  },
  dark: {
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
});

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

  /**
   * The Vuetify theme instance.
   */
  const themeInstance = ref(useTheme());

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

  return { themeInstance, builderDark, builderLight };
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

    const themeName = ref("builder-dark");

    const showSurfaceColors = ref(false);
    const showMessageColors = ref(true);

    //[-]============================
    //[-] GETTERS (COMPUTED METHODS)
    //[-]============================

    // const builderDark = computed(() => {
    //   console.log("BuilderThemeStore ::: builderDark");
    //   // TODO: remove builderDark redundancy in private store.
    //   return themeStore.value.themeInstance.themes["builder-dark"];
    // });

    // const builderLight = computed(() => {
    //   console.log("BuilderThemeStore ::: builderLight");
    //   // TODO: remove builderLight redundancy in private store.
    //   return themeStore.value.themeInstance.themes["builder-light"];
    // });

    const paletteColors = computed(() => {
      return [
        { title: "Primary", name: "primary", enabled: true },
        { title: "Secondary", name: "secondary", enabled: true },
        { title: "Surface", name: "surface", enabled: true },
        { title: "Surface Light", name: "surface-light", enabled: showSurfaceColors.value },
        { title: "Surface Bright", name: "surface-bright", enabled: showSurfaceColors.value },
        { title: "Surface Variant", name: "surface-variant", enabled: showSurfaceColors.value },
        { title: "Background", name: "background", enabled: true },
        { title: "Success", name: "success", enabled: showMessageColors.value },
        { title: "Info", name: "info", enabled: showMessageColors.value },
        { title: "Warning", name: "warning", enabled: showMessageColors.value },
        { title: "Error", name: "error", enabled: showMessageColors.value }
      ];
    });

    const themeColors = computed(() => {
      console.log("BuilderThemeStore ::: themeColors");
      console.log(" - currentThemeName: ", themeName.value);
      const store = themeStore.value;
      const theme = themeName.value === "builder-dark" ? store.builderDark : store.builderLight;
      console.log(" - theme: ", theme);
      return theme.colors;
    });

    //[-]============================
    //[-] ACTIONS (METHODS)
    //[-]============================

    return {
      showSurfaceColors,
      showMessageColors,
      themeName,
      // builderDark,
      // builderLight,
      defaultThemes,
      defaultColors,
      paletteColors,
      themeColors
    };
  },
  { persist: true }
);

// TODO: NO USE FOR THESE FOR NOW.

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
