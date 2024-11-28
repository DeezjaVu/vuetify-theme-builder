import {
  Hct,
  argbFromHex,
  hexFromArgb,
  customColor,
  SchemeContent,
  SchemeExpressive,
  SchemeFidelity,
  SchemeFruitSalad,
  SchemeMonochrome,
  SchemeNeutral,
  SchemeRainbow,
  SchemeTonalSpot,
  SchemeVibrant,
  DynamicScheme,
  TonalPalette
} from "@material/material-color-utilities";
import { Variant } from "@/utils/dynamiccolor/variant.js";
import { SchemeAnalogous } from "@/utils/scheme/scheme-analogous.js";
import { SchemeSplit } from "@/utils/scheme/scheme-split.js";
import { SchemeSplitReverse } from "@/utils/scheme/scheme-split-reverse.js";
import { SchemeTriadic } from "@/utils/scheme/scheme-triadic.js";
import PaletteCore from "@/utils/palettes/palette-core.js";
import PaletteCustom from "@/utils/palettes/palette-custom.js";
import ThemeColor from "@/utils/theme/theme-color.js";

/**
 * Represents a variant scheme generated from the Material Utilities Dynamic Color Schemes.
 *
 * @property {integer} source - The source color in ARGB format.
 * @property {Variant} variant - The variant type for the scheme.
 * @property {Array<PaletteCore>} palettes - The palette colors (`PaletteCore`) associated with the scheme's source color.
 * @property {Array<ThemeColor>} light - An array of colors (`ThemeColor`) for the light theme.
 * @property {Array<ThemeColor>} dark - An array of colors (`{ThemeColor}`) for the dark theme.
 * @property {Array<PaletteCustom>} custom - An array of custom theme palettes (`PaletteCustom`).
 */
export class VariantScheme {
  /**
   * Constructs a new VariantScheme instance.
   *
   * @param {integer} argb - The source color in ARGB format.
   * @param {Variant} variant - The variant type for the scheme.
   * @param {Array<PaletteCore>} palettes - The palette colors (`PaletteCore`) associated with the scheme's source color.
   * @param {Array<ThemeColor>} lightTheme - An array of colors (`ThemeColor`) for the light theme.
   * @param {Array<ThemeColor>} darkTheme - An array of colors (`{ThemeColor}`) for the dark theme.
   * @param {Array<PaletteCustom>} custom - (Optional) The custom (`PaletteCustom`) theme colors.
   */
  constructor(argb, variant, palettes, lightTheme, darkTheme, custom = []) {
    this.source = argb;
    this.variant = variant;
    this.palettes = palettes;
    this.light = lightTheme;
    this.dark = darkTheme;
    this.custom = custom;
  }

