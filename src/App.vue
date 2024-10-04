<template>
  <!-- MODAL PALETTE -->
  <PaletteDialog v-model="modalPaletteOpen" :selected-theme="currentTheme" @cancel="paletteCancelHandler" @update="paletteUpdateHandler" />
  <v-app>
    <!-- APP TOOLBAR -->
    <v-app-bar class="flex-grow-0" color="primary">
      <!-- <template v-if="$vuetify.display.mdAndDown"> -->
      <v-app-bar-nav-icon @click="menuOpen = !menuOpen" />
      <!-- </template> -->

      <v-toolbar-title class="text-uppercase pl-2">
        <span>Vuetify Theme Builder</span>
      </v-toolbar-title>

      <!-- ADD ACCOUNT (STATIC) BUTTON -->
      <template v-slot:image>
        <!-- location="bottom right" -->
        <v-fab color="secondary" class="me-4" icon="mdi-palette" offset absolute @click="paletteClickHandler()"> </v-fab>
      </template>
    </v-app-bar>
    <!-- <AppFooter /> -->

    <v-navigation-drawer v-model="menuOpen" width="300" mobile-breakpoint="md" permanent>
      <v-list density="compact" nav>
        <v-list-subheader class="text-uppercase font-weight-black"> Navigate </v-list-subheader>

        <v-divider></v-divider>

        <v-list-item title="Home" value="home" to="/"></v-list-item>
        <v-list-item title="About" value="about" to="/about"></v-list-item>

        <v-list-subheader class="text-uppercase font-weight-black"> Theme Builder </v-list-subheader>
        <v-divider></v-divider>

        <v-list-item title="Colors" value="colors-view" to="/builder/colors"></v-list-item>
        <v-list-item title="Variables" value="variables-view" to="/builder/variables"></v-list-item>

        <v-divider></v-divider>

        <v-row>
          <v-col class="d-flex flex-column">
            <v-btn :color="selectedColor" class="mt-2" @click="switchThemeClickHandler()"> Selected Color </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="d-flex flex-column">
            <v-color-picker
              width="100%"
              dot-size="16"
              mode="hex"
              :modes="cpModes"
              :swatches="flatColorsHex"
              :model-value="selectedColor"
              hide-sliders
              show-swatches
              swatches-max-height="300"
              rounded="md"
              class="my-0 bg-transparent"
              @update:model-value="colorPickerUpdateHandler"
            ></v-color-picker>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <!-- <v-row>
          <v-col class="d-flex flex-column">
            <v-btn class="mt-2 my-1" color="error">Error</v-btn>
            <v-btn class="my-1" color="info">Info</v-btn>
            <v-btn class="my-1" color="success">Success</v-btn>
            <v-btn class="my-1" color="warning">Warning</v-btn>
          </v-col>
        </v-row> -->
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
  import { ref, onMounted } from "vue";

  import colors from "vuetify/lib/util/colors";
  // import * as colorUtils from "./utils/colorUtils.mjs";
  import { useTheme } from "vuetify";
  import { useAppStore } from "@/stores/app";
  import PaletteDialog from "./components/modal/PaletteDialog.vue";

  // const appContext = getCurrentInstance();

  const modalPaletteOpen = ref(false);

  /**
   * interface ThemeInstance {
   *   readonly isDisabled: boolean;
   *   readonly themes: Ref<Record<string, InternalThemeDefinition>>;
   *   readonly name: Readonly<Ref<string>>;
   *   readonly current: DeepReadonly<Ref<InternalThemeDefinition>>;
   *   readonly computedThemes: DeepReadonly<Ref<Record<string, InternalThemeDefinition>>>;
   *   readonly themeClasses: Readonly<Ref<string | undefined>>;
   *   readonly styles: Readonly<Ref<string>>;
   *   readonly global: {
   *       readonly name: Ref<string>;
   *       readonly current: DeepReadonly<Ref<InternalThemeDefinition>>;
   *   };
   * }
   */
  const theme = useTheme();

  const computedThemes = theme.computedThemes;
  // const themeClasses = theme.themeClasses;
  // const themeStyles = theme.styles;

  // console.log(" - computed themes: ", computedThemes);
  // console.log(" - theme classes: ", themeClasses);
  // console.log(" - theme styles: ", themeStyles);

  const builderTheme = computedThemes.value["builder-dark"];
  console.log(" - builder theme: ", builderTheme);

  const currentTheme = ref("dark");

  const appStore = useAppStore();

  // const bdDarklyHex = ref(appStore.bdDarklyHex);
  const bdDarklyHex = appStore.bsDarklyHex;
  const materialRedHex = appStore.materialRedHex;
  const materialBaseHex = appStore.materialBaseHex;
  const colorsHex = appStore.colorsHex;
  const flatColorsHex = appStore.flatColorsHex;
  const flatBaseColors = appStore.flatBaseColors;

  const greyscaleColors = appStore.greyscaleColors;
  const greyscaleColorsHex = appStore.greyscaleColorsHex;

  // const bdDarklyHex = reactive(appStore.bsDarklyHex);

  /**
   * Defines the open/close state of the menu drawer.
   */
  const menuOpen = ref(true);

  const deepOrange = colors.deepOrange;
  // const baseOrange = colorUtils.parseColor(deepOrange.base);
  // const baseOrangeHex = colorUtils.parseHex(deepOrange.base);

  // HEX: #2196f3 RGB: (233,30,99)
  const primaryBase = { r: 33, g: 150, b: 243, a: 1.0 };

  // HEX: #277cc1 RGB: (39 124 193)
  const primaryDarken = { r: 39, g: 124, b: 193, a: 1.0 };

  // HEX: #007cd6 RGB: (0,124,214)
  const variantDarken = { r: 0, g: 124, b: 214, a: 1.0 };

  // const vBlue = appStore.colors.blue.base;
  // const bsBlue = appStore.bsDarkly["bs-blue"];
  // const bsPrimary = appStore.bsDarkly["bs-primary"];
  // const bsSecondary = appStore.bsDarkly["bs-secondary"];

  const cpModes = ["hex"];
  // const selectedColor = ref(appStore.colors.deepOrange.base);
  const selectedColor = ref(deepOrange.base);

  /**
   * Called when the app is mounted.
   */
  onMounted(() => {
    console.log("APP ::: onMounted");
    console.log(" - deepOrange: ", deepOrange);
    console.log(" - deepOrange base:", deepOrange.base);
    // console.log(" - parseColor - deepOrange.base: ", baseOrange);
    // console.log(" - parseHex - deepOrange.base: ", baseOrangeHex);

    // console.log(" - deepOrange darken 1:", colorUtils.darken(baseOrange, 1));
    // console.log(" - deepOrange darken 2:", colorUtils.darken(baseOrange, 2));
    // console.log(" - deepOrange darken 3:", colorUtils.darken(baseOrange, 3));
    // console.log(" - deepOrange darken 4:", colorUtils.darken(baseOrange, 4));

    // let rgb0 = colorUtils.darken(baseOrange, 0);
    // let hex0 = colorUtils.RGBtoHex(rgb0);
    // console.log(" - deepOrange base 0 - HEX", hex0);

    // let rgb1 = colorUtils.darken(baseOrange, 1);
    // let hex1 = colorUtils.RGBtoHex(rgb1);
    // console.log(" - deepOrange darken 1 - HEX", hex1);

    // let pDarken1 = colorUtils.darken(primaryBase, 1);
    // let hexDarken1 = colorUtils.RGBtoHex(pDarken1);
    // console.log(" - primary darken 1 - RGB", pDarken1);
    // console.log(" - primary darken 1 - HEX", hexDarken1);

    // https://hostman.com/tutorials/looping-through-objects-s-keys-and-values-in-javascript/
    let colorMap = new Map(Object.entries(colors));
    // console.log(" - colorMap", colorMap);

    let orangeMap = new Map(Object.entries(deepOrange));
    // console.log(" - colorMap", orangeMap);
    // appStore.exampleAction();

    // console.log(" - vBlue: ", vBlue);
    // console.log(" - bsBlue: ", bsBlue);

    console.log(" - bdDarklyHex: ", bdDarklyHex);
    console.log(" - materialRedHex: ", materialRedHex);
    console.log(" - materialBaseHex: ", materialBaseHex);
    // console.log(" - materialColors: ", appStore.materialColors);
    console.log(" - colorsHex: ", colorsHex);
    console.log(" - flatColorsHex: ", flatColorsHex);
    console.log(" - flatBaseColors: ", flatBaseColors);

    console.log(" - vuetify theme name: ", theme.name.value);
    console.log(" - vuetify current theme: ", theme.current.value);
    console.log(" - vuetify global theme name: ", theme.global.name.value);

    // console.log(" - selectedColor: ", selectedColor.value);
  });

  /**
   *
   * import { MutationType } from 'pinia'
   *
   * mutation.type:  'direct' | 'patch object' | 'patch function'
   *
   * mutation.storeId: // same as cartStore.$id
   *
   * only available with mutation.type === 'patch object'
   * mutation.payload: patch object passed to cartStore.$patch()
   */
  // appStore.$subscribe((mutation, state) => {
  //   console.log("APP ::: $subscribe");
  //   console.log(" - mutation.type: ", mutation.type);
  //   console.log(" - mutation.storeId: ", mutation.storeId);
  //   console.log(" - mutation.payload: ", mutation.payload);
  //   // TODO: move localStorage to a better place...
  //   // persist the whole state to the local storage whenever it changes
  //   // localStorage.setItem("appState", JSON.stringify(state));
  // });

  /**
   * Handles menu item clicks.
   * @param {string} item - The title of the menu item clicked.
   */
  function menuItemClickHandler(item) {
    console.log("APP ::: menuItemClickHandler");
    console.log(" - item", item);
  }

  function paletteClickHandler() {
    console.log("APP ::: paletteClickHandler");
    console.log(" - modalPaletteOpen before: ", modalPaletteOpen.value);
    modalPaletteOpen.value = !modalPaletteOpen.value;
    console.log(" - modalPaletteOpen after: ", modalPaletteOpen.value);
  }

  /**
   * Changes the base color of the theme to a blue color.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#hex_notation
   */
  // function blueClickHandler() {
  //   console.log("APP :::blueClickHandler");
  //   appStore.colors.blue.base = "#375a7f";
  //   console.log(" - appStore.colors.blue.base", appStore.colors.blue.base);
  // }

  /**
   * Handles color changes from the color picker.
   * @param color - The color value chosen by the user.
   */
  function colorPickerUpdateHandler(color) {
    console.log("APP :::colorPickerUpdateHandler");
    console.log(" - color: ", color);
    if (selectedColor.value !== color) {
      selectedColor.value = color;
      console.log(" - selectedColor: ", selectedColor.value);
    } else {
      console.log(" - selectedColor was NOT updated");
    }
  }

  /**
   * Closes the PaletteDialog modal.
   */
  function paletteCancelHandler() {
    console.log("APP ::: paletteCancelHandler");
    modalPaletteOpen.value = false;
  }

  /**
   * Handles the update of the selected theme from the PaletteDialog.
   * Sets the App's current theme to the selected theme and closes the PaletteDialog modal.
   *
   * @todo Figure out wether to use this or dismiss it entirely.
   *
   * @param {string} theme - The selected theme name.
   */
  function paletteUpdateHandler(theme) {
    console.log("APP ::: paletteUpdateHandler");
    console.log(" - current theme before: ", currentTheme.value);
    console.log(" - selected theme: ", theme);
    currentTheme.value = theme;
    console.log(" - current theme after: ", currentTheme.value);
    modalPaletteOpen.value = false;
  }

  /**
   * Toggles the global theme between light and dark modes.
   * @todo Add automatic saving of theme preference.
   */
  function switchThemeClickHandler() {
    console.log("APP :::switchThemeClickHandler");
    let newTheme = theme.global.name.value === "light" ? "dark" : "light";
    console.log(" - newTheme: ", newTheme);
    theme.global.name.value = newTheme;
  }
</script>

<style lang="scss">
  // .color-primary {
  //   color: $color-primary;
  // }
  // .color-secondary {
  //   color: $color-secondary;
  // }
  // .color-tertiary {
  //   color: $color-tertiary;
  // }

  // Change color picker swatches padding and justify-content.
  .v-color-picker-swatches {
    > div {
      display: flex;
      flex-wrap: wrap;
      // justify-content: space-between !important;
      // padding: 0px !important;
      // WARNING: swatches border should be disabled
      // border: 1px solid #000;
    }
  }

  // Change color picker swatches direction to row
  // and make rows wrap.
  // Decrease margin-bottom.
  .v-color-picker-swatches__swatch {
    display: flex;
    flex-direction: row !important;
    flex-wrap: wrap !important;
    // vuetify default margin-bottom is 10px
    // margin-bottom: 20px !important;
    margin-bottom: 2px !important;
  }

  // Change color picker swatches width and height
  // and reduce margins.
  .v-color-picker-swatches__color {
    width: 20px !important;
    height: 20px !important;
    max-height: 20px !important;
    margin: 2px !important;
  }
</style>
