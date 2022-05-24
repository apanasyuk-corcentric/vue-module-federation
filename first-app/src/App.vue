<template>
  <div class="right-sidebar">
    <div>{{ text }}</div>
    <v-btn @click="$router.push('/grid')"> Go to second page of micro frontend </v-btn>
  </div>
</template>

<script>

export default {
  name: 'App',
  props: ['text'],
}
</script>

<style>
.right-sidebar{
  background-color: #03efb942;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  height:100%;
  display: flex;
  flex-direction: column;
}
.vue-logo{
  height:100px;
}
</style>