  /**
   * Create a scheme based on the given source color (ARGB) and Scheme variant.
   *
   * The scheme includes a list of `PaletteCore` objects based on the source color and the Scheme variant.
   * The following core palettes are created:
   * - Source
   * - Primary
   * - Secondary
   * - Tertiary
   * - Error
   * - Neutral
   * - Neutral Variant
   *
   * The scheme also includes a set of `PaletteCustom` objects with a predefined set of colors.
   * The following custom palettes are created:
   * - Success
   * - Info
   * - Warning
   * - Error
   *
   * The scheme also consists of a `light` and `dark` theme, which are
   * represented as an array of `ThemeColor` objects, each with the following properties:
   *
   * @param {Number} argb The ARGB representation of the color that will be used as the source for the scheme.
   * @param {Number<Variant>} variant Which scheme variant to create. Must be one of the static `Variant` values, e.g. `Variant.TONAL_SPOT`.
   * @param {Array<Object>} custom An optional array of custom colors to include in the scheme.
   *
   * @return {VariantScheme} A `VariantScheme` object instance.
   */
  static createScheme(argb, variant, contrast = 0.0, custom = []) {
    console.log("VariantScheme ::: createScheme");
    // console.log("- argb:", argb);
    // console.log("- variant:", variant);
    // console.log("- custom:", custom);

    let sourceHct = Hct.fromInt(argb);

    // Material Utilities Dynamic Color Schemes creates only 1 flavor (light or dark).
    // So to get the theme colors for both light and dark, we need to generate two schemes, using the same variant.
    // Both generated schemes will have identical palettes, so we grab the Palette objects from one of the schemes
    // to create a single palette object and map the light and dark theme colors to two ThemeColor objects, ´light` and `dark`.

    const { lightScheme, darkScheme } = VariantScheme.getSchemesForVariant(sourceHct, variant, contrast);
    console.log(" - lightScheme: ", lightScheme);
    console.log(" - darkScheme: ", darkScheme);

    // NOTE: The dark and light schemes have identical TonalPalettes, regardless of variant.

    const palettes = this.createPalettesFromScheme(lightScheme);
    console.log(" - palettes: ", palettes);

    let lightTheme = VariantScheme.createThemeFromScheme(lightScheme);
    let darkTheme = VariantScheme.createThemeFromScheme(darkScheme);

    // INFO: For the light theme:
    // `background` is created from the `neutralPalette`, with a tone of `98` (N-98).
    // `surface` is created from the `neutralPalette`, with a tone of `94` (N-94).
    // `surfaceVariant` is created from the `neutralVariantPalette`, with a tone of `90` (NV-90).
    // INFO: For the dark theme:
    // `background` is created from the `neutralPalette`, with a tone of `6` (N-6).
    // `surface` is created from the `neutralPalette`, with a tone of `12` (N-12).
    // `surfaceVariant` is created from the `neutralVariantPalette`, with a tone of `30` (NV-30).

    const customPalettes = [];
    VariantScheme.customPaletteColors.forEach((entry) => {
      // args: title, name, hex, source argb, blend
      let pc = new PaletteCustom(entry.title, entry.name, entry.hex, argb, entry.blend);
      customPalettes.push(pc);

      // args: title, name, palette, tone, dark, custom
      // CustomColor needs the palette from PaletteCustom, in case it is harmonized (blend = true).
      let lightColor = new ThemeColor(entry.title, entry.name, pc.tonalPalette, 90, false, true);
      let darkColor = new ThemeColor(entry.title, entry.name, pc.tonalPalette, 30, true, true);
      lightTheme.push(lightColor);
      darkTheme.push(darkColor);
    });

    const variantScheme = new VariantScheme(argb, variant, palettes, lightTheme, darkTheme, customPalettes);
    console.log(" - variantScheme: ", variantScheme);

    return variantScheme;
  }

  /**
   * Sets the blend status for a custom palette item in the current variant scheme.
   *
   * @param {string} paletteName - The name of the custom palette item to update.
   * @param {boolean} blend - The blend status to set for the custom palette item.
   */
  static setBlendForPalette(paletteName, blend) {
    console.log("VariantScheme ::: setBlendForPalette");
    console.log(" - paletteName: ", paletteName);
    console.log(" - blend: ", blend);
    let cp = VariantScheme.customPaletteColors.find((item) => item.name === paletteName);
    cp.blend = blend;
  }
}

/**
 * Returns a pair of light and dark schemes, based on the given variant.
 *
 * @param {Hct} sourceHct - The source color in HCT format.
 * @param {number} variant - The variant to use. One of the static Variant constants, e.g. `Variant.CONTENT`.
 * @returns {{lightScheme: Scheme, darkScheme: Scheme}} - The light and dark schemes as: `{lightScheme, darkScheme}`.
 * @throws {Error} - If the variant is not supported.
 */
