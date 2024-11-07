import {
  Scheme,
  Hct,
  argbFromHex,
  hexFromArgb,
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
import ThemeColor from "@/utils/theme/theme-color";

export class VariantScheme {
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
   * @param argb The ARGB value of the source color.
   * @param variant The variant of the theme to create.
   * @param custom An optional array of custom colors to include in the scheme.
   *
   * @return {Object} An object containing the source color, the variant, palettes and the
   *   light and dark themes.
   */
  static createScheme(argb, variant, custom = []) {
    console.log("VariantScheme ::: createScheme");
    console.log("- argb:", argb);
    console.log("- variant:", variant);
    console.log("- custom:", custom);

    let sourceHct = Hct.fromInt(argb);
    let lightScheme;
    let darkScheme;

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
    console.log(" - lightScheme: ", lightScheme);
    console.log(" - darkScheme: ", darkScheme);

    // INFO: The dark and light schemes have identical palettes, regardless of variant.
    let primaryArgb = lightScheme.primaryPalette.keyColor.argb;
    let secondaryArgb = lightScheme.secondaryPalette.keyColor.argb;
    let tertiaryArgb = lightScheme.tertiaryPalette.keyColor.argb;
    let errorArgb = lightScheme.errorPalette.keyColor.argb;
    let neutralArgb = lightScheme.neutralPalette.keyColor.argb;
    let neutralVariantArgb = lightScheme.neutralVariantPalette.keyColor.argb;

    // No longer need structuredClone, as VariantScheme.paletteColors is an array of PaletteColor instances.
    // let palettes = structuredClone(VariantScheme.paletteColors);
    let palettes = [];

    VariantScheme.paletteColors.forEach((entry) => {
      console.log(" - entry.name: ", entry.name);
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

    console.log("- lightTheme: ", lightTheme);
    console.log("- darkTheme: ", darkTheme);

    return {
      source: argb,
      variant: variant,
      palettes: palettes,
      light: lightTheme,
      dark: darkTheme,
      custom: [
        { title: "Success", name: "success", hex: "", blend: false, light: "", dark: "" },
        { title: "Info", name: "info", hex: "", blend: false, light: "", dark: "" },
        { title: "Warning", name: "warning", hex: "", blend: false, light: "", dark: "" }
      ]
    };
  }
}

VariantScheme.paletteColors = [
  { title: "Source", name: "source" },
  { title: "Primary", name: "primary" },
  { title: "Secondary", name: "secondary" },
  { title: "Tertiary", name: "tertiary" },
  { title: "Error", name: "error" },
  { title: "Neutral", name: "neutral" },
  { title: "Neutral Variant", name: "neutralVariant" }
];

// TODO: create a class (ThemeColor) for each entry in the themeColors array.
VariantScheme.themeColors = [
  { title: "Primary", name: "primary" },
  { title: "Secondary", name: "secondary" },
  { title: "Tertiary", name: "tertiary" },
  { title: "Error", name: "error" },
  { title: "Background", name: "background" },
  { title: "Surface", name: "surface" },
  { title: "Surface Variant", name: "surfaceVariant" }
];

// VariantScheme.themeColors = [
//   { title: "Primary", name: "primary", hex: "#5f8128", label: "P-30", argb: 0xff5f8128, tone: 30 },
//   { title: "Secondary", name: "secondary", hex: "#717b60", label: "S-30", argb: 0xff717b60, tone: 30 },
//   { title: "Tertiary", name: "tertiary", hex: "#527f7a", label: "T-30", argb: 0xff527f7a, tone: 30 },
//   { title: "Error", name: "error", hex: "#de3730", label: "E-30", argb: 0xffde3730, tone: 30 },
//   { title: "Background", name: "background", hex: "#777771", label: "N-10", argb: 0xff777771, tone: 10 },
//   { title: "Surface", name: "surface", hex: "#75786c", label: "N-10", argb: 0xff75786c, tone: 10 },
//   { title: "Surface Variant", name: "surfaceVariant", hex: "#75786c", label: "NV-30", argb: 0xff75786c, tone: 30 }
// ];

VariantScheme.customColors = [
  { title: "Success", name: "success", hex: "#22892F", label: "S-30", argb: 0xff5f8128, tone: 30 },
  { title: "Info", name: "info", hex: "#028DE9", label: "I-30", argb: 0xff5f8128, tone: 30 },
  { title: "Warning", name: "warning", hex: "#E58C00", label: "W-30", argb: 0xff5f8128, tone: 30 }
];

/**
 * Creates a theme from a given scheme.
 *
 * @param {Object} scheme - The scheme to create a theme from.
 * @returns {Array<Object>} - An array of theme colors, with their `hex` and `tone` properties set from the scheme.
 */

VariantScheme.createThemeFromScheme = (scheme) => {
  let theme = [];
  let themeClone = structuredClone(VariantScheme.themeColors);
  // map the theme colors from the scheme
  themeClone.forEach((entry) => {
    // Theme style properties: the styles we're looking for within the Scheme have a "Container" suffix, e.g. `primaryContainer`.
    // However, `background` and `surfaceVariant` have no "Container" suffix.
    let propName;
    switch (entry.name) {
      case "background":
      case "surfaceVariant":
        propName = entry.name;
        break;
      default:
        propName = entry.name + "Container";
        break;
    }

    let argb = scheme[propName];
    let hex = hexFromArgb(argb);
    let hct = Hct.fromInt(argb);
    let tone = Math.round(hct.tone);
    // entry.argb = argb;
    // entry.hex = hex;
    // entry.tone = Math.round(hct.tone);
    // entry.label = entry.label.split("-")[0] + "-" + Math.round(hct.tone).toString();

    // title, name, hex, tone
    let themeColor = new ThemeColor(entry.title, entry.name, hex, tone);
    theme.push(themeColor);
  });
  return theme;
};
