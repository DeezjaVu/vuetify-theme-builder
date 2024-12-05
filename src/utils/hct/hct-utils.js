import { argbFromHex, hexFromArgb, Hct } from "@material/material-color-utilities";

const hueCache = [];

const hexCache = [];

/**
 * HCTs for all hues, with a tone of 53 and max chroma for that tone.
 * Sorted ascending, hue 0 to 360.
 */
function hctsByHue() {
  if (hueCache.length > 0) {
    return hueCache;
  }
  for (let i = 0; i <= 360; i++) {
    hueCache[i] = Hct.from(i, 100.0, 53.0);
  }
  Object.freeze(hueCache);
  return hueCache;
}

function hexsByHue() {
  if (hexCache.length > 0) {
    return hexCache;
  }
  let hcts = hctsByHue();
  let len = hcts.length;
  for (let i = 0; i < len; i++) {
    hexCache[i] = hexFromArgb(hcts[i].toInt());
  }
  Object.freeze(hexCache);
  return hexCache;
}

/**
 * Retrieves the HCT (Hue, Chroma, Tone) object for a specified hue value.
 *
 * This function returns the HCT color with the specified hue, a tone of 53,
 * and the maximum chroma for that tone. The hue value should be an integer
 * between 0 and 360, inclusive, representing the degrees on the color wheel.
 *
 * @param {number} hue - The hue value, an integer from 0 to 360.
 * @returns {Hct} The HCT object corresponding to the given hue.
 */
export function hctForHue(hue) {
  const hcts = hctsByHue();
  return hcts[hue];
}

/**
 * Retrieves the hex string for a specified hue value.
 *
 * This function returns the hex string for the color with the specified hue,
 * a tone of 53, and the maximum chroma for that tone. The hue value should be
 * an integer between 0 and 360, inclusive, representing the degrees on the
 * color wheel.
 *
 * @param {number} hue - The hue value, an integer from 0 to 360.
 * @returns {string} The hex string for the given hue, with max chroma and 53 tone.
 */
export function hexForHue(hue) {
  const hexes = hexsByHue();
  return hexes[hue];
}

export default { hctForHue, hexForHue };
