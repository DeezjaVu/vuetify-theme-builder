import ThemePresetNames from "@/utils/theme/theme-preset-names";

import vuetifyTheme from "@/utils/theme/vuetify-theme";
import bootstrapTheme from "@/utils/theme/bootstrap-theme";
import tailwindTheme from "@/utils/theme/tailwind-theme";
import flatTheme from "@/utils/theme/flat-theme";
import metroTheme from "@/utils/theme/metro-theme";
import salesforceTheme from "@/utils/theme/salesforce-theme";
import BootswatchTheme from "@/utils/theme/bootswatch-theme";
// import bootswatchUnited from "@/utils/theme/bootswatch/bootswatch-united";
// import bootswatchPulse from "@/utils/theme/bootswatch/bootswatch-pulse";
// import bootswatchSimplex from "@/utils/theme/bootswatch/bootswatch-simplex";
// import bootswatchSuperhero from "@/utils/theme/bootswatch/bootswatch-superhero";

export default class ThemePresets {
  /**
   * Returns an array of theme presets.
   *
   * Each preset contains a `title` and a `value` property corresponding to the
   * name and identifier of the theme preset, respectively.
   *
   * @returns {Array<{title: string, value: string}>} An array of theme presets.
   */
  static get presets() {
    return ThemePresets.themes.map(({ title, value }) => ({ title, value }));
  }

  /**
   * Returns the theme for the given preset name.
   *
   * The theme is an object containing the following properties:
   * - light: An object containing the light theme colors.
   * - dark: An object containing the dark theme colors.
   *
   * @param {string} presetName - The name of the preset to get the theme for.
   * @returns {object} The theme for the given preset name.
   */
  static getThemeFor(presetName) {
    console.log("ThemePresets ::: getThemeFor");
    console.log(" - presetName: ", presetName);
    const theme = ThemePresets.themes.find((item) => item.value === presetName)?.theme;
    return theme ?? vuetifyColors.theme;
  }

  /**
   * Checks if the given preset name is a valid theme preset.
   *
   * @param {string} presetName - The name of the preset to check.
   * @returns {boolean} True if the preset name is valid, false otherwise.
   */
  static isValid(presetName) {
    return ThemePresets.themes.some((item) => item.value === presetName);
  }
}

ThemePresets.themes = Object.freeze([
  { title: "Vuetify (default)", value: ThemePresetNames.VUETIFY, theme: vuetifyTheme },
  { title: "Bootstrap", value: ThemePresetNames.BOOTSTRAP, theme: bootstrapTheme },
  { title: "Bootswatch Darkly", value: ThemePresetNames.BOOTSWATCH_DARKLY, theme: BootswatchTheme.darkly },
  { title: "Bootswatch Flatly", value: ThemePresetNames.BOOTSWATCH_FLATLY, theme: BootswatchTheme.flatly },
  { title: "Bootswatch Pulse", value: ThemePresetNames.BOOTSWATCH_PULSE, theme: BootswatchTheme.pulse },
  { title: "Bootswatch Simplex", value: ThemePresetNames.BOOTSWATCH_SIMPLEX, theme: BootswatchTheme.simplex },
  { title: "Bootswatch Superhero", value: ThemePresetNames.BOOTSWATCH_SUPERHERO, theme: BootswatchTheme.superhero },
  { title: "Bootswatch United", value: ThemePresetNames.BOOTSWATCH_UNITED, theme: BootswatchTheme.united },
  { title: "Tailwind", value: ThemePresetNames.TAILWIND, theme: tailwindTheme },
  { title: "Flat Colors", value: ThemePresetNames.FLAT, theme: flatTheme },
  { title: "Metro UI", value: ThemePresetNames.METRO, theme: metroTheme },
  { title: "Salesforce Lightning Design", value: ThemePresetNames.SALESFORCE, theme: salesforceTheme }
]);
