<!-- PRIMEVUE LARA COLORS TABS WINDOW ITEM -->
<v-tabs-window-item value="lara">
                <!-- PRIMEVUE LARA COLORS -->
                <v-container v-for="base in pvLaraBaseColors" :key="base" class="" style="padding-top: 2px; padding-bottom: 2px">
                  <v-card class="my-0" density="compact" style="max-width: fit-content; margin: 0 auto">
                    <v-card-item class="pt-1 pb-0 pl-1">
                      <v-card-subtitle class="">{{ base.title }}</v-card-subtitle>
                    </v-card-item>
                    <v-row>
                      <v-col class="text-center" v-for="(clr, key) in pvLaraColors[base.name]" :key="clr" cols="auto" md="2" xl="auto">
                        <v-btn
                          class="btn-hover-text mono-font"
                          :color="clr"
                          density="comfortable"
                          style="min-width: 100%"
                          @click="paletteButtonClickHandler(clr, key)"
                        >
                          {{ clr }}
                        </v-btn>
                        <div class="v-card-subtitle pt-1 pb-2">
                          {{ key }}
                        </div>
                      </v-col>
                    </v-row>
                    <v-divider></v-divider>
                  </v-card>
                </v-container>
              </v-tabs-window-item>

<!-- PRIMEVUE MATERIAL COLORS TABS WINDOW ITEM -->
<v-tabs-window-item value="material">
                <!-- PRIMEVUE MATERIAL COLORS -->
                <v-container v-for="base in pvMaterialBaseColors" :key="base" class="" style="padding-top: 2px; padding-bottom: 2px">
                  <v-card class="my-0" density="compact" style="max-width: fit-content; margin: 0 auto">
                    <v-card-item class="pt-1 pb-0 pl-1">
                      <v-card-subtitle class="">{{ base.title }}</v-card-subtitle>
                    </v-card-item>
                    <v-row>
                      <v-col class="text-center" v-for="(clr, key) in pvMaterialColors[base.name]" :key="clr" cols="auto" md="2" xl="auto">
                        <v-btn
                          class="btn-hover-text mono-font"
                          :color="clr"
                          density="comfortable"
                          style="min-width: 100%"
                          @click="paletteButtonClickHandler(clr, key)"
                        >
                          {{ clr }}
                        </v-btn>
                        <div class="v-card-subtitle pt-1 pb-2">
                          {{ key }}
                        </div>
                      </v-col>
                    </v-row>
                    <v-divider></v-divider>
                  </v-card>
                </v-container>
              </v-tabs-window-item>

<!-- TAILWINDCOLORS TABS WINDOW ITEM -->
<v-tabs-window-item value="tailwind">
                <!-- TAILWIND COLORS -->
                <v-container v-for="base in twBaseColors" :key="base" class="" style="padding-top: 2px; padding-bottom: 2px">
                  <v-card class="my-0" density="compact" style="max-width: fit-content; margin: 0 auto">
                    <v-card-item class="pt-1 pb-0 pl-1">
                      <v-card-subtitle class="">{{ base.title }}</v-card-subtitle>
                    </v-card-item>
                    <v-row>
                      <v-col class="text-center" v-for="(clr, key) in tailwindColors[base.name]" :key="clr" cols="auto" md="2" xl="auto">
                        <v-btn
                          class="btn-hover-text mono-font"
                          :color="clr"
                          density="comfortable"
                          style="min-width: 100%"
                          @click="paletteButtonClickHandler(clr, key)"
                        >
                          {{ clr }}
                        </v-btn>
                        <div class="v-card-subtitle pt-1 pb-2">
                          {{ key }}
                        </div>
                      </v-col>
                    </v-row>
                    <v-divider></v-divider>
                  </v-card>
                </v-container>
              </v-tabs-window-item>

<!-- BOOTSTRAP COLORS TABS WINDOW ITEM -->
<v-tabs-window-item value="bootstrap">
                <!-- TAILWIND COLORS -->
                <v-container v-for="base in bsBaseColors" :key="base" class="" style="padding-top: 2px; padding-bottom: 2px">
                  <v-card class="my-0" density="compact" style="max-width: fit-content; margin: 0 auto">
                    <v-card-item class="pt-1 pb-0 pl-1">
                      <v-card-subtitle class="">{{ base.title }}</v-card-subtitle>
                    </v-card-item>
                    <v-row>
                      <v-col class="text-center" v-for="(clr, key) in bootstrapColors[base.name]" :key="clr" cols="auto" md="2" xl="auto">
                        <v-btn
                          class="btn-hover-text mono-font"
                          :color="clr"
                          density="comfortable"
                          style="min-width: 100%"
                          @click="paletteButtonClickHandler(clr, key)"
                        >
                          {{ clr }}
                        </v-btn>
                        <div class="v-card-subtitle pt-1 pb-2">
                          {{ key }}
                        </div>
                      </v-col>
                    </v-row>
                    <v-divider></v-divider>
                  </v-card>
                </v-container>
              </v-tabs-window-item>
