<template>
  <v-app>
    <!-- APP TOOLBAR -->
    <v-app-bar class="flex-grow-0" color="primary">
      <v-app-bar-nav-icon @click="menuOpen = !menuOpen" />

      <v-toolbar-title class="text-uppercase pl-2">
        <span>Vuetify Theme Builder</span>
      </v-toolbar-title>

      <!-- ADD ACCOUNT (STATIC) BUTTON -->
      <template v-slot:image>
        <!-- color="blue-darken-2" -->
        <v-fab
          color="primary-darken-2"
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

    <v-navigation-drawer v-model="menuOpen" width="300" mobile-breakpoint="md">
      <v-list density="compact">
        <v-list-subheader>Menu</v-list-subheader>

        <v-divider></v-divider>
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

  // https://hostman.com/tutorials/looping-through-objects-s-keys-and-values-in-javascript/
  let colorMap = new Map(Object.entries(colors));
  console.log(" - colorMap", colorMap);

  let orangeMap = new Map(Object.entries(deepOrange));
  console.log(" - colorMap", orangeMap);
});

function menuItemClickHandler(item) {
  console.log("APP :::menuItemClickHandler");
  console.log(" - item", item);
}
</script>

<style></style>
