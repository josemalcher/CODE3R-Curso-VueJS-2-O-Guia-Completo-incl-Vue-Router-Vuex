<template>
  <v-app>

    <Menu />

    <Toolbar />

    <v-content>
      <Caroussel />
    </v-content>

    <Footer />

  </v-app>
</template>

<script>
import Menu from      "@/components/template/Menu.vue";
import Footer from    "@/components/template/Footer.vue";
import Caroussel from "@/components/widgets/Caroussel.vue";
import Toolbar from   "@/components/template/Toolbar.vue";

export default {
  components: {
     Footer,
     Caroussel,
     Toolbar,
     Menu
  },
}
</script>
