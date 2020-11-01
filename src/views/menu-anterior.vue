<template>
  <v-app>
    <v-app-bar class="info">
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Vuetify</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn class="success">
        ingreso
      </v-btn>
      <v-btn class="error">
        salir
      </v-btn>
    </v-app-bar>

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
    </v-navigation-drawer>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    drawer: true
  }),
};
</script>