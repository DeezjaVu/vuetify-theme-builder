<template>
  <v-container class="fill-height px-12 mx-auto">
    <v-window class="v-container pa-0 mt-2 mb-6 mx-auto" show-arrows>
      <v-window-item v-for="(i, idx1) in Math.ceil(picsum.length / rowNumItems)" :key="`row-${idx1}`">
        <v-row class="align-sm-stretch">
          <!-- IMAGE CARDS -->
          <v-col cols="3" v-for="(k, idx2) in rowNumItems" :key="`card-${idx1}-${idx2}`">
            <v-card
              v-if="idx1 * rowNumItems + idx2 < picsum.length"
              :id="`img-card-${idx1 * rowNumItems + idx2}`"
              color="white"
              :image="picsum[idx1 * rowNumItems + idx2]"
              density="compact"
              variant="outlined"
            >
              <template #image>
                <!-- img source is automatically applied from the v-card image prop -->
                <v-img
                  class="card-img-gradient"
                  gradient="to top, rgb(255 255 255 / 10%), rgb(0 0 0 / 33%)"
                  crossorigin="anonymous"
                ></v-img>
              </template>
              <!--  style="text-shadow: black 0px 0px 6px; background: rgb(255 255 255 / 12%)" -->
              <v-card-item class="card-item-img">
                <v-card-title class="d-sm-none d-lg-flex">Color from image</v-card-title>
                <v-card-subtitle>Image {{ idx1 * rowNumItems + k }}</v-card-subtitle>
              </v-card-item>
              <v-card-actions>
                <v-icon icon="mdi-check" v-if="idx1 * rowNumItems + idx2 === selectedImageIdx"></v-icon>
                <v-spacer></v-spacer>
                <v-btn @click="imageButtonClickHandler(idx1, idx2)">Get Color</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-window-item>
    </v-window>
    <v-row>
      <v-col cols="3">
        <v-expansion-panels>
          <template v-for="(item, index) in paletteColors" :key="item.name">
            <v-expansion-panel>
              <v-expansion-panel-title class="pa-0 pr-6">
                <template v-slot:default="{ expanded }">
                  <v-row no-gutters>
                    <v-col>
                      <v-card-item class="px-3">
                        <template #prepend>
                          <v-btn class="mr-4" :color="item.hex" icon @click="paletteButtonClickHandler(item)"></v-btn>
                        </template>
                        <v-card-title class="text-body-1 font-weight-light d-sm-none d-md-none d-lg-flex">
                          {{ item.title }}
                        </v-card-title>
                        <v-card-subtitle class="text-subtitle-2 font-mono font-weight-light d-sm-none d-md-none d-lg-flex">
                          {{ item.hex }}
                        </v-card-subtitle>
                      </v-card-item>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text class="no-bottom">
                <v-row no-gutters>
                  <v-col>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque
                    cupiditate minima
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-divider></v-divider>
                  </v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn v-if="item.name !== 'source'">Use as source</v-btn>
                      <v-btn>Edit</v-btn>
                    </v-card-actions>
                  </v-col>
                </v-row>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </template>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import { onMounted, ref, reactive } from "vue";
  import { imgAssets } from "@/utils/images/image-assets-base64.js";

  // https://picsum.photos/
  const picsum = [
    "https://picsum.photos//440/128?random=1",
    "https://picsum.photos//440/128?random=2",
    "https://picsum.photos//440/128?random=3",
    "https://picsum.photos//440/128?random=4",
    // "https://picsum.photos//440/128?random=5"
    "https://picsum.photos/id/2/440/128",
    "https://picsum.photos/id/18/440/128",
    "https://picsum.photos/id/56/440/128",
    "https://picsum.photos/id/78/440/128",
    "https://picsum.photos/id/113/440/128",
    ...imgAssets
  ];

  const cardColor = ref("#769CDF");
  const rowNumItems = ref(8);

  const selectedImageIdx = ref(-1);

  const paletteColors = reactive([
    { title: "Source", name: "source", hex: "#3f4b2c" },
    { title: "Primary", name: "primary", hex: "#5f8128" },
    { title: "Secondary", name: "secondary", hex: "#717b60" },
    { title: "Tertiary", name: "tertiary", hex: "#527f7a" },
    { title: "Error", name: "error", hex: "#de3730" },
    { title: "Neutral", name: "neutral", hex: "#777771" },
    { title: "Neutral Variant", name: "neutralVariant", hex: "#75786c" }
  ]);

  onMounted(() => {
    console.log("TabWindowColorsItem ::: onMounted");
  });

  function getItemIndex(idx1, idx2) {
    console.log("TabWindowColorsItem ::: getItemIndex");
    console.log(" - idx1: ", idx1);
    console.log(" - idx2: ", idx2);
    return idx1 * 4 + idx2;
  }

  function imageButtonClickHandler(idx1, idx2) {
    console.log("TabWindowColorsItem ::: imageButtonClickHandler");
    console.log(" - index 1: ", idx1);
    console.log(" - index 2: ", idx2);
    let idx = idx1 * rowNumItems.value + idx2;
    let pic = picsum[idx];
    console.log(" - pic: ", pic);
    // set crossOrigin to allow CORS (generating color from image won't work without it) "https://stackoverflow.com/a/33135803";
    // If there's still a problem on live server, get around it) "https://stackoverflow.com/a/67120628";
    // If there's still a problem on live server, get around it) "https://stackoverflow.com/a/33135803";
    // console.log(" - img: ", img);
    selectedImageIdx.value = idx;
    console.log(" - selectedImageIdx: ", selectedImageIdx.value);
  }
</script>

<style lang="scss">
  .card-item-img {
    // text-shadow: black 0px 0px 6px;
    // background: rgb(255 255 255 / 12%);
    .v-card-title {
      font-size: 1.15rem !important;
      font-weight: 300 !important;
    }
  }

  .no-bottom {
    > .v-expansion-panel-text__wrapper {
      padding-bottom: 0 !important;
    }
  }
</style>
