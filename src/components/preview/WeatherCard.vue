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
            <v-autocomplete v-model="location" :items="locations" label="Location" density="compact" variant="outlined" hide-details>
              <template #prepend-inner>
                <v-icon>mdi-map-marker</v-icon>
              </template>
              <template #append>
                <v-btn icon="mdi-magnify" size="small" variant="tonal"> </v-btn>
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
          <v-list class="bg-transparent" base-color="on-secondary" lines="false">
            <template v-for="(item, index) in forecast" :key="`forecast-${item.day}-${index}`">
              <v-list-item class="bg-secondary" :title="item.title" :subtitle="item.subtitle"></v-list-item>
              <v-spacer v-if="index !== forecast.length - 1" class="my-2"></v-spacer>
            </template>
          </v-list>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col cols="6" v-for="(item, n) in todayDetails" :key="`weather-col-${n}`">
          <v-card color="primary" rounded="lg">
            <!-- <v-card-item class="bg-primary"> -->
            <v-card-item>
              <v-card-title class="text-subtitle-1 font-weight-regular">{{ item.title }}</v-card-title>
              <template #prepend>
                <v-icon>{{ item.icon }}</v-icon>
              </template>
            </v-card-item>
            <v-card-text class="pa-4" height="100">Lorem ipsum dolor sit amet.</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script setup>
  import weather01 from "@/assets/images/weather/blue-sky-with-clouds-462x260.jpg";
  import weather06 from "@/assets/images/weather/yellow-flowers-macro-shot-462x260.jpg";

  import { onMounted, ref, computed } from "vue";

  const props = defineProps({
    themeName: String
  });

  /**
   * COMPUTED PROPERTIES
   */

  const weatherImages = ref({ "hct-light": weather01, "hct-dark": weather06 });

  const weatherImage = computed(() => weatherImages.value[props.themeName]);

  const weatherGradient = computed(
    () =>
      props.themeName === "hct-dark"
        ? "to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.66)"
        : "to bottom, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.70)"
    // : "to bottom, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.70)"
  );

  const locations = ref([
    { title: "New York", value: "New York" },
    { title: "Brussels", value: "Brussels" },
    { title: "London", value: "London" },
    { title: "Paris", value: "Paris" },
    { title: "Tokyo", value: "Tokyo" }
  ]);
  const location = ref("Paris");

  const forecast = ref([
    { title: "Today", subtitle: "Sunny", icon: "", temp: "16°/12°" },
    { title: "Friday", subtitle: "Clear Sky", icon: "", temp: "16°/12°" },
    { title: "Saturday", subtitle: "Mostly Cloudy", icon: "", temp: "16°/12°" },
    { title: "Sunday", subtitle: "Mild Rain", icon: "", temp: "16°/12°" },
    { title: "Monday", subtitle: "Cloudy", icon: "", temp: "16°/12°" }
  ]);

  const todayDetails = ref([
    { title: "Wind", subtitle: "15km/h", icon: "mdi-weather-windy" },
    { title: "Humidity", subtitle: "75%", icon: "mdi-water-percent" },
    { title: "Pressure", subtitle: "1013hPa", icon: "mdi-gauge" },
    { title: "UV Index", subtitle: "10km", icon: "mdi-sun-thermometer" }
  ]);

  /**
   * LIFECYCLE HOOKS
   */

  onMounted(() => {
    console.log("WeatherCard ::: onMounted");
  });
</script>
