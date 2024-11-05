<template>
  <!-- PALETTE COLOR CARD -->
  <v-card
    :class="{
      'rounded-pill': expandedIndex !== props.paletteIndex || expandedIndex === undefined,
      'rounded-xl': isExpanded,
      'border-opacity-0': !isExpanded
    }"
    class="border-thin"
    :variant="isExpanded ? `outlined` : `flat`"
    :color="isExpanded ? `surface-brighter` : `secondary`"
    density="compact"
  >
    <v-card-item class="px-3">
      <template #prepend>
        <v-btn class="mr-4" :color="palette.hex" icon @click="colorIconClickHandler()"></v-btn>
      </template>
      <v-card-title class="text-body-1 font-weight-light">
        {{ palette.title }}
      </v-card-title>
      <v-card-subtitle class="text-uppercase">
        <template v-if="!isExpanded">
          <code class="mono-sm--text font-weight-light"> {{ palette.hex }} </code>
        </template>
        <template v-else>
          <!-- 
          The color input field v-model is set to a "dead" property 
          so that we can clear the input field after the enter key was pressed and the color is applied
           -->
          <v-text-field
            class="hex-field mono-sm--text font-weight-light"
            v-model="inputHex"
            width="60px"
            type="text"
            max="7"
            density="compact"
            variant="underlined"
            autofocus
            hide-details
            single-line
            persistent-placeholder
            :placeholder="palette.hex"
            @update:model-value="hexFieldUpdateHandler"
            @keyup.enter="hexFieldKeyEnterHandler"
          ></v-text-field>
        </template>
      </v-card-subtitle>
      <template #append v-if="showRandom">
        <v-tooltip text="Random color." close-on-content-click v-model="randomTooltipOpen" @update:model-value="randomTooltipUpdateHandler">
          <template v-slot:activator="{ props }">
            <v-btn
              icon="mdi-tools"
              v-bind="props"
              size="small"
              variant="text"
              aria-label="Random color"
              @click="randomButtonClickHandler()"
            ></v-btn>
          </template>
        </v-tooltip>
      </template>
    </v-card-item>

    <v-card-text class="pt-1 pb-0" v-show="isExpanded">
      <v-divider></v-divider>
      <v-row class="mt-2" no-gutters>
        <v-col>
          <v-card-subtitle class="text-body-2 font-weight-light" color="primary">Hue:</v-card-subtitle>
          <v-slider class="hue-slider-track" v-model="colorHue" min="0" max="360" step="1.0" @update:model-value="hueSliderUpdateHandler">
            <template v-slot:append>
              <v-text-field
                class="font-mono--input mono-sm--input"
                v-model="colorHue"
                width="60"
                type="number"
                min="0"
                max="360"
                step="1"
                density="compact"
                single-line
                hide-details
                @update:model-value="hueSliderUpdateHandler"
              >
              </v-text-field>
            </template>
          </v-slider>
        </v-col>
      </v-row>
      <v-row class="mt-1" no-gutters>
        <v-col>
          <v-card-subtitle class="text-body-2 font-weight-light">Chroma:</v-card-subtitle>
          <v-slider
            :ref="(vnode) => (chromaSlider = vnode ? vnode.$el : null)"
            class="chroma-slider-track"
            v-model="colorChroma"
            min="0"
            max="100"
            step="1.0"
            @update:model-value="chromaSliderUpdateHandler"
          >
            <template v-slot:append>
              <v-text-field
                class="font-mono--input mono-sm--input"
                v-model="colorChroma"
                width="60"
                type="number"
                min="0"
                max="100"
                step="1"
                density="compact"
                single-line
                hide-details
                @update:model-value="chromaSliderUpdateHandler"
              >
              </v-text-field>
            </template>
          </v-slider>
        </v-col>
      </v-row>
      <v-row class="mt-1" no-gutters>
        <v-col>
          <v-card-subtitle class="text-body-2 font-weight-light">Tone:</v-card-subtitle>
          <v-slider
            :ref="(vnode) => (toneSlider = vnode ? vnode.$el : null)"
            class="tone-slider-track"
            v-model="colorTone"
            min="0"
            max="100"
            step="1.0"
            @update:model-value="toneSliderUpdateHandler"
          >
            <template v-slot:append>
              <v-text-field
                class="font-mono--input mono-sm--input"
                v-model="colorTone"
                width="60"
                type="number"
                density="compact"
                single-line
                hide-details
                max="100"
                min="0"
                step="1"
                @update:model-value="toneSliderUpdateHandler"
              >
              </v-text-field>
            </template>
          </v-slider>
        </v-col>
      </v-row>
      <v-row class="mt-2" no-gutters>
        <v-col>
          <v-divider></v-divider>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions class="mx-3 mb-1" v-show="isExpanded">
      <v-spacer></v-spacer>
      <v-btn size="small" variant="tonal" @click="resetClickHandler">Reset</v-btn>
      <v-btn size="small" variant="tonal" @click="applyClickHandler">Apply</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
  import { ref, onMounted, computed, toRefs, watch, warn } from "vue";
  import { Hct, hexFromArgb, argbFromHex, TonalPalette } from "@material/material-color-utilities";
  import tinycolor from "tinycolor2";

  const props = defineProps({
    palette: Object,
    paletteIndex: Number,
    showRandom: Boolean
  });

  const expandedIndex = defineModel("expandedIndex");

  const emit = defineEmits(["click:random", "click:reset", "click:apply"]);

  const randomTooltipOpen = ref(false);

  const tempColor = ref("");

  const paletteRef = toRefs(props).palette;

  const currentHct = ref(null);

  const colorHue = ref(0);
  const colorChroma = ref(0);
  const colorTone = ref(0);

  const chromaSlider = ref(null);
  const chromaSliderTrack = ref(null);

  const toneSlider = ref(null);
  const toneSliderTrack = ref(null);

  const inputHex = ref("");

  /**
   * COMPUTED PROPERTIES
   */

  const isExpanded = computed(() => {
    return expandedIndex.value === props.paletteIndex;
  });

  /**
   * Returns the HCT object from the palette's hex value.
   *
   * This is a computed property that is reactive to the palette's hex value.
   *
   * NOTE: The `argb` getter value of the palette is read only and generated from the hex value.
   * Take this into account when modifying the palette's hex value directly.
   *
   * @returns {Hct}
   */
  const hctFromPaletteHex = computed(() => {
    console.log("PaletteItemCard ::: computed ::: hctFromPaletteHex");
    let argb = props.palette.argb;
    let hct = Hct.fromInt(argb);
    return hct;
  });

  // prettier-ignore
  watch(() => props.palette,
    (newValue, oldValue) => {
      console.log("PaletteItemCard ::: watch palette");
      console.log("- newValue: ", newValue);
      console.log("- oldValue: ", oldValue);
      let newHct = newValue.hct;

      currentHct.value = newHct;
      console.log("- currentHct: ", currentHct.value);

      // Set slider values
      // colorHue.value = Math.round(newHct.hue);
      // colorChroma.value = Math.round(newHct.chroma);
      // colorTone.value = Math.round(newHct.tone);

      // console.log(" - colorHue: ", colorHue.value);
      // console.log(" - colorChroma: ", colorChroma.value);
      // console.log(" - colorTone: ", colorTone.value);

      // Set temp color
      setTempColor();
      // Set slider values
      setSliderValues();
      // Update slider backgrounds
      updateSliderBackgrounds();
    }
  );

  /**
   * LIFECYCLE HOOKS
   */

  onMounted(() => {
    console.log("PaletteItemCard ::: onMounted");
    console.log(" - props paletteIndex: ", props.paletteIndex);
    console.log(" - model expandedIndex: ", expandedIndex.value);

    console.log(" - colorHct: ", hctFromPaletteHex.value);

    // get references to slider elements

    let chromaElement = chromaSlider.value;
    chromaSliderTrack.value = chromaElement.querySelector(".v-slider-track .v-slider-track__background");
    console.log(" - chromaSlider: ", chromaSlider.value);
    console.log(" - chromaSliderTrack element: ", chromaSliderTrack.value);

    let toneElement = toneSlider.value;
    toneSliderTrack.value = toneElement.querySelector(".v-slider-track .v-slider-track__background");
    console.log(" - toneSlider: ", toneSlider.value);
    console.log(" - toneSliderTrack element: ", toneSliderTrack.value);

    setTempColor();
    setSliderValues();
    updateSliderBackgrounds();
  });

  /**
   * COMPONENT METHODS
   */

  /**
   * Sets the temporary color value to the hex value of the current palette.
   * This allows for the user to reset the hex color of the palette.
   */
  function setTempColor() {
    console.log("PaletteItemCard ::: setTempColor");
    if (props.palette) {
      tempColor.value = props.palette.hex;
    }
  }

  /**
   * Sets the reactive references from the palette's Hex color (converted to HCT) for the following properties:
   * - currentHct
   * - colorHue
   * - colorChroma
   * - colorTone
   *
   * These properties are used by the hue, chroma, and tone sliders.
   *
   * The HCT color is taken from the computed property `hctFromPaletteHex` which is
   * updated whenever the `palette` property changes.
   */
  function setSliderValues() {
    console.log("PaletteItemCard ::: setSliderValues");

    let hct = (currentHct.value = hctFromPaletteHex.value);

    colorHue.value = Math.round(hct.hue);
    colorChroma.value = Math.round(hct.chroma);
    colorTone.value = Math.round(hct.tone);

    console.log("- currentHct: ", currentHct.value);

    console.log("- colorHue: ", colorHue.value);
    console.log("- colorChroma: ", colorChroma.value);
    console.log("- colorTone: ", colorTone.value);
  }

  /**
   * Updates the background gradient of the chroma and tone sliders.
   *
   * Calculates a new HCT color using the current hue with full chroma and tone,
   * then converts it to a HEX value. It applies this HEX value to the gradient background
   * of both the chroma and tone slider tracks.
   *
   * Logs a warning to the console if either `chromaSliderTrack` or `toneSliderTrack` is `null`.
   */
  function updateSliderBackgrounds() {
    console.log("PaletteItemCard ::: updateSliderBackgrounds");

    // new HCT color with the same hue, full chroma (100), and full tone (50)
    let bgHct = Hct.from(Math.round(Number(currentHct.value.hue)), 100, 50);
    console.log(" - HCT from currentHct hue, chroma: 100, tone: 50: ", bgHct);
    let bgHex = hexFromArgb(bgHct.argb);

    let tp = TonalPalette.fromHueAndChroma(currentHct.value.hue, 100);
    console.log(" - TonalPalette from currentHct: ", tp);
    let argb = tp.tone(50);
    console.log(" - ARGB from TonalPalette with 50 tone: ", argb);
    let hex = hexFromArgb(argb);
    console.log(" - HEX from ARGB: ", hex);

    // console.log(" - chromaSliderTrack: ", chromaSliderTrack.value);
    if (chromaSliderTrack && chromaSliderTrack.value !== null) {
      let chromaStyle = chromaSliderTrack.value.style;
      // console.log(" - chromaStyle: ", chromaStyle);
      let chromaBgStyle = "linear-gradient(to right, #777777 0%, #555555 100%)".replace("#555555", bgHex);
      console.log(" - chromaBgStyle: ", chromaBgStyle);
      chromaStyle.setProperty("background", chromaBgStyle, "important");
    } else {
      console.warn("[UtilitiesView] chromaSliderTrack.value is null");
    }

    // console.log(" - toneSliderTrack: ", toneSliderTrack.value);
    if (toneSliderTrack && toneSliderTrack.value !== null) {
      let toneStyle = toneSliderTrack.value.style;
      // console.log(" - toneStyle: ", toneStyle);
      let toneBgStyle = "linear-gradient(to right, #000000 0%, #555555 50%, #FFFFFF 100%)".replace("#555555", bgHex);
      console.log(" - toneBgStyle: ", toneBgStyle);
      toneStyle.setProperty("background", toneBgStyle, "important");
    } else {
      console.warn("[UtilitiesView] toneSliderTrack.value is null");
    }
  }

  /**
   * COMPONENT EVENT HANDLERS
   */

  /**
   * Handles the color icon click event.
   *
   * Toggles the expanded state of the color palette item card.
   *
   * If the card is expanded, it closes the card and sets the expandedIndex to -1.
   * If the card is collapsed, it opens the card by setting the expandedIndex to the paletteIndex
   * and saves the current source color by calling setTempColor().
   *
   * @param event The click event.
   */
  function colorIconClickHandler() {
    console.log("PaletteItemCard ::: colorIconClickHandler");
    console.log(" - palette name: ", props.palette.name);
    console.log(" - isExpanded:", isExpanded.value);
    // Check if we're currently expanded (open) - if so, close by setting expandedIndex to -1.
    // If not, open by setting expandedIndex to the paletteIndex
    // and call setTempColor() to save the current source color.
    // TODO: swap the palette color with the temporary color during editing (expended state).
    // TODO: and swap back to the palette color when closing (collapsed state).
    // NOTE: isExpanded is false when the card is collapsed and needs to be opened,
    // [*] and true when the card is expanded and needs to be closed.
    if (isExpanded.value) {
      expandedIndex.value = -1;
    } else {
      expandedIndex.value = props.paletteIndex;
      setTempColor();
    }
  }

  function hexFieldUpdateHandler(value) {
    console.log("PaletteItemCard ::: hexFieldUpdateHandler");
    console.log(" - value: ", value);
  }

  function hexFieldKeyEnterHandler(evt) {
    console.log("PaletteItemCard ::: hexFieldKeyEnterHandler");
    console.log(" - evt: ", evt);
    console.log(" - evt.target.value: ", evt.target.value);
    let val = evt.target.value;
    if (val === "" || val === null || val === undefined) {
      warn("Please enter a valid hex color code.");
      inputHex.value = "";
      return;
    }

    let hex = tinycolor(val).toHexString();
    console.log(" - hex: ", hex);
    let isValidHex = tinycolor(hex).isValid();
    console.log(" - isValidHex: ", isValidHex);

    if (isValidHex && hex !== "#000000") {
      props.palette.hex = hex;
      setTempColor();
      setSliderValues();
      updateSliderBackgrounds();
    } else {
      warn("Please enter a valid hex color code.");
    }
    // Clear the input hex value, so the placeholder is shown again.
    console.log("- inputHex: ", inputHex.value);
    inputHex.value = "";
  }

  /**
   * Handles the click event for the random button.
   *
   * Emits a 'click:random' event for parent components to handle.
   */
  function randomButtonClickHandler() {
    console.log("PaletteItemCard ::: randomButtonClickHandler");
    emit("click:random");
  }

  /**
   * Handles the update event for the random tooltip.
   *
   * When the tooltip is opened (value is true), it will automatically close after 3 seconds.
   *
   * @param value The new value of the tooltip; true if opened, false if closed.
   */
  function randomTooltipUpdateHandler(value) {
    console.log("UtilitiesView ::: randomTooltipUpdateHandler");
    console.log(" - value: ", value);
    console.log(" - randomTooltipOpen:", randomTooltipOpen.value);
    if (value) {
      setTimeout(() => {
        randomTooltipOpen.value = false;
      }, 3000);
    }
  }

  /**
   * Handles the update event for the hue slider.
   *
   * Updates the `colorHue` reactive reference with the new hue value.
   *
   * @param hue The new hue value.
   */
  function hueSliderUpdateHandler(hue) {
    console.log("PaletteItemCard ::: hueSliderUpdateHandler");
    // console.log(" - hue: ", hue);

    let h = Math.round(Number(hue));
    let c = Math.round(Number(colorChroma.value));
    let t = Math.round(Number(colorTone.value));

    // Create a tonal palette from the new hue value and current chroma
    let tp = TonalPalette.fromHueAndChroma(h, c);

    // Get the argb color from the tonal palette at the current tone
    // This will adjust the chroma if it's too high for the current tone.
    let argb = tp.tone(t);
    console.log(" - tp, tone:", t, " - argb: ", argb);
    let hex = hexFromArgb(argb);
    // console.log(" - hex: ", hex);
    props.palette.hex = hex;

    // Set the new hct color as the current one.
    currentHct.value = Hct.fromInt(argb);
    // console.log(" - currentHct: ", currentHct.value);

    // Update the slider backgrounds with new hct color
    updateSliderBackgrounds();
  }

  /**
   * Handles the update event for the chroma slider.
   *
   * Updates the `colorChroma` reactive reference with the new chroma value.
   *
   * @param chroma The new chroma value.
   */
  function chromaSliderUpdateHandler(chroma) {
    console.log("PaletteItemCard ::: chromaSliderUpdateHandler");
    // console.log(" - chroma: ", chroma);

    let h = Math.round(Number(colorHue.value));
    let c = Math.round(Number(chroma));
    let t = Math.round(Number(colorTone.value));

    // Create a tonal palette from the new hue value and current chroma
    let tp = TonalPalette.fromHueAndChroma(h, c);

    // Get the argb color from the tonal palette at the current tone.
    // This will adjust the chroma if it's too high for the current tone.
    let argb = tp.tone(t);
    // console.log(" - tp, tone:", t, " - argb: ", argb);
    let hex = hexFromArgb(argb);
    // console.log(" - hex: ", hex);
    props.palette.hex = hex;

    // Set the new hct color as the current one.
    currentHct.value = Hct.fromInt(argb);
    // console.log(" - currentHct: ", currentHct.value);
    // No need to update backgrounds.
  }

  /**
   * Handles the update event for the tone slider.
   *
   * Updates the `colorTone` reactive reference with the new tone value.
   *
   * @param tone The new tone value.
   */
  function toneSliderUpdateHandler(tone) {
    console.log("PaletteItemCard ::: toneSliderUpdateHandler");
    console.log(" - tone: ", tone);

    let h = colorHue.value;
    let c = Math.max(1, Number(colorChroma.value));
    let t = Math.max(1, Number(colorTone.value));
    // console.log(" - hue: ", h, " - chroma: ", c, " - tone: ", t);

    // Create a tonal palette from the new hue value and current chroma
    let tp = TonalPalette.fromHueAndChroma(h, c);
    // console.log(" - TonalPalette from hue and chroma: ", tp);

    // Get the argb color from the tonal palette at the current tone.
    // This will adjust the chroma if it's too high for the current tone.
    let argb = tp.tone(t);
    // console.log(" - argb: ", argb);
    // console.log(" - TonalPalette keyColor: ", tp.keyColor);

    let hex = hexFromArgb(argb);
    // console.log(" - hex: ", hex);
    props.palette.hex = hex;

    // Set the new hct color as the current one.
    currentHct.value = Hct.fromInt(argb);
    console.log(" - currentHct: ", currentHct.value);
  }

  /**
   * Handles the click event of the reset button.
   *
   * Resets the color of the palette to its original value (as stored in `tempColor`).
   *
   * If the palette is the source color, this reset will trigger a full color scheme reset.
   *
   * @emits click:reset - The palette index and palette object are emitted to the parent component.
   */
  function resetClickHandler() {
    console.log("PaletteItemCard ::: resetClickHandler");
    console.log(" - palette color: ", props.palette.hex);
    console.log(" - tempColor: ", tempColor.value);

    props.palette.hex = tempColor.value;
    // reset slider values
    setSliderValues();
    // update/reset the temp color
    setTempColor();
    // update slider backgrounds
    updateSliderBackgrounds();
    // emit reset event (if this is the source color, will reset the color scheme)
    emit("click:reset", props.paletteIndex, props.palette);
  }

  /**
   * Handles the click event of the apply button.
   *
   * Emits a 'click:apply' event for parent components to handle, passing the palette index and palette object.
   * This can be used to update the color scheme.
   *
   * @emits click:apply - The palette index and palette object are emitted to the parent component.
   */
  function applyClickHandler() {
    console.log("PaletteItemCard ::: applyClickHandler");
    console.log(" - palette color: ", props.palette.hex);
    emit("click:apply", props.paletteIndex, props.palette);
  }
