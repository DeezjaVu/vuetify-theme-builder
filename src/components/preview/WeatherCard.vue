<template>
  <v-card color="background" style="cursor: default" height="800" rounded="lg" hover>
    <!-- 
    Dark / light require different image and gradient overlay.
    Maybe apply gradient based on background color?
    -->
    <v-img :src="weatherImage" :gradient="weatherGradient" height="200" cover>
      <v-card-text class="font-weight-light mx-4">
        <v-row>
          <v-col>
            <!-- [*] Location Search -->
            <v-autocomplete v-model="location" :items="locations" label="Location" variant="outlined" density="compact" hide-details>
              <template #prepend-inner>
                <v-icon>mdi-map-marker</v-icon>
              </template>
              <template #append>
                <v-icon>mdi-magnify</v-icon>
              </template>
            </v-autocomplete>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col>
            <span style="font-size: 1rem">Now </span>
            <div class="d-flex flex-row align-center" style="line-height: 1.1">
              <span class="mr-2" style="font-size: 4rem">15° </span>
              <v-img width="64" height="64" src="@/assets/images/day-forecast-hot.svg"></v-img>
            </div>
            <span class="text-subtitle-2 font-weight-light mx-2">High: 17° &mdash; Low: 10°</span>
          </v-col>
          <v-spacer></v-spacer>
          <v-col>
            <span class="text-subtitle-2 font-weight-light">Sunny</span>
          </v-col>
        </v-row>
      </v-card-text>
    </v-img>
    <v-card-text class="font-weight-light mx-4">
      <v-row>
        <v-col>
          <!-- [*] Alert Quote -->
          <v-alert color="tertiary" icon="mdi-weather-sunny" text="During the winter season, the sun is shining brightly." rounded="shaped">
          </v-alert>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <!-- [*] 5-day forecast list -->
          <v-card-title class="bg-primary text-subtitle-1 font-weight-regular rounded-t-xl">5-day forecast</v-card-title>
          <v-list class="bg-background" base-color="on-secondary" lines="false">
            <template v-for="(item, index) in forecast" :key="`forecast-${item.day}-${index}`">
              <v-list-item class="bg-secondary" :title="item.title" :subtitle="item.subtitle"></v-list-item>
              <v-spacer v-if="index !== forecast.length - 1" class="my-2"></v-spacer>
            </template>
          </v-list>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col cols="6" v-for="n in 4" :key="`weather-col-${n}`">
          <v-sheet class="pa-4 rounded" color="primary" height="100">Lorem ipsum dolor sit amet.</v-sheet>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script setup>
  import weather01 from "@/assets/images/weather/blue-sky-with-clouds-462x260.jpg";
  import weather02 from "@/assets/images/weather/road-green-brown-fields-462x260.jpg";
  import weather03 from "@/assets/images/weather/weather-bg-462x260.jpg";
  import weather04 from "@/assets/images/weather/yellow-blooming-flowering-plant-462x260.jpg";
  import weather05 from "@/assets/images/weather/yellow-cloth-lying-fields-462x260.jpg";
  import weather06 from "@/assets/images/weather/yellow-flowers-macro-shot-462x260.jpg";

  import { onMounted, ref, computed } from "vue";

  const props = defineProps({
    themeName: String
  });

  /**
   * COMPUTED PROPERTIES
   */

  const weatherImage = computed(() => (props.themeName === "hct-dark" ? weatherImages.value[5].url : weatherImages.value[0].url));

  const weatherGradient = computed(
    () =>
      props.themeName === "hct-dark"
        ? "to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.66)"
        : "to bottom, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.70)"
    // : "to bottom, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.70)"
  );

  const location = ref("New York");

  const locations = ref([
    { title: "New York", value: "New York" },
    { title: "Brussels", value: "Brussels" },
    { title: "London", value: "London" },
    { title: "Paris", value: "Paris" },
    { title: "Tokyo", value: "Tokyo" }
  ]);

  const weatherImages = ref([
    { title: "weatherblue-sky-with-clouds", url: weather01 },
    { title: "road-green-brown-fields", url: weather02 },
    { title: "weather-bg", url: weather03 },
    { title: "yellow-blooming-flowering-plant", url: weather04 },
    { title: "yellow-cloth-lying-fields", url: weather05 },
    { title: "yellow-flowers-macro-shot", url: weather06 }
  ]);

  const forecast = ref([
    { title: "Today", subtitle: "Sunny", icon: "", temp: "16°/12°" },
    { title: "Friday", subtitle: "Clear Sky", icon: "", temp: "16°/12°" },
    { title: "Saturday", subtitle: "Mostly Cloudy", icon: "", temp: "16°/12°" },
    { title: "Sunday", subtitle: "Mild Rain", icon: "", temp: "16°/12°" },
    { title: "Monday", subtitle: "Cloudy", icon: "", temp: "16°/12°" }
  ]);

  /**
   * LIFECYCLE HOOKS
   */

  onMounted(() => {
    console.log("WeatherCard ::: onMounted");
  });
</script>
