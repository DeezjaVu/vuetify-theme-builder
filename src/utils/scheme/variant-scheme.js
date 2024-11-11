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
  TonalPalette
} from "@material/material-color-utilities";
import { Variant } from "@/utils/dynamiccolor/variant.js";
import PaletteColor from "@/utils/palettes/palette-color.js";
import PaletteCustom from "@/utils/palettes/palette-custom";
import ThemeColor from "@/utils/theme/theme-color";
import CustomColor from "../theme/custom-color";
// import CustomColor from "@/utils/theme/custom-color";

export class VariantScheme {
  /**
   * Constructs a new instance of VariantScheme.
   *
   * @param {integer} argb - The source color in ARGB format.
   * @param {Variant} variant - The variant type for the scheme.
   * @param {Array<PaletteColor>} palettes - The palette colors (`PaletteColor`) associated with the scheme's source color.
   * @param {Array<ThemeColor>} lightTheme - An array of colors (`ThemColor`) for the light theme.
   * @param {Array<ThemeColor>} darkTheme - An array of colors (`{ThemColor}`) for the dark theme.
   * @param {Array} custom - An optional array of custom theme colors, each with a title, name, and blend settings.
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
   * The scheme includes a list of palettes based on the source color and the Scheme variant.
   * The following palettes are created:
   * - Source
   * - Primary
   * - Secondary
   * - Tertiary
   * - Error
   * - Neutral
   * - Neutral Variant
   *
   * Each palette object has the following properties:
   *
   * - `title`: The title of the palette, such as "Source", "Primary", "Neutral", etc.
   * - `name`: The name of the color, such as `primary`, `secondary`, `neutral`, etc.
   * - `hex`: The hex value of the color.
   *
   * The scheme also consists of a `light` and `dark` theme, which are
   * represented as an array of objects, each with the following properties:
   *
   * - `name`: The name of the color, such as primary, secondary, background, etc.
   * - `argb`: The HCT ARGB value of the color.
   * - `hex`: The hex value of the color.
   * - `tone`: The HCT tone of the color, represented as a number between 0 and 100.
   * - `label`: A label for the color, which is the first letter of the name of the palette, followed by the tone, e.g. "P-50".
   *
   * @param {Number} argb The ARGB representation of the color that will be used as the source for the scheme.
   * @param {Number<Variant>} variant Which scheme variant to create. Must be one of the static `Variant` values, e.g. `Variant.TONAL_SPOT`.
   * @param {Array<Object>} custom An optional array of custom colors to include in the scheme.
   *
   * @return {VariantScheme} An `VariantScheme` object instance.
   */
  static createScheme(argb, variant, custom = []) {
    console.log("VariantScheme ::: createScheme");
    // console.log("- argb:", argb);
    // console.log("- variant:", variant);
    // console.log("- custom:", custom);

    let sourceHct = Hct.fromInt(argb);

    const { lightScheme, darkScheme } = VariantScheme.getSchemesForVariant(sourceHct, variant);
    // console.log(" - lightScheme: ", lightScheme);
    // console.log(" - darkScheme: ", darkScheme);

    // INFO: The dark and light schemes have identical palettes, regardless of variant.
    const primaryArgb = lightScheme.primaryPalette.keyColor.argb;
    const secondaryArgb = lightScheme.secondaryPalette.keyColor.argb;
    const tertiaryArgb = lightScheme.tertiaryPalette.keyColor.argb;
    const errorArgb = lightScheme.errorPalette.keyColor.argb;
    const neutralArgb = lightScheme.neutralPalette.keyColor.argb;
    const neutralVariantArgb = lightScheme.neutralVariantPalette.keyColor.argb;

    const palettes = [];

    VariantScheme.paletteColors.forEach((entry) => {
      // console.log(" - entry.name: ", entry.name);
      let pColor = new PaletteColor(entry.title, entry.name);
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

    // console.log(" - palettes: ", palettes);

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

    // console.log("- lightTheme: ", lightTheme);
    // console.log("- darkTheme: ", darkTheme);
    // const customColors = [
    //   { title: "Success", name: "success", hex: "", blend: false, light: "", dark: "" },
    //   { title: "Info", name: "info", hex: "", blend: false, light: "", dark: "" },
    //   { title: "Warning", name: "warning", hex: "", blend: false, light: "", dark: "" }
    // ];

    const customPalettes = [];
    const customTmp = [];
    VariantScheme.customPaletteColors.forEach((entry) => {
      // console.log("Custom palette color: ");
      // console.log(" - entry.name: ", entry.name);
      // console.log(" - entry.hex: ", entry.hex);
      // Create temp custom objects to pass to `customColor`.
      customTmp.push({ name: entry.name, value: argbFromHex(entry.hex), blend: entry.blend });
      // args: title, name, hex, source, blend
      let pColor = new PaletteCustom(entry.title, entry.name, entry.hex, argb, entry.blend);
      customPalettes.push(pColor);
    });

    // TODO: Refactor custom color styles to a more elegant way.

    // get custom color theme styles from Material Utilities.
    const customStyles = customTmp.map((c) => customColor(argb, c));
    // console.log(" - customStyles: ", customStyles);

    // Grab the dark and light `colorContainer` style from the custom styles and and it to the scheme theme.
    customStyles.forEach((style) => {
      let styleName = style.color.name;
      // console.log(" - style: ", style);
      // Custom styles do not have a title, so find it based on the name.
      let styleTitle = VariantScheme.customPaletteColors.find((item) => item.name === styleName)?.title;
      // console.log(" - styleTitle: ", styleTitle);

      let lightArgb = style.light.colorContainer;
      // console.log(" - lightArgb: ", lightArgb);

      let lightTone = Math.round(Hct.fromInt(lightArgb).tone);
      // console.log(" - lightTone: ", lightTone);

      let lightHex = hexFromArgb(lightArgb);
      // console.log(" - lightHex: ", lightHex);

      let darkArgb = style.dark.colorContainer;
      // console.log(" - darkArgb: ", darkArgb);

      let darkTone = Math.round(Hct.fromInt(darkArgb).tone);
      // console.log(" - darkTone: ", darkTone);

      let darkHex = hexFromArgb(darkArgb);
      // console.log(" - darkHex: ", darkHex);

      let lightStyle = new CustomColor(styleTitle, styleName, lightHex, lightTone);
      let darkStyle = new CustomColor(styleTitle, styleName, darkHex, darkTone);

      lightTheme.push(lightStyle);
      darkTheme.push(darkStyle);
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
 * @return {{lightScheme: Scheme, darkScheme: Scheme}} - The light and dark schemes.
 * @throws {Error} - If the variant is not supported.
 */
VariantScheme.getSchemesForVariant = (sourceHct, variant) => {
  let lightScheme, darkScheme;
  switch (variant) {
    case Variant.CONTENT:
      lightScheme = new SchemeContent(sourceHct, false, 0);
      darkScheme = new SchemeContent(sourceHct, true, 0);
      break;
    case Variant.EXPRESSIVE:
      lightScheme = new SchemeExpressive(sourceHct, false, 0);
      darkScheme = new SchemeExpressive(sourceHct, true, 0);
      break;
    case Variant.FIDELITY:
      lightScheme = new SchemeFidelity(sourceHct, false, 0);
      darkScheme = new SchemeFidelity(sourceHct, true, 0);
      break;
    case Variant.FRUIT_SALAD:
      lightScheme = new SchemeFruitSalad(sourceHct, false, 0);
      darkScheme = new SchemeFruitSalad(sourceHct, true, 0);
      break;
    case Variant.MONOCHROME:
      lightScheme = new SchemeMonochrome(sourceHct, false, 0);
      darkScheme = new SchemeMonochrome(sourceHct, true, 0);
      break;
    case Variant.NEUTRAL:
      lightScheme = new SchemeNeutral(sourceHct, false, 0);
      darkScheme = new SchemeNeutral(sourceHct, true, 0);
      break;
    case Variant.RAINBOW:
      lightScheme = new SchemeRainbow(sourceHct, false, 0);
      darkScheme = new SchemeRainbow(sourceHct, true, 0);
      break;
    case Variant.TONAL_SPOT:
      lightScheme = new SchemeTonalSpot(sourceHct, false, 0);
      darkScheme = new SchemeTonalSpot(sourceHct, true, 0);
      break;
    case Variant.VIBRANT:
      lightScheme = new SchemeVibrant(sourceHct, false, 0);
      darkScheme = new SchemeVibrant(sourceHct, true, 0);
      break;
  }
  return { lightScheme, darkScheme };
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
 * The blend status of the custom palette colors is (indirectly) updated from the theme store.
 * This is then used when a new theme is created to maintain the custom palette blend status.
 *
 * @typedef {Array<Object>} paletteColors
 * @property {string} title
 * @property {string} name
 * @property {string} hex
 * @property {number} source
 * @property {boolean} blend
 */
VariantScheme.customPaletteColors = [
  { title: "Success", name: "success", hex: "#22892F", source: 0xff22892f, blend: false },
  { title: "Info", name: "info", hex: "#007ACD", source: 0xff007acd, blend: false },
  { title: "Warning", name: "warning", hex: "#DD8700", source: 0xffdd8700, blend: false },
  { title: "Error", name: "error", hex: "#DE3730", source: 0xffde3730, blend: false }
];

// VariantScheme.customColors = [
//   { title: "Success", name: "success", hex: "#22892F", label: "S-30", argb: 0xff5f8128, tone: 30 },
//   { title: "Info", name: "info", hex: "#028DE9", label: "I-30", argb: 0xff5f8128, tone: 30 },
//   { title: "Warning", name: "warning", hex: "#E58C00", label: "W-30", argb: 0xff5f8128, tone: 30 }
// ];

/**
 * Creates a theme from a given scheme.
 *
 * @param {Object} scheme - The scheme to create a theme from.
 * @return {Array<ThemeColor>} - An array of theme colors, with their `hex` and `tone` properties set from the scheme.
 */
VariantScheme.createThemeFromScheme = (scheme) => {
  let theme = [];
  let themeClone = structuredClone(VariantScheme.themeColors);
  // map the theme colors from the scheme
  themeClone.forEach((entry) => {
    // Theme style properties: the styles we're looking for within the Scheme have a "Container" suffix, e.g. `primaryContainer`.
    // However, `background` and `surfaceVariant` have no "Container" suffix.
    // let propName;
    // switch (entry.name) {
    //   case "background":
    //   case "surfaceVariant":
    //     propName = entry.name;
    //     break;
    //   default:
    //     propName = entry.name + "Container";
    //     break;
    // }

    // let propName = VariantScheme.names.find((item) => item.themeName === entry.name)?.styleName;
    const namesMap = new Map(VariantScheme.names.map((item) => [item.themeName, item.styleName]));

    const propName = namesMap.get(entry.name);
    // console.log("propName: ", propName);

    let argb = scheme[propName];
    let hex = hexFromArgb(argb);
    let hct = Hct.fromInt(argb);
    let tone = Math.round(hct.tone);

    // title, name, hex, tone
    let themeColor = new ThemeColor(entry.title, entry.name, hex, tone);
    theme.push(themeColor);
  });
  return theme;
};

VariantScheme.names = [
  { paletteName: "primary", themeName: "primary", styleName: "primaryContainer" },
  { paletteName: "secondary", themeName: "secondary", styleName: "secondaryContainer" },
  { paletteName: "tertiary", themeName: "tertiary", styleName: "tertiaryContainer" },
  { paletteName: "error", themeName: "error", styleName: "errorContainer" },
  { paletteName: "neutral", themeName: "background", styleName: "background" },
  { paletteName: "neutral", themeName: "surface", styleName: "surfaceContainer" },
  { paletteName: "neutralVariant", themeName: "surfaceVariant", styleName: "surfaceVariant" }
];

// VariantScheme.names = new Map([
//   ["primary", { paletteName: "primary", themeName: "primary", styleName: "primaryContainer" }],
//   ["secondary", { paletteName: "secondary", themeName: "secondary", styleName: "secondaryContainer" }],
//   ["tertiary", { paletteName: "tertiary", themeName: "tertiary", styleName: "tertiaryContainer" }],
//   ["error", { paletteName: "error", themeName: "error", styleName: "errorContainer" }],
//   ["background", { paletteName: "neutral", themeName: "background", styleName: "background" }],
//   ["surface", { paletteName: "neutral", themeName: "surface", styleName: "surfaceContainer" }],
//   ["surfaceVariant", { paletteName: "neutralVariant", themeName: "surfaceVariant", styleName: "neutralVariant" }]
// ]);
