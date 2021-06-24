<template>
  <v-app>
    <v-navigation-drawer app>
      <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">
                Menu
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-divider></v-divider>

      <v-list dense class="pt-0">
        <v-list-item v-for="item in itensMenu" :key="item.titulo">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.titulo }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
        <v-toolbar-title class="headline text-uppercase">
				<span>Desafio</span>
				<span class="font-weight-light">Componente</span>
        </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-carousel>
        <v-carousel-item
            v-for="(item,i) in fotos"
            :key="i"
            :src="item.src"></v-carousel-item>
      </v-carousel>
    </v-content>

    <v-footer class="pa-3" app>
      <v-spacer></v-spacer>
      <div>Curso Vue &copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      itensMenu: [
        {titulo: 'Início', icon: 'mdi-view-dashboard'},
        {titulo: 'Sobre', icon: 'mdi-forum'}
      ],
      fotos: [
        {src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'},
        {src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'},
        {src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'},
        {src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'}
      ]
    }
  }
}
</script>
