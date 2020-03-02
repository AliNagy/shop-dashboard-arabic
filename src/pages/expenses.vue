<template>
  <q-page>
    <div class="row q-pa-md text-h4 text-primary">النثريات والأرباح</div>
    <expensesTable class="q-pa-sm"/>
  </q-page>
</template>

<script>
import expensesTable from 'components/expenses/expensesTable'

export default {
  name: "expenses",
  components: {
    expensesTable
  }
};
</script>
