<template>
  <q-page>
    <div class="row q-pa-md text-h4 text-primary">الموردين</div>
    <suppliersTable class="q-pa-sm"/>
  </q-page>
</template>

<script>
import suppliersTable from 'components/suppliers/suppliersTable'

export default {
  name: "suppliers",
  components: {
    suppliersTable
  }
};
</script>
