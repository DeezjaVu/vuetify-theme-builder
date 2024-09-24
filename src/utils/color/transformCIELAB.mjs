// Types

const delta = 0.20689655172413793; // 6÷29

/**
 * CIELAB forward transform function.
 *
 * @param {number} t Value to be transformed.
 * @returns {number} Transformed value.
 *
 * This function is used to transform XYZ values to L*a*b* values.
 * It maps the range [0, 1] to the range [0, 1] where values are
 * generally more linearly spaced.
 *
 * This function is used in the `fromXYZ` function to transform XYZ
 * values to L*a*b* values.
 *
 * @private
 */
const cielabForwardTransform = (t) =>
  t > delta ** 3 ? Math.cbrt(t) : t / (3 * delta ** 2) + 4 / 29;

/**
 * CIELAB reverse transform function.
 *
 * @param {*} t
 * @returns
 */
const cielabReverseTransform = (t) => (t > delta ? t ** 3 : 3 * delta ** 2 * (t - 4 / 29));

/**
 * Converts XYZ color values to L*a*b* color values.
 *
 * @param {Array<number>} xyz XYZ color values in the range [0, 1].
 * @returns {Array<number>} L*a*b* color values in the range [0, 100] except
 *     for a and b which are in the range [-128, 127].
 *
 * This function uses the CIELAB forward transform function to convert XYZ
 * values to L*a*b* values.
 */
export function fromXYZ(xyz) {
  const transform = cielabForwardTransform;
  const transformedY = transform(xyz[1]);
  return [
    116 * transformedY - 16,
    500 * (transform(xyz[0] / 0.95047) - transformedY),
    200 * (transformedY - transform(xyz[2] / 1.08883))
  ];
}

/**
 * Converts L*a*b* color values to XYZ color values.
 *
 * @param {Array<number>} lab L*a*b* color values in the range [0, 100] except
 *     for a and b which are in the range [-128, 127].
 * @returns {Array<number>} XYZ color values in the range [0, 1].
 *
 * This function uses the CIELAB reverse transform function to convert L*a*b*
 * values to XYZ values.
 */
export function toXYZ(lab) {
  const transform = cielabReverseTransform;
  const Ln = (lab[0] + 16) / 116;
  return [
    transform(Ln + lab[1] / 500) * 0.95047,
    transform(Ln),
    transform(Ln - lab[2] / 200) * 1.08883
  ];
}