</script>
<style scoped lang="scss">
  /**
   * Color input field styles.
   * 
   * The input field replaces the card subtitle when the card is expanded.
   * So we try to mimic the appearance (font, size, position) of the card subtitle as close as possible.
   */
  .hex-field {
    height: 20px !important;
    min-height: 20px !important;
    max-height: 20px !important;
    margin: 0 !important;
    padding: 0 !important;
    :deep(input.v-field__input) {
      border-width: 0px !important;
      border-style: none !important;
      font-size: small !important;
      margin: 0 !important;
      padding: 0 !important;
      height: 20px !important;
      min-height: 20px !important;
      max-height: 20px !important;
      line-height: 1;
    }
  }

  // HCT color slider styles
  .hue-slider-track,
  .chroma-slider-track,
  .tone-slider-track {
    // :deep(.v-slider-track__background) {
    :deep(.v-slider-track__background) {
      height: 24px !important;
      border-radius: 0 !important;
      opacity: 1 !important;
    }
    :deep(.v-slider-track__fill) {
      display: none !important;
      visibility: hidden !important;
    }
    :deep(.v-input__details) {
      display: none !important;
      visibility: hidden !important;
    }
    :deep(input) {
      height: 32px !important;
      min-height: 32px !important;
      padding-inline-end: 0 !important;
      text-align: right;
    }
    :deep(input)::-webkit-outer-spin-button,
    :deep(input)::-webkit-inner-spin-button {
      // space between number input and spin buttons
      margin-left: 4px;
    }
  }

  .hue-slider-track {
    :deep(.v-slider-track__background) {
      // material theme builder hue values: 0, 60, 120, 180, 240, 300, 360 (chroma: 100, tone: 50)
      // material theme builder gradient: #E7007D, #B66500 , #6D7F00 , #008673 , #007FB4 , #8851FF , #E7007D
      // background: linear-gradient(to right, #E7007D, #B26300, #6D7F00, #008673, #007FB4, #8851FF, #E7007D) !important;
      background: linear-gradient(to right, #e7007d, #b26300, #6d7f00, #008673, #007fb4, #8851ff, #e7007d) !important;
    }
  }

  .chroma-slider-track {
    :deep(.v-slider-track__background) {
      background: linear-gradient(to right, #777777 0%, #e4007b 100%) !important;
    }
  }

  .tone-slider-track {
    :deep(.v-slider-track__background) {
      background: linear-gradient(to right, #000000 0%, #e4007b 50%, #ffffff 100%) !important;
    }
  }
</style>
