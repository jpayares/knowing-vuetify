<template>
  <v-container>
    <v-layout wrap>
      <v-flex class="primary" xs12>
        <h1>12</h1>
      </v-flex>
      <v-flex class="secondary" xs6>
        <h1>6</h1>
      </v-flex>
      <v-flex class="secondary" xs6>
        <h1>6</h1>
      </v-flex>
    </v-layout>

    <v-layout class="mt-5 secondary" justify-center align-center style="height: 300px">
      <v-flex class="info" xs3>
        <h1>centrado</h1>
      </v-flex>
      <v-flex class="amber darken-2 white--text" xs3>
        <h1>centrado</h1>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex>
        <h1 class="display-1 text-uppercase">lorem, ipsum dolor.</h1>
        <h1 class="display-2 primary pa-5 mt-5">lorem, ipsum dolor.</h1>
        <h1 class="display-3 text-center">lorem, ipsum dolor.</h1>
        <h1 class="display-4">lorem, ipsum dolor.</h1>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  
}
</script>
