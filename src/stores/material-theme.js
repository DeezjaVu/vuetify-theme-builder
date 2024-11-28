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
   * @value {string} The hex value of the default color.
   */
  static get defaultColor() {
    return "#39548d";
  }

  static get defaultArgb() {
    return argbFromHex(this.defaultColor);
  }

  /**
   * Returns the default variant for the material theme.
   *
   * @value {number} The variant value representing the RAINBOW theme.
   */
  static get defaultVariant() {
    return Variant.RAINBOW;
  }

  /**
   * Returns the default contrast for the material theme.
   *
   * @value {number} The default contrast value.
   */
  static get defaultContrast() {
    return 0.0;
  }

  /**
   * The default color scheme for the material theme.
   *
   * This scheme is created using the default source color and the RAINBOW variant.
   * It also initializes the Vuetify theme styles with the theme colors from the default scheme.
   *
   * @value {VariantScheme} The default VariantScheme object instance.
   */
  static get defaultScheme() {
    const scheme = VariantScheme.createScheme(MaterialTheme.defaultArgb, Variant.RAINBOW);
    useMaterialStore().updateHctThemeStyles(scheme.light, scheme.dark, true);
    return scheme;
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

    let itemHex = hexFromArgb(itemArgb);
    console.log(" - itemHex: ", itemHex);
    themeItem.hex = itemHex;

    return themeItem;
  }

  /**
   * represents a list of random/favorite hex colors.
   * These can be used as the source color for the store scheme.
   *
   * @value {string[]} A list of random/favorite hex colors.
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
      "#CB4994",
      "#A7637A"
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

  /**
   * GETTERS (COMPUTED METHODS)
   */

  /**
   * Returns the material dark theme (hct-dark).
   *
   * @returns {InternalThemeDefinition} The material dark theme.
   */
  const hctDark = computed(() => {
    console.log("ThemeStore ::: hctDark");
    return themeInstance.themes[DARK_THEME_NAME];
  });

  /**
   * Returns the material light theme (hct-light).
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
   * ACTIONS METHODS
   */

  /**
   * Updates the "hct-dark" and "hct-light theme styles.
   *
   * This method takes in arrays of color definitions for both dark and light themes,
   * and updates the internal HCT theme styles with these new color definitions.
   *
   * @param {Array<ThemeColor>} light - An array of color definitions for the light theme.
   * @param {Array<ThemeColor>} dark - An array of color definitions for the dark theme.
   * @param {boolean} includeOnColors - True if the theme should include on-color styles, false otherwise.
   */
  function updateHctThemeStyles(light, dark, includeOnColors) {
    console.log("MaterialStore ::: updateHctThemeStyles");
    [light, dark].forEach((theme) => {
      theme.forEach((themeColor) => {
        updateThemeStyleForItem(themeColor, includeOnColors);
      });
    });
  }

  /**
   * Updates the light or dark theme style for the given themeColor item in the Vuetify theme.
   *
   * @param {ThemeColor} themeColor - The `ThemeColor` object for which to update the theme style.
   * @param {boolean} includeOnColors - True if the theme should include an on-color style, false otherwise.
   */
  function updateThemeStyleForItem(themeColor, includeOnColors) {
    console.log("MaterialStore ::: updateThemeStyleForItem");
    // console.log(" - themeColor: ", themeColor);
    // console.log(" - include on colors: ", includeOnColors);

    const hctLight = themeInstance.value.themes[LIGHT_THEME_NAME];
    const hctDark = themeInstance.value.themes[DARK_THEME_NAME];
    const themeDef = themeColor.isDark ? hctDark : hctLight;

    const name = themeColor.name;
    if (name === "surfaceVariant") {
      const tp = themeColor.tonalPalette;
      // Dark and light theme require different surface-variant tone values.
      // surfaceVariant palette's hex is used for the `surface-light` and `on-surface-variant` styles.
      // The theme's `surface-variant` style is the surfaceVariant palette's hex at tone 60 (dark theme) or 30 (light theme).
      const surfaceVariantArgb = themeDef.dark ? tp.tone(60) : tp.tone(30);
      // TODO: check if surface-light should be derived from the surface ThemeColor, with a lighter tone.
      themeDef.colors["surface-light"] = themeColor.hex;
      themeDef.colors["surface-variant"] = hexFromArgb(surfaceVariantArgb);
      themeDef.colors["on-surface-variant"] = themeColor.hex;
    } else if (name === "background" || name === "surface") {
      // Missing `surface-bright`, which could be `surface` or `surfaceVariant` with a tone of 80 (for dark theme) and 20 (for light theme).
      themeDef.colors[name] = themeColor.hex;
    } else {
      themeDef.colors[name] = themeColor.hex;
      // Add the on color for the current themeColor, if enabled.
      const onName = "on-" + name;
      // console.log(" - color has on color: ", onName, onName in themeDef.colors);
      if (includeOnColors) {
        themeDef.colors[onName] = themeColor.onHex;
      } else if (onName in themeDef.colors) {
        // Delete the `on` color theme style so that Vuetify generates default on-color styles.
        delete themeDef.colors[onName];
        // When on-colors is disabled, could potentially still add them as a separate style.
        // themeDef.colors[onName + "-variant"] = entry.onHex;
      }
    }
    // console.log(" - themeDef.colors: ", themeDef.colors);
  }

  // Pinia return object
  return { hctDark, hctLight, themes, updateThemeStyleForItem, updateHctThemeStyles };
});

