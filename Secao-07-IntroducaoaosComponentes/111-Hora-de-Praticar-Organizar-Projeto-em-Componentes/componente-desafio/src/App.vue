<template>
  <v-app>

    <app-menu/>

    <app-toolbar/>

    <v-content>
      <app-caroussel/>
    </v-content>

    <app-footer/>

  </v-app>
</template>

<script>
import Menu from "./components/Menu.vue";
import Footer from "./components/Footer.vue";
import Caroussel from "./components/Caroussel.vue";
import Toolbar from "./components/Toolbar.vue";

export default {
  components: {
    'app-footer': Footer,
    'app-caroussel': Caroussel,
    'app-toolbar': Toolbar,
    'app-menu': Menu
  },
}
</script>
