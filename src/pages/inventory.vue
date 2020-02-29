<template>
  <q-page>
    <div class="row q-pa-md text-h4 text-primary">المخزن</div>
    <inventoryTable class="q-pa-sm"/> 
  </q-page>
</template>

<script>
import inventoryTable from "components/inventory/inventoryTable"

export default {
  name: "inventory",
  components: {
    inventoryTable
  }
};
</script>
