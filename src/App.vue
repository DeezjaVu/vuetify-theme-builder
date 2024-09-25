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

    <v-navigation-drawer
      v-model="menuOpen"
      width="300"
      mobile-breakpoint="md"
      permanent
    >
      <v-list density="compact" nav>
        <v-list-subheader>Menu</v-list-subheader>

        <v-divider></v-divider>

        <v-list-item title="Home" value="primary-1" to="/"></v-list-item>
        <v-list-item title="About" value="primary-2" to="/about"></v-list-item>
        <v-list-item title="primary-3" value="primary-3"></v-list-item>
        <v-list-item title="primary-4" value="primary-4"></v-list-item>
        <v-row>
          <v-col class="d-flex flex-column">
            <v-btn color="primary" class="my-2">primary</v-btn>
            <v-btn color="primary-variant" class="my-2">primary-variant</v-btn>
            <v-btn color="primary-darken-1" class="my-2"
              >primary-darken-1</v-btn
            >
            <v-btn color="primary-variant-darken-1" class="my-2"
              >primary-variant-darken-1</v-btn
            >
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
import { ref, onMounted } from "vue";

import colors from "vuetify/lib/util/colors";
import * as colorUtils from "./utils/colorUtils.mjs";

/**
 * Defines the open/close state of the menu drawer.
 */
const menuOpen = ref(true);

const deepOrange = colors.deepOrange;
const baseOrange = colorUtils.parseColor(deepOrange.base);
// const baseOrangeHex = colorUtils.parseHex(deepOrange.base);

// HEX: #2196f3 RGB: (233,30,99)
const primaryBase = { r: 33, g: 150, b: 243, a: 1.0 };

// HEX: #277cc1 RGB: (39 124 193)
const primaryDarken = { r: 39, g: 124, b: 193, a: 1.0 };

// HEX: #007cd6 RGB: (0,124,214)
const variantDarken = { r: 0, g: 124, b: 214, a: 1.0 };

onMounted(() => {
  console.log("APP ::: onMounted");
  console.log(" - deepOrange: ", deepOrange);
  console.log(" - deepOrange base:", deepOrange.base);
  console.log(" - parseColor - deepOrange.base: ", baseOrange);
  // console.log(" - parseHex - deepOrange.base: ", baseOrangeHex);

  console.log(" - deepOrange darken 1:", colorUtils.darken(baseOrange, 1));
  console.log(" - deepOrange darken 2:", colorUtils.darken(baseOrange, 2));
  console.log(" - deepOrange darken 3:", colorUtils.darken(baseOrange, 3));
  console.log(" - deepOrange darken 4:", colorUtils.darken(baseOrange, 4));

  let rgb0 = colorUtils.darken(baseOrange, 0);
  let hex0 = colorUtils.RGBtoHex(rgb0);
  console.log(" - deepOrange base 0 - HEX", hex0);

  let rgb1 = colorUtils.darken(baseOrange, 1);
  let hex1 = colorUtils.RGBtoHex(rgb1);
  console.log(" - deepOrange darken 1 - HEX", hex1);

  let pDarken1 = colorUtils.darken(primaryBase, 1);
  let hexDarken1 = colorUtils.RGBtoHex(pDarken1);
  console.log(" - primary darken 1 - RGB", pDarken1);
  console.log(" - primary darken 1 - HEX", hexDarken1);

  // https://hostman.com/tutorials/looping-through-objects-s-keys-and-values-in-javascript/
  let colorMap = new Map(Object.entries(colors));
  // console.log(" - colorMap", colorMap);

  let orangeMap = new Map(Object.entries(deepOrange));
  // console.log(" - colorMap", orangeMap);
});

function menuItemClickHandler(item) {
  console.log("APP :::menuItemClickHandler");
  console.log(" - item", item);
}
</script>

<style></style>
