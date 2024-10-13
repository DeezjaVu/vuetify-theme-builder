/**
 * Color Utils
 *
 * Code borrowed from Vuetify to prevent things from braking
 * when the Vuetify repo gets updated.
 *
 * Original code: node_modules\vuetify\lib\utils\colorUtils.js
 * Github: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/util/colorUtils.ts
 */

// imports
import * as CIELAB from "./color/transformCIELAB.js";
import * as sRGB from "./color/transformSRGB.js";
import { chunk, has, padEnd } from "./helpers.js";

const cssColorRe = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/;

const mappers = {
  rgb: (r, g, b, a) => ({
    r,
    g,
    b,
    a
  }),
  rgba: (r, g, b, a) => ({
    r,
    g,
    b,
    a
  }),
  hsl: (h, s, l, a) =>
    HSLtoRGB({
      h,
      s,
      l,
      a
    }),
  hsla: (h, s, l, a) =>
    HSLtoRGB({
      h,
      s,
      l,
      a
    }),
  hsv: (h, s, v, a) =>
    HSVtoRGB({
      h,
      s,
      v,
      a
    }),
  hsva: (h, s, v, a) =>
    HSVtoRGB({
      h,
      s,
      v,
      a
    })
};
/**
 * Converts a color in various formats to an RGB color object
 *
 * @param {number|string|object} color - The color to convert
 * @param {string} color - A hex(a) color string, e.g. "#FF0000", "#FF0000AA"
 * @param {string} color - A named color, e.g. "red", "blue"
 * @param {string} color - A CSS color function string, e.g. "rgb(255, 0, 0)",
 *   "rgba(255, 0, 0, 0.5)", "hsl(0, 0%, 50%)", "hsla(0, 0%, 50%, 0.5)",
 *   "hsv(0, 0%, 50%)", "hsva(0, 0%, 50%, 0.5)"
 * @param {object} color - An RGB color object, e.g. `{ r: 255, g: 0, b: 0 }`
 * @param {object} color - An HSL color object, e.g. `{ h: 0, s: 0%, l: 50% }`
 * @param {object} color - An HSV color object, e.g. `{ h: 0, s: 0%, v: 50% }`
 *
 * @returns {object} An RGB color object, e.g. `{ r: 255, g: 0, b: 0 }`
 * @throws TypeError if the color is invalid
 */
export function parseColor(color) {
  if (typeof color === "number") {
    if (isNaN(color) || color < 0 || color > 0xffffff) {
      // int can't have opacity
      console.log(`'${color}' is not a valid hex color`);
    }
    return {
      r: (color & 0xff0000) >> 16,
      g: (color & 0xff00) >> 8,
      b: color & 0xff
    };
  } else if (typeof color === "string" && cssColorRe.test(color)) {
    const { groups } = color.match(cssColorRe);
    const { fn, values } = groups;
    const realValues = values.split(/,\s*/).map((v) => {
      if (v.endsWith("%") && ["hsl", "hsla", "hsv", "hsva"].includes(fn)) {
        return parseFloat(v) / 100;
      } else {
        return parseFloat(v);
      }
    });
    return mappers[fn](...realValues);
  } else if (typeof color === "string") {
    let hex = color.startsWith("#") ? color.slice(1) : color;
    if ([3, 4].includes(hex.length)) {
      hex = hex
        .split("")
        .map((char) => char + char)
        .join("");
    } else if (![6, 8].includes(hex.length)) {
      console.log(`'${color}' is not a valid hex(a) color`);
    }
    const int = parseInt(hex, 16);
    if (isNaN(int) || int < 0 || int > 0xffffffff) {
      console.log(`'${color}' is not a valid hex(a) color`);
    }
    return HexToRGB(hex);
  } else if (typeof color === "object") {
    if (has(color, ["r", "g", "b"])) {
      return color;
    } else if (has(color, ["h", "s", "l"])) {
      return HSVtoRGB(HSLtoHSV(color));
    } else if (has(color, ["h", "s", "v"])) {
      return HSVtoRGB(color);
    }
  }
  throw new TypeError(
    `Invalid color: ${
      color == null ? color : String(color) || color.constructor.name
    }\nExpected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`
  );
}

/**
 * Lighten a color by the specified amount. The amount is specified in the LAB color space,
 * so you can think of it as "lighten by X lab units". A value of 1 is a very small amount of
 * lightening, while a value of 10 is a more noticable lightening. A negative amount will
 * darken the color instead.
 *
 * @param {Color} value The color to lighten
 * @param {number} amount The amount to lighten by
 * @returns {Color} The lightened color
 */
