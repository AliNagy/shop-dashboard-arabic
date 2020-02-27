<template>
  <q-page>
    <div class="row q-pa-md text-h4 text-primary">العملاء</div>
    <clientsTable class="q-pa-sm" />
  </q-page>
</template>

<script>
import clientsTable from 'components/clients/clientsTable'

export default {
  name: "clients",
  components: {
    clientsTable
  }
};
</script>
