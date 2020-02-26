<template>
  <q-page>
    <div class="row q-pa-md text-h4 text-primary">فواتير البيع</div>
    <receiptsTable class="q-pa-sm" />
  </q-page>
</template>

<script>
import receiptsTable from 'components/receipts/receiptsTable'

export default {
  name: "receipts",
  components: { receiptsTable }
};
</script>
