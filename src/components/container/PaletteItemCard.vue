<template>
  <!-- COLOR DIALOG MODAL -->
  <!-- id="palette-item-color-dialog" -->
  <ColorDialog
    :color-name="palette.name"
    v-model="paletteModalOpen"
    v-model:picker-color="inputHex"
    v-model:swatch-preset="swatchPreset"
    persistent
    @update:picker-color="paletteModalChangeHandler"
    @update="paletteModalUpdateHandler"
    @cancel="paletteModalCancelHandler"
  />
  <!-- @update:swatch-preset="swatchPresetChangeHandler" -->
  <!-- PALETTE COLOR CARD -->
  <v-card
    :class="{
      'rounded-pill': !isExpandedClass,
      'rounded-xxl': isExpandedClass,
      'border-opacity-0': !isExpanded
    }"
    class="border-thin"
    :variant="isExpanded ? `outlined` : `flat`"
    :color="isExpanded ? `surface-brighter` : `secondary`"
    density="compact"
  >
    <!-- :loading="palette.isCustom && palette.blend" -->
    <v-card-item class="px-3">
      <!-- [*] PALETTE COLOR ICON -->
      <template #prepend>
        <v-btn class="mr-4 text-uppercase" :color="palette.hex" icon @click="colorIconClickHandler()"></v-btn>
      </template>
      <!-- [*] PALETTE COLOR TITLE & SUBTITLE -->
      <v-card-title class="text-body-1 font-weight-light">
        {{ palette.title }}
      </v-card-title>
      <v-card-subtitle class="text-uppercase">
        <template v-if="!isExpanded">
          <code class="mono-sm--text font-weight-light"> {{ palette.hex }} </code>
        </template>
        <template v-else>
          <!-- 
          The input field v-model is set to a "dead" property 
          so that we can clear the input field after the enter key was pressed and the color is applied
           -->
          <!-- [*] HEX INPUT FIELD -->
          <v-text-field
            class="hex-field mono-sm--text font-weight-light text-uppercase"
            v-model="inputHex"
            width="96px"
            type="text"
            max="7"
            density="compact"
            variant="underlined"
            autofocus
            hide-details
            single-line
            persistent-placeholder
            :placeholder="palette.hex"
            append-icon="mdi-palette"
            @click:append="hexFieldAppendClickHandler()"
            @update:model-value="hexFieldUpdateHandler"
            @keyup.enter="hexFieldKeyEnterHandler"
          ></v-text-field>
        </template>
      </v-card-subtitle>
      <!-- [*] RANDOM COLOR BUTTON (only for source palette) -->
      <template #append v-if="palette.isSource">
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
      <!-- [*] CUSTOM PALETTE COLOR OPTIONS BUTTON -->
      <template #append v-if="palette.isCustom">
        <v-btn icon size="small" variant="text" aria-label="Custom color options">
          <v-icon>mdi-dots-vertical</v-icon>
          <v-menu activator="parent" location="end" :close-on-content-click="false">
            <v-list density="compact">
              <v-list-item>
                <v-list-item-title class="text-body-2">Harmonize</v-list-item-title>
                <v-list-item-subtitle class="font-weight-light">Blends this color with the scheme's source color.</v-list-item-subtitle>
                <template v-slot:prepend="{ isSelected }">
                  <v-list-item-action start>
                    <v-checkbox-btn
                      v-model="palette.blend"
                      color="primary-lighten-2"
                      density="compact"
                      hide-details
                      @update:model-value="blendUpdateHandler()"
                    ></v-checkbox-btn>
                  </v-list-item-action>
                </template>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-btn>
      </template>
    </v-card-item>

    <v-expand-transition @before-enter="expandTransitionBeforeEnterHandler" @after-leave="expandTransitionAfterLeaveHandler">
      <v-card-text class="pt-1 pb-0" v-show="isExpanded">
        <v-divider></v-divider>
        <!-- [*] HUE SLIDER ROW -->
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
        <!-- [*] CHROMA SLIDER ROW -->
        <v-row class="mt-1" no-gutters>
          <v-col>
            <v-card-subtitle class="text-body-2 font-weight-light">Chroma:</v-card-subtitle>
            <!-- ref is used to get the DOM element of the slider to be able to style its background -->
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
        <!-- [*] TONE SLIDER ROW -->
        <v-row class="mt-1" no-gutters>
          <v-col>
            <v-card-subtitle class="text-body-2 font-weight-light">Tone:</v-card-subtitle>
            <!-- ref is used to get the DOM element of the slider to be able to style its background -->
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
    </v-expand-transition>

    <v-card-actions class="mx-3 mb-1" v-show="isExpanded">
      <v-spacer></v-spacer>
      <v-btn color="primary-lighten-2" size="small" variant="text" @click="resetClickHandler">Reset</v-btn>
      <v-btn color="primary-lighten-2" size="small" variant="tonal" @click="applyClickHandler">Apply</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
  import { ref, onMounted, computed, toRefs, watch, warn } from "vue";
  import { Hct, hexFromArgb, TonalPalette } from "@material/material-color-utilities";
  import { hexForHue } from "@/utils/hct/hct-utils.js";
  import tinycolor from "tinycolor2";
  import PaletteCore from "@/utils/palettes/palette-core";
  import PaletteCustom from "@/utils/palettes/palette-custom";

  const props = defineProps({
    palette: PaletteCore | PaletteCustom,
    paletteIndex: Number
  });

  const expandedIndex = defineModel("expandedIndex");
  const swatchPreset = defineModel("swatchPreset", { default: "material" });

  const emit = defineEmits(["click:random", "click:reset", "click:apply", "update:blend"]);

  const paletteModalOpen = ref(false);

  const randomTooltipOpen = ref(false);

  const isDirty = ref(false);

  const tempHex = ref("");

  const paletteRef = toRefs(props).palette;

  // const swatchPresetRef = toRefs(props).swatchPreset;

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

  const isExpandedClass = ref(false);

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
    // console.log("PaletteItemCard ::: computed ::: hctFromPaletteHex");
    let argb = props.palette.argb;
    let hct = Hct.fromInt(argb);
    return hct;
  });

  /**
   * Returns true if the palette is custom and the palette has been modified (isDirty = true).
   *
   * This is to prevent the color dialog from opening if the paletter has been modified (unsaved changes).
   */
  const disableModal = computed(() => {
    return props.palette.isCustom && isDirty.value;
  });

  /**
   * PROPS WATCHERS
   */

  // prettier-ignore
  watch(() => props.palette,
    (newValue, oldValue) => {
      // Set temp color (used for reset)
      setTempColor();
      // Set slider values (also sets currentHct)
      setSliderValues();
      // Update slider backgrounds
      updateSliderBackgrounds();
    }
  );

  /**
   * LIFECYCLE HOOKS
   */

  onMounted(() => {
    // console.log("PaletteItemCard ::: onMounted");

    // console.log(" - props.palette.isSource: ", props.palette.isSource);
    // console.log(" - swatchPreset: ", swatchPreset.value);

    // Get references to slider DOM elements via their ref attribute.

    let chromaElement = chromaSlider.value;
    chromaSliderTrack.value = chromaElement.querySelector(".v-slider-track .v-slider-track__background");
    // console.log(" - chromaSlider: ", chromaSlider.value);
    // console.log(" - chromaSliderTrack element: ", chromaSliderTrack.value);

    let toneElement = toneSlider.value;
    toneSliderTrack.value = toneElement.querySelector(".v-slider-track .v-slider-track__background");
    // console.log(" - toneSlider: ", toneSlider.value);
    // console.log(" - toneSliderTrack element: ", toneSliderTrack.value);

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
    // console.log("PaletteItemCard ::: setTempColor");
    if (props.palette) {
      tempHex.value = props.palette.hex;
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
    // console.log("PaletteItemCard ::: setSliderValues");

    let hct = (currentHct.value = hctFromPaletteHex.value);

    colorHue.value = Math.round(hct.hue);
    colorChroma.value = Math.round(hct.chroma);
    colorTone.value = Math.round(hct.tone);
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
    // console.log("PaletteItemCard ::: updateSliderBackgrounds");

    // NOTE: Do not use the currentHct's hue as it may have shifted when tone and chroma are too high or too low.
    //   [*] For some unknown reason it then gets stuck at 209, which then lead to the background gradient no longer updating.
    // new HCT color with the slider hue, full chroma (100), and full tone (50)
    let h = colorHue.value;
    // let cacheHct = hctForHue(h);
    // let argb = cacheHct.toInt();
    // let bgHex = hexFromArgb(argb);
    let bgHex = hexForHue(h);

    if (chromaSliderTrack && chromaSliderTrack.value !== null) {
      let chromaStyle = chromaSliderTrack.value.style;
      let chromaBgStyle = `linear-gradient(to right, #777777 0%, ${bgHex} 100%)`;
      chromaStyle.setProperty("background", chromaBgStyle, "important");
    } else {
      console.warn("[PaletteItemCard] chromaSliderTrack.value is null");
    }

    // console.log(" - toneSliderTrack: ", toneSliderTrack.value);
    if (toneSliderTrack && toneSliderTrack.value !== null) {
      let toneStyle = toneSliderTrack.value.style;
      // let toneBgStyle = `linear-gradient(to right, #000000 0%, ${bgHex} 45%, ${bgHex} 55%, #FFFFFF 100%)`;
      let toneBgStyle = `linear-gradient(to right, #000000 0%, ${bgHex} 50%, #FFFFFF 100%)`;
      toneStyle.setProperty("background", toneBgStyle, "important");
    } else {
      console.warn("[PaletteItemCard] toneSliderTrack.value is null");
    }
  }

  /**
   * COMPONENT EVENT HANDLERS
   */

  /**
   * Called by Vuetify's `v-expand-transition` before the expansion animation starts.
   *
   * Sets the `isExpandedClass` to true which switches the card's rounded corners.
   */
  function expandTransitionBeforeEnterHandler() {
    // console.log("PaletteItemCard ::: expandTransitionBeforeEnterHandler");
    isExpandedClass.value = true;
  }

  /**
   * Called by Vuetify's `v-expand-transition` after the collapse animation ends.
   *
   * Resets the `isExpandedClass` to false which switches the card's rounded corners.
   *
   * @param {Object} evt - Event object from the `v-expand-transition` directive.
   */
  function expandTransitionAfterLeaveHandler(evt) {
    // console.log("PaletteItemCard ::: expandTransitionAfterLeaveHandler");
    // console.log(" - event: ", evt);
    isExpandedClass.value = false;
  }

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
    // console.log("PaletteItemCard ::: colorIconClickHandler");
    // console.log(" - palette name: ", props.palette.name);
    // console.log(" - isExpanded:", isExpanded.value);
    // Check if we're currently expanded (open) - if so, close by setting expandedIndex to -1.
    // If not, open by setting expandedIndex to the paletteIndex
    // and call setTempColor() to save the current source color.
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
   * PALETTE MODAL EVENT HANDLERS
   */

  /**
   * Handles the click event on the palette hex input field's "append" button.
   * This opens the color modal dialog and populates the input field with the current color.
   *
   * The current color is saved to the temp color before opening the modal, so it can be restored
   * if the user cancels the modal dialog.
   */
  function hexFieldAppendClickHandler() {
    console.log("PaletteItemCard ::: hexFieldAppendClickHandler");
    if (disableModal.value) {
      return;
    }
    // Save the current palette color before opening the modal.
    setTempColor();
    // Apply the palette color to the input hex,
    // which will show the color updates from the modal in the (subtitle) input field.
    inputHex.value = paletteRef.value.hex;
    paletteModalOpen.value = true;
  }

  /**
   * Handles the change event from the color modal dialog.
   *
   * Sets the modal's selected color as the palette color (which can be undone when the user cancels)
   * and updates the hue, chroma and tone sliders and gradient backgrounds.
   * @param {string} newHex - The new hex color code from the color modal dialog.
   */
  function paletteModalChangeHandler(newHex) {
    console.log("PaletteItemCard ::: paletteModalChangeHandler");
    // console.log(" - newHex: ", newHex);
    // console.log(" - inputHex: ", inputHex.value);

    isDirty.value = true;

    props.palette.hex = newHex;
    setSliderValues();
    updateSliderBackgrounds();
  }

  // function swatchPresetChangeHandler(value) {
  //   console.log("PaletteItemCard ::: swatchPresetChangeHandler");
  //   console.log(" - value: ", value);
  //   console.log(" - swatchPreset value: ", swatchPreset.value);
  // }

  function paletteModalUpdateHandler() {
    // console.log("PaletteItemCard ::: paletteModalUpdateHandler");
    // Normally everything should already be set, because of the modal's `paletteModalChangeHandler`
    // So just clean up what needs cleaning up.
    inputHex.value = "";
    paletteModalOpen.value = false;
  }

  function paletteModalCancelHandler() {
    console.log("PaletteItemCard ::: paletteModalCancelHandler");
    inputHex.value = "";

    // TODO: Fix isDirty.value being set to false when the user cancels the modal,
    // as the palette may already have been dirty before.
    // A solution could be to disable the modal dialog while the palette is dirty.
    isDirty.value = false;

    // Restore the original palette color, before making any UI changes.
    props.palette.hex = tempHex.value;
    setSliderValues();
    updateSliderBackgrounds();
    paletteModalOpen.value = false;
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
    // console.log("UtilitiesView ::: randomTooltipUpdateHandler");
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
    // console.log("PaletteItemCard ::: hueSliderUpdateHandler");
    // console.log(" - slider hue: ", hue);

    isDirty.value = true;

    let h = Math.round(Number(hue));
    let c = Math.max(1, Number(colorChroma.value));
    let t = Math.max(1, Math.min(99.0, Number(colorTone.value)));

    // Create a tonal palette from the new hue value and current chroma
    let tp = TonalPalette.fromHueAndChroma(h, c);

    // Get the argb color from the tonal palette at the current tone
    // This will adjust the chroma if it's too high for the current tone.
    let argb = tp.tone(t);
    let hex = hexFromArgb(argb);
    props.palette.hex = hex;
    // Set the new hct color as the current one.
    currentHct.value = Hct.fromInt(argb);
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
    // console.log("PaletteItemCard ::: chromaSliderUpdateHandler");
    // console.log(" - chroma: ", chroma);

    isDirty.value = true;

    let h = Math.round(Number(colorHue.value));
    let c = Math.max(1, Number(colorChroma.value));
    let t = Math.max(1, Math.min(99.0, Number(colorTone.value)));

    // Create a tonal palette from the new hue value and current chroma
    let tp = TonalPalette.fromHueAndChroma(h, c);

    // Get the argb color from the tonal palette at the current tone.
    // This will adjust the chroma if it's too high for the current tone.
    let argb = tp.tone(t);
    // console.log(" - tp, tone:", t, " - argb: ", argb);
    let hex = hexFromArgb(argb);
    props.palette.hex = hex;
    // Set the new hct color as the current one.
    currentHct.value = Hct.fromInt(argb);
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

    isDirty.value = true;

    let h = colorHue.value;
    let c = Math.max(1, Number(colorChroma.value));
    let t = Math.max(1, Math.min(99.0, Number(colorTone.value)));

    // Create a tonal palette from the new hue value and current chroma
    let tp = TonalPalette.fromHueAndChroma(h, c);

    // Get the argb color from the tonal palette at the current tone.
    // This will adjust the chroma if it's too high for the current tone.
    let argb = tp.tone(t);
    let hex = hexFromArgb(argb);
    props.palette.hex = hex;

    // Set the new hct color as the current one.
    currentHct.value = Hct.fromInt(argb);
  }

  function blendUpdateHandler() {
    console.log("PaletteItemCard ::: blendUpdateHandler");
    console.log(" - blend: ", props.palette.blend);
    console.log(" - palette isDirty:", props.palette.isDirty);

    emit("update:blend", props.palette.name, props.palette.blend);
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
    console.log(" - tempColor: ", tempHex.value);
    isDirty.value = false;
    props.palette.hex = tempHex.value;
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
    isDirty.value = false;

    emit("click:apply", props.paletteIndex, props.palette);
  }
</script>
<style scoped lang="scss">
  // v-card border radius
  .rounded-xxl {
    border-radius: 32px !important;
  }

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
      font-size: small !important;
      text-transform: uppercase !important;
      margin: 0 !important;
      padding: 0 !important;
      height: 20px !important;
      min-height: 20px !important;
      max-height: 20px !important;
      line-height: 1;
    }
    :deep(input.v-field__input)::placeholder {
      font-size: small !important;
      opacity: 0.65 !important;
      text-transform: uppercase !important;
    }
    :deep(.v-input__append) {
      height: 20px !important;
      min-height: 20px !important;
      max-height: 20px !important;
      padding-top: 2px !important;
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

      // background: linear-gradient(to right, #e7007d, #b26300, #6d7f00, #008673, #007fb4, #8851ff, #e7007d) !important;
      background: linear-gradient(to right, #f50181, #bc6a00, #728700, #008f7c, #0087c1, #925cff, #f50181) !important;
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

  /**
   * Checkbox styles
   */
  .v-checkbox,
  .v-checkbox-btn {
    :deep(label.v-label) {
      font-size: 0.75rem !important;
      text-transform: uppercase !important;
      word-break: normal !important;
    }
  }
</style>