VariantScheme.getSchemesForVariant = (sourceHct, variant, contrast = 0.0) => {
  let lightScheme, darkScheme;
  switch (variant) {
    case Variant.CONTENT:
      lightScheme = new SchemeContent(sourceHct, false, contrast);
      darkScheme = new SchemeContent(sourceHct, true, contrast);
      break;
    case Variant.EXPRESSIVE:
      lightScheme = new SchemeExpressive(sourceHct, false, contrast);
      darkScheme = new SchemeExpressive(sourceHct, true, contrast);
      break;
    case Variant.FIDELITY:
      lightScheme = new SchemeFidelity(sourceHct, false, contrast);
      darkScheme = new SchemeFidelity(sourceHct, true, contrast);
      break;
    case Variant.FRUIT_SALAD:
      lightScheme = new SchemeFruitSalad(sourceHct, false, contrast);
      darkScheme = new SchemeFruitSalad(sourceHct, true, contrast);
      break;
    case Variant.MONOCHROME:
      lightScheme = new SchemeMonochrome(sourceHct, false, contrast);
      darkScheme = new SchemeMonochrome(sourceHct, true, contrast);
      break;
    case Variant.NEUTRAL:
      lightScheme = new SchemeNeutral(sourceHct, false, contrast);
      darkScheme = new SchemeNeutral(sourceHct, true, contrast);
      break;
    case Variant.RAINBOW:
      lightScheme = new SchemeRainbow(sourceHct, false, contrast);
      darkScheme = new SchemeRainbow(sourceHct, true, contrast);
      break;
    case Variant.TONAL_SPOT:
      lightScheme = new SchemeTonalSpot(sourceHct, false, contrast);
      darkScheme = new SchemeTonalSpot(sourceHct, true, contrast);
      break;
    case Variant.VIBRANT:
      lightScheme = new SchemeVibrant(sourceHct, false, contrast);
      darkScheme = new SchemeVibrant(sourceHct, true, contrast);
      break;
    case Variant.ANALOGOUS:
      lightScheme = new SchemeAnalogous(sourceHct, false, contrast);
      darkScheme = new SchemeAnalogous(sourceHct, true, contrast);
      break;
    case Variant.TRIADIC:
      lightScheme = new SchemeTriadic(sourceHct, false, contrast);
      darkScheme = new SchemeTriadic(sourceHct, true, contrast);
      break;
    case Variant.SPLIT:
      lightScheme = new SchemeSplit(sourceHct, false, contrast);
      darkScheme = new SchemeSplit(sourceHct, true, contrast);
      break;
    case Variant.SPLIT_REVERSE:
      lightScheme = new SchemeSplitReverse(sourceHct, false, contrast);
      darkScheme = new SchemeSplitReverse(sourceHct, true, contrast);
      break;
  }
  return { lightScheme, darkScheme };
};

VariantScheme.createPalettesFromScheme = (scheme) => {
  console.log("VariantScheme ::: getPalettesFromScheme");
  console.log(" - scheme: ", scheme);

  const argb = scheme.sourceColorArgb;

  const primaryArgb = scheme.primaryPalette.keyColor.argb;
  const secondaryArgb = scheme.secondaryPalette.keyColor.argb;
  const tertiaryArgb = scheme.tertiaryPalette.keyColor.argb;
  const errorArgb = scheme.errorPalette.keyColor.argb;
  const neutralArgb = scheme.neutralPalette.keyColor.argb;
  const neutralVariantArgb = scheme.neutralVariantPalette.keyColor.argb;

  const palettes = [];

  VariantScheme.paletteColors.forEach((entry) => {
    // console.log(" - entry.name: ", entry.name);
    let pColor = new PaletteCore(entry.title, entry.name);
    if (entry.name === "source") {
      pColor.hex = hexFromArgb(argb);
    } else if (entry.name === "primary") {
      pColor.hex = hexFromArgb(primaryArgb);
    } else if (entry.name === "secondary") {
      pColor.hex = hexFromArgb(secondaryArgb);
    } else if (entry.name === "tertiary") {
      pColor.hex = hexFromArgb(tertiaryArgb);
    } else if (entry.name === "error") {
      pColor.hex = hexFromArgb(errorArgb);
    } else if (entry.name === "neutral") {
      pColor.hex = hexFromArgb(neutralArgb);
    } else if (entry.name === "neutralVariant") {
      pColor.hex = hexFromArgb(neutralVariantArgb);
    }
    palettes.push(pColor);
  });

  return palettes;
};

/**
 * @typedef {Array<Object>} paletteColors
 * @property {string} title
 * @property {string} name
 */
VariantScheme.paletteColors = [
  { title: "Source", name: "source" },
  { title: "Primary", name: "primary" },
  { title: "Secondary", name: "secondary" },
  { title: "Tertiary", name: "tertiary" },
  // { title: "Error", name: "error" },
  { title: "Neutral", name: "neutral" },
  { title: "Neutral Variant", name: "neutralVariant" }
];

/**
 * @typedef {Array<Object>} themeColors
 * @property {string} title
 * @property {string} name
 */
