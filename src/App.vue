<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" temporary dark>
      <v-layout mt-4 column align-center>
        <v-flex>
          <v-avatar>
            <img src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460" alt="">
          </v-avatar>
        </v-flex>
        <v-flex>
          <p class="white--text mt-3 headline">Jesus Payares</p>
        </v-flex>
      </v-layout>
      <v-layout column>
        <v-flex mx-3>
          <v-btn class="my-2" color="success" block :to="{name: 'Home'}">Home</v-btn>
          <v-btn class="my-2" color="success" block :to="{name: 'Botones'}">Botones</v-btn>
          <v-btn class="my-2" color="success" block :to="{name: 'Grid'}">Grid</v-btn>
          <v-btn class="my-2" color="success" block :to="{name: 'Cards'}">Cards</v-btn>
          <v-btn class="my-2" color="success" block :to="{name: 'Columns'}">Columns</v-btn>
        </v-flex>
      </v-layout>
    </v-navigation-drawer>

    <v-app-bar class="info" app>
      <v-app-bar-nav-icon @click="drawer = !drawer" class="white--text"></v-app-bar-nav-icon>

      <v-toolbar-title class="white--text">Examples with Vuetify</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn class="success mx-2">
        ingreso
      </v-btn>
      <v-btn class="error">
        salir
      </v-btn>
    </v-app-bar>

    

    <v-main>
      <router-view></router-view>
    </v-main>
    <v-footer
    dark
    padless
  >

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
  </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ drawer: null }),
  }
</script>
