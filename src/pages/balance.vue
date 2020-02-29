<template>
  <q-page>
    <div class="row q-pa-md text-h4 text-primary">رصيد الخزنة</div>
    <balanceTable class="q-pa-sm"/>
  </q-page>
</template>

<script>
import balanceTable from 'components/balance/balanceTable'

export default {
   name: 'balance',
   components: {
     balanceTable
   }
};
</script>
