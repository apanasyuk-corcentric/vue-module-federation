<template>
  <v-card height="100%" class="v-application">
    <div class="right-sidebar">
      <div class="mb-3">{{ text }}</div>
      <v-btn class="mb-3 primary" @click="$router.push('/grid')"> Go to second page of current micro frontend </v-btn>
    </div>
  </v-card>
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
  justify-content: center;
  align-items: center;
}
</style>