export function lighten(value, amount) {
  const lab = CIELAB.fromXYZ(sRGB.toXYZ(value));
  lab[0] = lab[0] + amount * 10;
  return sRGB.fromXYZ(CIELAB.toXYZ(lab));
}
/**
 * Darken a color by the specified amount. The amount is specified in the LAB color space,
 * so you can think of it as "darken by X lab units". A value of 1 is a very small amount of
 * darkening, while a value of 10 is a more noticable darkening. A negative amount will
 * lighten the color instead.
 *
 * @param {object} value - The color to darken, in a format accepted by {@link parseColor}
 * @param {number} amount - The amount to darken the color by, in LAB units
 * @returns {object} The darkened color, in the same format as the input
 */
export function darken(value, amount) {
  const lab = CIELAB.fromXYZ(sRGB.toXYZ(value));
  lab[0] = lab[0] - amount * 10;
  return sRGB.fromXYZ(CIELAB.toXYZ(lab));
}

/**
 * Converts a number to a normalized hex string, i.e. always two characters
 *
 * @param {number} v - The number to convert
 * @returns {string} The normalized hex string, e.g. "FF", "00"
 */
function toHex(v) {
  const h = Math.round(v).toString(16);
  return ("00".substr(0, 2 - h.length) + h).toUpperCase();
}

/**
 * Parse a hex(a) color string and return the normalized hex(a) string
 *
 * @param {string} hex - The hex(a) color string to parse, e.g. "#FF0000", "#FF0000AA", "FF0000", "FF0000AA"
 *
 * @returns {string} - The normalized hex(a) color string, e.g. "FF0000"
 */
export function parseHex(hex) {
  if (hex.startsWith("#")) {
    hex = hex.slice(1);
  }
  hex = hex.replace(/([^0-9a-f])/gi, "F");
  if (hex.length === 3 || hex.length === 4) {
    hex = hex
      .split("")
      .map((x) => x + x)
      .join("");
  }
  if (hex.length !== 6) {
    hex = padEnd(padEnd(hex, 6), 8, "F");
  }
  return hex;
}

/**
 * Converts an HSL color object to an HSV color object
 *
 * @param {object} hsl - The HSL color object to convert
 * @param {number} hsl.h - The hue, in the range [0, 360)
 * @param {number} hsl.s - The saturation, in the range [0, 1]
 * @param {number} hsl.l - The lightness, in the range [0, 1]
 * @param {number} hsl.a - The alpha, in the range [0, 1]
 *
 * @returns {object} An HSV color object
 * @returns {number} returns.h - The hue, in the range [0, 360)
 * @returns {number} returns.s - The saturation, in the range [0, 1]
 * @returns {number} returns.v - The value, in the range [0, 1]
 * @returns {number} returns.a - The alpha, in the range [0, 1]
 */
export function HSLtoHSV(hsl) {
  const { h, s, l, a } = hsl;
  const v = l + s * Math.min(l, 1 - l);
  const sprime = v === 0 ? 0 : 2 - (2 * l) / v;
  return {
    h,
    s: sprime,
    v,
    a
  };
}

/**
 * Converts an RGB color object (`{ r, g, b, [a] }`) to a hex color string (`"#FF0000"`).
 *
 * @param {object} rgb - The RGB color object to convert
 * @param {number} rgb.r - The red component, in the range [0, 255]
 * @param {number} rgb.g - The green component, in the range [0, 255]
 * @param {number} rgb.b - The blue component, in the range [0, 255]
 * @param {number} [rgb.a] - The alpha component, in the range [0, 1]
 *
 * @returns {string} A hex color string, e.g. "#FF0000"
 */
export function RGBtoHex(_ref2) {
  let { r, g, b, a } = _ref2;
  return `#${[toHex(r), toHex(g), toHex(b), a !== undefined ? toHex(Math.round(a * 255)) : ""].join("")}`;
}

/**
 * Converts a hex color string to an RGB color object
 *
 * @param {string} hex - The hex color string to convert, e.g. "#FF0000"
 *
 * @returns {object} An RGB color object
 * @returns {number} returns.r - The red component, in the range [0, 255]
 * @returns {number} returns.g - The green component, in the range [0, 255]
 * @returns {number} returns.b - The blue component, in the range [0, 255]
 * @returns {number} [returns.a] - The alpha component, in the range [0, 1]
 */
export function HexToRGB(hex) {
  hex = parseHex(hex);
  let [r, g, b, a] = chunk(hex, 2).map((c) => parseInt(c, 16));
  a = a === undefined ? a : a / 255;
  return {
    r,
    g,
    b,
    a
  };
}

/**
 * Converts HSVA to RGBA. Based on formula from https://en.wikipedia.org/wiki/HSL_and_HSV
 *
 * @param {object} hsva - The HSVA color object to convert
 * @param {number} hsva.h - The hue component, in the range [0, 360]
 * @param {number} hsva.s - The saturation component, in the range [0, 1]
 * @param {number} hsva.v - The value component, in the range [0, 1]
 * @param {number} [hsva.a] - The alpha component, in the range [0, 1]
 *
 * @returns {object} An RGB color object
 * @returns {number} returns.r - The red component, in the range [0, 255]
 * @returns {number} returns.g - The green component, in the range [0, 255]
 * @returns {number} returns.b - The blue component, in the range [0, 255]
 * @returns {number} [returns.a] - The alpha component, in the range [0, 1]
 *
 * @see https://en.wikipedia.org/wiki/HSL_and_HSV
 */
