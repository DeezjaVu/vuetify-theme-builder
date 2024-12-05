<template>
  <v-card color="background" style="cursor: default" height="800" rounded="lg" hover>
    <v-card-item>
      <v-toolbar color="tertiary" rounded="pill" border>
        <v-app-bar-nav-icon size="small"></v-app-bar-nav-icon>
        <v-toolbar-title class="text-subtitle-1">Search your notes</v-toolbar-title>
        <template v-slot:append>
          <v-btn icon :ripple="false">
            <v-avatar :image="avatar"></v-avatar>
          </v-btn>
        </template>
      </v-toolbar>
    </v-card-item>

    <v-card-text>
      <v-fab icon="mdi-plus" color="primary" style="position: absolute; top: 740px; right: 50px; z-index: 100"></v-fab>
      <v-row dense>
        <v-col>
          <v-card color="secondary" rounded="lg">
            <v-card-item>
              <v-card-title class="text-subtitle-1">Shopping Cart</v-card-title>
            </v-card-item>
            <!-- add v-cards here (outlined?) -->
            <v-card-text class="font-weight-light mx-4">
              <!-- [*] Shopping cart list -->
              <v-list style="background: transparent" lines="one" density="compact">
                <v-list-item v-for="item in shoppingCart" :key="item.id">
                  <template v-slot:prepend>
                    <v-checkbox-btn
                      v-model="item.selected"
                      color="secondary-darken-1"
                      density="compact"
                      hide-details
                      :ripple="false"
                    ></v-checkbox-btn>
                  </template>
                  <v-list-item-title class="text-body-2" v-text="item.text"></v-list-item-title>
                  <template v-slot:append>
                    <v-list-item-subtitle class="text-body-2" v-text="item.amount"></v-list-item-subtitle>
                    <v-spacer class="mx-2"></v-spacer>
                    <v-icon size="small" icon="mdi-delete-outline"></v-icon>
                  </template>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col>
          <v-card color="tertiary" rounded="lg">
            <v-card-item>
              <v-card-title class="text-subtitle-1">Shopping Cart</v-card-title>
            </v-card-item>
            <!-- add v-cards here (outlined?) -->
            <v-card-text class="font-weight-light mx-4">
              <!-- [*] Shopping cart list -->
              <v-list style="background: transparent" lines="one" density="compact">
                <v-list-item v-for="item in shoppingCart" :key="item.id">
                  <template v-slot:prepend>
                    <v-checkbox-btn
                      v-model="item.selected"
                      color="tertiary-darken-1"
                      density="compact"
                      hide-details
                      :ripple="false"
                    ></v-checkbox-btn>
                  </template>
                  <v-list-item-title class="text-body-2" v-text="item.text"></v-list-item-title>
                  <template v-slot:append>
                    <v-list-item-subtitle class="text-body-2" v-text="item.amount"></v-list-item-subtitle>
                    <v-spacer class="mx-2"></v-spacer>
                    <v-icon size="small" icon="mdi-delete-outline"></v-icon>
                  </template>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col>
          <v-card :image="bg02" rounded="lg">
            <template #image>
              <v-img :url="bg02" style="opacity: 0.15"></v-img>
            </template>
            <v-card-item>
              <v-card-title class="text-subtitle-1">Shopping Cart</v-card-title>
            </v-card-item>
            <!-- add v-cards here (outlined?) -->
            <v-card-text class="font-weight-light mx-4">
              <!-- [*] Shopping cart list -->
              <v-list lines="one" density="compact" style="background: transparent">
                <v-list-item v-for="item in shoppingCart" :key="item.id">
                  <template v-slot:prepend>
                    <v-checkbox-btn v-model="item.selected" density="compact" hide-details :ripple="false"></v-checkbox-btn>
                  </template>
                  <v-list-item-title class="text-body-2" v-text="item.text"></v-list-item-title>
                  <template v-slot:append>
                    <v-list-item-subtitle class="text-body-2" v-text="item.amount"></v-list-item-subtitle>
                    <v-spacer class="mx-2"></v-spacer>
                    <v-icon size="small" icon="mdi-delete-outline"></v-icon>
                  </template>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col>
          <v-card rounded="lg" :image="bg01">
            <template #image>
              <v-img style="opacity: 0.25"></v-img>
            </template>
            <v-card-item>
              <v-card-title class="text-subtitle-1">Shopping Cart</v-card-title>
            </v-card-item>
            <!-- add v-cards here (outlined?) -->
            <v-card-text class="font-weight-light mx-4">
              <!-- [*] Shopping cart list -->
              <v-list lines="one" density="compact" style="background: transparent">
                <v-list-item v-for="item in shoppingCart" :key="item.id">
                  <template v-slot:prepend>
                    <v-checkbox-btn v-model="item.selected" density="compact" hide-details :ripple="false"></v-checkbox-btn>
                  </template>
                  <v-list-item-title class="text-body-2" v-text="item.text"></v-list-item-title>
                  <template v-slot:append>
                    <v-list-item-subtitle class="text-body-2" v-text="item.amount"></v-list-item-subtitle>
                    <v-spacer class="mx-2"></v-spacer>
                    <v-icon size="small" icon="mdi-delete-outline"></v-icon>
                  </template>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup>
  //   import avatar from "@/assets/images/avatar/adventurer-1733076759580.svg";
  import avatar from "@/assets/images/avatar/avataaars.svg";
  import bg01 from "@/assets/images/keep/abstract-blue-design-background.svg";
  import bg02 from "@/assets/images/keep/abstract-blue-water-motion-background.svg";

  import { onMounted, ref } from "vue";

  const props = defineProps({
    themeName: String
  });

  const shoppingCart = ref([
    { id: 1, icon: "mdi-delete", text: "Celtic Salt", amount: "2", selected: true },
    { id: 2, icon: "mdi-delete", text: "Ghee", amount: "2", selected: false },
    { id: 3, icon: "mdi-delete", text: "Almond Milk", amount: "3", selected: false }
  ]);

  onMounted(() => {
    console.log("KeepCard ::: onMounted");
  });
</script>
