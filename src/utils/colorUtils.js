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
 * Converts an RGB color object to a hex color string
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
