// Utilities
import PaletteCore from "@/utils/palettes/palette-core";
import PaletteCustom from "@/utils/palettes/palette-custom";
import ThemeColor from "@/utils/theme/theme-color";
import { defineStore } from "pinia";
import { useTheme } from "vuetify";
import { Variant, VariantDetails } from "@/utils/dynamiccolor/variant.js";
import { VariantScheme } from "@/utils/scheme/variant-scheme";
import { argbFromHex, hexFromArgb, TonalPalette } from "@material/material-color-utilities";
import { computed, ref } from "vue";

class MaterialTheme {
  /**
   * The default source color.
   *
   * @returns {string} The hex value of the default color.
   */
  static get defaultColor() {
    return "#39548d";
  }

  /**
   * Returns the default variant for the material theme.
   *
   * @returns {number} The variant value representing the RAINBOW theme.
   */
  static get defaultVariant() {
    return Variant.RAINBOW;
  }

  /**
   * Returns the default color scheme for the material theme.
   *
   * This scheme is created using the default source color and the RAINBOW variant.
   *
   * @returns {VariantScheme} The default VariantScheme object instance.
   */
  static get defaultScheme() {
    return VariantScheme.createScheme(0xff39548d, Variant.RAINBOW);
  }

  /**
   * Updates the theme color of a theme item by getting the tone value of the theme item
   * from the given argb color and sets the hex and argb values of the theme item accordingly.
   *
   * Note: The `themeItem` object is mutated in-place and because of reactivity, it affects the store's `currentScheme`.
   *
   * @param {ThemeColor} themeItem - The theme item to be updated.
   * @param {number} argb - The `PaletteCore` or `PaletteCustom` argb color to be used to update the `themeItem` color.
   *
   * @returns {ThemeColor} The updated theme item.
   */
  static updateThemeColor(themeItem, argb) {
    console.log("MaterialTheme ::: updateThemeColor");
    // Create TonalPalette from the scheme palette's argb color
    const tp = TonalPalette.fromInt(argb);

    // Get the ARGB color from the TonalPalette for the tone of the `themeItem`.
    // NOTE: The `themeItem.tone` value may have been changed by the user in the UI.
    //   [*] Use the initial tone value instead of the current tone value.
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

  /**
   * Returns a list of random/favorite hex colors.
   *
   * These can be used as the source color for the store scheme.
   *
   * @returns {string[]} A list of random/favorite hex colors.
   */
  static get favoriteColors() {
    return [
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
      "#01638d",
      "#8bb29c",
      "#CB4994"
    ];
  }
}

const DARK_THEME_NAME = "hct-dark";
const LIGHT_THEME_NAME = "hct-light";

/**
 * Private store for the material theme.
 */
const useMaterialStore = defineStore("materialStore", () => {
  /**
   * STORE STATE (PROPERTIES)
   */

  /**
   * The Material theme store.
   */
  const themeInstance = ref(useTheme());
  const currentThemeName = ref(DARK_THEME_NAME);

  /**
   * GETTERS (COMPUTED METHODS)
   */

  /**
   * Returns the material dark theme.
   *
   * @returns {InternalThemeDefinition} The material dark theme.
   */
  const hctDark = computed(() => {
    console.log("ThemeStore ::: hctDark");
    return themeInstance.themes[DARK_THEME_NAME];
  });

  /**
   * Returns the material light theme.
   *
   * @returns {InternalThemeDefinition} The material light theme.
   */
  const hctLight = computed(() => {
    console.log("MaterialStore ::: hctLight");
    return themeInstance.themes[LIGHT_THEME_NAME];
  });

  /**
   * Returns the themes object, which is a map of theme names to their definitions.
   *
   * This is a reactive getter and will return the updated themes object
   * when the theme instance is updated.
   *
   * @returns {Record<string, InternalThemeDefinition>} The themes object.
   */
  const themes = computed(() => {
    console.log("MaterialStore ::: themes");
    // console.log(" - themes: ", themeInstance.themes);
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
    console.log("MaterialStore ::: computedThemes");
    console.log(" - computedThemes: ", themeInstance.value.computedThemes);
    return themeInstance.value.computedThemes;
  });

  /**
   * ACTIONS METHODS
   */

  /**
   * Updates the "hct-dark" and "hct-light theme styles.
   *
   * This method takes in arrays of color definitions for both dark and light themes,
   * and updates the internal HCT theme styles with these new color definitions.
   *
   * @param {Array<ThemeColor|ThemeCustom>} dark - An array of color definitions for the dark theme.
   * @param {Array<ThemeColor|ThemeCustom>} light - An array of color definitions for the light theme.
   */
  function updateHctThemeStyles(dark, light, includeOnColors) {
    console.log("MaterialStore ::: updateHctThemeStyles");
    console.log(" - include on colors: ", includeOnColors);

    let hctDark = themeInstance.value.themes[DARK_THEME_NAME];
    let hctLight = themeInstance.value.themes[LIGHT_THEME_NAME];

    dark.forEach((entry) => {
      // let name = entry.name === "surfaceVariant" ? "surface-light" : entry.name;
      const name = entry.name;
      if (name === "surfaceVariant") {
        let tp = TonalPalette.fromInt(entry.argb);
        let surfaceVariantArgb = tp.tone(60);
        // name = "surface-light";
        hctDark.colors["surface-light"] = entry.hex;
        hctDark.colors["surface-variant"] = hexFromArgb(surfaceVariantArgb);
        hctDark.colors["on-surface-variant"] = entry.hex;
      } else if (name === "background" || name === "surface") {
        hctDark.colors[name] = entry.hex;
      } else {
        hctDark.colors[name] = entry.hex;
        // Add the on color for the current entry, if enabled.
        // TODO: Check if on-colors remain dynamic when hard coded into the theme as black/white.
        const onName = "on-" + name;
        // hctDark.colors[onName] = includeOnColors ? entry.onDarkHex : "#FFFFFF";
        if (includeOnColors) {
          hctDark.colors[onName] = entry.onDarkHex;
        } else {
          delete hctDark.colors[onName];
        }
      }
    });

    console.log(" - hctDark.colors: ", hctDark.colors);

    light.forEach((entry) => {
      // let name = entry.name === "surfaceVariant" ? "surface-light" : entry.name;
      let name = entry.name;

      if (name === "surfaceVariant") {
        let tp = TonalPalette.fromInt(entry.argb);
        let surfaceVariantArgb = tp.tone(30);
        // name = "surface-light";
        hctLight.colors["surface-light"] = entry.hex;
        hctLight.colors["surface-variant"] = hexFromArgb(surfaceVariantArgb);
        hctLight.colors["on-surface-variant"] = entry.hex;
      } else if (name === "background" || name === "surface") {
        hctLight.colors[name] = entry.hex;
      } else {
        hctLight.colors[name] = entry.hex;
        // Add the on color for the current entry.
        const onName = "on-" + name;
        // Add the on color for the current entry, if enabled.
        // TODO: Check if on-colors remain dynamic when hard coded into the theme as black/white.
        // hctLight.colors[onName] = includeOnColors ? entry.onLightHex : "#000000";
        if (includeOnColors) {
          hctLight.colors[onName] = entry.onLightHex;
        } else {
          delete hctLight.colors[onName];
        }
      }
    });
    console.log(" - hctLight.colors: ", hctLight.colors);
  }

  return { currentThemeName, hctDark, hctLight, themes, computedThemes, updateHctThemeStyles };
});

// const defaultColor = "#39548d";
// const defaultVariant = Variant.RAINBOW;
// const defaultScheme = VariantScheme.createScheme(0xff39548d, Variant.RAINBOW);

// Pinia: https://pinia.esm.dev/
export const useMaterialThemeStore = defineStore("materialTheme", () => {
  //[-]============================
  //[-] STATE (PROPERTIES)
  //[-]============================

  /**
   * The Material store.
   *
   * This state property shouldn't be accessed from outside the store and is therefor not exported.
   */
  const materialStore = ref(useMaterialStore());

  /**
   * The current Scheme Variant. Used to generate the scheme.
   */
  const currentVariant = ref(MaterialTheme.defaultVariant);

  /**
   * The current source color from which the scheme is generated.
   */
  const sourceColor = ref(MaterialTheme.defaultColor);

  /**
   * The current color scheme, generated from the source color.
   */
  const currentScheme = ref(MaterialTheme.defaultScheme);

  /**
   * Whether or not to include "on-" colors in the generated theme.
   *
   * When set to false, the final theme will not include on-colors and
   * Vuetify will then resort to its default colors,
   * which are black for the light theme, and white for the dark theme.
   */
  const includeOnColors = ref(true);

  //[-]============================
  //[-] GETTERS (COMPUTED METHODS)
  //[-]============================

  /**
   * Returns the Vuetify theme instance.
   *
   * @returns {ThemeInstance} The Vuetify theme instance.
   */
  const themeInstance = computed(() => {
    console.log("MaterialThemeStore ::: themeInstance");
    let store = materialStore.value;
    let theme = store.themeInstance;
    return theme;
  });

  /**
   *
   */
  // const themes = computed(() => {
  //   console.log("MaterialThemeStore ::: themes");
  //   let store = materialStore.value;
  //   let themes = store.themes;
  //   return themes;
  // });

  /**
   * Returns a list with scheme variant details, including their descriptions.
   *
   * @property {string} title - The title/name of the scheme variant, used for display.
   * @property {number} value - One of the Variant static constants. e.g Variant.RAINBOW
   * @property {string} desc - The description of the scheme variant.
   *
   * @returns {VariantDetails[]} A list of scheme variants.
   *
   * @see {@link VariantDetails}
   */
  const schemeVariants = computed(() => {
    return VariantDetails.info;
  });

  /**
   * A list of random/favorite hex colors.
   *
   * @returns {string[]} A list of random/favorite hex colors.
   */
  const favoriteColors = computed(() => {
    return MaterialTheme.favoriteColors;
  });

  //[-]============================
  //[-] ACTIONS (METHODS)
  //[-]============================

  /**
   * Sets the current variant to the given value and creates a new scheme for that variant.
   *
   * @param {Variant} variant - The new variant value to set in the material theme store.
   */
  function setCurrentVariant(variant) {
    console.log("MaterialThemeStore ::: setCurrentVariant");
    currentVariant.value = variant;
    createSchemeForHex(sourceColor.value);
  }

  /**
   * Updates the hct-dark and hct-light theme styles with the colors from the current scheme.
   *
   * Calls `updateHctThemeStyles` on the `materialStore` to update the styles of
   * the `hct-dark` and `hct-light` themes.
   */
  function updateThemeStyles() {
    console.log("MaterialThemeStore ::: updateThemeStyles");
    // TODO: Look into only updating the modified hct-dark and hct-light theme styles,
    //   [x] instead of updating all hct theme styles.
    let scheme = currentScheme.value;
    // Update the hct-dark and hct-light theme styles.
    materialStore.value.updateHctThemeStyles(scheme.dark, scheme.light, includeOnColors.value);
  }

  /**
   * Updates the `light` and `dark` theme colors for the given palette item in the current scheme (`materialThemeStore.currentScheme`).
   *
   * - If the palette item name is `neutral`, it will update the light and dark `background` and `surface` theme colors.
   * - If the palette item name is `neutralVariant`, it will update the light and dark `surfaceVariant` theme color.
   *
   * @example
   * const paletteItem = new PaletteColor("Primary","primary","#ff0000");
   * materialThemeStore.updateThemeForPalette(paletteItem);
   *
   * @param {PaletteCore|PaletteCustom} palette - The modified palette item, containing the new hex color and the name of the color.
   *
   */
  function updateThemeForPalette(palette) {
    console.log("MaterialThemeStore ::: updateThemeForPalette");
    console.log(" - palette item: ", palette);
    console.log(" - paletter is custom: ", palette.isCustom);

    let scheme = currentScheme.value;
    console.log(" - scheme: ", scheme);

    // NOTE: If the palette item is a custom palette (success, info, warning, error),
    //   [*] use the `palette.customHex` value instead of the .hex value,
    //   [*] as the `ThemeColor` needs to repreent the blended (harmonized) color.
    //   [*] If the palette item is not a custom palette, use the `palette.hex` value.
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
    // INFO: Even though only one palette item is modified,
    //   [-] we'll update (brute force) the entire Vuetify hct theme styles.
    // Update the hct-dark and hct-light theme styles.
    materialStore.value.updateHctThemeStyles(scheme.dark, scheme.light, includeOnColors.value);
  }

  /**
   * Updates the blend status for a custom palette item (Success, Info, Warning, Error)
   * in the `VariantScheme.customPaletteColors` array. The `customPaletteColors` is a template
   * used whenever a new scheme is generated and thus the blend status is maintained across schemes.
   *
   * @param {string} paletteName - The name of the custom palette item for which to save the blend status.
   * @param {boolean} blend - The blend status (true/false) to set for the custom palette item.
   */
  function updateBlendForPalette(paletteName, blend) {
    console.log("MaterialThemeStore ::: updateBlendForPalette");
    console.log(" - palette name: ", paletteName);
    console.log(" - blend: ", blend);
    VariantScheme.setBlendForPalette(paletteName, blend);
  }

  /**
   * Creates a scheme for the given hex color and stores it in the `currentScheme` property.
   *
   * The `dark` and `light` theme colors are then used to update the `hct-dark` and `hct-light` theme styles.
   *
   * @param {string} color - The hex color to create a scheme for.
   */
  function createSchemeForHex(color) {
    console.log("MaterialThemeStore ::: createSchemeForHex");
    sourceColor.value = color;
    const argb = argbFromHex(color);
    const varScheme = VariantScheme.createScheme(argb, currentVariant.value);
    currentScheme.value = varScheme;

    // Update the light and dark theme colors for the hct-dark and hct-light theme.
    materialStore.value.updateHctThemeStyles(varScheme.dark, varScheme.light, includeOnColors.value);
  }

  return {
    sourceColor,
    currentVariant,
    currentScheme,
    includeOnColors,
    schemeVariants,
    favoriteColors,
    setCurrentVariant,
    updateThemeStyles,
    updateThemeForPalette,
    updateBlendForPalette,
    createSchemeForHex
  };
});
