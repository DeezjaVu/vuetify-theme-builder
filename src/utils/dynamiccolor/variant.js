/**
 * Set of themes supported by Dynamic Color.
 * Instantiate the corresponding subclass, ex. `SchemeTonalSpot`, to create
 * colors corresponding to the theme.
 *
 * This is a modified version of the MDU variant.js file.
 *
 * NOTE:
 * A static `DEFAULT` variant (which returns `-1`) is added to the list to represent the default (static) scheme
 * rather than a preset of the Dynamic Color scheme.
 *
 * Except for `DEFAULT`, all variants are defined in the MDU variant.js file and
 * therefor their return values need to match their equivalent in the MDU variant.js file.
 *
 * @see "/node_modules/@material/material-color-utilities/dynamiccolor/variant.js"
 * @see https://github.com/material-foundation/material-color-utilities/blob/main/typescript/dynamiccolor/variant.ts
 */
export class Variant {
  // static get DEFAULT() {
  //   return -1;
  // }
  static get MONOCHROME() {
    return 0;
  }
  static get NEUTRAL() {
    return 1;
  }
  static get TONAL_SPOT() {
    return 2;
  }
  static get VIBRANT() {
    return 3;
  }
  static get EXPRESSIVE() {
    return 4;
  }
  static get FIDELITY() {
    return 5;
  }
  static get CONTENT() {
    return 6;
  }
  static get RAINBOW() {
    return 7;
  }
  static get FRUIT_SALAD() {
    return 8;
  }
}
// TODO: variant.js: Should the VariantDetails class  be moved to its own file?
export class VariantDetails {
  static info = Object.freeze([
    // {
    //   title: "Default Scheme",
    //   value: Variant.DEFAULT,
    //   desc:
    //     "<p>The default theme represents a Material color scheme, a mapping of color roles to colors.</p>" +
    //     "<p>It is deemed deprececated, but currently still supported for backward compatibility.</p>" +
    //     "<p>It is - at the time of writing - the only Scheme that supports the use of custom colors.</p>" +
    //     "<p>The Dynamic Color scheme, which all the other schemes are based on, do not support custom colors out of the box.</p>"
    // },
    {
      title: "Content",
      value: Variant.CONTENT,
      desc:
        "<p>A scheme that places the source color in <code>`Scheme.primaryContainer`</code>.</p>" +
        "<p>Primary Container is the source color, adjusted for color relativity.</p>" +
        "<p>It maintains constant appearance in light mode and dark mode.</p>" +
        "<p>This adds ~5 tone in light mode, and subtracts ~5 tone in dark mode.</p>" +
        "<p>Tertiary Container is the complement to the source color, using <code>`TemperatureCache`</code>.</p>"
    },
    {
      title: "Expressive",
      value: Variant.EXPRESSIVE,
      desc:
        "<p>A Dynamic Color theme that is intentionally detached from the source color.</p>" +
        "<p>Primary TonalPalette adds 240 to the source color's hue, " +
        "while <code>`DynamicScheme.getRotatedHue()`</code> is used to generate the Secondary and Tertiary TonalPalette.</p>"
    },
    {
      title: "Fidelity",
      value: Variant.FIDELITY,
      desc:
        "<p>A scheme that places the source color in <code>`Scheme.primaryContainer`</code>.</p>" +
        "<p>Primary Container is the source color, adjusted for color relativity.</p>" +
        "<p>It maintains constant appearance in light mode and dark mode.</p>" +
        "<p>This adds ~5 tone in light mode, and subtracts ~5 tone in dark mode.</p>" +
        "<p>Tertiary Container is the complement to the source color, using <code>`TemperatureCache`</code>.</p>" +
        "<p>Fidelity and Content schemes are identical. The only difference is the <code>`TemperatureCache`</code> value used for the Tertiary TonalPalette.</p>"
    },
    {
      title: "Fruit Salad",
      value: Variant.FRUIT_SALAD,
      desc:
        "<p>A playful theme - the source color's hue does not appear in the theme. </p>" +
        "<p>The primary and secondary theme colors are often identical. Fortunately, you can easily adjust the <code>`tone`</code> of one or the other.</p>"
    },
    {
      title: "Monochrome",
      value: Variant.MONOCHROME,
      desc:
        "<p>A Dynamic Color theme that is grayscale.</p>" +
        "<p>This simply takes the source color's hue and sets the chroma to 0 for each TonalPalette.</p>" +
        "<p>The tone of each Palette is then shifted to generate different shades of gray.</p>"
    },
    {
      title: "Neutral",
      value: Variant.NEUTRAL,
      desc:
        "<p>A Dynamic Color theme that is near grayscale.</p>" +
        "<p>Similar approach to Monochrome, this takes the source color's hue and sets the chroma to between 2 and 16 for each TonalPalette.</p>"
    },
    {
      title: "Rainbow",
      value: Variant.RAINBOW,
      desc:
        "<p>A playful theme - the <mark>source</mark> color's hue does not appear in the theme.</p>" +
        "<p>This scheme comes closest to the Default Scheme, but uses <code>DynamicScheme</code> to generate the Tonal Palettes.</p>" +
        "<p>This preset is nearly identical to the <code>Tonal Spot</code> scheme. Only difference is in the <code>`chroma`</code> of the Primary Tonal Palette.</p>"
    },
    {
      title: "Tonal Spot",
      value: Variant.TONAL_SPOT,
      desc:
        "<p>A Dynamic Color theme with low to medium colorfulness and a Tertiary Tonal Palette with a hue related to the source color.</p>" +
        "<p>The default Material You theme on Android 12 and 13.</p>" +
        "<p>This preset is nearly identical to the <code>Rainbow</code> scheme. Only difference is in the <code>`chroma`</code> of the Primary Tonal Palette.</p>"
    },
    {
      title: "Vibrant",
      value: Variant.VIBRANT,
      desc: "A Dynamic Color theme that maxes out colorfulness at each position in the Primary Tonal Palette."
    }
  ]);
}
