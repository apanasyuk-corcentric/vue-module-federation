<template>
  <div class="right-sidebar">
    <div class="d-flex flex-column">
      <v-btn> {{ text }} </v-btn>
      <ag-grid-vue
          style="width: 500px; height: 200px"
          class="ag-theme-alpine"
          :columnDefs="columnDefs"
          :rowData="rowData"/>
    </div>
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

<style>
.right-sidebar{
  background-color: #03efb942;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  height:100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
