/**
 * Image assets need to be imported so that they are included in the build.
 * With static urls, an import isn't need, just assign the url to a constant and export it.
 *
 * @see https://stackoverflow.com/a/71514878
 *
 */

import stockCake01 from "@/assets/images/stockcake/abstract-turquoise-art-small.jpg";
import stockCake02 from "@/assets/images/stockcake/autumn-lakeside-serenity-small.jpg";
import stockCake03 from "@/assets/images/stockcake/lavender-sunset-hues-small.jpg";
import stockCake04 from "@/assets/images/stockcake/apocalyptic-lava-landscape-small.jpg";
import stockCake05 from "@/assets/images/stockcake/blooming-cherry-blossom-small.jpg";
import stockCake06 from "@/assets/images/stockcake/vibrant-forest-canopy-small.jpg";
import stockCake07 from "@/assets/images/stockcake/vibrant-tulip-fields-small.jpg";
import stockCake08 from "@/assets/images/stockcake/dewy-green-leaves-440x128.png";
import stockCake09 from "@/assets/images/stockcake/golden-butterfly-art-440x128.png";
import stockCake10 from "@/assets/images/stockcake/neon-cityscape-reflection-small.jpg";
import stockCake11 from "@/assets/images/stockcake/urban-green-roofs-small.jpg";
import stockCake12 from "@/assets/images/stockcake/vibrant-yellow-finch-small.jpg";
import stockCake13 from "@/assets/images/stockcake/sunset-crowds-gather-small.jpg";
import stockCake14 from "@/assets/images/stockcake/close-up-fabric-small.jpg";
import stockCake15 from "@/assets/images/stockcake/water-drop-impact-small.jpg";

import pexels01 from "@/assets/images/pexels/pexels-jordan-besson-2051439001-440x128.png";
import pexels02 from "@/assets/images/pexels/pexels-quang-nguyen-vinh-222549-440x128.png";
import pexels03 from "@/assets/images/pexels/pexels-kawserhamid-176342-440x128.png";
import pexels04 from "@/assets/images/pexels/vibrant-sunflower-in-bloom-440x128.png";
import pexels05 from "@/assets/images/pexels/pexels-postiglioni-421129-440x128.png";
import pexels06 from "@/assets/images/pexels/pexels-incrediblerafa-4737522-440x128.png";
import pexels07 from "@/assets/images/pexels/tenements-near-canal-440x128.png";
import pexels08 from "@/assets/images/pexels/vibrant-red-apples-440x128.png";

/**
 * Picsum random image 01
 */
export const picsum01 = "https://picsum.photos/440/128?random=1";
/**
 * Picsum random image 02
 */
export const picsum02 = "https://picsum.photos/440/128?random=2";
/**
 * Picsum random image 03
 */
export const picsum03 = "https://picsum.photos/440/128?random=3";
/**
 * Picsum random image 04
 */
export const picsum04 = "https://picsum.photos/440/128?random=4";
/**
 * Picsum fixed image 01
 */
export const picsum05 = "https://picsum.photos/id/2/440/128";
/**
 * Picsum fixed image 02
 */
export const picsum06 = "https://picsum.photos/id/18/440/128";
/**
 * Picsum fixed image 03
 */
export const picsum07 = "https://picsum.photos/id/56/440/128";
/**
 * Picsum fixed image 04
 */
export const picsum08 = "https://picsum.photos/id/78/440/128";
/**
 * Picsum fixed image 05
 */
export const picsum09 = "https://picsum.photos/id/113/440/128";

/**
 * All availabe images in one list.
 *
 * The first four are random images. To refresh them without refreshing the page,
 * modify their `random` query parameter.
 *
 * @example
 * const r = Math.floor(Math.random() * 1000).toString();
 * const url = `https://picsum.photos/440/128?random=${r}`;
 */
export const imgAssets = [
  picsum01,
  picsum02,
  picsum03,
  picsum04,
  picsum05,
  picsum06,
  picsum07,
  picsum08,
  picsum09,
  stockCake01,
  stockCake02,
  stockCake03,
  stockCake04,
  stockCake05,
  stockCake06,
  stockCake07,
  stockCake08,
  stockCake09,
  stockCake10,
  stockCake11,
  stockCake12,
  stockCake13,
  stockCake14,
  stockCake15,
  pexels01,
  pexels02,
  pexels03,
  pexels04,
  pexels05,
  pexels06,
  pexels07,
  pexels08
];

// export { picsum01 };
// export { picsum02 };
// export { picsum03 };
// export { picsum04 };
// export { picsum05 };
// export { picsum06 };
// export { picsum07 };
// export { picsum08 };
// export { picsum09 };
export { stockCake01 };
export { stockCake02 };
export { stockCake03 };
export { stockCake04 };
export { stockCake05 };
export { stockCake06 };
export { stockCake07 };
export { stockCake08 };
export { stockCake09 };
export { stockCake10 };
export { stockCake11 };
export { stockCake12 };
export { stockCake13 };
export { stockCake14 };
export { stockCake15 };
export { pexels01 };
export { pexels02 };
export { pexels03 };
export { pexels04 };
export { pexels05 };
export { pexels06 };
export { pexels07 };
export { pexels08 };

export default {
  picsum01,
  picsum02,
  picsum03,
  picsum04,
  picsum05,
  picsum06,
  picsum07,
  picsum08,
  picsum09,
  stockCake01,
  stockCake02,
  stockCake03,
  stockCake04,
  stockCake05,
  stockCake06,
  stockCake07,
  stockCake08,
  stockCake09,
  stockCake10,
  stockCake11,
  stockCake12,
  stockCake13,
  stockCake14,
  stockCake15,
  pexels01,
  pexels02,
  pexels03,
  pexels04,
  pexels05,
  pexels06,
  pexels07,
  pexels08
};