// Pinia: https://pinia.esm.dev/
export const useMaterialThemeStore = defineStore(
  "materialTheme",
  () => {
    //[-]============================
    //[-] STATE (PROPERTIES)
    //[-]============================

    /**
     * The Material store.
     *
     * Should not be accessed from outside the store and is therefor not exported.
     */
    const materialStore = ref(useMaterialStore());

    /**
     * The current Scheme Variant. Used to generate the scheme.
     *
     * @type {ref<Variant>}
     * @see {@link Variant}
     */
    const currentVariant = ref(MaterialTheme.defaultVariant);

    /**
     * The current Scheme contrast.
     *
     * Valid values are:
     * - -1.0 (low contrast)
     * - 0.0 (default contrast)
     * - 0.5 (medium contrast)
     * - 1.0 (high contrast)
     *
     * The default value is 0.0 (default contrast).
     *
     * @value {ref<number>} The default contrast value.
     */
    const currentContrast = ref(MaterialTheme.defaultContrast);

    /**
     * The current source color - in hex format - from which the scheme is generated.
     * @type {ref<string>}
     */
    const sourceColor = ref(MaterialTheme.defaultColor);

    /**
     * The current color scheme, generated from the source color.
     * @type {VariantScheme}
     * @see {@link VariantScheme}
     */
    const currentScheme = ref(MaterialTheme.defaultScheme);

    /**
     * Whether or not to show the image cards.
     *
     * This is a UI state property.
     *
     * @type {ref<boolean>}
     */
    const showImageCards = ref(true);

    /**
     * Whether or not to show the variant info.
     *
     * This is a UI state property.
     *
     * @type {ref<boolean>}
     */
    const showVariantInfo = ref(true);

    /**
     * Whether or not to show the palette detail cards.
     *
     * This is a UI state property.
     *
     * @type {ref<boolean>}
     */
    const showPaletteCards = ref(true);

    /**
     * Whether or not to expand the theme cards.
     *
     * This is a UI state property.
     * The toggle state is a property of the `ThemeColor` class.
     *
     * @type {ref<boolean>}
     */
    const expandThemeCards = ref(false);

    /**
     * Whether or not to show the dark theme card.
     *
     * This is a UI state property.
     *
     * @type {ref<boolean>}
     */
    const showDarkThemeCard = ref(true);

    /**
     * Whether or not to show the light theme card.
     *
     * This is a UI state property.
     *
     * @type {ref<boolean>}
     */
    const showLightThemeCard = ref(true);

    /**
     * Whether or not to include "on-" colors in the generated theme.
     *
     * When set to false, the final theme will not include on-colors and
     * Vuetify will then resort to its default colors,
     * which are black for the light theme, and white for the dark theme.
     *
     * @type {ref<boolean>}
     */
    const includeOnColors = ref(true);

    //[-]============================
    //[-] GETTERS (COMPUTED METHODS)
    //[-]============================

    /**
     * Returns a list with scheme variant details, including their descriptions.
     *
     * @property {string} title - The title/name of the scheme variant, used for display.
     * @property {number} value - One of the Variant static constants. e.g Variant.RAINBOW
     * @property {string} desc - The description of the scheme variant.
     *
     * @returns {Array<VariantDetails>} A list of scheme variants.
     *
     * @see {@link VariantDetails}
     */
    const schemeVariants = computed(() => {
      return VariantDetails.info;
    });

    /**
     * A list of random/favorite hex colors.
     *
     * @returns {Array<string>} A list of random/favorite hex colors.
     */
    const favoriteColors = computed(() => {
      return MaterialTheme.favoriteColors;
    });

    //[-]============================
    //[-] ACTIONS (METHODS)
    //[-]============================

    /**
     * Toggles the expanded state of all theme cards to the value of `expandThemeCards`.
     *
     * This is a convenience method that can be used to quickly toggle the expanded state
     * of all theme cards from the UI.
     */
    function toggleAllThemeCards() {
      console.log("MaterialThemeStore ::: toggleAllThemeCards");
      currentScheme.value.light.forEach((tcolor) => (tcolor.toggle = expandThemeCards.value));
      currentScheme.value.dark.forEach((tcolor) => (tcolor.toggle = expandThemeCards.value));
    }

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
     * the Vuetify `hct-dark` and `hct-light` themes.
     */
    function updateThemeStyles() {
      console.log("MaterialThemeStore ::: updateThemeStyles");
      let scheme = currentScheme.value;
      // Update the hct-dark and hct-light theme styles.
      materialStore.value.updateHctThemeStyles(scheme.light, scheme.dark, includeOnColors.value);
    }

    /**
     * Updates the `light` and `dark` theme colors for the given palette item in the current scheme (`materialThemeStore.currentScheme`).
     *
     * - If the palette item `name` is `neutral`, updates the light and dark `background` and `surface` theme colors.
     * - If the palette item `name` is `neutralVariant`, updates the light and dark `surfaceVariant` theme color.
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

      const scheme = currentScheme.value;
      const onColors = includeOnColors.value;

      const tp = palette.tonalPalette;
      console.log(" - tp: ", tp);

      // Update the light and dark theme colors for the modified palette item.

      if (palette.name === "neutral") {
        // Note: Palette's `neutral` becomes `background` and `surface` in the theme.
        const [l1, l2] = scheme.light.filter((item) => ["background", "surface"].includes(item.name));
        const [d1, d2] = scheme.dark.filter((item) => ["background", "surface"].includes(item.name));
        [l1, l2, d1, d2].forEach((item) => {
          item.tonalPalette = tp;
          materialStore.value.updateThemeStyleForItem(item, onColors);
        });
      } else if (palette.name === "neutralVariant") {
        // Note: Palette's `neutralVariant` becomes `surfaceVariant` in the theme.
        let lightColor = scheme.light.find((item) => item.name === "surfaceVariant");
        let darkColor = scheme.dark.find((item) => item.name === "surfaceVariant");
        [lightColor, darkColor].forEach((item) => {
          item.tonalPalette = tp;
          materialStore.value.updateThemeStyleForItem(item, onColors);
        });
      } else {
        let lightColor = scheme.light.find((item) => item.name === palette.name);
        let darkColor = scheme.dark.find((item) => item.name === palette.name);
        [lightColor, darkColor].forEach((item) => {
          item.tonalPalette = tp;
          materialStore.value.updateThemeStyleForItem(item, onColors);
        });
      }
    }

    /**
     * Updates the `TonalPalette` of a `ThemeColor` with the `TonalPalette` of a custom palette item (Success, Info, Warning, Error).
     * A custom color can either be harmonized (blended) or not and therefor
     * its `TonalPalette` needs to represent that harmonized / not harmonized state.
     *
     * The blend status is also updated in the `VariantScheme.customPaletteColors` array
     * to maintain the blend status whenever a new scheme is generated.
     *
     * @param {string} paletteName - The name of the custom palette item for which to save the blend status.
     * @param {boolean} blend - The blend status (true/false) to set for the custom palette item.
     */
    function updateBlendForPalette(paletteName, blend) {
      console.log("MaterialThemeStore ::: updateBlendForPalette");
      console.log(" - palette name: ", paletteName);
      console.log(" - blend: ", blend);
      VariantScheme.setBlendForPalette(paletteName, blend);

      const customPalette = currentScheme.value.custom.find((item) => item.name === paletteName);
      console.log(" - customPalette: ", customPalette);
      const tp = customPalette.tonalPalette;
      console.log(" - custom TonalPalette: ", tp);

      const lightColor = currentScheme.value.light.find((item) => item.name === paletteName);
      const darkColor = currentScheme.value.dark.find((item) => item.name === paletteName);

      console.log(" - lightColor: ", lightColor);
      console.log(" - darkColor: ", darkColor);

      lightColor.tonalPalette = tp;
      darkColor.tonalPalette = tp;

      materialStore.value.updateThemeStyleForItem(lightColor, false, includeOnColors.value);
      materialStore.value.updateThemeStyleForItem(darkColor, true, includeOnColors.value);
    }

    /**
     * Recreates the scheme for the current variant and contrast.
     *
     * Changes made to any of the current scheme palettes will be lost.
     *
     * Triggers an update of the `currentScheme` property, which in turn triggers
     * an update of the Vuetify hct-dark and hct-light theme styles.
     *
     * // FIXME: When the contrast changes, modified PaletteCore and PaletteCustom items
     * // [+] need to be chached and, if possible, reapplied/restored.
     *
     */
    function updateScheme() {
      console.log("MaterialThemeStore ::: updateScheme");
      console.log(" - currentVariant: ", currentVariant.value);
      console.log(" - currentContrast: ", currentContrast.value);
      // Recreate the scheme for the current variant and contrast
      createSchemeForHex(sourceColor.value);
    }

    /**
     * Updates a theme item's hex color and updates the Vuetify theme style.
     *
     * @param {ThemeColor} themeColor - The theme item to be updated.
     * @param {boolean} isDark - Whether the ThemeColor item is for the dark or light theme.
     *
     */
    function updateThemeItem(themeColor) {
      console.log("MaterialThemeStore ::: updateThemeItem");
      console.log(" - themeColor: ", themeColor);
      materialStore.value.updateThemeStyleForItem(themeColor, includeOnColors.value);
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
      const variant = currentVariant.value;
      const contrast = currentContrast.value;

      // Create the scheme for the current source, variant and contrast.
      const scheme = VariantScheme.createScheme(argb, variant, contrast);
      currentScheme.value = scheme;

      // (Re)apply theme card (UI) expanded state.
      toggleAllThemeCards();

      // Update the light and dark theme colors for the hct-dark and hct-light theme.
      materialStore.value.updateHctThemeStyles(scheme.light, scheme.dark, includeOnColors.value);
    }

    return {
      sourceColor,
      currentVariant,
      currentContrast,
      currentScheme,
      includeOnColors,
      showImageCards,
      showVariantInfo,
      showPaletteCards,
      expandThemeCards,
      showDarkThemeCard,
      showLightThemeCard,
      schemeVariants,
      favoriteColors,
      toggleAllThemeCards,
      setCurrentVariant,
      updateThemeStyles,
      updateThemeForPalette,
      updateBlendForPalette,
      updateThemeItem,
      updateScheme,
      createSchemeForHex
    };
  },
  { persist: true }
);
