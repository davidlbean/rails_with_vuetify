<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <!-- Changed the name of the component -->
      <hello-world-component/>
    </v-content>
  </v-app>
</template>

<script>
  // Since the component has been registered globally, we don't need this
  // import HelloWorld from './components/HelloWorld'
export default {
  name: 'App',
  // Since the component has been registered globally, we don't need this
  // components: {
  //   HelloWorld
  // },
  data () {
    return {
      //
    }
  }
}
</script>