export function HSVtoRGB(hsva) {
  const { h, s, v, a } = hsva;
  const f = (n) => {
    const k = (n + h / 60) % 6;
    return v - v * s * Math.max(Math.min(k, 4 - k, 1), 0);
  };
  const rgb = [f(5), f(3), f(1)].map((v) => Math.round(v * 255));
  return {
    r: rgb[0],
    g: rgb[1],
    b: rgb[2],
    a
  };
}

/**
 * Converts HSLA to RGBA. Based on formula from https://en.wikipedia.org/wiki/HSL_and_HSV
 *
 * @param {object} hsla - The HSLA color object to convert
 * @param {number} hsla.h - The hue component, in the range [0, 360]
 * @param {number} hsla.s - The saturation component, in the range [0, 1]
 * @param {number} hsla.l - The lightness component, in the range [0, 1]
 * @param {number} [hsla.a] - The alpha component, in the range [0, 1]
 *
 * @returns {object} An RGB color object
 * @returns {number} returns.r - The red component, in the range [0, 255]
 * @returns {number} returns.g - The green component, in the range [0, 255]
 * @returns {number} returns.b - The blue component, in the range [0, 255]
 * @returns {number} [returns.a] - The alpha component, in the range [0, 1]
 *
 * @see https://en.wikipedia.org/wiki/HSL_and_HSV
 */
export function HSLtoRGB(hsla) {
  return HSVtoRGB(HSLtoHSV(hsla));
}

/**
 * Converts an RGB color value to HSL. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes r, g, and b are contained in the set [0, 255] and
 * returns h, s, and l in the set [0, 1].
 *
 * @param   Number  r       The red color value
 * @param   Number  g       The green color value
 * @param   Number  b       The blue color value
 * @return  Array           The HSL representation
 *
 * @see https://stackoverflow.com/a/6445104
 */
export function RGBtoHSL(r, g, b) {
  (r /= 255), (g /= 255), (b /= 255);
  var max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  var h,
    s,
    l = (max + min) / 2;

  if (max == min) {
    h = s = 0; // achromatic
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  return [h, s, l];
}

/**
 * Mixes two colors together, according to a specified weight.
 *
 * @param {string} color_1 - The first color to mix
 * @param {string} color_2 - The second color to mix
 * @param {number} [weight] - The proportion of color_1 to use, in the range [0, 100]
 *
 * @returns {string} The mixed color, in hexadecimal form
 *
 * @example
 * const mixed = mix("#ff0000", "#00ff00", 50) // "#7f7f00"
 * const mixed = mix('ff0000', '0000bb', 75); // returns #bf002e
 *
 * @see https://gist.github.com/jedfoster/7939513
 */
export function mix(color_1, color_2, weight) {
  color_1 = color_1.replace(/#/g, "");
  color_2 = color_2.replace(/#/g, "");
  // convert a decimal value to hex
  const d2h = (d) => d.toString(16).padStart(2, "0");
  // convert a hex value to decimal
  const h2d = (h) => parseInt(h, 16);

  // set the weight to 50%, if that argument is omitted
  weight = typeof weight !== "undefined" ? weight : 50;

  var color = "#";

  // loop through each of the 3 hex pairs—red, green, and blue
  for (var i = 0; i <= 5; i += 2) {
    // extract the current pairs
    var v1 = h2d(color_1.substr(i, 2)),
      v2 = h2d(color_2.substr(i, 2)),
      // combine the current pairs from each source color, according to the specified weight
      val = d2h(Math.round(v2 + (v1 - v2) * (weight / 100.0)));

    // prepend a '0' if val results in a single digit
    while (val.length < 2) {
      val = "0" + val;
    }
    // concatenate val to our new color string
    color += val;
  }

  return color.toUpperCase();
}

/**
 * Mixes a color with white (#FFFFFF), according to a specified weight,
 * to achieve a lighter color variant.
 *
 * @param {*} color the color to be mixed with white, as a HEX string.
 * @param {*} weight the percentage of white to be added to the color.
 * @returns the mixed color.
 */
export const lightMix = (color, weight) => mix("#FFFFFF", color, weight);

/**
 * Mixes a color together with black (#000000), according to a specified weight,
 * to achieve a darker color variant.
 *
 * @param {*} color the color to be mixed with black, as a HEX string.
 * @param {*} weight the percentage of black to be added to the color.
 * @returns the mixed color.
 */
export const darkMix = (color, weight) => mix("#000000", color, weight);

/**
 * Converts an integer color representation to a HEX color string.
 *
 * @param {number} int the integer representation of the color.
 * @returns {string} the color as a HEX string.
 */
export function intToHex(int) {
  const rgba = parseColor(int);
  const hex = RGBtoHex(rgba);
  return hex;
}
