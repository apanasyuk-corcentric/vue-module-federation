<template>
  <div class="right-sidebar v-application">
    <h4 class="error--text"> {{ text }} </h4>
    <ag-grid-vue
        style="min-width: 100%; min-height: 94%"
        class="ag-theme-alpine"
        :columnDefs="columnDefs"
        :rowData="rowData"/>
  </div>
</template>

<script>
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { AgGridVue } from 'ag-grid-vue';

export default {
  name: 'App',
  components: { AgGridVue },
  props: ['text'],
  data: ()=>({
    columnDefs: [
      { headerName: "Make", field: "make" },
      { headerName: "Model", field: "model" },
      { headerName: "Price", field: "price" },
    ],
    rowData: [
      { make: "Toyota", model: "Celica", price: 35000 },
      { make: "Ford", model: "Mondeo", price: 32000 },
      { make: "Porsche", model: "Boxster", price: 72000 },
    ],
  })
}
</script>

<style scoped>
.right-sidebar{
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
