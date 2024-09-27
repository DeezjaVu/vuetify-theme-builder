<template>
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
        <v-fab
          color="secondary"
          class="me-4"
          location="bottom right"
          icon="mdi-plus"
          offset
          absolute
          @click="menuItemClickHandler('account-create')"
        >
        </v-fab>
      </template>
    </v-app-bar>

    <v-navigation-drawer v-model="menuOpen" width="300" mobile-breakpoint="md" permanent>
      <v-list density="compact" nav>
        <v-list-subheader class="text-uppercase font-weight-black"> Navigate </v-list-subheader>

        <v-divider></v-divider>

        <v-list-item title="Home" value="primary-1" to="/"></v-list-item>
        <v-list-item title="About" value="primary-2" to="/about"></v-list-item>

        <v-list-subheader class="text-uppercase font-weight-black"> Theme Builder </v-list-subheader>
        <v-divider></v-divider>

        <v-list-item title="primary-3" value="primary-3"></v-list-item>
        <v-list-item title="primary-4" value="primary-4"></v-list-item>

        <v-divider></v-divider>

        <v-row>
          <v-col class="d-flex flex-column">
            <!-- 
            <v-btn :color="vBlue" class="my-2" @click="blueClickHandler()"> Vuetify Blue </v-btn>
            <v-btn :color="bsBlue" class="my-2"> Darkly Blue </v-btn>
            <v-btn :color="bsPrimary" class="my-2"> Darkly Primary </v-btn>
            <v-btn :color="bsSecondary" class="my-2"> Darkly Secondary </v-btn> 
            -->
            <!-- 
              <v-btn color="color-primary" class="my-2"> Color Primary </v-btn>
            <v-btn color="color-secondary" class="my-2"> Color Secondary </v-btn>
            <v-btn color="color-tertiary" class="my-2"> Color Tertiary </v-btn>
             -->
            <v-btn :color="selectedColor" class="mt-2"> Selected Color </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="d-flex flex-column">
            <v-color-picker
              width="100%"
              dot-size="16"
              mode="hex"
              :modes="cpModes"
              :swatches="darklyColors"
              :model-value="selectedColor"
              hide-sliders
              show-swatches
              swatches-max-height="320"
              rounded="md"
              class="my-0"
              @update:model-value="colorPickerUpdateHandler"
            ></v-color-picker>
          </v-col>
        </v-row>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
  import { ref, onMounted, reactive } from "vue";

  import colors from "vuetify/lib/util/colors";
  // import * as colorUtils from "./utils/colorUtils.mjs";

  import { MutationType } from "pinia";
  import { useAppStore } from "@/stores/app";

  const appStore = useAppStore();

  // const darklyColors = ref(appStore.darklyColors);
  const darklyColors = ref(appStore.bsDarklyHex);

  // const darklyColors = reactive(appStore.bsDarklyHex);

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

    console.log(" - darklyColors: ", darklyColors);
    // console.log(" - materialColors: ", appStore.materialColors);

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
    console.log("APP :::menuItemClickHandler");
    console.log(" - item", item);
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
</style>
