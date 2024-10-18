<template>
  <v-container class="fill-height px-12 mx-auto">
    <v-window class="v-container pa-0 mx-auto" show-arrows>
      <v-window-item v-for="(i, idx1) in picsum.length / 4" :key="`row-${idx1}`">
        <v-row class="align-sm-stretch">
          <!-- IMAGE CARDS -->
          <v-col cols="3" v-for="(k, idx2) in 4" :key="`card-${idx1}-${idx2}`">
            <!-- <v-card :id="getImageCardId(idx1, idx2)" color="white" :image="picsum[idx1 * 4 + idx2]" density="compact" variant="outlined"> -->
            <v-card :id="`img-card-${idx1 * 4 + idx2}`" color="white" :image="picsum[idx1 * 4 + idx2]" density="compact" variant="outlined">
              <template #image>
                <!-- img source is automatically applied from the v-card image prop -->
                <v-img gradient="to top, rgb(255 255 255 / 10%), rgb(0 0 0 / 33%)" crossorigin="anonymous"></v-img>
              </template>
              <!--  style="text-shadow: black 0px 0px 6px; background: rgb(255 255 255 / 12%)" -->
              <v-card-item class="card-item-img">
                <v-card-title class="d-sm-none d-lg-flex">Color from image</v-card-title>
                <v-card-subtitle>Image {{ idx1 * 4 + k }}</v-card-subtitle>
              </v-card-item>
              <v-card-actions>
                <v-icon icon="mdi-check" v-if="idx1 * 4 + idx2 === selectedImageIdx"></v-icon>
                <v-spacer></v-spacer>
                <v-btn @click="imageButtonClickHandler(idx1, idx2)">Get Color</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-window-item>
    </v-window>
  </v-container>
</template>

<script setup>
  import { onMounted, ref } from "vue";
  import { imgAssets } from "@/utils/images/image-assets.js";

  // https://picsum.photos/
  const picsum = [
    "https://picsum.photos/id/2/320/128",
    "https://picsum.photos/id/18/320/128",
    "https://picsum.photos/id/56/320/128",
    "https://picsum.photos/id/78/320/128",
    "https://picsum.photos/id/113/320/128",
    ...imgAssets,
    "https://picsum.photos/id/2/320/128",
    "https://picsum.photos/id/18/320/128",
    "https://picsum.photos/id/56/320/128",
    "https://picsum.photos/id/78/320/128",
    "https://picsum.photos/id/113/320/128",
    ...imgAssets
  ];

  const cardColor = ref("#769CDF");

  const selectedImageIdx = ref(-1);

  onMounted(() => {
    console.log("TabWindowColorsItem ::: onMounted");
    let len = picsum.length + 1;
    console.log(" - len: ", len);
    let num = Math.ceil(len / 4);
    console.log(" - num: ", num);
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
    let idx = idx1 * 4 + idx2;
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
<style lang="scss" scoped>
  .card-item-img {
    // text-shadow: black 0px 0px 6px;
    // background: rgb(255 255 255 / 12%);
    .v-card-title {
      font-size: 1.15rem !important;
      font-weight: 300 !important;
    }
  }
</style>
