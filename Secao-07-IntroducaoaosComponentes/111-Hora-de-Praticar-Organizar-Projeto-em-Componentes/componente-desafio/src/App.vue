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
import Menu from      "@/components/template/Menu.vue";
import Footer from    "@/components/template/Footer.vue";
import Caroussel from "@/components/widgets/Caroussel.vue";
import Toolbar from   "@/components/template/Toolbar.vue";

export default {
  components: {
    'app-footer': Footer,
    'app-caroussel': Caroussel,
    'app-toolbar': Toolbar,
    'app-menu': Menu
  },
}
</script>
