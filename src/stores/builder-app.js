// Utilities
import { defineStore } from "pinia";
import { computed, ref } from "vue";

// Vuetify material colors.
import colors from "vuetify/lib/util/colors";
import flatColors from "@/utils/color/flat-colors";
import greyscale from "@/utils/color/greyscale";

// const materialColorNames = [
//   "red",
//   "pink",
//   "purple",
//   "deep-purple",
//   "indigo",
//   "blue",
//   "light-blue",
//   "cyan",
//   "teal",
//   "green",
//   "light-green",
//   "lime",
//   "yellow",
//   "amber",
//   "orange",
//   "deep-orange",
//   "brown",
//   "grey",
//   "blue-grey"
// ];

// const materialColors = colors;

/**
 * App Store
 * Pinia: https://pinia.esm.dev/
 */
export const useBuilderAppStore = defineStore(
  "builderAppStore",
  () => {
    //[-]============================
    //[-] STATE (PROPERTIES)
    //[-]============================

    const appState = ref(true);

    //[-]============================
    //[-] GETTERS
    //[-]============================

    const appStateIsTrue = computed(() => {
      console.log("AppStore ::: appStateIsTrue");
      return appState.value;
    });

    //[-]============================
    //[-] ACTIONS
    //[-]============================

    /**
     * Example of an action.
     * This is a placeholder for a real action.
     */
    function exampleAction() {
      console.log("AppStore ::: exampleAction");
      console.log(" - store state: ", `${JSON.stringify(this.$state)}`);
    }

    return {
      appState,
      appStateIsTrue,
      exampleAction
    };
  },
  { persist: true }
);
