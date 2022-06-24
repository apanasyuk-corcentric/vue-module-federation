<template>
  <v-app id="inspire">
    <v-card class="overflow-hidden">
      <v-app-bar color="primary" dark>
        <v-app-bar-nav-icon @click="drawer = true"/>
        <v-toolbar-title>ModuleFederation example</v-toolbar-title>
      </v-app-bar>
    </v-card>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-content @click="$router.push(item.link)">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <h1 class="text-center">App shell header</h1>
    <router-view/>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    items: [
      {title: 'Go to first micro frontend', link: '/first-micro-frontend'},
      {title: 'Go to second micro frontend', link: '/second-micro-frontend'},
      {title: 'Go to react micro frontend', link: '/react-micro-frontend'},
    ],
  }),
}
</script>
<style>
  html{
    overflow: hidden;
  }
</style>