VariantScheme.themeColors = [
  { title: "Primary", name: "primary" },
  { title: "Secondary", name: "secondary" },
  { title: "Tertiary", name: "tertiary" },
  // { title: "Error", name: "error" },
  { title: "Background", name: "background" },
  { title: "Surface", name: "surface" },
  { title: "Surface Variant", name: "surfaceVariant" }
];

/**
 * @typedef {Object} CustomPalette
 * @property {string} title The title of the custom palette color.
 * @property {string} name The name of the custom palette color.
 * @property {string} hex The hex color of the custom palette color.
 * @property {number} source The source color of the custom palette color.
 * @property {boolean} blend Whether the custom palette color should be blended with the source color.
 */

/**
 * The blend status of the custom palette colors is (indirectly) updated from the theme store.
 * This is then used when a new theme is created to maintain the custom palette blend status.
 *
 * @type {Array<CustomPalette>}
 */
VariantScheme.customPaletteColors = [
  { title: "Success", name: "success", hex: "#22892F", source: 0xff22892f, blend: false },
  { title: "Info", name: "info", hex: "#007ACD", source: 0xff007acd, blend: false },
  { title: "Warning", name: "warning", hex: "#DD8700", source: 0xffdd8700, blend: false },
  { title: "Error", name: "error", hex: "#DE3730", source: 0xffde3730, blend: false }
];

/**
 * Creates a theme from a given scheme.
 *
 * @param {DynamicScheme} scheme - The scheme to create a theme from.
 * @return {Array<ThemeColor>} - An array of theme colors, with their `tonalPalette` and `tone` properties set from the scheme.
 */
VariantScheme.createThemeFromScheme = (scheme) => {
  console.log("VariantScheme.createThemeFromScheme");
  console.log(" - scheme: ", scheme);

  let theme = [];
  let themeClone = structuredClone(VariantScheme.themeColors);

  const isDark = scheme.isDark;

  // map the theme colors from the scheme
  themeClone.forEach((entry) => {
    // Theme style properties: the styles we're looking for within the Scheme have a "Container" suffix, e.g. `primaryContainer`.
    // So we map out theme color names to their `Container` equivalent, e.g. `primary` --> `primaryContainer`.
    const styleName = VariantScheme.names.find((item) => item.themeName === entry.name).styleName;
    // We also need to grab the TonalPalette the style originates from, so can modify its tone while keeping the color consistent.
    const paletteName = VariantScheme.names.find((item) => item.themeName === entry.name).tonalPaletteName;
    // Get the scheme's (original) TonalPalette
    const palette = scheme[paletteName];

    // Get the scheme's (container) color style and extract the tone.
    let argb = scheme[styleName];
    let hct = Hct.fromInt(argb);
    let tone = Math.round(hct.tone);

    // title, name, tonalpalette, tone, isDark, isCustom
    let themeColor = new ThemeColor(entry.title, entry.name, palette, tone, isDark, false);
    theme.push(themeColor);
  });
  return theme;
};

VariantScheme.names = [
  {
    paletteName: "primary",
    themeName: "primary",
    styleName: "primaryContainer",
    onStyleName: "onPrimaryContainer",
    tonalPaletteName: "primaryPalette"
  },
  {
    paletteName: "secondary",
    themeName: "secondary",
    styleName: "secondaryContainer",
    onStyleName: "onSecondaryContainer",
    tonalPaletteName: "secondaryPalette"
  },
  {
    paletteName: "tertiary",
    themeName: "tertiary",
    styleName: "tertiaryContainer",
    onStyleName: "onTertiaryContainer",
    tonalPaletteName: "tertiaryPalette"
  },
  {
    paletteName: "error",
    themeName: "error",
    styleName: "errorContainer",
    onStyleName: "onErrorContainer",
    tonalPaletteName: "errorPalette"
  },
  {
    paletteName: "neutral",
    themeName: "background",
    styleName: "background",
    onStyleName: "onBackground",
    tonalPaletteName: "neutralPalette"
  },
  {
    paletteName: "neutral",
    themeName: "surface",
    styleName: "surfaceContainer",
    onStyleName: "onSurface",
    tonalPaletteName: "neutralPalette"
  },
  {
    paletteName: "neutralVariant",
    themeName: "surfaceVariant",
    styleName: "surfaceVariant",
    onStyleName: "onSurfaceVariant",
    tonalPaletteName: "neutralVariantPalette"
  }
];
